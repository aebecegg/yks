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
      name: '企业服务平台系统软件',
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
          <span className="inline-block px-4 py-1.5 bg-pine/10 text-pine text-sm font-bold rounded-full mb-4 border border-pine/20">
            资质认证
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            权威资质 · 实力认证
          </h2>
          <p className="mt-4 text-foreground/50 max-w-2xl mx-auto">
            齐全的行业资质与权威认证，为您的财税合规提供坚实保障
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* TSC5 highlight - bold card */}
        <div className="mb-12 relative p-8 lg:p-12 rounded-2xl bg-gradient-to-r from-navy via-[#112D4B] to-navy-light text-white overflow-hidden">
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-pine/10 rounded-full translate-y-1/3 -translate-x-1/4" />
          <div className="absolute inset-0 hero-grid opacity-30" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-shrink-0 w-32 h-32 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 backdrop-blur-sm border-2 border-gold/30 flex flex-col items-center justify-center">
              <span className="text-4xl font-black text-gold-light">TSC5</span>
              <span className="text-xs text-gold-light/60 mt-1 font-medium">信用等级</span>
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-2xl lg:text-3xl font-extrabold">杭州涉税服务机构最高信用等级</h3>
              <p className="mt-4 text-white/60 max-w-xl leading-relaxed text-[15px]">
                TSC5级是涉税服务机构的最高信用评级，代表一棵松在纳税信用、服务质量、合规经营等方面均达到行业最高标准。信用排名位列杭州第33位。
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/10">
                <span className="w-2 h-2 bg-pine-light rounded-full" />
                <span className="text-sm text-white/70">代理记账许可证 · 科技型中小企业 · 软件著作权</span>
              </div>
            </div>
          </div>
        </div>

        {/* Qualifications grid - stronger visual */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualifications.map((qual) => (
            <div
              key={qual.name}
              className="group p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-pine/30 hover:shadow-xl transition-all duration-300 text-center hover:-translate-y-1"
            >
              <div className="w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-pine to-pine-light text-white flex items-center justify-center shadow-lg shadow-pine/20 group-hover:shadow-pine/40 transition-shadow">
                {qual.icon}
              </div>
              <h4 className="mt-4 font-extrabold text-navy text-sm">{qual.name}</h4>
              <div className="mt-3 space-y-1.5">
                <p className="text-xs text-foreground/50">发证机构：{qual.issuer}</p>
                <p className="text-xs text-foreground/40 font-mono">{qual.number}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-pine/10 text-pine text-xs font-bold rounded-full">
                  有效期：{qual.period}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
