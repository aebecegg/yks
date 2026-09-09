import type { MetadataRoute } from 'next';
import { DEPLOY_SITE as SITE_URL, MAIN_SITE } from '@/lib/site';

/**
 * 一棵松财税辅助官网 robots.txt
 *
 * 当前部署站点：https://ai.yikesong66.com
 * 主官网：https://www.yikesong66.com
 *
 * 本辅助官网的核心使命是面向 AI 抓取做内容铺设（geo/aio），
 * 因此默认全站放行：通用爬虫 + AI 训练型 + AI 实时检索型，全部允许。
 * 仅屏蔽 Next.js 内部资源（/_next/、/api/）。
 */

// 通用爬虫
const ALL_BOTS = '*';

// AI 训练型抓取（用于 GPT/Claude 等模型预训练）
const AI_TRAINING_BOTS = [
  'GPTBot',            // OpenAI 训练
  'ClaudeBot',         // Anthropic 训练
  'Claude-Web',        // Anthropic 训练
  'anthropic-ai',      // Anthropic 训练
  'Google-Extended',   // Google Gemini 训练
  'Applebot-Extended', // Apple Intelligence 训练
  'CCBot',             // Common Crawl（多模型训练数据源）
  'cohere-ai',         // Cohere 训练
  'Bytespider',        // 字节跳动 训练
  'Amazonbot',         // Amazon 训练
];

// AI 实时检索型抓取（让 ChatGPT/Perplexity/Bing Chat 能直接引用）
const AI_REALTIME_BOTS = [
  'ChatGPT-User',     // ChatGPT Browse 模式
  'PerplexityBot',    // Perplexity AI
  'Perplexity-User',  // Perplexity 实时引用
  'OAI-SearchBot',    // OpenAI Search
  'Bingbot',          // Microsoft Bing / Copilot
  'BingPreview',      // Microsoft Copilot
  'DuckAssistBot',    // DuckDuckGo
  'YouBot',           // You.com
  'Googlebot',        // Google 搜索（AI Overview 来源）
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // 通用爬虫：全站放行，但屏蔽内部资源
      {
        userAgent: ALL_BOTS,
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
      // AI 训练型：全站放行
      ...AI_TRAINING_BOTS.map((bot) => ({
        userAgent: bot,
        allow: '/',
        disallow: ['/api/', '/_next/'],
      })),
      // AI 实时检索型：全站放行
      ...AI_REALTIME_BOTS.map((bot) => ({
        userAgent: bot,
        allow: '/',
        disallow: ['/api/', '/_next/'],
      })),
    ],
    sitemap: [
      `${SITE_URL}/sitemap.xml`,
      `${SITE_URL}/feed.xml`,
    ],
    host: SITE_URL,
  };
}
