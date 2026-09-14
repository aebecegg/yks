import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Services } from '@/components/services';
import { Advantages } from '@/components/advantages';
import { Qualifications } from '@/components/qualifications';
import { FAQ } from '@/components/faq';
import { faqs } from '@/lib/faq-data';
import { Articles } from '@/components/articles';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import FloatingSidebar from '@/components/floating-sidebar';
import {
  buildWebPageJsonLd,
  buildFaqPageJsonLd,
  buildServiceJsonLd,
  contactPageJsonLd,
  safeStringify,
} from '@/lib/jsonld';
import { SITE_URL, MAIN_SITE, BRAND_NAME } from '@/lib/site';

// 品牌描述与关键词（独立内联，避免污染 site.ts）
const BRAND_DESCRIPTION =
  '一棵松财税（杭州一棵松企业管理有限公司）提供企业财税全案咨询、主播财税合规化、海南自贸港财税落地服务。持有代理记账许可证（DLJZ33011420250075），涉税服务机构 TSC5 级，累计服务企业 3000+ 家，处理财税稽查 500+ 起。';

const BRAND_KEYWORDS = [
  '代理记账',
  '税务筹划',
  '工商注册',
  '主播财税合规化',
  '海南自贸港',
  '杭州财税公司',
];

// 三大核心服务（schema.org Service 所需）
const CORE_SERVICES = [
  {
    id: 'qiye-caishui-quanan',
    name: '企业财税全案咨询',
    serviceType: 'Financial Advisory',
    description:
      '面向杭州中小微企业提供工商注册、代理记账、税务风险筛查、政策申报、园区对接的一站式财税全案服务，基础套餐 2400 元/年起。',
    areaServed: '杭州市',
  },
  {
    id: 'zhubo-caishui-heguihua',
    name: '主播财税合规化',
    serviceType: 'Tax Compliance',
    description:
      '为直播带货/短视频达人提供收入合规、经营主体注册、佣金结算架构的合规化方案，基础诊断 2980 元/次，年度托管 9800 元/年起。',
    areaServed: '全国',
  },
  {
    id: 'hainan-zimaogang-caishui',
    name: '海南自贸港财税落地',
    serviceType: 'Cross-border Tax',
    description:
      '为有意落地海南自贸港的企业提供园区注册、双 15 税收优惠规划、ODI 备案、跨境资金合规服务，基础注册 2400 元起。',
    areaServed: '海南省',
  },
];

// 讲内容/品牌/联系入口用 www 真官网（与 canonical 一致）；文章 URL 单独用 ai
const homePageUrl = `${MAIN_SITE}/`;
const contactUrl = `${MAIN_SITE}/#contact`;

// 提取 FAQ 纯文本用于 JSON-LD（schema.org Answer.text 推荐纯文本）
const faqSchemaData = faqs.map((f) => ({
  question: f.q,
  answer: f.a.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(),
}));

const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    buildWebPageJsonLd({
      url: homePageUrl,
      name: `${BRAND_NAME} - 杭州企业财税全案服务专家`,
      description: BRAND_DESCRIPTION,
    }),
    buildFaqPageJsonLd(faqSchemaData),
    ...CORE_SERVICES.map((s) =>
      buildServiceJsonLd({
        id: s.id,
        name: s.name,
        serviceType: s.serviceType,
        description: s.description,
        areaServed: s.areaServed,
      }),
    ),
    { ...contactPageJsonLd, url: contactUrl },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeStringify(homePageJsonLd) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Qualifications />
        <FAQ />
        <Articles />
        <Contact />
      </main>
      <Footer />
      <FloatingSidebar />
    </>
  );
}
