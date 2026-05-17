import { motion } from 'framer-motion';

const pillars = [
  {
    number: '01',
    title: 'Learn through building',
    description: "Reading and watching only gets you so far. Real understanding comes from getting your hands dirty — building, breaking, fixing, shipping. Every project is a lesson.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Build with structure',
    description: "Spaghetti code and half-baked ideas don't scale. Every product needs a solid foundation — clean architecture, clear processes, and systems that don't collapse under growth.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Compound over time',
    description: "Small, consistent efforts beat big sporadic pushes. Every line of code, every shipped feature, every learned lesson compounds. That's the game — patience + consistency.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Philosophy() {
  return (
    <section className="py-24 md:py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-accent font-mono text-sm">03</span>
          <div className="h-px w-12 bg-accent/30" />
          <span className="text-sm text-secondary uppercase tracking-widest">Philosophy</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Structured action<span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-secondary text-lg mb-16 max-w-2xl"
        >
          This isn't motivational fluff. It's how I actually work. Three principles that guide everything I build.
        </motion.p>

        {/* Pillars */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: 'rgba(16,185,129,0.2)', transition: { duration: 0.25 } }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02]"
            >
              {/* Top glow on hover */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-accent/0 to-transparent group-hover:via-accent/40 transition-all duration-500 rounded-full" />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  {pillar.icon}
                </div>
                <span className="font-mono text-accent/50 text-sm">{pillar.number}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">
                {pillar.title}
              </h3>
              <p className="text-secondary text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border border-accent/10 bg-accent/5"
        >
          <blockquote className="text-lg md:text-xl text-white font-medium leading-relaxed">
            "Structured action — learn through building, build with structure, compound over time."
          </blockquote>
          <div className="mt-4 text-sm text-accent">— How I approach every project</div>
        </motion.div>
      </div>
    </section>
  );
}
