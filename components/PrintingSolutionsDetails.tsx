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

export default function PrintingSolutionsDetails() {
  const categories = [
    {
      title: "Finishing & Laminations",
      desc: "Elevate your prints with custom finishes including Gloss, Matte, and Soft-touch lamination, Spot UV, and hot foil stamping.",
      tags: ["Soft-Touch", "Spot UV", "Foil Stamping", "Embossing"]
    },
    {
      title: "Premium Substrates",
      desc: "Choose from a curated collection of heavy artboards, textured papers, synthetic non-tear sheets, and FSC-certified eco papers.",
      tags: ["Textured Linen", "Recycled Kraft", "350gsm Artboard", "Synthetic"]
    },
    {
      title: "Precision Pre-Press",
      desc: "Automated pre-flight checks validating bleed margins, image resolutions, and CMYK color profiles to ensure zero rendering errors.",
      tags: ["Pre-flight Verification", "Color Proofing", "Imposition Setup"]
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Artwork Verification",
      desc: "Our pre-press department reviews color profiles, vector margins, and print-readiness to guarantee high precision."
    },
    {
      step: "02",
      title: "High-Fidelity Press Run",
      desc: "Using calibrated digital presses and modern offset configurations, we output vibrant, color-accurate prints."
    },
    {
      step: "03",
      title: "Custom Post-Press",
      desc: "Die-cutting, folding, custom binding, and packaging setups are completed under strict quality inspection."
    }
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
          <span className="text-[#7c2ebd] text-sm font-bold tracking-widest uppercase font-mono">Premium Quality</span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            Material Specifications
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-zinc-900/30 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/40 shadow-sm flex flex-col space-y-4 hover:shadow-xl hover:border-[#7c2ebd]/30 transition-all duration-300 group cursor-default"
            >
              <div className="h-10 w-10 rounded-xl bg-[#7c2ebd]/10 text-[#7c2ebd] flex items-center justify-center font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#7c2ebd] transition-colors">
                {cat.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed grow">
                {cat.desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                {cat.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#7c2ebd] text-sm font-bold tracking-widest uppercase">Our Workflow</span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            Print Production Pipeline
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            From digital proofing arrays to hand-crafted laminates, we manage every detail.
          </p>
        </motion.div>

        {/* Timeline Steps Layout */}
        <div className="relative">
          {/* Solid line between circles */}
          <div className="absolute top-[48px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-purple-500 via-[#7c2ebd] to-indigo-600 rounded-full hidden md:block opacity-40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {workflow.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/40 shadow-sm flex flex-col space-y-4 hover:shadow-xl hover:border-[#7c2ebd]/30 transition-all duration-500 group cursor-default z-10"
              >
                <div className="h-12 w-12 rounded-full bg-white dark:bg-zinc-950 border border-[#7c2ebd]/30 flex items-center justify-center font-bold text-sm text-[#7c2ebd] group-hover:bg-[#7c2ebd] group-hover:text-white group-hover:border-[#7c2ebd] group-hover:scale-110 shadow-lg transition-all duration-300 z-20">
                  {step.step}
                </div>

                <h3 className="text-xl font-bold text-[#7c2ebd] mt-2 z-20">{step.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed z-20">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
