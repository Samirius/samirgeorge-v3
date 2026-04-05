import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { JSX } from 'react';
import LanguageToggle from './LanguageToggle';

export interface Props {
  /** Override nav links (for testing / customization) */
  links?: { label: string; href: string }[];
}

const DEFAULT_LINKS: { label: string; href: string }[] = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Writing', href: '/writing' },
  { label: 'Now', href: '/now' },
  { label: 'Contact', href: '/contact' },
];

/* ── Icons (inline SVG to avoid heavy imports) ── */

function MenuIcon(): JSX.Element {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}

function CloseIcon(): JSX.Element {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/* ── Nav link helper ── */

function NavLink({ href, children }: { href: string; children: React.ReactNode }): JSX.Element {
  return (
    <a
      href={href}
      className="text-sm text-[#7A7A82] hover:text-[#EDEDEE] transition-colors duration-200 font-medium tracking-tight"
    >
      {children}
    </a>
  );
}

/* ── Navbar component ── */

export default function Navbar({ links = DEFAULT_LINKS }: Props): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileOpen) {
        setMobileOpen(false);
      }
    },
    [mobileOpen]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#09090B]/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]">
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
      >
        {/* Logo */}
        <a
          href="/"
          className="font-display text-lg font-bold tracking-tight text-[#D4A853] hover:opacity-80 transition-opacity duration-200"
          aria-label="Samir George — Home"
        >
          SG
        </a>

        {/* Desktop links + language toggle */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}
          <LanguageToggle />
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-[#7A7A82] hover:text-[#EDEDEE] transition-colors duration-200"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#09090B]/95 backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]"
          >
            <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-5">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-2xl font-display font-semibold text-[#EDEDEE] hover:text-[#D4A853] transition-colors duration-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              {/* Arabic signature in mobile menu */}
              <motion.p
                lang="ar"
                dir="rtl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: links.length * 0.06 + 0.1 }}
                className="mt-4 text-sm text-[#7A7A82]/60 font-sans"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif" }}
              >
                سبك — صياغة الأفكار بحرفية
              </motion.p>

              {/* Language toggle in mobile menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: links.length * 0.06 + 0.15 }}
                className="mt-2"
              >
                <LanguageToggle />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
