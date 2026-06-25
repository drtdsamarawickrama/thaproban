"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function Partners() {
  const partners = Array.from({ length: 33 }, (_, i) => ({
    id: i + 1,
    src: `/partners/partner-${i + 1}.png`,
    alt: `Trusted Party ${i + 1}`
  }));

  return (
    <section id="partners" className="py-16 border-y border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-extrabold uppercase tracking-tight text-zinc-950 dark:text-white sm:text-4xl"
        >
          Trusted Parties
        </motion.h2>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center items-center"
        >
          {partners.map((partner) => (
            <motion.div
              key={partner.id}
              variants={itemVariants}
              className="bg-white dark:bg-zinc-100 p-4 rounded-xl border border-zinc-200/50 shadow-sm hover:shadow-md flex items-center justify-center w-full h-24 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image 
                  src={partner.src} 
                  alt={partner.alt} 
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 180px"
                  className="object-contain p-1"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
