import type { Lang } from './utils';

interface Translations {
  [key: string]: { en: string; ar: string };
}

export const nav: Translations = {
  work: { en: 'Work', ar: 'أعمالي' },
  about: { en: 'About', ar: 'عني' },
  signal: { en: 'Signal', ar: 'إشارة' },
  writing: { en: 'Writing', ar: 'كتابات' },
  now: { en: 'Now', ar: 'الآن' },
  contact: { en: 'Contact', ar: 'تواصل' },
};

export const site: Translations = {
  tagline: { en: 'I build things that compound.', ar: 'أبني أشياء تتراكم.' },
  subtitle: {
    en: 'Technical Product Builder based in Cairo, Egypt. I turn ideas into structured, scalable products.',
    ar: 'باني منتجات تقني في القاهرة، مصر. أحوّل الأفكار إلى منتجات منظّمة وقابلة للتوسع.',
  },
  available: { en: 'Available for new projects', ar: 'متاح لمشاريع جديدة' },
  seeMyWork: { en: 'See my work →', ar: '← طالع أعمالي' },
  letsTalk: { en: "Let's talk →", ar: '← لنتحدث' },
  readMore: { en: 'Read more →', ar: '← اقرأ المزيد' },
  trustedBy: { en: 'Trusted by', ar: 'يثق بي' },
  featuredWork: { en: 'Featured Work', ar: 'عمل مميز' },
  writing: { en: 'Writing', ar: 'كتابات' },
  method: { en: 'Method', ar: 'المنهجية' },
  whatIDo: { en: 'What I Do', ar: 'ما أقوم به' },
  listen: { en: 'Listen', ar: 'استمع' },
  structure: { en: 'Structure', ar: 'هيكّل' },
  build: { en: 'Build', ar: 'أبني' },
  listenDesc: {
    en: 'Understand the chaos before prescribing structure. Every system starts with understanding how things actually work.',
    ar: 'أفهم الفوضى قبل أن أضع الهيكل. كل نظام يبدأ بفهم كيف تعمل الأمور فعلاً.',
  },
  structureDesc: {
    en: 'Map processes, identify bottlenecks, design systems that fit the people using them. No theoretical frameworks — just what works.',
    ar: 'أرسم العمليات، أحدد العوائق، أصمم أنظمة تناسب الأشخاص الذين يستخدمونها.',
  },
  buildDesc: {
    en: 'Ship fast, iterate faster. Every build includes a feedback loop. The first version is never the last, but it needs to work.',
    ar: 'أطلق بسرعة، أتحسّن أسرع. كل بناء يشمل حلقة تغذية راجعة.',
  },
  notSure: {
    en: 'Not sure if you need custom software?',
    ar: 'غير متأكد إذا كنت بحاجة لبرمجيات مخصصة؟',
  },
  notSureDesc: {
    en: "I'll give you an honest answer — whether that means building something, recommending an existing tool, or fixing what you have.",
    ar: 'سأعطيك إجابة صادقة — سواء كان ذلك يعني بناء شيء جديد، أو التوصية بأداة موجودة، أو إصلاح ما تملكه.',
  },
  readGuide: { en: 'Read the guide →', ar: '← اقرأ الدليل' },
  tellProblem: { en: 'Tell me about your problem →', ar: '← أخبرني عن مشكلتك' },
};

export function t(key: string, translations: Translations, lang: Lang): string {
  return translations[key]?.[lang] || key;
}
