import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "./LanguageContext";

/* ── helpers ── */
function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

interface Line {
  prompt: string;
  output: { en: string; ar: string };
}

const LINES: Line[] = [
  {
    prompt: "$ samir analyze <project>",
    output: {
      en: "Understanding the real problem...",
      ar: "فهم المشكلة الحقيقية...",
    },
  },
  {
    prompt: "$ samir design <system>",
    output: {
      en: "Mapping the real workflow. Finding where things break.",
      ar: "رسم مسار العمل الحقيقي. اكتشاف نقاط الانفصال.",
    },
  },
  {
    prompt: "$ samir build <solution>",
    output: {
      en: "Building with context. With clarity. With purpose.",
      ar: "بناء بسياق. بوضوح. بهدف.",
    },
  },
];

/* ── single typed line ── */
function TypedLine({
  text,
  color,
  speed = 40,
  onDone,
}: {
  text: string;
  color: string;
  speed?: number;
  onDone?: () => void;
}) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed("");
    setDone(false);
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(iv);
        setDone(true);
        onDone?.();
      }
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);

  return (
    <span style={{ color }}>
      {displayed}
      {!done && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          style={{ color }}
        >
          ▌
        </motion.span>
      )}
    </span>
  );
}

/* ── main component ── */
export default function TerminalDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });
  const { lang, dir, t } = useLang();

  const [step, setStep] = useState(-1);
  const [phase, setPhase] = useState<"prompt" | "output" | "pause">("prompt");
  const [restartKey, setRestartKey] = useState(0);

  const running = useRef(false);

  const runSequence = useCallback(async () => {
    if (running.current) return;
    running.current = true;
    for (let i = 0; i < LINES.length; i++) {
      setStep(i);
      setPhase("prompt");
      await sleep(LINES[i].prompt.length * 40 + 300);
      setPhase("output");
      await sleep(LINES[i].output[lang].length * 35 + 600);
      setPhase("pause");
      await sleep(400);
    }
    await sleep(3000);
    running.current = false;
    setRestartKey((k) => k + 1);
  }, [lang]);

  useEffect(() => {
    if (inView && !running.current) {
      setStep(-1);
      runSequence();
    }
  }, [inView, restartKey, runSequence]);

  return (
    <section className="w-full py-20 px-4 bg-[#0A0A0A]" id="how-i-build">
      <div className="max-w-3xl mx-auto">
        {/* Section label */}
        <motion.p
          className="text-xs lg:text-sm uppercase tracking-[0.2em] text-gray-500 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("How I Work", "كيف أعمل")}
        </motion.p>

        {/* Section headline */}
        <motion.h2
          className={`text-2xl lg:text-3xl font-bold text-white text-center mb-8 mt-4 ${lang === 'ar' ? 'font-arabic' : ''}`}
          dir={dir}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t("Understand first. Build with purpose.", "أفهم أولاً. أبني بهدف.")}
        </motion.h2>

        {/* Terminal window */}
        <div
          ref={ref}
          className="rounded-xl border border-gray-800 overflow-hidden shadow-2xl shadow-black/40"
        >
          {/* Chrome bar */}
          <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1A1A1A] border-b border-gray-800">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-3 text-xs text-gray-600 font-mono">
              samir — zsh
            </span>
          </div>

          {/* Body */}
          <div className="bg-[#111111] p-5 font-mono text-sm leading-7 min-h-[280px]">
            {step < 0 ? (
              <span className="text-gray-600">
                {t("Waiting for input...", "بانتظار الأوامر...")}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                >
                  ▌
                </motion.span>
              </span>
            ) : (
              LINES.slice(0, step + 1).map((line, i) => {
                const isCurrent = i === step;
                const showPrompt = isCurrent && phase === "prompt";
                const showOutput =
                  (isCurrent && phase === "output") ||
                  (isCurrent && phase === "pause") ||
                  !isCurrent;

                return (
                  <div key={`${restartKey}-${i}`} className="mb-3 last:mb-0">
                    {/* Prompt line */}
                    <div>
                      {showPrompt ? (
                        <TypedLine
                          text={line.prompt}
                          color="#D4A853"
                          speed={40}
                          onDone={() => {}}
                        />
                      ) : (
                        <span style={{ color: "#D4A853" }}>
                          {line.prompt}
                        </span>
                      )}
                    </div>
                    {/* Output line */}
                    {showOutput ? (
                      <div className="ml-4">
                        {isCurrent && phase === "output" ? (
                          <TypedLine
                            text={line.output[lang]}
                            color="#4ADE80"
                            speed={35}
                          />
                        ) : (
                          <span style={{ color: "#4ADE80" }}>
                            {line.output[lang]}
                          </span>
                        )}
                      </div>
                    ) : null}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
