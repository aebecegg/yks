export function Contact() {
  return (
    <section id="contact" className="py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pine/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-pine/10 text-pine text-sm font-bold rounded-full mb-4 border border-pine/20">
            联系我们
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            扫码咨询 · 即时响应
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* QR Code only */}
        <div className="flex justify-center">
          <div className="p-8 rounded-2xl bg-gradient-to-br from-navy via-navy to-navy-light shadow-2xl shadow-navy/20 corner-accent text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-pine/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="w-52 h-52 rounded-xl bg-white p-3 shadow-xl shadow-black/20 mx-auto">
                <img
                  src="/qrcode-service.jpg"
                  alt="扫码添加客服"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <p className="text-white/70 text-sm mt-4 font-medium">扫码添加智能客服</p>
              <p className="text-white/40 text-xs mt-2">全年7×12小时在线 · 税务突发4小时紧急对接</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
