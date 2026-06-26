"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 14 } },
};

export default function TrainingWorkshopsDetails() {
  const pillars = [
    {
      title: "On-Site Training",
      desc: "Custom training solutions designed around your specific organizational requirements, learning needs, and functional gaps.",
      tags: ["Marketing & Branding", "Leadership", "Employment Law", "Motivation", "HR Management"]
    },
    {
      title: "Skill Enhancement",
      desc: "Programs developed in collaboration with external awarding bodies to build foundational attitude, language, and global employability skills.",
      tags: ["Language Skills", "Attitude Building", "Global Employability"]
    },
    {
      title: "Expert Learning",
      desc: "Result-driven modules conducted exclusively by active industry leaders, ensuring high-quality, practical learning experiences.",
      tags: ["Industry Mentorship", "Practical Application", "High Impact"]
    }
  ];

  const workshops = [
    "Marketing for non-marketing practitioners",
    "Manager’s essential toolkit - Analytical Tools",
    "Manager’s essential toolkit - Strategic Tools",
    "Sri Lankan employment law",
    "“Making the first impression” workshop on etiquettes & grooming",
    "Shop and Office act in Sri Lanka",
    "Dealing with theft in the shop and workplace – legal implications",
    "Law relating to cheque frauds in Sri Lanka",
    "Principles of construction law in Sri Lanka",
    "Dispute resolution in the construction industry",
    "Contract management",
    "Service marketing basics"
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 py-20 border-t border-zinc-200/60 dark:border-zinc-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase">Scope of Work</span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            Training Framework
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-zinc-900/30 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/40 shadow-sm flex flex-col space-y-4 hover:shadow-xl hover:border-[#ff0000]/30 transition-all duration-300 group cursor-default"
            >
              <div className="h-10 w-10 rounded-xl bg-[#ff0000]/10 text-[#ff0000] flex items-center justify-center font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#ff0000] transition-colors">
                {pillar.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed grow">
                {pillar.desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                {pillar.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Directory / Workshops Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase">Directory</span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            Programs & Workshops
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            Discover our comprehensive suite of courses designed to empower teams and scale competencies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {workshops.map((workshop, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-zinc-900/10 p-6 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/30 flex items-start space-x-4 hover:border-zinc-300 dark:hover:border-zinc-700/60 shadow-sm transition-all duration-300 cursor-default group"
            >
              <div className="h-2 w-2 rounded-full bg-[#ff0000] mt-2 shrink-0 group-hover:scale-125 transition-transform" />
              <div className="flex flex-col space-y-1">
                <span className="text-[10px] font-bold text-[#ff0000] uppercase tracking-wider">Workshop {idx + 1}</span>
                <p className="text-sm font-bold text-zinc-900 dark:text-white group-hover:text-[#ff0000] transition-colors leading-snug">
                  {workshop}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

