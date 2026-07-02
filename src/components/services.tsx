export function Services() {
  const services = [
    {
      id: 'tax-compliance',
      tag: '主打服务',
      title: '企业财税全案咨询',
      subtitle: '标准化企业财税全案咨询服务',
      description:
        '面向中小微、贸易、园区企业，提供工商注册、记账报税、海南跨境财税、高薪合规、园区政策落地全流程托管，一站式规避税务风险。',
      painPoints: [
        '企业不懂财税踩稽查风险',
        '注册选址无政策红利',
        '跨境/海南投资合规流程繁琐',
        '代账零散不连贯',
      ],
      features: [
        '服务企业累计 3000+ 家',
        '财税合规排查税负降低 12%-25.6%',
        '海南园区落地最快 7 个工作日办结',
        '财税稽查处理 500+',
        '全流程线上资料交付时效 24 小时',
      ],
      includes:
        '工商注册 + 记账报税 + 月度财税报表 + 税务风险筛查 + 政策申报 + 园区对接 + 1对1财税顾问全年咨询 + 合同财税审核',
      price: '基础记账套餐 2400元/年起',
      priceNote: '园区落户全案 8000元起 | 海南ODI跨境财税定制 1.8万起',
      color: 'pine',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      id: 'anchor-tax',
      tag: '特色服务',
      title: '主播财税合规化',
      subtitle: '主播个人资产合规化全链路管理',
      description:
        '专为直播带货、短视频达人打造一站式财税合规方案，梳理收入链路、搭建合规主体、优化个税成本，实现收入阳光化、资产安全化。',
      painPoints: [
        '佣金走私卡收款，无完税凭证',
        '平台分成、坑位费账目混乱',
        '不懂架构，个税税负过高',
        '对公结算、开票流程不合规',
        '个人资产与经营收入混同',
      ],
      features: [
        '服务主播累计 600+，稽查风险整改 40 起',
        '合规架构平均综合税负下降 15%-28%',
        '最快 3 个工作日落地经营主体',
        '全年 7×12 小时财税顾问在线响应',
        '覆盖 10+ 主流直播平台佣金结算合规方案',
      ],
      includes:
        '主播收入风险全面排查、经营主体注册、佣金合规结算架构搭建、月度记账报税、发票合规管理、年度汇算清缴、平台对公结算指导、1对1全年财税咨询',
      price: '基础诊断 2980元/次',
      priceNote: '年度合规托管 9800元/年 | 头部主播定制 26800元起',
      color: 'gold',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'hainan-ftz',
      tag: '战略服务',
      title: '海南自贸港财税落地',
      subtitle: '企业跨境投资+园区财税合规全链路咨询',
      description:
        '依托海南自贸港双十五税收政策，为商贸、跨境电商、主播、生产企业提供园区注册、财税架构搭建、ODI备案、资金合规一站式落地托管。',
      painPoints: [
        '想落户园区拿税收优惠，流程繁琐',
        '不懂海南双十五政策，错失红利',
        '跨境投资合规流程复杂',
        '资金通道不合规，账户被风控',
      ],
      features: [
        '双十五政策精准落地',
        '园区注册+财税架构一站式办理',
        'ODI跨境投资备案全流程托管',
        '集团多层架构顶层设计',
        '合法降低企业综合税负',
      ],
      includes:
        '园区注册 + 财税架构搭建 + ODI备案 + 资金合规方案 + 年度财税托管 + 政策维护',
      price: '园区基础注册 2400元',
      priceNote: '年度财税托管 4800元/年 | ODI跨境投资定制 29800元起',
      color: 'navy',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; tag: string; iconBg: string; dot: string }> = {
    pine: {
      bg: 'bg-pine/5',
      border: 'border-pine/20 hover:border-pine/50',
      tag: 'bg-pine/10 text-pine',
      iconBg: 'bg-pine/10 text-pine',
      dot: 'bg-pine',
    },
    gold: {
      bg: 'bg-gold/5',
      border: 'border-gold/20 hover:border-gold/50',
      tag: 'bg-gold/10 text-gold',
      iconBg: 'bg-gold/10 text-gold',
      dot: 'bg-gold',
    },
    navy: {
      bg: 'bg-navy/5',
      border: 'border-navy/20 hover:border-navy/50',
      tag: 'bg-navy/10 text-navy',
      iconBg: 'bg-navy/10 text-navy',
      dot: 'bg-navy',
    },
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-sm font-semibold rounded-full mb-4">
            服务项目
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">
            专业财税 · 全程托管
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            从工商注册到跨境投资，覆盖企业全生命周期财税需求，一站式解决您的合规难题
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Service cards */}
        <div className="space-y-8">
          {services.map((service) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={service.id}
                className={`group relative rounded-2xl border ${colors.border} ${colors.bg} p-6 lg:p-8 transition-all duration-300 hover:shadow-lg`}
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`w-14 h-14 rounded-xl ${colors.iconBg} flex items-center justify-center shrink-0`}>
                      {service.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${colors.tag}`}>
                          {service.tag}
                        </span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-navy">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{service.subtitle}</p>
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <div className="text-lg font-bold text-pine">{service.price}</div>
                    <div className="text-xs text-muted-foreground mt-1">{service.priceNote}</div>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-5 text-foreground/75 leading-relaxed">{service.description}</p>

                {/* Content grid */}
                <div className="mt-6 grid md:grid-cols-2 gap-6">
                  {/* Pain points */}
                  <div className="bg-white/80 rounded-xl p-5 border border-border/30">
                    <h4 className="font-semibold text-navy text-sm mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-destructive" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      解决核心痛点
                    </h4>
                    <ul className="space-y-2">
                      {service.painPoints.map((point) => (
                        <li key={point} className="flex items-start gap-2 text-sm text-foreground/70">
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-1.5 shrink-0`} />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="bg-white/80 rounded-xl p-5 border border-border/30">
                    <h4 className="font-semibold text-navy text-sm mb-3 flex items-center gap-2">
                      <svg className="w-4 h-4 text-pine" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      核心服务数据
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-foreground/70">
                          <svg className="w-4 h-4 text-pine shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Service includes */}
                <div className="mt-5 p-4 bg-white/60 rounded-xl border border-border/20">
                  <h4 className="text-xs font-semibold text-muted-foreground mb-2">服务包含</h4>
                  <p className="text-sm text-foreground/70 leading-relaxed">{service.includes}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-navy to-navy-light text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-navy/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            获取专属财税方案
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
