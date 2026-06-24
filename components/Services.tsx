"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

const serviceList = [
  {
    title: "Event Management",
    desc: "Seamlessly executed experiences.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l1 2.5 2.5.5-2 1.5.5 2.5-2-1.5-2 1.5.5-2.5-2-1.5 2.5-.5z" />
      </svg>
    ),
  },
  {
    title: "Video Production",
    desc: "Stories that resonate through visuals.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Branding",
    desc: "Crafting identities that inspire.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    title: "Advertising",
    desc: "Strategies that captivate and convert.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
  },
  {
    title: "Printing",
    desc: "Represent your value into touch & feel.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
      </svg>
    ),
  },
  {
    title: "Digital Marketing",
    desc: "Driving engagement in the digital world.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden border-t border-zinc-200/60 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Logo and Section Title */}
        <div className="flex flex-col items-start space-y-4 mb-16">
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase relative after:content-[''] after:block after:w-16 after:h-[2px] after:bg-[#ff0000] after:mt-2">
            WE SPECIALIZE IN
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Services Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {serviceList.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-100/50 dark:hover:bg-zinc-900/30 transition-all duration-300"
              >
                {/* Red Circular Icon Background */}
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-md shadow-[#ff0000]/20">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white uppercase tracking-wide">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Column: Creative Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-5 relative bg-zinc-900/5 dark:bg-white/5 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 aspect-square sm:aspect-4/3 lg:aspect-square flex flex-col justify-between overflow-hidden shadow-sm"
          >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            {/* Glowing spot effects */}
            <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-[#ff0000]/10 rounded-full blur-[40px] pointer-events-none" />

            {/* Visual Graphic Representation (Director's Chair, Branding layouts) */}
            <div className="relative w-full h-full flex items-center justify-center min-h-[250px]">
              
              {/* BRAND mockup card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 w-48 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl p-4 shadow-xl z-20"
              >
                <div className="h-2 w-8 bg-[#ff0000] rounded mb-3" />
                <span className="text-[10px] text-zinc-400 font-bold uppercase tracking-widest">Branding Identity</span>
                <h4 className="text-lg font-black text-zinc-900 dark:text-white mt-1 leading-tight">BRAND</h4>
                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-700 flex justify-between items-center text-[10px] text-zinc-400">
                  <span>Concept Design</span>
                  <span>100%</span>
                </div>
              </motion.div>

              {/* BIG IDEA mockup card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 right-2 w-56 bg-zinc-950 border border-zinc-800 rounded-2xl p-5 shadow-2xl text-white z-10"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="h-6 w-6 rounded bg-[#ff0000]/10 border border-[#ff0000]/20 flex items-center justify-center">
                    <svg className="h-3 w-3 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-[9px] text-[#ff0000] font-bold tracking-widest uppercase">Advertising</span>
                </div>
                <h5 className="text-base font-extrabold tracking-tight">BIG IDEA</h5>
                <h4 className="text-xl font-black tracking-tight text-[#ff0000] -mt-1">BIGGER IMPACT</h4>
                <p className="text-[10px] text-zinc-400 mt-2 leading-normal">
                  Delivering high-end campaigns that scale brand visibility globally.
                </p>
              </motion.div>

              {/* Central Director's Chair outline graphic */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 dark:opacity-20 pointer-events-none">
                <svg className="h-72 w-72 text-zinc-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="0.5">
                  <path d="M6 4h12M6 8h12M4 4v16M20 4v16M5 20l7-7 7 7M19 20l-7-7-7 7M8 12h8" />
                </svg>
              </div>

              {/* Floating Mobile analytics card */}
              <motion.div
                animate={{ x: [0, -5, 0], y: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-16 right-6 w-32 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg p-3 shadow-lg z-30 flex flex-col gap-2"
              >
                <span className="text-[8px] text-zinc-400 font-bold uppercase">Digital Marketing</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-sm font-black text-zinc-900 dark:text-white">+142%</span>
                  <span className="text-[7px] text-emerald-500 font-bold">▲ Reach</span>
                </div>
                <div className="h-6 w-full flex items-end gap-1 pt-1">
                  <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-t" />
                  <div className="h-4 w-full bg-zinc-300 dark:bg-zinc-600 rounded-t" />
                  <div className="h-5 w-full bg-[#ff0000] rounded-t" />
                  <div className="h-3 w-full bg-zinc-300 dark:bg-zinc-600 rounded-t" />
                </div>
              </motion.div>

            </div>

            {/* Slogan & Website at bottom */}
            <div className="relative z-30 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 w-full">
              <div className="space-y-0.5">
                <p className="text-xs font-extrabold text-zinc-950 dark:text-white tracking-wider">
                  IDEAS THAT INSPIRE.
                </p>
                <p className="text-xs font-extrabold text-[#ff0000] tracking-wider">
                  EXPERIENCES THAT LAST.
                </p>
              </div>
              <a 
                href="https://www.thaproban.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs font-bold text-zinc-500 hover:text-[#ff0000] transition-colors"
              >
                www.thaproban.com
              </a>
            </div>

          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
