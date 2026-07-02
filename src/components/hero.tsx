export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1F33]"
    >
      {/* Layered background */}
      <div className="absolute inset-0 hero-grid" />

      {/* Large geometric pine tree - right side */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[700px] opacity-[0.07] lg:opacity-[0.10] pointer-events-none">
        <svg viewBox="0 0 400 800" className="w-full h-full" fill="white">
          <polygon points="200,40 120,220 165,220 80,400 140,400 50,580 350,580 260,400 320,400 235,220 280,220" />
          <rect x="180" y="580" width="40" height="120" />
          <rect x="150" y="700" width="100" height="10" rx="2" />
        </svg>
      </div>

      {/* Decorative geometric shapes */}
      <div className="absolute top-[15%] right-[20%] w-2 h-2 bg-gold rounded-full opacity-60" />
      <div className="absolute top-[35%] right-[8%] w-1.5 h-1.5 bg-pine-light rounded-full opacity-40" />
      <div className="absolute bottom-[30%] right-[25%] w-1 h-16 bg-gradient-to-b from-pine/30 to-transparent" />
      <div className="absolute top-[20%] right-[35%] w-12 h-[1px] bg-gradient-to-r from-transparent to-gold/30" />
      <div className="absolute bottom-[45%] right-[12%] w-8 h-[1px] bg-gradient-to-r from-transparent to-pine/30" />

      {/* Big diagonal gold line accent */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 border-[40px] border-gold/5 rounded-full" />
      <div className="absolute -top-32 -left-32 w-64 h-64 border-[30px] border-pine/5 rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="lg:max-w-2xl">
          {/* Tag */}
          <div className="animate-fade-up inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/[0.08] backdrop-blur-sm rounded-full border border-white/[0.12] mb-8">
            <span className="w-2 h-2 bg-pine-light rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wide">深耕财税服务 · 10年匠心沉淀</span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-up-delay-1 text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
            <span className="text-white">稳健如松</span>
            <br />
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-light bg-clip-text text-transparent">
              基业长青
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up-delay-2 mt-8 text-lg sm:text-xl text-white/80 leading-relaxed">
            一站式企业财税合规全案服务，让您的企业如松常青。
            <br className="hidden sm:block" />
            从工商注册到税务合规，从园区落地到跨境投资，全程专业托管。
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pine to-pine-light text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-pine/40 transition-all duration-300 hover:-translate-y-1 text-base"
            >
              <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              免费财税咨询
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/[0.06] backdrop-blur-sm text-white font-bold rounded-xl border-2 border-white/20 hover:bg-white/15 hover:border-white/40 transition-all duration-300 text-base"
            >
              了解服务详情
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats bar - bolder contrast */}
          <div className="animate-fade-up-delay-3 mt-20 grid grid-cols-2 sm:grid-cols-4 gap-0 bg-white/[0.06] backdrop-blur-sm rounded-2xl border border-white/10 divide-x divide-y sm:divide-y-0 divide-white/10">
            {[
              { value: '10', unit: '年+', label: '深耕财税' },
              { value: '3000', unit: '+', label: '服务企业' },
              { value: 'TSC5', unit: '', label: '涉税等级' },
              { value: '500', unit: '+', label: '稽查处理' },
            ].map((stat) => (
              <div key={stat.label} className="p-5 sm:p-6 text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-white">
                  {stat.value}
                  <span className="text-gold-light text-xl font-bold">{stat.unit}</span>
                </div>
                <div className="text-white/50 text-xs sm:text-sm mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom transition - diagonal cut */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path d="M0 80L0 40L480 0L960 30L1440 10L1440 80L0 80Z" fill="#0F2B46" />
        </svg>
      </div>
    </section>
  );
}
