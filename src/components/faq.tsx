"use client";

import { useState } from "react";
import { faqs } from "@/lib/faq-data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Background - warm tone */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E8] to-[#FAF8F3]" />
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold/15 text-gold text-sm font-bold rounded-full mb-4 border border-gold/20">
            常见问题
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy">
            客户高频问答
          </h2>
          <p className="mt-4 text-foreground/50">
            整理客户最关心的问题，为您提供透明、专业的解答
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* FAQ list */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border-2 overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-pine/30 bg-white shadow-lg shadow-pine/5'
                  : 'border-transparent bg-white/70 hover:bg-white hover:border-gray-100'
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-navy pr-4 text-[15px]">{faq.q}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-pine text-white rotate-180'
                      : 'bg-gray-100 text-foreground/40'
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-0 border-t-2 border-pine/10">
                    {faq.a.startsWith('<div') ? (
                      <div
                        className="pt-4 text-[15px]"
                        dangerouslySetInnerHTML={{ __html: faq.a }}
                      />
                    ) : (
                      <p className="text-foreground/65 leading-relaxed pt-4 text-[15px]">{faq.a}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
