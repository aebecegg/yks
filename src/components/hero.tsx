export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-[#0D3B5E]"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.04]">
        <svg viewBox="0 0 400 800" className="w-full h-full" fill="white">
          {/* Abstract pine tree silhouette */}
          <polygon points="200,80 140,200 170,200 120,310 155,310 100,430 300,430 245,310 280,310 230,200 260,200" />
          <rect x="185" y="430" width="30" height="80" />
          {/* Subtle mountain lines */}
          <line x1="0" y1="600" x2="160" y2="520" stroke="white" strokeWidth="0.5" opacity="0.3" />
          <line x1="240" y1="530" x2="400" y2="610" stroke="white" strokeWidth="0.5" opacity="0.3" />
        </svg>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-[10%] w-64 h-64 bg-pine/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-[15%] w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="max-w-3xl">
          {/* Tag */}
          <div className="animate-fade-up inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/10 mb-8">
            <span className="w-2 h-2 bg-pine-light rounded-full animate-pulse" />
            <span className="text-white/80 text-sm">深耕财税服务 · 10年匠心沉淀</span>
          </div>

          {/* Main heading */}
          <h1 className="animate-fade-up-delay-1 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight">
            稳健如松
            <br />
            <span className="bg-gradient-to-r from-gold-light to-gold bg-clip-text text-transparent">
              基业长青
            </span>
          </h1>

          {/* Subheading */}
          <p className="animate-fade-up-delay-2 mt-6 text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl">
            一站式企业财税合规全案服务，让您的企业如松常青。
            <br className="hidden sm:block" />
            从工商注册到税务合规，从园区落地到跨境投资，全程专业托管。
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-up-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pine to-pine-light text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-pine/30 transition-all duration-300 hover:-translate-y-0.5 text-base"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              免费财税咨询
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-base"
            >
              了解服务详情
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-up-delay-3 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: '10', unit: '年+', label: '深耕财税' },
              { value: '3000', unit: '+', label: '服务企业' },
              { value: 'TSC5', unit: '', label: '涉税服务等级' },
              { value: '500', unit: '+', label: '稽查处理' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.value}
                  <span className="text-gold-light text-lg">{stat.unit}</span>
                </div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFBFC] to-transparent" />
    </section>
  );
}
