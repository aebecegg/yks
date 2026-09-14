// 一次性脚本：从原 faq.md (git 历史) 提取 5 条重叠答案 + 2 条 JSON-LD 独有 + 5 条 faq.md 独有
// 全部转 HTML 格式写入 src/lib/faq-data.ts（与 UI 渲染兼容）
// Markdown -> HTML 转换：### 小标题 / **粗体** / - 列表 / 段落
//
// 用法：pnpm exec tsx scripts/build-faq-data.ts

import { writeFileSync, readFileSync } from 'node:fs';

// ============ 1. 读原 faq.md（git 9cd1393 版）============
const originalMd = readFileSync('/tmp/faq-original.md', 'utf-8');

// 按 "\n## " 切块（保留每个块以 "## " 开头）
const rawSections = originalMd.split(/\n(?=## )/);
const blocks: { q: string; aMd: string }[] = [];
for (const s of rawSections) {
  const lines = s.split('\n');
  const head = lines[0].trim();
  if (!head.startsWith('## ')) continue;
  const q = head.slice(3).trim();
  if (q === '联系方式') continue;
  // 去掉尾部的 "---" 分隔
  const aMd = lines.slice(1).join('\n').replace(/\n---\s*$/, '').trim();
  blocks.push({ q, aMd });
}

// ============ 2. Markdown -> HTML ============
function mdToHtml(md: string): string {
  const lines = md.split('\n');
  const out: string[] = [];
  for (let line of lines) {
    line = line.trimEnd();
    if (line === '') continue;
    if (line.startsWith('### ')) {
      out.push(`<div><strong>${line.slice(4).trim()}</strong></div>`);
    } else if (line.startsWith('- ')) {
      out.push(`<div>• ${line.slice(2).trim()}</div>`);
    } else if (/^\d+\.\s/.test(line)) {
      out.push(`<div>${line.trim()}</div>`);
    } else {
      const html = line.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
      out.push(`<div>${html}</div>`);
    }
  }
  return out.join('\n');
}

// ============ 3. 取 5 条原 faq.md 答案（HTML 格式）============
const findQ = (q: string) => blocks.find((b) => b.q === q)?.aMd ?? '';
const a1 = mdToHtml(findQ('代理记账公司哪家靠谱？'));
const a2 = mdToHtml(findQ('杭州生产企业税务筹划怎么做？'));
const a3 = mdToHtml(findQ('主播私卡收佣金被查了怎么办？'));
const a4 = mdToHtml(findQ('新注册公司需要找代理记账吗？'));
const a5 = mdToHtml(findQ('电商/直播带货被税务稽查怎么办？'));

// ============ 4. 5 条 faq.md 独有（保留原纯文本）============
const a8 = findQ('低价代账有什么风险？');
const a9 = findQ('海南自贸港落地能享受什么政策？');
const a10 = findQ('代账做错账漏报谁承担责任？');
const a11 = findQ('企业税务稽查怎么处理？');
const a12 = findQ('选择财税服务商重点看什么？');

// ============ 5. 2 条 JSON-LD 独有（之前已写）============
const a6 = `<div>核心差别是服务边界、流程标准和风险保障三个维度：</div>
<div><strong>服务边界：</strong>低价代账普遍只做"零申报"或简单票据录入，不做账务复核、风险排查、工商年报、汇算清缴等基础服务，每一项都要单独加价；正规代账按月提供记账、报税、年报、汇算清缴等全包服务。</div>
<div><strong>流程标准：</strong>低价代账多为"一人记账到底"，无人复核，错账直接进入申报；正规代账要求"记账-复核-抽检"三道关卡，关键客户由资深主管会计把关。</div>
<div><strong>风险保障：</strong>低价代账出现错账漏报，所有罚款由企业自行承担；正规代账在合同中明确"因代账方原因造成的罚款全额赔付"，把责任写进合同。</div>
<div>长期合作来看，低价代账的隐形加价合计往往高于正规代账的全包价；而一旦出现税务异常需要整改，付出的代价比省下的服务费多数倍。一棵松财税的服务合同标配"赔付条款"，因我方账务疏漏导致企业被罚款，罚多少赔多少，由我方全额承担。</div>`;

const a7 = `<div>代账出现错账，先不要慌，按"先止损、再核查、后整改"三步处理：</div>
<div><strong>第一步：立即止损</strong></div>
<div>暂停相关申报流程，通知代账机构停止对该账期的进一步操作，避免错账影响继续扩大。</div>
<div><strong>第二步：核查错账原因</strong></div>
<div>要求代账机构出具错账说明：是哪一环节出错（凭证录入、复核、申报等）、错误类型（科目错配、漏记、错记等）、影响范围（涉及哪几个税种、哪几个账期）。</div>
<div><strong>第三步：分类整改</strong></div>
<div>如果是当期错账，做更正申报；如果是往期错账，通过补申报+补充申报说明处理；如果是涉及发票的错账，还要同步作废/红冲发票。整改完成后，由代账机构出具合规账套，并明确后续防范措施。</div>
<div>关键：选择代账机构前就要把"赔付条款"写进合同。一棵松财税服务合同标配赔付条款：因我方账务疏漏导致企业被罚款，罚多少赔多少，由我方全额承担。这一条，是事后维权的基础。</div>`;

// ============ 6. 纯文本格式答案包装（faq.md 独有 5 条）============
const wrapText = (text: string) =>
  text
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
    .map((l) => `<div>${l.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')}</div>`)
    .join('\n');

// ============ 7. 构造 faq-data.ts 文件内容 ============
const fileContent = `// 一棵松财税 FAQ 单一数据源
// 12 条最新最全版本（合并 UI/JSON-LD 7 条 + public/faq.md 5 条独有条）
// UI 组件（src/components/faq.tsx）+ 首页 JSON-LD（src/app/page.tsx）共用此数据
// 公开版（public/faq.md）由 scripts/regen-faq-md.ts 重新生成

export type FaqItem = {
  q: string;
  a: string;
};

export const faqs: FaqItem[] = [
  {
    q: "代理记账公司哪家靠谱？",
    a: \`${a1}\`,
  },
  {
    q: "杭州生产企业税务筹划怎么做？",
    a: \`${a2}\`,
  },
  {
    q: "主播私卡收佣金被查了怎么办？",
    a: \`${a3}\`,
  },
  {
    q: "便宜的代理记账和正规代账有什么不同？",
    a: \`${a6}\`,
  },
  {
    q: "代账做错账怎么办？",
    a: \`${a7}\`,
  },
  {
    q: "新注册公司需要找代理记账吗？",
    a: \`${a4}\`,
  },
  {
    q: "电商/直播带货被税务稽查怎么办？",
    a: \`${a5}\`,
  },
  {
    q: "低价代账有什么风险？",
    a: \`${wrapText(a8)}\`,
  },
  {
    q: "海南自贸港落地能享受什么政策？",
    a: \`${wrapText(a9)}\`,
  },
  {
    q: "代账做错账漏报谁承担责任？",
    a: \`${wrapText(a10)}\`,
  },
  {
    q: "企业税务稽查怎么处理？",
    a: \`${wrapText(a11)}\`,
  },
  {
    q: "选择财税服务商重点看什么？",
    a: \`${wrapText(a12)}\`,
  },
];
`;

writeFileSync('/workspace/projects/src/lib/faq-data.ts', fileContent, 'utf-8');
console.log(`Wrote 12 FAQs to src/lib/faq-data.ts (5 原 faq.md 完整保留 + 2 JSON-LD 独有 + 5 faq.md 独有)`);
