export function About() {
  const milestones = [
    { year: '2015', event: '公司成立', desc: '杭州一棵松企业管理有限公司注册成立' },
    { year: '2018', event: '产业园运维', desc: '运维杭州金财跨境电商供应链产业园' },
    { year: '2020', event: '事务所合作', desc: '合作设立杭州德御天悦会计师事务所' },
    { year: '2025', event: '招商大使', desc: '成为海南洋浦工业园招商大使' },
  ];

  const values = [
    { icon: '🛡️', title: '合规为先', desc: '全流程风控，杜绝税务隐患' },
    { icon: '📊', title: '数据驱动', desc: '数字化管理，精准财税诊断' },
    { icon: '🤝', title: '全程托管', desc: '一站式服务，省心更安心' },
    { icon: '💰', title: '透明收费', desc: '明码标价，无隐形消费' },
  ];

  return (
    <section id="about" className="relative py-20 lg:py-28 bg-navy overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 hero-grid opacity-50" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-pine/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title - light on dark */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold/15 text-gold-light text-sm font-bold rounded-full mb-4 border border-gold/20">
            关于我们
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            扎根财税 · 守护企业长青
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Brand story */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-6 pine-line">
              一棵松的品牌信念
            </h3>
            <div className="mt-10 space-y-5 leading-relaxed">
              <p className="text-white/75 text-[15px]">
                <strong className="text-white">一棵松</strong>，取意于常青之松——扎根深远、四季不凋、不惧风雨。我们希望做好每一项财税服务工作，让服务的企业如松般万年长青。
              </p>
              <p className="text-white/75 text-[15px]">
                杭州一棵松企业管理有限公司成立于2015年，总部位于杭州市钱塘区。作为杭州涉税服务机构等级<strong className="text-gold-light">TSC5</strong>级（信用排名33）的专业机构，我们始终以合规为基石，以专业为驱动，为企业提供从注册到合规、从记账到筹划的全生命周期财税托管服务。
              </p>
              <p className="text-white/75 text-[15px]">
                通过财税合规与政策解读的深度结合，我们帮助企业实现财税架构的完美搭建，合法降低综合税负，规避税务风险，助力企业在合规经营中稳健成长。
              </p>
            </div>

            {/* Core values - on dark bg with border accents */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-white/[0.06] border border-white/10 hover:border-gold/30 hover:bg-white/[0.1] transition-all duration-300 group"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="mt-2 font-bold text-white text-sm group-hover:text-gold-light transition-colors">{item.title}</h4>
                  <p className="text-xs text-white/50 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline + Badge */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-6 pine-line">
              发展里程碑
            </h3>
            <div className="mt-10 relative">
              {/* Timeline line */}
              <div className="absolute left-[18px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-gold via-pine-light to-pine/30" />

              <div className="space-y-8">
                {milestones.map((item) => (
                  <div key={item.year} className="relative flex gap-5 group">
                    {/* Dot */}
                    <div className="relative z-10 w-9 h-9 rounded-full bg-navy-light border-2 border-gold flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-colors duration-300">
                      <div className="w-3 h-3 rounded-full bg-gold group-hover:bg-navy transition-colors duration-300" />
                    </div>
                    {/* Content */}
                    <div className="pb-2">
                      <div className="flex items-baseline gap-3">
                        <span className="text-xl font-extrabold text-gold-light">{item.year}</span>
                        <span className="font-bold text-white">{item.event}</span>
                      </div>
                      <p className="text-white/50 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualification badge - enhanced contrast */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-pine-dark to-pine text-white border border-pine-light/20 pulse-glow">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-7 h-7 text-gold-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h2v2h-2v2h-2v-2H9V9h2V7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-extrabold text-lg">TSC5级涉税服务机构</h4>
                  <p className="text-white/70 text-sm mt-1 leading-relaxed">
                    杭州涉税服务机构最高信用等级，信用排名33位。代理记账许可证、科技型中小企业认证等资质齐全。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom transition */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" className="w-full">
          <path d="M0 60L0 20L360 0L720 30L1080 10L1440 25L1440 60L0 60Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
