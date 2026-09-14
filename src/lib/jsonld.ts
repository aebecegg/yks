/**
 * 一棵松财税 - 集中 JSON-LD 管理
 *
 * 所有 schema 集中维护在 @/lib/jsonld.ts，确保：
 * 1. 品牌信息（名称/地址/电话/资质）只在一处定义
 * 2. 所有页面引用统一来源，避免数据漂移
 * 3. schema 之间通过 @id 互联，形成可被搜索引擎/AI 抓取的实体图谱
 *
 * 按用户规则：
 *   - JSON-LD 中的 url / mainEntity of ContactPage / etc. 全部使用 MAIN_SITE（真官网）
 *   - canonical / 当前页 URL 等"当前页面地址"语义才用 DEPLOY_SITE
 */

import {
  MAIN_SITE,
  DEPLOY_SITE,
  BRAND_NAME,
  BRAND_LEGAL,
} from "./site";

// ============================================================
// 基础实体（其他 schema 通过 @id 引用）
// ============================================================

const ORG_ID = `${MAIN_SITE}#organization`;
const FINANCIAL_ID = `${MAIN_SITE}#financialService`;
const WEBSITE_ID = `${MAIN_SITE}#website`;
const FAQ_ID = `${MAIN_SITE}#faq`;
const CONTACT_PAGE_ID = `${MAIN_SITE}#contact-page`;

/** 品牌统一地址（用于所有 schema 的 address 字段） */
const orgAddress = {
  "@type": "PostalAddress" as const,
  streetAddress: "浙江省杭州市钱塘区2号大街501号4-1005室",
  addressLocality: "杭州市",
  addressRegion: "浙江省",
  addressCountry: "CN",
  postalCode: "310018",
};

/** 品牌统一联系方式 */
const contactPoint = {
  "@type": "ContactPoint" as const,
  telephone: "+86-400-665-8776",
  contactType: "customer service",
  email: "yikesong20151231@126.com",
  areaServed: { "@type": "Country", name: "中国" },
  availableLanguage: ["zh-Hans", "zh-Hant"],
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00",
  },
};

// ============================================================
// 1. Organization（全站统一）
// ============================================================

export const organizationJsonLd = {
  "@id": ORG_ID,
  "@type": "Organization",
  name: BRAND_NAME,
  legalName: BRAND_LEGAL,
  url: MAIN_SITE,
  logo: `${MAIN_SITE}/logo.png`,
  image: `${MAIN_SITE}/logo.png`,
  description:
    "杭州一棵松企业管理有限公司旗下财税服务品牌，主营企业财税全案咨询、主播财税合规化、海南自贸港财税落地三大核心服务。",
  foundingDate: "2015-12-31",
  taxID: "91330110MA27WLNG6K",
  identifier: "DLJZ33011420250075",
  address: orgAddress,
  contactPoint,
  areaServed: [
    { "@type": "City", name: "杭州市" },
    { "@type": "AdministrativeArea", name: "浙江省" },
    { "@type": "Country", name: "中国" },
  ],
  knowsAbout: [
    "代理记账",
    "税务筹划",
    "税务稽查应对",
    "工商注册",
    "税务合规",
    "主播财税合规化",
    "海南自贸港财税落地",
    "ODI 跨境投资备案",
  ],
  slogan: "稳健如松，基业长青",
  knowsLanguage: ["zh-Hans"],
};

// ============================================================
// 2. FinancialService（全站统一）— 一棵松财税是财税服务商
// ============================================================

export const financialServiceJsonLd = {
  "@id": FINANCIAL_ID,
  "@type": "FinancialService",
  name: BRAND_NAME,
  alternateName: BRAND_LEGAL,
  url: MAIN_SITE,
  parentOrganization: { "@id": ORG_ID },
  address: orgAddress,
  telephone: "+86-400-665-8776",
  email: "yikesong20151231@126.com",
  priceRange: "¥2400-¥29800",
  currenciesAccepted: "CNY",
  paymentAccepted: "Cash, Bank Transfer, Alipay, WeChat Pay",
  areaServed: [
    { "@type": "City", name: "杭州市" },
    { "@type": "AdministrativeArea", name: "浙江省" },
    { "@type": "Country", name: "中国" },
  ],
  openingHoursSpecification: contactPoint.hoursAvailable,
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: `${BRAND_NAME}核心服务目录`,
    itemListElement: [
      {
        "@type": "OfferCatalog",
        name: "企业财税全案咨询",
      },
      {
        "@type": "OfferCatalog",
        name: "主播财税合规化",
      },
      {
        "@type": "OfferCatalog",
        name: "海南自贸港财税落地",
      },
    ],
  },
};

