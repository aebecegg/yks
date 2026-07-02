export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-navy to-dark-bg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-12 lg:py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pine to-pine-light flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                >
                  <path d="M12 2L8 8h2.5L7 14h3l-2 6h2v2h4v-2h2l-2-6h3l-3.5-6H16L12 2z" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-bold">一棵松财税</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              稳健如松，基业长青。深耕财税服务10年，让您的企业在合规经营中稳健成长。
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs text-white/70">
                TSC5级涉税服务机构
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">服务项目</h4>
            <ul className="space-y-2.5">
              {['企业财税全案咨询', '主播财税合规化', '海南自贸港财税落地', '代理记账', '税务合规', '园区招商返税'].map(
                (item) => (
                  <li key={item}>
                    <a href="#services" className="text-sm text-white/50 hover:text-white/80 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="font-semibold text-white mb-4">关于我们</h4>
            <ul className="space-y-2.5">
              {['公司介绍', '发展历程', '资质认证', '核心优势', '常见问题'].map(
                (item) => (
                  <li key={item}>
                    <a href="#about" className="text-sm text-white/50 hover:text-white/80 transition-colors duration-200">
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">联系方式</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold-light mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-sm text-white/50">400-665-8776</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold-light mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-white/50">yikesong20151231@126.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-gold-light mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm text-white/50">杭州市钱塘区2号大街501号4-1005室</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2015-{new Date().getFullYear()} 杭州一棵松企业管理有限公司 版权所有
          </p>
          <p className="text-xs text-white/30">
            统一社会信用代码：91330110MA27WLNG6K
          </p>
        </div>
      </div>
    </footer>
  );
}
