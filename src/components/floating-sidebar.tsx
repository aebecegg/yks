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
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </button>
            <span className="text-xs text-pine font-semibold writing-mode-vertical">
              AI客服
            </span>
          </div>
        )}

        {/* 展开状态：说明 + 按钮 */}
        {isHovered && (
          <div className="flex flex-col items-center gap-3">
            <h4 className="text-base font-bold text-navy">AI 智能客服</h4>
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
