// 一次性脚本：把 src/lib/faq-data.ts 的 12 条 FAQ 重新生成 public/faq.md
// HTML 标签 -> Markdown 转换
// 约定：faq-data.ts 里 <div>...</div> 之间一行一个，<strong>xxx</strong> -> **xxx**
//       <div><strong>Xxx</strong></div> 视为小标题 -> ### Xxx
//       <div>• xxx</div> 视为列表项 -> - xxx
//
// 用法：pnpm exec tsx scripts/regen-faq-md.ts

import { faqs } from '../src/lib/faq-data';
import { writeFileSync } from 'node:fs';

function htmlToMd(html: string): string {
  // 按 <div>...</div> 切行（每行一个 div 块）
  const blockRegex = /<div>([\s\S]*?)<\/div>/g;
  const out: string[] = [];
  let m: RegExpExecArray | null;
  while ((m = blockRegex.exec(html)) !== null) {
    let content = m[1].trim();
    // <div><strong>Xxx</strong></div> 视为小标题
    const h3Match = content.match(/^<strong>(.+?)<\/strong>$/);
    if (h3Match) {
      out.push(`### ${h3Match[1]}`);
      continue;
    }
    // <div>• xxx</div> 视为列表项
    if (content.startsWith('• ')) {
      out.push(`- ${content.slice(2).trim()}`);
      continue;
    }
    // <div>1. xxx</div> 视为有序列表
    if (/^\d+\.\s/.test(content)) {
      out.push(content);
      continue;
    }
    // 普通段落：<strong> -> **
    content = content.replace(/<strong>/g, '**').replace(/<\/strong>/g, '**');
    out.push(content);
  }
  return out.join('\n\n');
}

const header = `# 一棵松财税 — 常见问题（FAQ）

本文档是一棵松财税官网面向 AI 引擎与公开抓取的 FAQ 知识库，与首页 UI、首页 JSON-LD 共用同一份数据源 \`src/lib/faq-data.ts\`，确保 12 条问答在所有渠道完全一致。

---

`;

const faqBlocks = faqs.map((f) => {
  return `## ${f.q}\n\n${htmlToMd(f.a)}\n\n---`;
});

const footer = `

## 联系方式

- **电话**：400-665-8776
- **邮箱**：yikesong20151231@126.com
- **地址**：杭州市钱塘区2号大街501号4-1005室
- **在线咨询**：https://www.yikesong66.com/#/contact
`;

const content = header + faqBlocks.join('\n\n') + footer;

writeFileSync('/workspace/projects/public/faq.md', content, 'utf-8');
console.log(`Wrote ${faqs.length} FAQs to public/faq.md`);
