import { motion } from 'framer-motion';
import { useLang } from './LanguageContext';

export default function Pain() {
  const { lang, dir, t } = useLang();

  return (
    <section id="pain" className="py-20 sm:py-28 px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto reveal">
        <h2 className={`text-display-sm sm:text-display font-display font-bold mb-10 ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
          {t("You know the feeling.", "تعرف هذا الشعور.")}
        </h2>
        <div className={`space-y-6 text-lg sm:text-xl text-text-secondary leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
          <p>
            {t(
              "Your team is busy. Your inbox is full. Your projects technically work. But something's off.",
              "فريقك مشغول. بريدك مملو. مشاريعك تعمل تقنياً. لكن شيئاً غير مريح."
            )}
          </p>
          <p>
            {t(
              "The handoffs are messy. The requirements keep changing. The \"quick fixes\" keep piling up. Everyone's working hard, but you're not moving forward. You're just... maintaining.",
              "التسليمات فوضوية. المتطلبات تتغير باستمرار. والإصلاحات العاجلة تتراكم. الجميع يعمل بجهد، لكنك لا تتقدم للأمام."
            )}
          </p>
          <p className={`text-2xl sm:text-3xl font-semibold text-text-primary leading-snug pt-4 ${lang === 'ar' ? 'font-arabic' : ''}`} dir={dir}>
            {lang === 'en' ? (
              <>
                That's not a code problem.<br />
                <span className="text-gradient-amber">That's a systems problem.</span>
              </>
            ) : (
              <>
                هذه ليست مشكلة كود.<br />
                <span className="text-gradient-amber">هذه مشكلة أنظمة.</span>
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
