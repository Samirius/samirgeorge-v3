import { motion } from 'framer-motion';
import { useLang } from './LanguageContext';

export default function Cta() {
  const { lang, dir, t } = useLang();

  return (
    <section className="py-24 sm:py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="max-w-3xl mx-auto text-center relative z-10 reveal">
        <h2 className={`text-display-sm sm:text-display font-display font-bold mb-5 ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
          {t("Ready to forge something?", "مستعد لتصيغ شيئاً جديداً؟")}
        </h2>
        <p className={`text-text-secondary text-lg mb-10 max-w-lg mx-auto leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
          {t(
            "Whether you need a product built, a system designed, or just want to join a community of builders — there's a path here.",
            "سواء كنت بحاجة لبناء منتج أو تصميم نظام أو الانضمام لمجتمع من البناة — يوجد طريق هنا."
          )}
        </p>
        <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
          <a
            href="/contact"
            className={`group inline-flex items-center justify-center px-8 py-4 bg-primary text-background font-semibold rounded-btn hover:bg-primary-hover transition-all duration-300 hover:scale-[1.03] hover:shadow-lg hover:shadow-primary/20 ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {t("Book a Discovery Call", "احجز مكالمة تعارف")}
            <svg className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="/work"
            className={`inline-flex items-center justify-center px-8 py-4 border border-border hover:border-border-hover text-text-primary font-semibold rounded-btn hover:bg-white/[0.03] transition-all duration-300 ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {t("Browse My Tools", "تصفح أدواتي")}
          </a>
          <a
            href="https://facebook.com/groups/freelancersegypt"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-center px-8 py-4 border border-border hover:border-border-hover text-text-primary font-semibold rounded-btn hover:bg-white/[0.03] transition-all duration-300 ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {t("Join Community", "انضم للمجتمع")}
          </a>
        </div>
      </div>
    </section>
  );
}
