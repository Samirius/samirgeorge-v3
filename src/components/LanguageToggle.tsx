import { useState, useEffect } from 'react';

export default function LanguageToggle() {
  const [lang, setLang] = useState<'en' | 'ar'>(() => {
    if (typeof window === 'undefined') return 'en';
    return (localStorage.getItem('sg-lang') as 'en' | 'ar') || 'en';
  });

  useEffect(() => {
    // Listen for changes from other islands
    const onStorage = () => {
      const current = (localStorage.getItem('sg-lang') as 'en' | 'ar') || 'en';
      setLang(current);
    };
    window.addEventListener('storage', onStorage);
    // Also listen for custom event (same-tab)
    const onCustom = (e: Event) => {
      const detail = (e as CustomEvent).detail as { lang: string };
      if (detail?.lang) setLang(detail.lang as 'en' | 'ar');
    };
    window.addEventListener('lang-change', onCustom);
    return () => {
      window.removeEventListener('storage', onStorage);
      window.removeEventListener('lang-change', onCustom);
    };
  }, []);

  const toggle = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    localStorage.setItem('sg-lang', newLang);
    // Dispatch custom event for same-tab React islands
    window.dispatchEvent(new CustomEvent('lang-change', { detail: { lang: newLang } }));
    // Update html dir/lang
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium tracking-wide uppercase border border-[rgba(255,255,255,0.08)] text-[#7A7A82] hover:text-[#D4A853] hover:border-[#D4A853]/30 transition-all duration-200 cursor-pointer"
      aria-label={lang === 'en' ? 'Switch to Arabic' : 'التبديل للإنجليزية'}
    >
      {lang === 'en' ? 'عربي' : 'EN'}
    </button>
  );
}
