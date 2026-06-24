"use client";

import Image from "next/image";
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
  {
    title: "Software & Web Development",
    desc: "Custom applications and modern web solutions.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden border-t border-zinc-200/60 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-start space-y-4 mb-16">
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase relative after:content-[''] after:block after:w-16 after:h-[2px] after:bg-[#ff0000] after:mt-2">
            WE SPECIALIZE IN
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Services Grid & Slogan */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8"
            >
              {serviceList.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-100/50 dark:hover:bg-zinc-900/30 transition-all duration-300 ${
                    index === serviceList.length - 1 && serviceList.length % 2 !== 0
                      ? "sm:col-span-2"
                      : ""
                  }`}
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

            {/* Slogan from flyer */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800/80 w-full pl-4"
            >
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-black text-zinc-955 dark:text-white tracking-wide uppercase">
                  IDEAS THAT INSPIRE.
                </p>
                <p className="text-xl sm:text-2xl font-black text-[#ff0000] tracking-wide uppercase">
                  EXPERIENCES THAT LAST.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Creative Mockups Collage (Dark theme flyer styled) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="lg:col-span-5 self-start justify-self-center relative w-full max-w-[520px] bg-zinc-950 border border-zinc-900 rounded-3xl p-6 sm:p-8 aspect-square flex flex-col justify-between overflow-hidden shadow-2xl"
          >
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

            {/* Glowing spot effects */}
            <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-[#ff0000]/10 rounded-full blur-[40px] pointer-events-none" />

            {/* Diagonal Red Stripes matching flyer */}
            <div className="absolute right-[25%] -top-20 -bottom-20 w-16 bg-[#ff0000]/80 skew-x-[-15deg] z-0 shadow-[0_0_40px_rgba(255,0,0,0.4)]" />
            <div className="absolute right-[20%] -top-20 -bottom-20 w-3 bg-[#ff0000]/40 skew-x-[-15deg] z-0" />

            {/* Visual Graphic Representation */}
            <div className="relative w-full h-full flex items-center justify-center min-h-[300px]">
              
              {/* Tripod Video Camera */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute z-0 top-[8%] left-[20%] w-[38%] aspect-square pointer-events-none opacity-40 dark:opacity-60"
              >
                <svg className="w-full h-full text-zinc-700 dark:text-zinc-400" viewBox="0 0 100 100" fill="none">
                  {/* Camera Body */}
                  <rect x="25" y="25" width="30" height="20" rx="3" fill="currentColor" />
                  <rect x="55" y="28" width="12" height="14" rx="2" fill="currentColor" />
                  {/* Lens */}
                  <polygon points="67,31 77,25 77,45 67,39" fill="#ff0000" />
                  {/* Viewfinder */}
                  <rect x="30" y="18" width="14" height="7" rx="1" fill="currentColor" />
                  {/* Handle */}
                  <path d="M28 25 V21 H45 V25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Tripod Mount */}
                  <rect x="37" y="45" width="6" height="5" fill="#27272a" />
                  {/* Legs */}
                  <line x1="40" y1="50" x2="25" y2="95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="40" y1="50" x2="40" y2="98" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <line x1="40" y1="50" x2="55" y2="95" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </motion.div>

              {/* Stylized Director's Chair */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute z-10 bottom-6 left-[13%] w-[62%] aspect-square flex flex-col items-center justify-center pointer-events-none drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              >
                <svg className="w-full h-full text-zinc-900 dark:text-zinc-200" viewBox="0 0 200 200" fill="none">
                  {/* Poles */}
                  <line x1="60" y1="50" x2="60" y2="155" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <line x1="140" y1="50" x2="140" y2="155" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Backrest canvas */}
                  <rect x="54" y="60" width="92" height="32" rx="4" fill="#09090b" stroke="#ff0000" strokeWidth="2" />
                  {/* Thaproban text */}
                  <text x="100" y="81" fill="#ffffff" fontSize="10" fontWeight="900" letterSpacing="1.5" textAnchor="middle">
                    THAPROBAN
                  </text>
                  
                  {/* Seat canvas */}
                  <polygon points="50,115 150,115 142,125 58,125" fill="#09090b" stroke="#3f3f46" strokeWidth="1.5" />
                  <line x1="50" y1="115" x2="150" y2="115" stroke="currentColor" strokeWidth="5" />
                  
                  {/* Crossed Legs */}
                  <line x1="60" y1="115" x2="135" y2="185" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  <line x1="140" y1="115" x2="65" y2="185" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                  
                  {/* Bottom runners */}
                  <line x1="55" y1="185" x2="85" y2="185" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  <line x1="115" y1="185" x2="145" y2="185" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  
                  {/* Armrests */}
                  <line x1="48" y1="100" x2="152" y2="100" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
                  <line x1="52" y1="100" x2="52" y2="115" stroke="currentColor" strokeWidth="4.5" />
                  <line x1="148" y1="100" x2="148" y2="115" stroke="currentColor" strokeWidth="4.5" />
                </svg>
              </motion.div>
              
              {/* BRAND mockup card (top-left) */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 left-4 w-32 sm:w-36 bg-zinc-900/90 border border-zinc-800 rounded-xl p-3 sm:p-4 shadow-xl z-20 backdrop-blur-xs"
              >
                <div className="h-2 w-8 bg-[#ff0000] rounded mb-3" />
                <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">Branding Identity</span>
                <h4 className="text-lg font-black text-white mt-1 leading-tight">BRAND</h4>
                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex justify-between items-center text-[9px] text-zinc-500">
                  <span>Concept Design</span>
                  <span>100%</span>
                </div>
              </motion.div>

              {/* BIG IDEA mockup card (middle-right) */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 right-4 w-36 sm:w-40 bg-zinc-950/95 border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-2xl text-white z-20"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="h-5 w-5 rounded bg-[#ff0000]/10 border border-[#ff0000]/20 flex items-center justify-center">
                    <svg className="h-2.5 w-2.5 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="text-[8px] text-[#ff0000] font-bold tracking-widest uppercase">Advertising</span>
                </div>
                <h5 className="text-sm font-extrabold tracking-tight">BIG IDEA</h5>
                <h4 className="text-lg font-black tracking-tight text-[#ff0000] -mt-1">BIGGER IMPACT</h4>
                <p className="text-[9px] text-zinc-400 mt-2 leading-normal">
                  Delivering campaigns that scale brand visibility.
                </p>
              </motion.div>

              {/* Floating Mobile analytics card */}
              <motion.div
                animate={{ x: [0, -3, 0], y: [0, 5, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-8 right-4 w-26 sm:w-28 bg-zinc-900/90 border border-zinc-800 rounded-lg p-2.5 sm:p-3 shadow-lg z-20 flex flex-col gap-2 backdrop-blur-xs"
              >
                <span className="text-[8px] text-zinc-500 font-bold uppercase">Digital Marketing</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-xs font-black text-white">+142%</span>
                  <span className="text-[7px] text-emerald-500 font-bold">▲ Reach</span>
                </div>
                <div className="h-6 w-full flex items-end gap-1 pt-1">
                  <div className="h-2 w-full bg-zinc-800 rounded-t" />
                  <div className="h-4 w-full bg-zinc-700 rounded-t" />
                  <div className="h-5 w-full bg-[#ff0000] rounded-t" />
                  <div className="h-3 w-full bg-zinc-700 rounded-t" />
                </div>
              </motion.div>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
