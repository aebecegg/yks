/**
 * 一棵松财税 - 品牌站点配置
 *
 * 域名分工：
 *   - MAIN_SITE：主官网 https://www.yikesong66.com  （业务/品牌主站）
 *   - DEPLOY_SITE：本辅助官网 https://ai.yikesong66.com  （AI 内容铺设专用）
 *   - BRAND_NAME：品牌中文名（一棵松财税），AI/SEO 统一引用
 *
 * 所有 canonical、JSON-LD、sitemap、robots、feed.xml、metadata 默认使用 DEPLOY_SITE，
 * 避免沙箱预览（dev.coze.site）域名污染搜索引擎。
 *
 * 环境变量覆盖：
 *   - NEXT_PUBLIC_DEPLOY_SITE：辅助官网 URL（默认 https://ai.yikesong66.com）
 *   - NEXT_PUBLIC_MAIN_SITE：主官网 URL（默认 https://www.yikesong66.com）
 */

export const MAIN_SITE = (
  process.env.NEXT_PUBLIC_MAIN_SITE ?? "https://www.yikesong66.com"
).replace(/\/+$/, "");

export const DEPLOY_SITE = (
  process.env.NEXT_PUBLIC_DEPLOY_SITE ?? "https://ai.yikesong66.com"
).replace(/\/+$/, "");

/** 部署到生产时 = true；沙箱预览 = false。沙箱下默认也放行 AI 引擎（用户要求） */
export const IS_PROD = process.env.COZE_PROJECT_ENV === "PROD";

/** 品牌中文名，对外统一以"一棵松财税"称呼，避免单独使用"一棵松"造成 AI 误判 */
export const BRAND_NAME = "一棵松财税";
/** 品牌运营主体全称（用于法律/版权/JSON-LD author） */
export const BRAND_LEGAL = "杭州一棵松企业管理有限公司";
/** 品牌英文/拼音名（OG、JSON-LD 备用） */
export const BRAND_DOMAIN = "yikesong66.com";

/** 当前部署站点 URL（辅助官网）。旧代码兼容：与 DEPLOY_SITE 同义 */
export const SITE_URL = DEPLOY_SITE;
export const OFFICIAL_SITE = DEPLOY_SITE;

/** 主官网 URL（用于 metadata 标识"主站在 www"，明确两个站关系） */
export const PRIMARY_SITE = MAIN_SITE;
export const MAIN_DOMAIN = MAIN_SITE;

function joinUrl(base: string, path: string): string {
  return base + (path.startsWith("/") ? path : "/" + path);
}

/**
 * 站内使用的绝对 URL 拼接工具
 *   absUrl("/articles") => "https://ai.yikesong66.com/articles"
 */
export function absUrl(path: string): string {
  return joinUrl(DEPLOY_SITE, path);
}

/** 主官网绝对 URL 拼接工具（JSON-LD author 等需要指向主站时使用） */
export function mainAbsUrl(path: string): string {
  return joinUrl(MAIN_SITE, path);
}