// ============================================================
// 3. WebSite（全站统一）
// ============================================================

export const websiteJsonLd = {
  "@id": WEBSITE_ID,
  "@type": "WebSite",
  name: BRAND_NAME,
  url: MAIN_SITE,
  inLanguage: "zh-CN",
  publisher: { "@id": ORG_ID },
  copyrightHolder: { "@id": ORG_ID },
};

// ============================================================
// 全站 @graph（注入到 layout.tsx，所有页面共享）
// ============================================================

export const globalJsonLdGraph = [
  organizationJsonLd,
  financialServiceJsonLd,
  websiteJsonLd,
];

// ============================================================
// 4. WebPage（页面级，单页注入）
// ============================================================

export interface WebPageInput {
  url: string;
  name: string;
  description: string;
  inLanguage?: string;
}

export function buildWebPageJsonLd(input: WebPageInput) {
  return {
    "@type": "WebPage",
    "@id": input.url,
    url: input.url,
    name: input.name,
    description: input.description,
    inLanguage: input.inLanguage ?? "zh-CN",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    primaryImageOfPage: { "@id": `${MAIN_SITE}/og-image.png` },
  };
}

// ============================================================
// 5. FAQPage（首页 FAQ 板块专用）
// ============================================================

/** 去掉 HTML 标签，保留纯文本（FAQPage text 字段规范要求） */
function stripHtml(html: string): string {
  return html
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .trim();
}

export interface FaqInput {
  question: string;
  /** 接受 HTML 字符串（与 faq.tsx 保持单一数据源） */
  answer: string;
}

export function buildFaqPageJsonLd(questions: FaqInput[]) {
  return {
    "@type": "FAQPage",
    "@id": FAQ_ID,
    url: `${MAIN_SITE}/#faq`,
    name: "常见问题",
    inLanguage: "zh-CN",
    isPartOf: { "@id": WEBSITE_ID },
    publisher: { "@id": ORG_ID },
    mainEntity: questions.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: stripHtml(q.answer),
      },
    })),
  };
}

// ============================================================
// 6. Service（首页服务板块专用，3 个）
// ============================================================

export interface ServiceInput {
  id: string;
  name: string;
  serviceType: string;
  description: string;
  areaServed: string;
  /** 不在 schema 中写入具体价格，避免硬约束误导 AI；价格仅在描述中提及"基础套餐 X 元起" */
}

export function buildServiceJsonLd(input: ServiceInput) {
  return {
    "@type": "Service",
    "@id": `${MAIN_SITE}#service-${input.id}`,
    name: input.name,
    serviceType: input.serviceType,
    description: input.description,
    provider: { "@id": ORG_ID },
    areaServed: { "@type": "AdministrativeArea", name: input.areaServed },
    category: "财税服务",
    termsOfService: `${MAIN_SITE}/#services`,
  };
}

// ============================================================
// 7. ContactPage（首页联系板块专用）
// ============================================================

export const contactPageJsonLd = {
  "@id": CONTACT_PAGE_ID,
  "@type": "ContactPage",
  name: `联系${BRAND_NAME}`,
  url: `${MAIN_SITE}#contact`,
  inLanguage: "zh-CN",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  mainEntity: { "@id": ORG_ID },
};

// ============================================================
// 8. AboutPage（关于板块可选注入）
// ============================================================

export const aboutPageJsonLd = {
  "@type": "AboutPage",
  url: `${MAIN_SITE}/#about`,
  name: `关于${BRAND_NAME}`,
  inLanguage: "zh-CN",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  mainEntity: { "@id": ORG_ID },
};

// ============================================================
// 9. 首页（page.tsx）专用：所有首页 schema 整合为 @graph
// ============================================================

