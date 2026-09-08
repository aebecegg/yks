'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: '首页', href: '/#hero' },
  { label: '关于我们', href: '/#about' },
  { label: '服务项目', href: '/#services' },
  { label: '核心优势', href: '/#advantages' },
  { label: '资质认证', href: '/#qualifications' },
  { label: '文章洞察', href: '/articles' },
  { label: '联系我们', href: '/#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    if (isHome) {
      window.addEventListener('scroll', handleScroll, { passive: true });
      handleScroll();
    } else {
      setScrolled(true);
    }
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-pine to-pine-light flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white"
                fill="currentColor"
              >
                <path d="M12 2L8 8h2.5L7 14h3l-2 6h2v2h4v-2h2l-2-6h3l-3.5-6H16L12 2z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span
                className={`text-lg font-bold leading-tight transition-colors duration-300 ${
                  scrolled ? 'text-navy' : 'text-white'
                }`}
              >
                一棵松财税
              </span>
              <span
                className={`text-[10px] leading-tight tracking-wider transition-colors duration-300 ${
                  scrolled ? 'text-muted-foreground' : 'text-white/70'
                }`}
              >
                YIKESONG FINANCE & TAX
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-white/10 ${
                  scrolled
                    ? 'text-foreground/80 hover:text-foreground hover:bg-muted'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="ml-3 px-5 py-2.5 bg-gradient-to-r from-pine to-pine-light text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-pine/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              免费咨询
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="菜单"
          >
            <svg
              className={`w-6 h-6 transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white rounded-2xl shadow-xl mb-4 p-4 border border-border">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="block mt-2 px-4 py-3 bg-gradient-to-r from-pine to-pine-light text-white text-sm font-semibold rounded-lg text-center"
            >
              免费咨询
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
