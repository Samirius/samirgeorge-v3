export type Lang = 'en' | 'ar';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  return lang === 'ar' ? 'ar' : 'en';
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: string = lang) {
    return l === 'en' ? path : `/ar${path}`;
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const lang = getLangFromUrl(url);
  const pathWithoutLang = lang === 'ar' ? pathname.replace(/^\/ar/, '') : pathname;
  return pathWithoutLang || '/';
}
