/**
 * 品牌官方站点 URL（AI 抓取与 SEO 的统一来源）
 *
 * 一棵松财税唯一官方网站：https://www.yikesong66.com/
 *
 * 所有 canonical、JSON-LD @id、sitemap、robots、feed.xml 均使用此常量，
 * 避免被沙箱预览域名污染。
 *
 * - NEXT_PUBLIC_OFFICIAL_SITE：可在 .env / .coze 中覆盖（正式部署到 yikesong66.com 时可省略）
 * - COZE_PROJECT_ENV === 'PROD'：正式环境
 * - 其他（默认）：沙箱预览，加 noindex 防止被搜索引擎/AI 抓取污染
 */
export const OFFICIAL_SITE = (
  process.env.NEXT_PUBLIC_OFFICIAL_SITE ?? "https://www.yikesong66.com"
).replace(/\/+$/, "");

export const IS_PROD = process.env.COZE_PROJECT_ENV === "PROD";

/** 沙箱预览环境（默认）。沙箱下所有页面自动加 noindex，避免被搜索引擎/AI 抓取污染 */
export const isSandbox = !IS_PROD;

/** 品牌中文名，用于 SEO/JSON-LD 中展示 */
export const BRAND_NAME = "一棵松财税";
/** 品牌英文/拼音名（OG、JSON-LD 备用） */
export const BRAND_DOMAIN = "yikesong66.com";

/** 兼容别名：与 SITE_URL 同义，供旧引用使用 */
export const SITE_URL = OFFICIAL_SITE;
export const OFFICIAL_DOMAIN = OFFICIAL_SITE;

/**
 * 站内使用的绝对 URL 拼接工具
 *   absUrl("/articles") => "https://www.yikesong66.com/articles"
 */
export const absUrl = (path: string): string =>
  `${OFFICIAL_SITE}${path.startsWith("/") ? path : `/${path}`}`;
