"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 0.7,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Partners() {
  return (
    <section id="partners" className="py-12 border-y border-zinc-200/60 dark:border-zinc-800/60 bg-zinc-100/50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
        >
          Collaborating with leading academic & technology partners
        </motion.p>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4 items-center justify-items-center"
        >
          <motion.div
            variants={itemVariants}
            className="h-12 flex items-center justify-center filter grayscale contrast-125 dark:invert dark:brightness-200 hover:grayscale-0 transition duration-300 hover:scale-105"
          >
            <Image src="/partner-uoc.png" alt="University of Colombo" width={160} height={48} className="object-contain max-h-12 w-auto" />
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="h-12 flex items-center justify-center filter grayscale contrast-125 dark:invert dark:brightness-200 hover:grayscale-0 transition duration-300 hover:scale-105"
          >
            <Image src="/partner-uom.png" alt="University of Moratuwa" width={160} height={48} className="object-contain max-h-12 w-auto" />
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="h-12 flex items-center justify-center filter grayscale contrast-125 dark:invert dark:brightness-200 hover:grayscale-0 transition duration-300 hover:scale-105"
          >
            <Image src="/partner-uok.png" alt="University of Kelaniya" width={160} height={48} className="object-contain max-h-12 w-auto" />
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="h-12 flex items-center justify-center filter grayscale contrast-125 dark:invert dark:brightness-200 hover:grayscale-0 transition duration-300 hover:scale-105"
          >
            <Image src="/partner-snowflake.png" alt="Snowflake" width={160} height={48} className="object-contain max-h-8 w-auto" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
