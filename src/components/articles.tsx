import Link from 'next/link';
import { sortedArticles } from '@/lib/articles';

const categoryColors: Record<string, string> = {
  行业观察: 'bg-navy/5 text-navy border-navy/15',
  主播合规: 'bg-pine/10 text-pine border-pine/20',
  海南自贸港: 'bg-gold/10 text-[#a37a2c] border-gold/25',
  代账指南: 'bg-navy/5 text-navy border-navy/15',
};

export function Articles() {
  const list = sortedArticles().slice(0, 3);

  return (
    <section id="articles" className="py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-gold" />
            <span className="text-gold font-semibold tracking-widest text-sm">财税洞察</span>
            <span className="h-px w-8 bg-gold" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-navy mb-4">专业内容 · 合规先行</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            基于官方公开数据，输出可核验、可复用的财税实操内容
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h3 className="text-lg font-bold text-navy leading-snug mb-3 group-hover:text-pine transition-colors line-clamp-2">
                {article.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
                {article.summary}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-pine">
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
            </Link>
          ))}
        </div>

        {/* More */}
        <div className="text-center mt-12">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-pine text-pine font-semibold rounded-lg hover:bg-pine hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            查看全部洞察文章
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
