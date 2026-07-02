export function About() {
  const milestones = [
    { year: '2015', event: '公司成立', desc: '杭州一棵松企业管理有限公司注册成立' },
    { year: '2018', event: '产业园运维', desc: '运维杭州金财跨境电商供应链产业园' },
    { year: '2020', event: '事务所合作', desc: '合作设立杭州德御天悦会计师事务所' },
    { year: '2025', event: '招商大使', desc: '成为海南洋浦工业园招商大使' },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FAFBFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-pine/10 text-pine text-sm font-semibold rounded-full mb-4">
            关于我们
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">
            扎根财税 · 守护企业长青
          </h2>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Brand story */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6 pine-line">
              一棵松的品牌信念
            </h3>
            <div className="mt-10 space-y-5 text-foreground/75 leading-relaxed">
              <p>
                <strong className="text-navy">一棵松</strong>，取意于常青之松——扎根深远、四季不凋、不惧风雨。我们希望做好每一项财税服务工作，让服务的企业如松般万年长青。
              </p>
              <p>
                杭州一棵松企业管理有限公司成立于2015年，总部位于杭州市钱塘区。作为杭州涉税服务机构等级<strong className="text-pine">TSC5</strong>级（信用排名33）的专业机构，我们始终以合规为基石，以专业为驱动，为企业提供从注册到合规、从记账到筹划的全生命周期财税托管服务。
              </p>
              <p>
                通过财税合规与政策解读的深度结合，我们帮助企业实现财税架构的完美搭建，合法降低综合税负，规避税务风险，助力企业在合规经营中稳健成长。
              </p>
            </div>

            {/* Core values */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: '🛡️', title: '合规为先', desc: '全流程风控，杜绝税务隐患' },
                { icon: '📊', title: '数据驱动', desc: '数字化管理，精准财税诊断' },
                { icon: '🤝', title: '全程托管', desc: '一站式服务，省心更安心' },
                { icon: '💰', title: '透明收费', desc: '明码标价，无隐形消费' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-white border border-border/50 hover:border-pine/30 hover:shadow-md transition-all duration-300"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <h4 className="mt-2 font-semibold text-navy text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-navy mb-6 pine-line">
              发展里程碑
            </h3>
            <div className="mt-10 relative">
              {/* Timeline line */}
              <div className="absolute left-[18px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-pine via-gold to-pine/30" />

              <div className="space-y-8">
                {milestones.map((item, index) => (
                  <div key={item.year} className="relative flex gap-5 group">
                    {/* Dot */}
                    <div className="relative z-10 w-9 h-9 rounded-full bg-white border-2 border-pine flex items-center justify-center shrink-0 group-hover:bg-pine group-hover:border-pine transition-colors duration-300">
                      <div className="w-3 h-3 rounded-full bg-pine group-hover:bg-white transition-colors duration-300" />
                    </div>
                    {/* Content */}
                    <div className="pb-2">
                      <div className="flex items-baseline gap-3">
                        <span className="text-xl font-bold text-pine">{item.year}</span>
                        <span className="font-semibold text-navy">{item.event}</span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Qualification badge */}
            <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-navy to-navy-light text-white">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-gold-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-1 6h2v2h2v2h-2v2h-2v-2H9V9h2V7z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-lg">TSC5级涉税服务机构</h4>
                  <p className="text-white/60 text-sm mt-1">
                    杭州涉税服务机构最高信用等级，信用排名33位。代理记账许可证、科技型中小企业认证等资质齐全。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
