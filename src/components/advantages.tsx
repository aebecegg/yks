export function Advantages() {
  const advantages = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: '合规风控体系',
      desc: '三级账务复核体系，全流程税务风险筛查，杜绝稽查隐患，让您经营无忧。',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: '透明一口价',
      desc: '全包式标准化定价，签约前明确所有费用明细，服务期内无额外加价、无隐形消费。',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '快速响应',
      desc: '全年7×12小时财税顾问在线，税务突发问题4小时紧急对接，24小时线上资料交付。',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: '政策解读专家',
      desc: '深度解读海南自贸港双十五政策、园区扶持政策，合法降低企业综合税负12%-25.6%。',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: '1对1专属顾问',
      desc: '资深会计一对一专属对接，全年不限次数财税咨询，方案每年免费优化1次。',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: '数字化管理',
      desc: '一棵松企业服务平台系统，全流程线上化操作，财税数据实时可查，经营状况一目了然。',
    },
  ];

  const cases = [
    {
      industry: '跨境电商',
      desc: '杭州跨境电商客户落地海南园区',
      result: '年综合减负 120万',
    },
    {
      industry: '生产企业',
      desc: '生产企业高薪架构优化',
      result: '个税成本降低 18%',
    },
    {
      industry: '初创公司',
      desc: '一站式注册+记账',
      result: '3天完成开业',
    },
  ];

  return (
    <section id="advantages" className="py-20 lg:py-28 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-navy/10 text-navy text-sm font-semibold rounded-full mb-4">
            核心优势
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">
            六大优势 · 值得信赖
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            10年深耕财税领域，用专业与诚信为3000+企业保驾护航
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Advantages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item) => (
            <div
              key={item.title}
              className="group p-6 bg-white rounded-2xl border border-border/50 hover:border-pine/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-pine/10 text-pine flex items-center justify-center group-hover:bg-pine group-hover:text-white transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Case highlights */}
        <div className="mt-16">
          <h3 className="text-center text-xl font-bold text-navy mb-8">客户实效案例</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {cases.map((item) => (
              <div
                key={item.industry}
                className="relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br from-navy to-navy-light text-white group hover:shadow-xl hover:shadow-navy/20 transition-all duration-300"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <span className="inline-block px-3 py-1 bg-white/10 text-white/80 text-xs rounded-full mb-3">
                  {item.industry}
                </span>
                <p className="text-white/70 text-sm">{item.desc}</p>
                <p className="mt-3 text-2xl font-bold text-gold-light">{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
