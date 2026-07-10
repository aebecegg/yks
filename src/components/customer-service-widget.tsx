'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, MessageCircle } from 'lucide-react';

export default function CustomerServiceWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 悬浮按钮 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-pine text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-pine/40 hover:shadow-xl"
        aria-label="客服咨询"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* 弹出二维码卡片 */}
      {isOpen && (
        <div className="fixed bottom-28 right-8 z-50 animate-fade-up rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl">
          <div className="mb-3 text-center">
            <h4 className="text-lg font-bold text-navy">微信扫码咨询</h4>
            <p className="mt-1 text-sm text-slate-500">专业财税顾问 1对1 为您解答</p>
          </div>
          <div className="relative h-48 w-48 overflow-hidden rounded-lg border border-slate-100">
            <Image
              src="/wechat-qr.png"
              alt="微信客服二维码"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="mt-3 text-center text-xs text-slate-400">
            工作时间：周一至周六 8:30-21:00
          </p>
        </div>
      )}
    </>
  );
}
