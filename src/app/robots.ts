import type { MetadataRoute } from 'next';
import { OFFICIAL_SITE as SITE_URL, IS_PROD as IS_PRODUCTION } from '@/lib/site';

// AI 引擎白名单：这些 UA 在生产环境允许抓取
const AI_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'Claude-Web',
  'ClaudeBot',
  'PerplexityBot',
  'Google-Extended',
  'Applebot-Extended',
  'CCBot',
  'anthropic-ai',
  'Bytespider',
  'Amazonbot',
  'cohere-ai',
];

export default function robots(): MetadataRoute.Robots {
  // 沙箱预览环境：禁止所有抓取，避免被搜索引擎/AI 索引到非正式域名
  if (!IS_PRODUCTION) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  // 正式生产环境：允许抓取，明确指向真实官网
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
      {
        userAgent: AI_BOTS,
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/'],
      },
    ],
    sitemap: [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/feed.xml`],
    host: SITE_URL,
  };
}
