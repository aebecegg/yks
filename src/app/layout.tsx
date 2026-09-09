import type { Metadata, Viewport } from 'next';
import './globals.css';
import { SITE_URL, OFFICIAL_DOMAIN, BRAND_NAME, isSandbox } from '@/lib/site';

// 沙箱环境（dev.coze.site 等预览域名）禁止搜索引擎和 AI 抓取，避免重复内容
const sandboxRobots = isSandbox
  ? {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    }
  : {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, 'max-image-preview': 'large' as const, 'max-snippet': -1 },
    };

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${BRAND_NAME} | 企业财税合规全案服务`,
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    '杭州一棵松企业管理有限公司，深耕财税服务10年，服务企业3000+家。提供代理记账、税务合规、海南园区招商返税、主播财税合规等一站式全案服务。TSC5级涉税服务机构，信用排名33。',
  keywords: [
    '一棵松财税',
    '代理记账',
    '税务合规',
    '海南园区',
    '主播财税',
    '杭州财税公司',
    '企业税务筹划',
    'ODI跨境投资',
    '财税全案服务',
  ],
  authors: [{ name: '杭州一棵松企业管理有限公司', url: SITE_URL }],
  creator: BRAND_NAME,
  publisher: '杭州一棵松企业管理有限公司',
  alternates: {
    canonical: '/',
    languages: { 'zh-CN': '/', 'zh-Hans': '/' },
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: `${BRAND_NAME} | 企业财税合规全案服务`,
    description:
      '深耕财税服务10年，服务企业3000+家。代理记账、税务合规、海南园区招商返税、主播财税合规一站式全案。',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BRAND_NAME} | 企业财税合规全案服务`,
    description:
      '深耕财税服务10年，服务企业3000+家。代理记账、税务合规、海南园区招商返税、主播财税合规一站式全案。',
  },
  robots: sandboxRobots,
  other: {
    'official-domain': OFFICIAL_DOMAIN,
    'brand:official_site': OFFICIAL_DOMAIN,
    'application-name': BRAND_NAME,
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: '#0F2B46',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased bg-[#FAFBFC] text-[#1A1A2E] font-sans">
        {children}
      </body>
    </html>
  );
}
