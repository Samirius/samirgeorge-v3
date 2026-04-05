import { motion } from 'framer-motion';
import { useLang } from './LanguageContext';

/* ------------------------------------------------------------------ */
/*  Animations                                                         */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.16 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Community() {
  const { lang, dir, t } = useLang();

  const badges = lang === 'ar'
    ? ['مفتوح المصدر', 'عربي أولاً', 'مشاركة المعرفة', 'أدوات مجانية']
    : ['Open Source', 'Arabic-First', 'Knowledge Sharing', 'Free Tools'];

  return (
    <section
      id="community"
      className="relative py-32 px-6 md:px-12 lg:px-24 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-primary/4" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.span
          variants={fadeUp}
          className="inline-block text-primary font-mono text-sm tracking-widest uppercase mb-6"
        >
          {t("Community", "المجتمع")}
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className={`text-display-sm md:text-display-lg text-text-primary max-w-4xl mx-auto ${lang === 'ar' ? 'font-arabic' : ''}`}
          dir={dir}
        >
          {lang === 'en' ? (
            <>
              Building for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end">
                Arab builders
              </span>
            </>
          ) : (
            <>
              نبني من أجل{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end">
                بُناة العرب
              </span>
            </>
          )}
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40" />
          <p className={`text-xl md:text-2xl text-primary/70 ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
            {t("A space for freelancers", "مساحة للعمل الحر")}
          </p>
          <span className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40" />
        </motion.div>

        <motion.p variants={fadeUp} className={`mt-2 text-text-secondary text-lg ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
          {t("Freelancers Egypt — Open Community", "مستقلو مصر — مجتمع مفتوح")}
        </motion.p>

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center justify-center gap-10 md:gap-16"
        >
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end">
              9,600+
            </span>
            <span className={`mt-2 text-text-secondary text-sm tracking-wide uppercase ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
              {t("Members", "عضو")}
            </span>
          </div>

          <div className="hidden md:block w-px h-14 bg-border" />

          <div className="flex flex-col items-center">
            <span className={`text-4xl md:text-5xl font-bold text-text-primary ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
              {t("Arab", "عربي")}
            </span>
            <span className={`mt-2 text-text-secondary text-sm tracking-wide uppercase ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
              {t("Builders", "بُناة")}
            </span>
          </div>

          <div className="hidden md:block w-px h-14 bg-border" />

          <div className="flex flex-col items-center">
            <span className={`text-4xl md:text-5xl font-bold text-text-primary ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
              {t("Free", "مجاني")}
            </span>
            <span className={`mt-2 text-text-secondary text-sm tracking-wide uppercase ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
              {t("Resources & Tools", "مصادر وأدوات")}
            </span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className={`mt-12 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`}
          dir={dir}
        >
          {t(
            "A space where Arabic-speaking builders learn, share, and build together. Real knowledge from people who actually build — not influencers selling courses.",
            "معرفة حقيقية من أناس يبنون فعلاً — وليس من مؤثرين يبيعون كورسات. مصادر مجانية وأدوات مبنية خصيصاً لمجتمع البناة العرب."
          )}
        </motion.p>

        {/* CTA */}
        <motion.div variants={scaleUp} className="mt-12">
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className={`inline-flex items-center gap-2 px-8 py-4 rounded-btn bg-gradient-to-r from-gradient-start to-gradient-end text-background font-semibold text-base transition-shadow duration-300 hover:shadow-[0_0_32px_rgba(212,168,83,0.3)] ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            <span>{t("Join the Community", "انضم للمجتمع")}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Community badges */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {badges.map((label) => (
            <span
              key={label}
              className={`px-4 py-2 rounded-tag text-xs font-medium bg-primary/8 text-primary/70 border border-primary/10 ${lang === 'ar' ? 'font-arabic' : ''}`}
              dir={dir}
            >
              {label}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
