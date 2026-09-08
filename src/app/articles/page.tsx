import type { Metadata } from 'next';
import Link from 'next/link';
import { sortedArticles } from '@/lib/articles';

export const metadata: Metadata = {
  title: '财税洞察文章 | 一棵松财税',
  description:
    '一棵松财税洞察专栏：金税四期合规指南、主播财税合规、海南自贸港双15政策落地、代理记账选择标准等专业内容，数据均源自官方公开资料。',
  keywords: ['财税文章', '金税四期', '主播财税合规', '海南自贸港', '代理记账', '税务稽查'],
  openGraph: {
    title: '财税洞察文章 | 一棵松财税',
    description:
      '金税四期合规、主播财税、海南自贸港政策、代账选择指南——基于官方公开数据的专业财税内容。',
    type: 'website',
  },
};

const categoryColors: Record<string, string> = {
  行业观察: 'bg-navy/5 text-navy border-navy/15',
  主播合规: 'bg-pine/10 text-pine border-pine/20',
  海南自贸港: 'bg-gold/10 text-[#a37a2c] border-gold/25',
  代账指南: 'bg-navy/5 text-navy border-navy/15',
};

export default function ArticlesPage() {
  const list = sortedArticles();

  return (
    <main className="min-h-screen bg-background pt-16 lg:pt-20">
      {/* Page header */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-light text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-5">
              <span className="h-px w-10 bg-gold" />
              <span className="text-gold font-semibold tracking-widest text-sm">财税洞察</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight mb-5">
              专业内容 · 合规先行
            </h1>
            <p className="text-lg text-white/75 leading-relaxed">
              围绕金税四期、主播财税合规、海南自贸港政策落地与代账选择，输出可核验、可复用的实操内容。所有数据均源自官方公开资料。
            </p>
          </div>
        </div>
      </section>

      {/* Articles list */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {list.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="group relative bg-white rounded-2xl border border-border p-8 shadow-sm hover:shadow-xl hover:border-pine/30 transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                    categoryColors[article.category] ?? 'bg-navy/5 text-navy border-navy/15'
                  }`}
                >
                  {article.category}
                </span>
                <span className="text-sm text-muted-foreground">{article.dateLabel}</span>
              </div>

              <h2 className="text-xl font-bold text-navy leading-snug mb-3 group-hover:text-pine transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
                {article.summary}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground bg-muted px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-pine whitespace-nowrap">
                  阅读全文
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-navy to-navy-light p-10 lg:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pine via-gold to-pine" />
          <h3 className="text-2xl font-bold mb-3">有财税问题需要一对一咨询？</h3>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">
            资深财税顾问在线响应，税务突发问题4小时紧急对接
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/#contact"
              className="px-8 py-3 bg-gradient-to-r from-pine to-pine-light rounded-lg font-semibold hover:shadow-lg hover:shadow-pine/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              免费咨询
            </Link>
            <a
              href="tel:400-665-8776"
              className="px-8 py-3 border border-white/30 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              400-665-8776
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
