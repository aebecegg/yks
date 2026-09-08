import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { articles, getArticleBySlug, sortedArticles, type Article } from '@/lib/articles';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: '文章未找到 | 一棵松财税' };
  }
  return {
    title: `${article.title} | 一棵松财税`,
    description: article.summary,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: 'article',
      publishedTime: article.date,
    },
    alternates: {
      canonical: `https://www.yikesong66.com/articles/${article.slug}`,
    },
  };
}

/* JSON-LD structured data for AI / search engines */
function ArticleJsonLd({ article }: { article: Article }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.summary,
    datePublished: article.date,
    articleSection: article.category,
    keywords: article.tags.join('，'),
    author: { '@type': 'Organization', name: '杭州一棵松企业管理有限公司' },
    publisher: {
      '@type': 'Organization',
      name: '一棵松财税',
      url: 'https://www.yikesong66.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.yikesong66.com/articles/${article.slug}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const others = sortedArticles().filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-background pt-16 lg:pt-20">
      <ArticleJsonLd article={article} />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy via-navy to-navy-light text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
          <nav className="flex items-center gap-2 text-sm text-white/60 mb-6">
            <Link href="/" className="hover:text-white transition-colors">
              首页
            </Link>
            <span>/</span>
            <Link href="/articles" className="hover:text-white transition-colors">
              财税洞察
            </Link>
            <span>/</span>
            <span className="text-white/80">正文</span>
          </nav>
          <div className="flex items-center gap-3 mb-5">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gold/20 text-gold-light border border-gold/30">
              {article.category}
            </span>
            <span className="text-sm text-white/60">{article.dateLabel}</span>
            <span className="text-sm text-white/60">· {article.readTime}</span>
          </div>
          <h1 className="text-2xl lg:text-4xl font-extrabold leading-snug">{article.title}</h1>
        </div>
      </section>

      {/* Body */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <article
          className="article-content"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Tags */}
        <div className="mt-10 pt-8 border-t border-border flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="text-sm text-muted-foreground bg-muted px-3 py-1.5 rounded-full"
            >
              # {tag}
            </span>
          ))}
        </div>

        {/* Back */}
        <div className="mt-10 flex justify-between items-center">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sm font-semibold text-pine hover:gap-3 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回文章列表
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pine to-pine-light text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-pine/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            咨询财税顾问
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="bg-muted/40 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl font-extrabold text-navy mb-8">相关阅读</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/articles/${item.slug}`}
                className="group bg-white rounded-xl border border-border p-6 hover:shadow-lg hover:border-pine/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-pine">{item.category}</span>
                  <span className="text-xs text-muted-foreground">{item.dateLabel}</span>
                </div>
                <h3 className="font-bold text-navy leading-snug group-hover:text-pine transition-colors line-clamp-2 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{item.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
