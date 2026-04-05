import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';

type Lang = 'en' | 'ar';

interface LanguageContextType {
  lang: Lang;
  dir: 'ltr' | 'rtl';
  toggle: () => void;
  t: (en: string, ar: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  dir: 'ltr',
  toggle: () => {},
  t: (en, _ar) => en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'en';
    return (localStorage.getItem('sg-lang') as Lang) || 'en';
  });

  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    localStorage.setItem('sg-lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  // Listen for language changes from other islands (Navbar toggle)
  useEffect(() => {
    const onCustom = (e: Event) => {
      const detail = (e as CustomEvent).detail as { lang: string };
      if (detail?.lang) setLang(detail.lang as Lang);
    };
    const onStorage = () => {
      const current = (localStorage.getItem('sg-lang') as Lang) || 'en';
      setLang(current);
    };
    window.addEventListener('lang-change', onCustom);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('lang-change', onCustom);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  const toggle = useCallback(() => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    localStorage.setItem('sg-lang', newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    window.dispatchEvent(new CustomEvent('lang-change', { detail: { lang: newLang } }));
  }, [lang]);

  const t = useCallback((en: string, ar: string) => (lang === 'ar' ? ar : en), [lang]);

  return (
    <LanguageContext.Provider value={{ lang, dir, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
