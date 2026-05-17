import { motion } from 'framer-motion';

const projects = [
  {
    title: 'myHR',
    titleAr: 'ماي إتش آر',
    description: 'Modern HR & Payroll system for MENA businesses. Smart attendance, automated payroll, leave management. Arabic-first.',
    tag: 'Active',
    tech: ['Laravel', 'Vue', 'HR Tech', 'SaaS'],
    href: 'https://hr.sabbk.com',
    featured: true,
  },
  {
    title: 'Sanadi سندي',
    titleAr: 'سندي',
    description: 'Medication reminder app built for families. Keep your loved ones on track and check on them from your phone.',
    tag: 'Shipped',
    tech: ['Health Tech', 'Mobile', 'Family'],
    href: 'https://sanadi.sabbk.com',
    featured: true,
  },
  {
    title: 'Akila أكيلة',
    titleAr: 'أكيلة',
    description: 'Group food ordering for teams. Browse menus together, split bills, manage group orders. Built for offices.',
    tag: 'Building',
    tech: ['Food Tech', 'Teams'],
  },
  {
    title: 'Sabbk سبك',
    titleAr: 'سبك',
    description: 'My product studio. AI, software, and consultation for businesses across the Gulf. Forging solutions that compound.',
    tag: 'Active',
    tech: ['AI', 'Software', 'Consultation'],
    href: 'https://sabbk.com',
  },
  {
    title: 'OpenClaw بالعربي',
    titleAr: 'أوبن كلاو بالعربي',
    description: '9,600+ Arab builders learning AI agents and systems thinking. Making AI practical and accessible in Arabic.',
    tag: 'Community',
    tech: ['Community', 'AI Agents', 'Education'],
  },
];

const statusConfig: Record<string, { bg: string; text: string }> = {
  Active: { bg: 'bg-accent/10 text-accent border-accent/20', text: 'Active' },
  Shipped: { bg: 'bg-blue-500/10 text-blue-400 border-blue-500/20', text: 'Shipped' },
  Building: { bg: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', text: 'Building' },
  Community: { bg: 'bg-purple-500/10 text-purple-400 border-purple-500/20', text: 'Community' },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function WorkSection() {
  return (
    <section id="work" className="py-24 md:py-32 section-padding bg-surface/50">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="text-accent font-mono text-sm">02</span>
          <div className="h-px w-12 bg-accent/30" />
          <span className="text-sm text-secondary uppercase tracking-widest">Work</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
        >
          Things I've built<span className="text-accent">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-secondary text-lg mb-16 max-w-2xl"
        >
          Not side projects — real products with real users. From my own SaaS to client solutions.
        </motion.p>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-4"
        >
          {/* myHR - Featured large */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, borderColor: 'rgba(16,185,129,0.2)', transition: { duration: 0.25 } }}
            className="md:row-span-2 group relative rounded-2xl border border-white/5 bg-white/[0.02] p-8 overflow-hidden cursor-default"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-all" />
            <div className="relative z-10 h-full flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusConfig[projects[0].tag].bg}`}>
                  {statusConfig[projects[0].tag].text}
                </span>
                {projects[0].href && (
                  <a href={projects[0].href} target="_blank" rel="noopener noreferrer" className="text-secondary/40 hover:text-accent transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{projects[0].title}</h3>
              <p className="text-secondary leading-relaxed mb-8 flex-grow">{projects[0].description}</p>
              <div className="flex flex-wrap gap-2">
                {projects[0].tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs bg-white/5 text-secondary rounded-md">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sanadi */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, borderColor: 'rgba(16,185,129,0.2)', transition: { duration: 0.25 } }}
            className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 overflow-hidden cursor-default"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full blur-[60px] group-hover:bg-accent/10 transition-all" />
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusConfig[projects[1].tag].bg}`}>
                  {statusConfig[projects[1].tag].text}
                </span>
                {projects[1].href && (
                  <a href={projects[1].href} target="_blank" rel="noopener noreferrer" className="text-secondary/40 hover:text-accent transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{projects[1].title}</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">{projects[1].description}</p>
              <div className="flex flex-wrap gap-2">
                {projects[1].tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs bg-white/5 text-secondary/50 rounded-md">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Akila */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -4, borderColor: 'rgba(16,185,129,0.2)', transition: { duration: 0.25 } }}
            className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 cursor-default"
          >
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusConfig[projects[2].tag].bg}`}>
                {statusConfig[projects[2].tag].text}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{projects[2].title}</h3>
            <p className="text-secondary text-sm leading-relaxed mb-4">{projects[2].description}</p>
            <div className="flex flex-wrap gap-2">
              {projects[2].tech.map((t) => (
                <span key={t} className="px-2 py-0.5 text-xs bg-white/5 text-secondary/50 rounded-md">{t}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Sabbk + OpenClaw - Full width row */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4 mt-4"
        >
          {projects.slice(3).map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -4, borderColor: 'rgba(16,185,129,0.2)', transition: { duration: 0.25 } }}
              className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 cursor-default"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${statusConfig[project.tag].bg}`}>
                  {statusConfig[project.tag].text}
                </span>
                {project.href && (
                  <a href={project.href} target="_blank" rel="noopener noreferrer" className="text-secondary/40 hover:text-accent transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
              <p className="text-secondary text-sm leading-relaxed mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 text-xs bg-white/5 text-secondary/50 rounded-md">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
