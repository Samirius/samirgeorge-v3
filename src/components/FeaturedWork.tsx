import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useLang } from './LanguageContext';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Status = 'Active' | 'Building';

interface Project {
  title: { en: string; ar: string };
  status: Status;
  description: { en: string; ar: string };
  tags: { en: string; ar: string }[];
}

const projects: Project[] = [
  {
    title: { en: 'Sabbk', ar: 'سبك' },
    status: 'Active',
    description: {
      en: 'AI, software, and consultation for businesses across the Gulf. Forging solutions that work — not just look good in presentations.',
      ar: 'ذكاء اصطناعي وبرمجيات واستشارات للأعمال في الخليج. أصوغ حلولاً تعمل فعلاً — وليس فقط تبدو جيدة في العروض.',
    },
    tags: [
      { en: 'AI', ar: 'ذكاء اصطناعي' },
      { en: 'Software', ar: 'برمجيات' },
      { en: 'Consultation', ar: 'استشارات' },
    ],
  },
  {
    title: { en: 'OpenClaw', ar: 'أوبن كلاو' },
    status: 'Active',
    description: {
      en: '9,600+ Arab builders learning AI agents and systems thinking. Making AI practical and accessible in Arabic.',
      ar: 'أكثر من ٩,٦٠٠ باني عربي يتعلمون وكلاء الذكاء الاصطناعي والتفكير النظامي. نجعل الذكاء الاصطناعي عملي ومتاح بالعربي.',
    },
    tags: [
      { en: 'Community', ar: 'مجتمع' },
      { en: 'AI Agents', ar: 'وكلاء ذكاء' },
      { en: 'Education', ar: 'تعليم' },
    ],
  },
  {
    title: { en: 'WADOH', ar: 'وضوح' },
    status: 'Building',
    description: {
      en: 'Product brief tool for Arab builders. Get clarity on what to build before writing a single line of code.',
      ar: 'أداة لتوضيح المنتج للبنائين العرب. وضوح قبل كتابة سطر كود واحد.',
    },
    tags: [
      { en: 'Product Tool', ar: 'أداة منتج' },
      { en: 'Open Source', ar: 'مفتوح المصدر' },
      { en: 'Clarity', ar: 'وضوح' },
    ],
  },
  {
    title: { en: 'Talabat', ar: 'طلبات' },
    status: 'Building',
    description: {
      en: 'Team food ordering, simplified. Group orders, smart suggestions. Built for teams that eat together.',
      ar: 'طلب طعام المكاتب مبسط. طلبات جماعية واقتراحات ذكية. مبني لفرق تأكل معاً.',
    },
    tags: [
      { en: 'Bot', ar: 'بوت' },
      { en: 'Productivity', ar: 'إنتاجية' },
      { en: 'Team Tools', ar: 'أدوات فرق' },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

const statusConfig: Record<Status, { bg: string; dot: string; label: { en: string; ar: string } }> = {
  Active: {
    bg: 'bg-green-500/10 text-green-400 border-green-500/20',
    dot: 'bg-green-500',
    label: { en: 'Active', ar: 'نشط' },
  },
  Building: {
    bg: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    dot: 'bg-yellow-500',
    label: { en: 'Building', ar: 'قيد البناء' },
  },
};

/* ------------------------------------------------------------------ */
/*  Animations                                                         */
/* ------------------------------------------------------------------ */

const headerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const scrollContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function FeaturedWork() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { lang, dir, t } = useLang();

  return (
    <section id="featured-work" className="relative py-28 px-6 md:px-12 lg:px-24 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <span className="inline-block text-primary font-mono text-sm tracking-widest uppercase mb-4">
            {t("Selected Work", "أعمال مختارة")}
          </span>
          <h2 className={`text-display-sm text-text-primary ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
            {t("What I've Built", "ماذا بنيت")}
          </h2>
        </motion.div>

        {/* Horizontal scroll */}
        <motion.div
          ref={scrollRef}
          variants={scrollContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-surface-3 scrollbar-track-transparent"
          style={{ scrollbarWidth: 'thin' }}
        >
          {projects.map((project) => {
            const cfg = statusConfig[project.status];

            return (
              <motion.div
                key={project.title.en}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  borderColor: 'rgba(212,168,83,0.3)',
                  transition: { duration: 0.25 },
                }}
                className="group relative flex-shrink-0 w-[340px] sm:w-[380px] snap-start rounded-card border border-border bg-surface-1 p-8 flex flex-col cursor-default"
              >
                <div className="pointer-events-none absolute inset-0 rounded-card opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/5 to-transparent" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Status badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-tag text-xs font-medium border ${cfg.bg}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot} animate-pulse`} />
                      {cfg.label[lang]}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="mb-3">
                    <h3 className={`text-xl font-bold text-text-primary ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
                      {project.title[lang]}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={`text-text-secondary text-sm leading-relaxed mb-2 flex-grow ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
                    {project.description[lang]}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag.en}
                        className={`px-3 py-1 rounded-tag text-xs font-medium bg-primary/10 text-primary/80 border border-primary/10 ${lang === 'ar' ? 'font-arabic' : ''}`}
                        dir={dir}
                      >
                        {tag[lang]}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Scroll hint */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-6 text-text-secondary/50 text-xs text-center md:hidden"
        >
          {t("← Scroll to see more →", "← مرر لمزيد →")}
        </motion.p>
      </div>
    </section>
  );
}
