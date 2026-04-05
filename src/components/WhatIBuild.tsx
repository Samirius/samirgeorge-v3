import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from './LanguageContext';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface BuildItem {
  title: { en: string; ar: string };
  description: { en: string; ar: string };
}

interface BuildColumn {
  icon: 'product' | 'system' | 'community';
  heading: { en: string; ar: string };
  items: BuildItem[];
}

const columns: BuildColumn[] = [
  {
    icon: 'product',
    heading: { en: 'Technical Products', ar: 'منتجات تقنية' },
    items: [
      { title: { en: 'Sabbk', ar: 'سبك' }, description: { en: 'AI + Software + Consultation platform built for Gulf businesses', ar: 'منصة ذكاء اصطناعي وبرمجيات واستشارات مبنية لأعمال الخليج' } },
      { title: { en: 'WADOH', ar: 'وضوح' }, description: { en: 'Product brief tool that brings clarity to product thinking', ar: 'أداة لتوضيح المنتج — وضوح قبل البناء' } },
      { title: { en: 'Talabat', ar: 'طلبات' }, description: { en: 'Team food ordering made simple and delightful', ar: 'طلب طعام المكاتب مبسط وممتع' } },
    ],
  },
  {
    icon: 'system',
    heading: { en: 'Systems Design', ar: 'تصميم الأنظمة' },
    items: [
      { title: { en: 'Delivery Systems', ar: 'أنظمة التسليم' }, description: { en: 'Architecture that reduces risk and improves reliability', ar: 'بنية تقلل المخاطر وتحسن الموثوقية' } },
      { title: { en: 'Workflow Clarity', ar: 'وضوح المسار' }, description: { en: 'From confusion to buildable structure', ar: 'من الفوضى إلى هيكل قابل للبناء' } },
      { title: { en: 'Process Redesign', ar: 'إعادة تصميم العمليات' }, description: { en: 'Understanding before execution', ar: 'الفهم قبل التنفيذ' } },
    ],
  },
  {
    icon: 'community',
    heading: { en: 'Community Tools', ar: 'أدوات المجتمع' },
    items: [
      { title: { en: 'OpenClaw بالعربي', ar: 'أوبن كلاو بالعربي' }, description: { en: '9,600+ Arab builders learning and building together', ar: 'أكثر من ٩,٦٠٠ باني عربي يتعلمون ويبنون معاً' } },
      { title: { en: 'Free Resources', ar: 'مصادر مجانية' }, description: { en: 'Tools and guides built for the Arabic-speaking builder community', ar: 'أدوات وأدلة مبنية لمجتمع البناة العرب' } },
      { title: { en: 'Knowledge Sharing', ar: 'مشاركة المعرفة' }, description: { en: 'Real knowledge from people who actually build — not course sellers', ar: 'معرفة حقيقية من أناس يبنون فعلاً — وليس بائعي كورسات' } },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  SVG Icons                                                          */
/* ------------------------------------------------------------------ */

function ProductIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function SystemIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <line x1="8.2" y1="7.2" x2="15.8" y2="7.2" />
      <line x1="6.9" y1="8.3" x2="10.8" y2="16" />
      <line x1="17.1" y1="8.3" x2="13.2" y2="16" />
      <line x1="8.2" y1="18" x2="9.5" y2="18" />
    </svg>
  );
}

function CommunityIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

const iconMap = {
  product: ProductIcon,
  system: SystemIcon,
  community: CommunityIcon,
};

/* ------------------------------------------------------------------ */
/*  Animations                                                         */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function WhatIBuild() {
  const ref = useRef<HTMLDivElement>(null);
  const { lang, dir, t } = useLang();

  return (
    <section id="what-i-build" className="relative py-28 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span className="inline-block text-primary font-mono text-sm tracking-widest uppercase mb-4">
            {t("What I Build", "ماذا أبني")}
          </span>
          <h2 className={`text-display-sm text-text-primary max-w-2xl ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
            {t("Products. Systems. Tools.", "منتجات. أنظمة. أدوات.")}
          </h2>
          <p className={`mt-4 text-text-secondary text-lg max-w-xl leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
            {t(
              "I don't just write code. I understand the real problem underneath, design the system, and build what actually works.",
              "لا أكتفي كتابة الكود. أفهم المشكلة الحقيقية، أصمم النظام، وأبني ما يعمل فعلاً."
            )}
          </p>
        </motion.div>

        {/* Three columns */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {columns.map((col) => {
            const Icon = iconMap[col.icon];

            return (
              <motion.div
                key={col.heading.en}
                variants={columnVariants}
                className="flex flex-col gap-5"
              >
                {/* Column header */}
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center justify-center w-10 h-10 rounded-btn bg-primary/10 text-primary">
                    <Icon />
                  </span>
                  <h3 className={`text-lg font-semibold text-text-primary ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
                    {col.heading[lang]}
                  </h3>
                </div>

                {/* Cards */}
                {col.items.map((item, i) => (
                  <motion.div
                    key={item.title.en}
                    variants={cardVariants}
                    whileHover={{
                      y: -4,
                      borderColor: 'rgba(212,168,83,0.25)',
                      transition: { duration: 0.25 },
                    }}
                    className="group relative rounded-card border border-border bg-surface-1 p-6 cursor-default transition-colors hover:bg-surface-2"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <div className="pointer-events-none absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />

                    <div className="relative z-10">
                      <h4 className={`text-text-primary font-semibold text-base ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
                        {item.title[lang]}
                      </h4>
                      <p className={`mt-2 text-text-secondary text-sm leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
                        {item.description[lang]}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
