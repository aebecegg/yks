export function Qualifications() {
  const qualifications = [
    {
      name: '营业执照',
      issuer: '杭州市市场监管局',
      number: '91330110MA27WLNG6K',
      period: '长期',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: '代理记账许可证书',
      issuer: '财政局',
      number: 'DLJZ33011420250075',
      period: '长期',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      name: '科技型中小企业',
      issuer: '浙江省科学技术厅',
      number: '20233301006454',
      period: '长期',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      name: '一棵松企业服务平台系统软件',
      issuer: '国家知识产权局',
      number: '2017SR441380',
      period: '至2042年',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="qualifications" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-pine/10 text-pine text-sm font-semibold rounded-full mb-4">
            资质认证
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-navy">
            权威资质 · 实力认证
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            齐全的行业资质与权威认证，为您的财税合规提供坚实保障
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* TSC5 highlight */}
        <div className="mb-12 p-8 lg:p-10 rounded-2xl bg-gradient-to-r from-navy via-navy-light to-[#0D3B5E] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-pine/10 rounded-full translate-y-1/3 -translate-x-1/3" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-28 h-28 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gold-light">TSC5</span>
              <span className="text-xs text-white/60 mt-1">信用等级</span>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold">杭州涉税服务机构最高信用等级</h3>
              <p className="mt-3 text-white/60 max-w-xl leading-relaxed">
                TSC5级是涉税服务机构的最高信用评级，代表一棵松在纳税信用、服务质量、合规经营等方面均达到行业最高标准。信用排名位列杭州第33位。
              </p>
            </div>
          </div>
        </div>

        {/* Qualifications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualifications.map((qual) => (
            <div
              key={qual.name}
              className="group p-6 rounded-2xl bg-[#FAFBFC] border border-border/50 hover:border-pine/30 hover:shadow-lg transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-pine/10 text-pine flex items-center justify-center group-hover:bg-pine group-hover:text-white transition-colors duration-300">
                {qual.icon}
              </div>
              <h4 className="mt-4 font-bold text-navy text-sm">{qual.name}</h4>
              <div className="mt-2 space-y-1">
                <p className="text-xs text-muted-foreground">发证机构：{qual.issuer}</p>
                <p className="text-xs text-muted-foreground">编号：{qual.number}</p>
                <p className="text-xs text-pine font-medium">有效期：{qual.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
