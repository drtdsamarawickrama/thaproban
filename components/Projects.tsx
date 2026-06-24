"use client";

import { motion } from "framer-motion";

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 14 },
  },
} as const;

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="text-[#ff0000] text-sm font-bold tracking-wider uppercase">Our Work</span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Driving Tangible Outcomes
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Explore some of our recent collaborations, initiatives, and software delivery projects.
          </p>
        </motion.div>

        {/* Projects Cards Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Project 1 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 group shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-[#990000]/10 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 relative overflow-hidden">
              <span className="text-sm font-semibold tracking-wider text-[#ff0000]">DATABASE COLLAB</span>
              {/* Decorative absolute line patterns */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#ff0000]/5 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs text-zinc-400 font-semibold uppercase">Cloud Analytics</span>
              <h4 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-[#ff0000] transition-colors">
                Snowflake Academy Init
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Established a specialized curriculum in modern cloud data architectures, certifying over 100 graduate researchers in advanced analytics.
              </p>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 group shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-zinc-100/70 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 relative overflow-hidden">
              <span className="text-sm font-semibold tracking-wider text-[#ff0000]">UOM R&D HUB</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-zinc-200/40 dark:via-zinc-800 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs text-zinc-400 font-semibold uppercase">Embedded Systems</span>
              <h4 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-[#ff0000] transition-colors">
                Industry IoT Lab setup
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Built a co-sponsored IoT testbed at the University of Moratuwa, allowing smart-meter firms to build and test firmware directly in university labs.
              </p>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -6 }}
            className="rounded-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden bg-white dark:bg-zinc-900 group shadow-sm hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-[#ff0000]/5 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-500 relative overflow-hidden">
              <span className="text-sm font-semibold tracking-wider text-[#ff0000]">UOK MARKETING APP</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#ff0000]/5 to-transparent pointer-events-none" />
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs text-zinc-400 font-semibold uppercase">Product Development</span>
              <h4 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-[#ff0000] transition-colors">
                Revamp Career Tracker
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Developed an interactive professional dashboard tracking employment success, alumni outcomes, and core competency mappings.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
