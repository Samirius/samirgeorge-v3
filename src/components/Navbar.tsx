import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Work', href: '/work', arLabel: 'أعمالي' },
  { label: 'About', href: '/about', arLabel: 'عني' },
  { label: 'Signal', href: '/signal', arLabel: 'إشارة' },
  { label: 'Writing', href: '/writing', arLabel: 'كتابات' },
  { label: 'Now', href: '/now', arLabel: 'الآن' },
  { label: 'Contact', href: '/contact', arLabel: 'تواصل' },
];

function getLang(): 'en' | 'ar' {
  if (typeof window === 'undefined') return 'en';
  const path = window.location.pathname;
  return path.startsWith('/ar') ? 'ar' : 'en';
}

function switchLang() {
  const lang = getLang();
  if (lang === 'en') {
    window.location.href = '/ar' + window.location.pathname;
  } else {
    window.location.href = window.location.pathname.replace(/^\/ar/, '') || '/';
  }
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lang = getLang();
  const isAr = lang === 'ar';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getHref = (href: string) => (isAr ? `/ar${href}` : href);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href={isAr ? '/ar' : '/'}
          className="text-lg font-bold tracking-tight text-text hover:text-accent transition-colors"
        >
          SG
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={getHref(link.href)}
              className="text-sm text-secondary hover:text-text transition-colors font-medium"
            >
              {isAr ? link.arLabel : link.label}
            </a>
          ))}
          <button
            onClick={switchLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium uppercase border border-white/8 text-secondary hover:text-accent hover:border-accent/30 transition-all cursor-pointer"
          >
            {isAr ? 'EN' : 'عربي'}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-secondary hover:text-text transition-colors p-2"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-bg/95 backdrop-blur-md overflow-hidden"
          >
            <div className="py-4 space-y-1 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-secondary hover:text-accent hover:bg-white/5 transition-all rounded-lg"
                >
                  {isAr ? link.arLabel : link.label}
                </a>
              ))}
              <button
                onClick={() => { switchLang(); }}
                className="block w-full text-left px-4 py-3 text-accent hover:bg-white/5 transition-all rounded-lg"
              >
                {isAr ? 'English' : 'عربي'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
