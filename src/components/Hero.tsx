import { useRef } from "react";
import { motion } from "framer-motion";
import { useLang } from "./LanguageContext";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { lang, dir, t } = useLang();

  const scrollToNext = () => {
    const heroHeight = heroRef.current?.offsetHeight ?? window.innerHeight;
    window.scrollTo({ top: heroHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col items-center justify-center h-screen overflow-hidden bg-[#0A0A0A] px-4"
    >
      {/* Animated amber gradient orb */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute w-[420px] h-[420px] rounded-full opacity-25 blur-[120px]"
          style={{
            background:
              "radial-gradient(circle, rgba(212,168,83,0.5) 0%, rgba(212,168,83,0.0) 70%)",
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute w-[260px] h-[260px] rounded-full opacity-15 blur-[80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(251,191,36,0.6) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.1, 0.95, 1.1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Pre-label */}
        <motion.p
          className="text-xs lg:text-sm uppercase tracking-[0.2em] text-gray-500 mb-4"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {t("Technical Product Builder", "باني حلول تقنية")}
        </motion.p>

        {/* Headline */}
        <motion.h1
          className={`text-4xl lg:text-6xl font-bold leading-tight tracking-tight text-white ${lang === 'ar' ? 'font-arabic' : ''}`}
          dir={dir}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          {lang === 'en' ? (
            <>
              I forge{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #D4A853 0%, #FBBF24 50%, #D4A853 100%)",
                }}
              >
                clarity
              </span>{" "}
              from chaos.
            </>
          ) : (
            <>
              أحوّل الفوضى إلى{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #D4A853 0%, #FBBF24 50%, #D4A853 100%)",
                }}
              >
                وضوح
              </span>
              .
            </>
          )}
        </motion.h1>

        {/* Name */}
        <motion.p
          className="mt-4 text-lg lg:text-xl font-medium text-gray-300 tracking-wide"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
        >
          {t("Samir George", "سمير جورج")}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className={`mt-2 text-sm lg:text-base text-gray-500 max-w-xl leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`}
          dir={dir}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
        >
          {t(
            "I don't just build what's asked. I understand the real problem, design the system, and build what actually works.",
            "لا أبني ما يُطلب فحسب. أفهم المشكلة الحقيقية، أصمم النظام، وأبني ما ينفع فعلاً."
          )}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-5 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
        >
          <button
            onClick={scrollToNext}
            className={`px-5 py-2.5 rounded-lg bg-[#D4A853] text-black font-semibold text-sm hover:bg-[#c49a48] transition-colors cursor-pointer ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {t("See How I Build →", "شوف كيف أبني ←")}
          </button>
          <a
            href="/contact"
            className={`px-5 py-2.5 rounded-lg border border-gray-700 text-gray-300 font-medium text-sm hover:border-[#D4A853] hover:text-[#D4A853] transition-colors ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {t("Get In Touch", "تواصل معي")}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-[11px] text-gray-600 uppercase tracking-widest">
          {t("Scroll", "مرر")}
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border border-gray-700 flex items-start justify-center pt-1.5"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-1.5 rounded-full bg-[#D4A853]"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
