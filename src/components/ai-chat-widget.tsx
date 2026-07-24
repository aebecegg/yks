'use client';

import { useState } from 'react';

const CHATBOT_URL = 'https://ai.ygxzb.cn/a/3ee84229dbddc3bbec8c548082522180';

export function AIChatWidget() {
  const [isHovered, setIsHovered] = useState(false);

  const handleOpenChat = () => {
    // Open in popup window for better UX
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

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Tooltip */}
      {isHovered && (
        <div className="rounded-lg bg-[#0F2B46] px-4 py-2 text-sm text-white shadow-lg animate-fade-up">
          点击咨询 AI 智能客服
        </div>
      )}

      {/* Floating Chat Button */}
      <button
        onClick={handleOpenChat}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#1B6B4A] to-[#2A8F65] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="打开AI智能客服"
      >
        <svg
          className="h-7 w-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>
    </div>
  );
}
