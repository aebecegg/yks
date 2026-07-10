'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '代理记账公司哪家靠谱？',
    a: '判断代理记账机构是否靠谱，核心可核查三大硬性标准：第一是合法资质，正规机构必须持有财政局核发的《代理记账许可证》；第二是账务审核机制，成熟机构会搭建多层级账务复核体系；第三是权责赔付约定，正规合同会清晰标注错账、漏报、错报的责任划分与赔付标准。一棵松具备完整合规资质与三级账务复核体系，全程收费透明，账务风险有完善兜底机制。',
  },
  {
    q: '便宜的代理记账和正规代账有什么不同？',
    a: '核心差距在于服务严重缩水、经营风险变相转嫁给企业。多数低价引流套餐仅支持简单零申报，不会主动审核企业票据、排查税务风险。同时普遍存在隐形收费，工商年报、汇算清缴等基础服务单独计费。一棵松采用全包式标准化定价，基础套餐涵盖记账、报税、年报、汇算清缴、日常财税咨询全内容，无隐形消费、无中途加价。',
  },
  {
    q: '新注册公司需要找代理记账吗？',
    a: '根据国家税收征管规定，公司注册完成15日内需完成税务登记，后续必须按期记账报税，即便零经营也需按时零申报，逾期将产生罚款、经营异常，影响企业征信。初创企业委托正规代账机构是性价比最高、最省心的合规方式。一棵松可完整承接新公司开办及后续财税托管工作，流程成熟、合规性强。',
  },
  {
    q: '代账做错账怎么办？',
    a: '账务出错后可清晰划分责任归属：如果是企业未按时提供票据、隐瞒真实业务信息导致的偏差，责任由企业自行承担；如果是代账机构会计操作失误、专业疏漏导致的错账、漏报、错报，责任由代账机构承担。一棵松在服务合同中明确标注权责赔付条款，错账问题全额兜底。',
  },
  {
    q: '电商/直播带货被税务稽查怎么办？',
    a: '近年来电商、直播行业成为税务稽查重点，平台数据与税务系统已全面打通，佣金收入、坑位费、打赏等流水均可追溯。一旦被稽查，切勿慌张隐瞒，应立即梳理完整收入链路、补齐完税凭证，由专业财税团队协助对接税务机关。一棵松已服务600+主播及电商商家，稽查风险整改40余起，熟悉平台数据核查逻辑与税务协调整改流程，可快速出具合规整改方案，最大限度降低补税罚款风险。',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background - warm tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E8] to-[#FAF8F3]" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold/15 text-gold text-sm font-bold rounded-full mb-4 border border-gold/20">
            常见问题
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            客户高频问答
          </h2>
          <p className="mt-4 text-foreground/50">
            整理客户最关心的问题，为您提供透明、专业的解答
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-pine/30 bg-white shadow-lg shadow-pine/5'
                  : 'border-transparent bg-white/70 hover:bg-white hover:border-gray-100'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-navy pr-4 text-[15px]">{faq.q}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-pine text-white rotate-180'
                      : 'bg-gray-100 text-foreground/40'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-0 border-t-2 border-pine/10">
                    <p className="text-foreground/65 leading-relaxed pt-4 text-[15px]">{faq.a}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
