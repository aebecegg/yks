export function Contact() {
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

          {/* Consultation form area */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-white border-2 border-gray-100 shadow-xl shadow-gray-100/50 corner-accent">
              <h3 className="text-xl font-extrabold text-navy mb-2">获取专属财税方案</h3>
              <p className="text-sm text-foreground/50 mb-8">
                填写以下信息，我们的财税顾问将在24小时内与您联系
              </p>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">
                      姓名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="请输入您的姓名"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-sm font-medium focus:outline-none focus:ring-0 focus:border-pine transition-all duration-200 placeholder:text-foreground/30"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-navy mb-2">
                      联系电话 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="请输入您的联系电话"
                      className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-sm font-medium focus:outline-none focus:ring-0 focus:border-pine transition-all duration-200 placeholder:text-foreground/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">企业名称</label>
                  <input
                    type="text"
                    placeholder="请输入您的企业名称"
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-sm font-medium focus:outline-none focus:ring-0 focus:border-pine transition-all duration-200 placeholder:text-foreground/30"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">咨询服务</label>
                  <div className="flex flex-wrap gap-2">
                    {['代理记账', '税务合规', '海南园区', '主播财税', 'ODI跨境', '其他'].map(
                      (item) => (
                        <span
                          key={item}
                          className="px-4 py-2.5 text-sm font-medium rounded-xl border-2 border-gray-200 text-foreground/60 cursor-pointer hover:border-pine/40 hover:text-pine hover:bg-pine/5 transition-all duration-200"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-navy mb-2">补充说明</label>
                  <textarea
                    rows={3}
                    placeholder="请简要描述您的财税需求..."
                    className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-white text-sm font-medium focus:outline-none focus:ring-0 focus:border-pine transition-all duration-200 resize-none placeholder:text-foreground/30"
                  />
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-pine to-pine-light text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-pine/30 transition-all duration-300 hover:-translate-y-0.5 text-base">
                  提交咨询
                </button>

                <p className="text-xs text-foreground/30 text-center">
                  提交即表示同意我们的隐私政策，您的信息将被严格保密
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
