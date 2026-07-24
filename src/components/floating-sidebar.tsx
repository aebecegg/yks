'use client';

import { useState, useEffect } from 'react';

const CHATBOT_URL = 'https://ai.ygxzb.cn/a/3ee84229dbddc3bbec8c548082522180';

export default function FloatingSidebar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenChat = () => {
    const width = 480;
    const height = 700;
    const left = window.screen.width - width - 20;
    const top = window.screen.height - height - 100;
    window.open(
      CHATBOT_URL,
      'AIChat',
      `width=${width},height=${height},left=${left},top=${top},toolbar=no,menubar=no,scrollbars=yes,resizable=yes`
    );
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`
          bg-white shadow-2xl border-l-4 border-pine rounded-l-2xl overflow-hidden
          transition-all duration-300 ease-out
          ${isHovered ? 'w-64 p-4' : 'w-16 p-3'}
        `}
      >
        {/* 收起状态：图标 + 文字 */}
        {!isHovered && (
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={handleOpenChat}
              className="w-10 h-10 bg-pine rounded-full flex items-center justify-center hover:scale-110 transition-transform"
            >
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
              </svg>
            </button>
            <span className="text-xs text-pine font-semibold writing-mode-vertical">
              智能客服
            </span>
          </div>
        )}

        {/* 展开状态：说明 + 按钮 */}
        {isHovered && (
          <div className="flex flex-col items-center gap-3">
            <h4 className="text-base font-bold text-navy">智能客服</h4>
            <p className="text-xs text-gray-600 text-center leading-relaxed">
              7×24小时在线<br />
              产品、服务、品牌问题随时问
            </p>
            <button
              onClick={handleOpenChat}
              className="w-full py-3 bg-gradient-to-r from-pine to-pine-light text-white font-bold rounded-xl hover:shadow-lg hover:shadow-pine/30 transition-all duration-300 text-sm"
            >
              立即对话
            </button>
            <p className="text-xs text-gray-400 text-center">
              基于品牌知识库智能回答
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
