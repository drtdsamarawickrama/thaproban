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

export default function DigitalMarketingDetails() {
  const items = [
    { title: "Social Media Management", desc: "Creation and scheduling of engaging brand copy and creative posts across platforms." },
    { title: "Search Engine Optimization", desc: "On-page and off-page SEO tactics to increase organic ranking and keyword values." },
    { title: "Pay-Per-Click Ads (PPC)", desc: "Cost-efficient lead generation campaigns targeting interested audiences." },
    { title: "Content Copywriting", desc: "High-value articles, landing page copy, and creative descriptions matching brand tone." },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 py-20 border-t border-zinc-200/60 dark:border-zinc-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase">Scope of Work</span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            Marketing Frameworks
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-zinc-900/30 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/40 shadow-sm flex flex-col space-y-3 hover:shadow-xl hover:border-[#ff0000]/30 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-10 w-10 rounded-xl bg-[#ff0000]/10 text-[#ff0000] flex items-center justify-center font-bold">
                {idx + 1}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-[#ff0000] transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
