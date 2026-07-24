'use client';

import { useState } from 'react';

export function Contact() {
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pine/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-pine/10 text-pine text-sm font-bold rounded-full mb-4 border border-pine/20">
            联系我们
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            专业团队 · 随时响应
          </h2>
          <p className="mt-4 text-foreground/50 max-w-2xl mx-auto">
            无论您是初创企业还是成熟公司，我们都能为您量身定制最合适的财税方案
          </p>
          <div className="section-divider mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Phone - bold card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-pine to-pine-light text-white shadow-lg shadow-pine/20 hover:shadow-xl hover:shadow-pine/30 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0 border border-white/10">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white/80 text-sm">咨询热线</h4>
                  <p className="text-2xl font-extrabold text-white mt-1">400-665-8776</p>
                  <p className="text-xs text-white/50 mt-1">全年7×12小时在线响应</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light text-white flex items-center justify-center shrink-0 shadow-lg shadow-gold/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy">企业邮箱</h4>
                  <p className="text-sm font-bold text-navy/70 mt-1">yikesong20151231@126.com</p>
                  <p className="text-xs text-foreground/40 mt-1">工作日24小时内回复</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-100 hover:border-navy/30 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-navy to-navy-light text-white flex items-center justify-center shrink-0 shadow-lg shadow-navy/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-navy">公司地址</h4>
                  <p className="text-sm font-bold text-navy/70 mt-1">杭州市钱塘区2号大街501号4-1005室</p>
                  <p className="text-xs text-foreground/40 mt-1">欢迎实地考察洽谈</p>
                </div>
              </div>
            </div>

            {/* Service hours */}
            <div className="p-5 rounded-xl bg-navy/5 border-2 border-navy/10">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-pine rounded-full animate-pulse" />
                <span className="text-sm font-bold text-navy">服务时间</span>
              </div>
              <p className="text-sm font-bold text-navy/70">工作日 8:30 - 21:00</p>
              <p className="text-xs text-foreground/40 mt-1">税务突发问题4小时紧急对接</p>
            </div>
          </div>

          {/* CTA area */}
          <div className="lg:col-span-3 flex items-center">
            <div className="w-full p-10 rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-light shadow-2xl shadow-navy/20 corner-accent text-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-pine/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pine to-pine-light flex items-center justify-center mx-auto mb-6 shadow-lg shadow-pine/30">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-extrabold text-white mb-3">
                  获取专属财税方案
                </h3>
                <p className="text-white/60 mb-8 max-w-md mx-auto">
                  专业财税顾问一对一沟通，为您量身定制合规节税方案
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="https://opc.yikesong66.com/#/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-pine to-pine-light text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-pine/40 transition-all duration-300 hover:-translate-y-1 text-lg"
                  >
                    立即咨询
                  </a>
                  <button
                    onClick={() => setShowQRModal(true)}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur text-white font-bold rounded-xl border-2 border-white/20 hover:bg-white/20 hover:border-gold/50 transition-all duration-300 text-lg"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                    </svg>
                    扫码咨询
                  </button>
                </div>
                <p className="text-white/30 text-sm mt-5">
                  全年7×12小时在线 · 税务突发4小时紧急对接
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* QR Code Modal */}
      {showQRModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowQRModal(false)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowQRModal(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pine to-pine-light flex items-center justify-center mx-auto mb-4 shadow-lg shadow-pine/30">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-extrabold text-navy mb-2">扫码添加客服</h3>
              <p className="text-sm text-foreground/60 mb-6">
                微信扫描二维码，获取专属财税方案
              </p>
              <div className="w-56 h-56 mx-auto bg-white border-2 border-gray-100 rounded-xl p-3 shadow-inner">
                <img
                  src="/qrcode-wechat.png"
                  alt="微信客服二维码"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-foreground/40 mt-4">
                7×12小时在线响应 · 税务突发4小时紧急对接
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
