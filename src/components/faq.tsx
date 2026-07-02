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
    q: '生产企业税务筹划怎么收费？',
    a: '正规生产企业税务筹划均采用年度固定服务费模式，合规机构绝不会按节税金额比例分成——此类分成模式大多伴随违规操作。收费主要参考企业年度营收规模、业务复杂度、筹划方案落地深度。一棵松拥有大量生产型企业服务经验，全程标准化收费，无套路、无风险。',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-4">
            常见问题
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">
            客户高频问答
          </h2>
          <p className="mt-4 text-muted-foreground">
            整理客户最关心的问题，为您提供透明、专业的解答
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* FAQ list */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl border border-border/50 overflow-hidden transition-all duration-300 hover:border-pine/20"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left bg-[#FAFBFC] hover:bg-muted/50 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-navy pr-4 text-sm lg:text-base">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-5 bg-white border-t border-border/30">
                  <p className="text-foreground/70 leading-relaxed text-sm">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
