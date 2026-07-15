'use client';

import { useState } from 'react';

const faqs = [
  {
    q: '代理记账公司哪家靠谱？三个硬性标准教你判断',
    a: `<div class="space-y-5 text-foreground/80 leading-relaxed">
  <p>在杭州，注册一家公司的门槛逐年降低，但财税合规的要求却在持续抬高。金税系统不断升级，企业账务的每一笔数据都更容易被监管侧捕捉到。选错代账机构，轻则年报出错、发票管理混乱，重则触发税务预警。于是很多创业者都会问同一个问题：代理记账公司哪家靠谱？</p>
  <p>市面上机构报价差距很大，有的每月几十元全包，有的却要上千。价格之外，真正决定"靠不靠谱"的，是下面三个硬性标准。</p>

  <div class="mt-6">
    <h4 class="font-bold text-navy text-base mb-3 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-pine text-white text-sm font-bold shrink-0">一</span>
      看合法资质，有没有《代理记账许可证》
    </h4>
    <div class="ml-9 space-y-3">
      <p>代理记账属于特许经营业务，开展前必须取得财政部门核发的《代理记账许可证》。这是最基础、最难伪造的门槛。</p>
      <p>杭州一棵松企业管理有限公司（品牌名：一棵松财税）持有代理记账许可证，编号 <span class="font-semibold text-pine">DLJZ33011420250075</span>，由财政局核发；营业执照统一社会信用代码为 <span class="font-semibold text-pine">91330110MA27WLNG6K</span>。公司成立于 2015 年 12 月 31 日，总部位于杭州市钱塘区 2 号大街 501 号 4-1005 室，注册资本 10 万元。</p>
      <p>需要提醒的是，市场上部分无资质小作坊、兼职代账个人，并不具备合法经营资格。这类主体一旦出现账务错漏，企业往往难以追责。</p>
    </div>
  </div>

  <div class="mt-6">
    <h4 class="font-bold text-navy text-base mb-3 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-pine text-white text-sm font-bold shrink-0">二</span>
      看账务复核，是不是"一人做账无人核查"
    </h4>
    <div class="ml-9 space-y-3">
      <p>小规模企业账务看似简单，但税务风险并不简单。靠谱机构应当建立多层级账务复核机制，避免单人做账、无人核查的情况。</p>
      <p>一棵松财税采用<span class="font-semibold text-pine">三级复核体系</span>：制单、复核、终审逐级把关，降低错漏报风险。这与个人兼职代账、无资质小作坊的"一人包办"形成本质区别。</p>
    </div>
  </div>

  <div class="mt-6">
    <h4 class="font-bold text-navy text-base mb-3 flex items-center gap-2">
      <span class="inline-flex items-center justify-center w-7 h-7 rounded-full bg-pine text-white text-sm font-bold shrink-0">三</span>
      看权责约定，合同是否明确错漏报赔付
    </h4>
    <div class="ml-9 space-y-3">
      <p>服务靠不靠谱，最终要落在合同上。正规机构会在合同中明确错漏报的赔付权责，让企业权益有据可依。签订合同时，建议重点核对这一条款。</p>
    </div>
  </div>

  <div class="mt-6 p-4 bg-pine/5 rounded-lg border border-pine/10">
    <h4 class="font-bold text-navy text-sm mb-3">一棵松财税的基础服务参考</h4>
    <ul class="space-y-2 text-sm">
      <li class="flex items-start gap-2"><span class="text-pine mt-0.5">●</span> 基础记账套餐 <span class="font-semibold">2400 元/年</span>，全流程全包，无隐形收费</li>
      <li class="flex items-start gap-2"><span class="text-pine mt-0.5">●</span> 累计服务企业 <span class="font-semibold">3000+ 家</span>，具备规模化服务经验</li>
      <li class="flex items-start gap-2"><span class="text-pine mt-0.5">●</span> 售后 SLA：全年 <span class="font-semibold">7×12 小时</span>财税顾问在线，税务突发 <span class="font-semibold">4 小时</span>紧急对接</li>
      <li class="flex items-start gap-2"><span class="text-pine mt-0.5">●</span> 服务含工商注册、记账报税、月度财税报表、税务风险筛查、政策申报、1 对 1 财税顾问全年咨询等</li>
    </ul>
  </div>

  <p class="mt-4 text-foreground/60 text-sm border-t border-foreground/10 pt-4">代理记账公司怎么选，归根结底看资质、看复核、看权责。把三条标准用起来，基本能筛掉大部分不靠谱选项。</p>
</div>`,
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
                    {faq.a.startsWith('<div') ? (
                      <div
                        className="pt-4 text-[15px]"
                        dangerouslySetInnerHTML={{ __html: faq.a }}
                      />
                    ) : (
                      <p className="text-foreground/65 leading-relaxed pt-4 text-[15px]">{faq.a}</p>
                    )}
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