export function buildHomeJsonLdGraph(faqs: FaqInput[]) {
  const webPage = buildWebPageJsonLd({
    url: MAIN_SITE,
    name: `${BRAND_NAME} | 杭州财税服务专家`,
    description:
      "一棵松财税官方网站，提供企业财税全案咨询、主播财税合规化、海南自贸港财税落地三大核心服务。累计服务企业 3000+ 家，处理财税稽查 500+ 起。",
  });

  const services = [
    buildServiceJsonLd({
      id: "tax-compliance",
      name: "企业财税全案咨询",
      serviceType: "代理记账 / 税务筹划 / 工商注册 / 税务风险排查",
      description:
        "面向中小微、贸易、园区企业，提供工商注册、记账报税、海南跨境财税、高薪合规、园区政策落地全流程托管，一站式规避税务风险。基础套餐 2400 元/年起。",
      areaServed: "浙江省",
    }),
    buildServiceJsonLd({
      id: "anchor-tax",
      name: "主播财税合规化",
      serviceType: "主播收入合规化 / 经营主体注册 / 佣金结算架构",
      description:
        "专为直播带货、短视频达人打造一站式财税合规方案，梳理收入链路、搭建合规主体、优化个税成本。基础诊断 2980 元/次起，年度合规托管 9800 元/年。",
      areaServed: "中国",
    }),
    buildServiceJsonLd({
      id: "hainan-ftz",
      name: "海南自贸港财税落地",
      serviceType: "园区注册 / ODI 备案 / 跨境资金合规 / 双十五政策落地",
      description:
        "依托海南自贸港双十五税收政策，为商贸、跨境电商、主播、生产企业提供园区注册、财税架构搭建、ODI 备案、资金合规一站式落地托管。基础注册 2400 元起。",
      areaServed: "海南省",
    }),
  ];

  const faqPage = buildFaqPageJsonLd(faqs);

  return [
    webPage,
    ...services,
    faqPage,
    contactPageJsonLd,
  ];
}

// ============================================================
// 10. articles 详情页专用：单篇文章 schema
// ============================================================

export interface ArticleJsonLdInput {
  slug: string;
  title: string;
  summary: string;
  date: string; // ISO 8601
  tags: string[];
  contentHtml: string;
  url?: string; // 默认指向 DEPLOY_SITE（因为文章部署在辅助站 ai 域）
}

export function buildArticleJsonLd(input: ArticleJsonLdInput) {
  const url =
    input.url ?? `${DEPLOY_SITE}/articles/${input.slug}`;

  // 提取纯文本做描述
  const plainText = stripHtml(input.contentHtml).slice(0, 200);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": url,
        url,
        headline: input.title,
        description: input.summary || plainText,
        inLanguage: "zh-CN",
        datePublished: input.date,
        dateModified: input.date,
        author: { "@id": ORG_ID },
        publisher: {
          "@id": ORG_ID,
          name: BRAND_NAME,
          logo: { "@type": "ImageObject", url: `${MAIN_SITE}/logo.png` },
        },
        mainEntityOfPage: { "@id": url },
        isPartOf: { "@id": WEBSITE_ID },
        keywords: input.tags.join(", "),
        articleSection: "财税洞察",
        wordCount: plainText.length,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "首页",
            item: MAIN_SITE,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "财税洞察",
            item: `${DEPLOY_SITE}/articles`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: input.title,
            item: url,
          },
        ],
      },
    ],
  };
}

// ============================================================
// 11. articles 列表页专用
// ============================================================

export interface ArticleListItem {
  slug: string;
  title: string;
  date: string;
  category: string;
}

export function buildArticleListJsonLd(items: ArticleListItem[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${DEPLOY_SITE}/articles`,
        url: `${DEPLOY_SITE}/articles`,
        name: "财税洞察 | 一棵松财税",
        description:
          "一棵松财税文章洞察板块，分享企业财税合规、代理记账选择、主播合规、海南自贸港等专业知识。",
        inLanguage: "zh-CN",
        isPartOf: { "@id": WEBSITE_ID },
        publisher: { "@id": ORG_ID },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: items.length,
          itemListElement: items.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            url: `${DEPLOY_SITE}/articles/${item.slug}`,
            name: item.title,
            datePublished: item.date,
            category: item.category,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "首页", item: MAIN_SITE },
          { "@type": "ListItem", position: 2, name: "财税洞察", item: `${DEPLOY_SITE}/articles` },
        ],
      },
    ],
  };
}

// ============================================================
// 12. 工具：JSON.stringify 安全序列化
// ============================================================

export function safeStringify(schema: object | object[]): string {
  return JSON.stringify(schema).replace(/</g, "\\u003c");
}
