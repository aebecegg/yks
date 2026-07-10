import type { Metadata } from 'next';
import './globals.css';
import CustomerServiceWidget from '@/components/customer-service-widget';

export const metadata: Metadata = {
  title: {
    default: '一棵松财税 | 企业财税合规全案服务',
    template: '%s | 一棵松财税',
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
  authors: [{ name: '杭州一棵松企业管理有限公司' }],
  openGraph: {
    title: '一棵松财税 | 企业财税合规全案服务',
    description:
      '深耕财税服务10年，服务企业3000+家。代理记账、税务合规、海南园区招商返税、主播财税合规一站式全案。',
    locale: 'zh_CN',
    type: 'website',
  },
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
        <CustomerServiceWidget />
      </body>
    </html>
  );
}
