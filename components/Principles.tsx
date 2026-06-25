"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, damping: 15 },
  },
};

const values = [
  {
    title: "Innovate",
    subtitle: "with purpose",
    icon: (
      <svg className="h-9 w-9 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2 2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Focus",
    subtitle: "on impact",
    icon: (
      <svg className="h-9 w-9 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18c3.314 0 6-2.686 6-6s-2.686-6-6-6-6 2.686-6 6 2.686 6 6 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14c1.105 0 2-0.895 2-2s-0.895-2-2-2-2 0.895-2 2 0.895 2 2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l9-9" />
      </svg>
    ),
  },
  {
    title: "Collaborate",
    subtitle: "with integrity",
    icon: (
      <svg className="h-9 w-9 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Grow",
    subtitle: "together",
    icon: (
      <svg className="h-9 w-9 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Principles() {
  return (
    <section id="principles" className="relative py-20 sm:py-28 overflow-hidden bg-white dark:bg-zinc-950 border-y border-zinc-200/60 dark:border-zinc-800/60 min-h-[640px] flex items-center transition-colors duration-300">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Slogan, Logo, Principles */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8"
          >
            {/* Branding Logo & Tagline */}
            <div className="flex flex-col gap-2">
              <div className="relative h-10 w-44 sm:w-48">
                <Image
                  src="/logo.png"
                  alt="Thaproban Logo"
                  width={180}
                  height={36}
                  className="object-contain block dark:hidden"
                  priority
                />
                <Image
                  src="/logo-dark.png"
                  alt="Thaproban Logo"
                  width={180}
                  height={36}
                  className="object-contain hidden dark:block"
                  priority
                />
              </div>
              <p className="text-[10px] sm:text-xs text-zinc-500 dark:text-zinc-400 font-bold uppercase tracking-wider pl-1">
                Empowering Your Brand&apos;s Potential
              </p>
            </div>

            {/* Section Heading & Mission Split (Matches flyer layout) */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Sub-column: Stacked Title */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex flex-col leading-none">
                  <span className="text-4xl sm:text-5xl lg:text-[54px] font-black text-zinc-955 dark:text-white tracking-tight leading-tight">
                    Guiding
                  </span>
                  <span className="text-4xl sm:text-5xl lg:text-[54px] font-black text-[#ff0000] tracking-tight leading-none">
                    Principles
                  </span>
                </div>
                {/* Horizontal line with dot at right */}
                <div className="relative h-[2.5px] bg-[#ff0000] mr-6">
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full bg-[#ff0000] shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
                </div>
              </div>

              {/* Right Sub-column: Mission Statement */}
              <div className="md:col-span-7 flex items-stretch gap-6 pl-1">
                {/* Vertical separator line with dot in middle */}
                <div className="relative w-[2.5px] bg-zinc-300 dark:bg-zinc-800 flex items-center justify-center min-h-[90px] rounded-full">
                  <div className="absolute h-3.5 w-3.5 rounded-full bg-[#ff0000] shadow-[0_0_6px_rgba(255,0,0,0.8)]" />
                </div>
                
                <p className="text-lg sm:text-xl font-semibold text-zinc-800 dark:text-zinc-200 leading-relaxed py-1">
                  To deliver <span className="text-[#ff0000] font-bold">innovative solutions</span> that empower brands to thrive in a competitive digital world<span className="text-[#ff0000] font-bold">.</span>
                </p>
              </div>
            </div>

            {/* 4 Values grid horizontally underneath (matching flyer) */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-zinc-200 dark:border-zinc-800 w-full"
            >
              {values.map((val, idx) => (
                <div key={idx} className="flex items-stretch w-full">
                  <motion.div
                    variants={cardVariants}
                    whileHover={{ y: -4 }}
                    className="flex flex-col items-start text-left space-y-3 grow"
                  >
                    {/* Minimal icon */}
                    <div className="h-10 w-10 flex items-center justify-start">
                      {val.icon}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-[#ff0000] leading-none uppercase">
                        {val.title}
                      </h3>
                      <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 leading-tight">
                        {val.subtitle}
                      </p>
                    </div>
                  </motion.div>
                  {/* Vertical divider between columns */}
                  {idx < 3 && (
                    <div className="hidden md:block w-[1.5px] bg-zinc-200 dark:bg-zinc-800 self-stretch mx-4" />
                  )}
                </div>
              ))}
            </motion.div>

            {/* Red Slogan Bar (Directly underneath the values grid) */}
            <div className="pt-6">
              <div className="relative overflow-hidden bg-[#ff0000] text-white px-6 py-3.5 font-bold text-xs sm:text-sm tracking-wider uppercase inline-flex items-center [clip-path:polygon(0_0,92%_0,100%_100%,0_100%)] pr-12">
                IDEAS THAT INSPIRE. <span className="font-black text-zinc-100 ml-1.5">EXPERIENCES THAT LAST.</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Visual Target & Dart Illustration */}
          <div className="lg:col-span-5 relative flex flex-col justify-center items-center min-h-[360px] lg:min-h-[480px] py-12 lg:py-0 w-full">
            
            {/* Desktop Image & Slogan Bar Container */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{ 
                y: -8
              }}
              className="group relative hidden lg:block w-full max-w-[446px] aspect-1984/2134 overflow-hidden rounded-2xl border-2 shadow-[0_0_20px_rgba(255,255,255,0.25),0_15px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_0_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_30px_rgba(255,255,255,0.45),0_25px_50px_rgba(0,0,0,0.15)] hover:dark:shadow-[0_0_40px_rgba(0,0,0,0.9)] transition-all duration-300 z-10 cursor-pointer"
            >
              <Image 
                src="/arrow_back.webp"
                alt="Principles Illustration"
                fill
                className="object-cover"
                priority
              />

              {/* Shine effect overlay */}
              <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
                <div 
                  className="absolute top-0 bottom-0 w-[40%] bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100-translate-x-[120%] group-hover:translate-x-[250%] transition-all duration-1000 ease-out"
                  style={{ transform: 'skewX(-25deg)' }}
                />
              </div>

              {/* Desktop Black Slogan Bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-zinc-950 border-t border-zinc-900 py-4 z-20">
                <div className="w-full px-6 flex justify-between items-center text-zinc-300">
                  <div className="flex gap-4">
                    <a href="#" className="text-zinc-400 hover:text-[#ff0000] transition-colors" aria-label="Facebook">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-zinc-400 hover:text-[#ff0000] transition-colors" aria-label="Instagram">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-zinc-400 hover:text-[#ff0000] transition-colors" aria-label="LinkedIn">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/@thaprobandigital/videos" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#ff0000] transition-colors" aria-label="YouTube">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                  <a 
                    href="https://www.thaproban.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-bold hover:text-[#ff0000] transition-colors text-xs text-zinc-300 flex items-center gap-1.5"
                  >
                    <svg className="h-3.5 w-3.5 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    www.thaproban.com
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Mobile: Render a clean card containing the image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              whileHover={{ 
                y: -6
              }}
              className="group relative w-full h-[320px] sm:h-[400px] lg:hidden rounded-2xl overflow-hidden border-2 border-white shadow-[0_0_15px_rgba(255,255,255,0.2),0_10px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_0_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_25px_rgba(255,255,255,0.35),0_15px_35px_rgba(0,0,0,0.1)] hover:dark:shadow-[0_0_35px_rgba(0,0,0,0.8)] transition-all duration-300 z-10 cursor-pointer"
            >
              <Image 
                src="/arrow_back.webp"
                alt="Principles Illustration"
                fill
                className="object-contain object-center"
                priority
              />

              {/* Shine effect overlay */}
              <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
                <div 
                  className="absolute top-0 bottom-0 w-[40%] bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100-translate-x-[120%] group-hover:translate-x-[250%] transition-all duration-1000 ease-out"
                  style={{ transform: 'skewX(-25deg)' }}
                />
              </div>
            </motion.div>

            {/* Mobile social links */}
            <div className="mt-8 py-4 border-t border-zinc-200 dark:border-zinc-800 w-full flex flex-col sm:flex-row gap-4 items-center justify-between lg:hidden z-10">
              <div className="flex gap-4">
                <a href="#" className="text-zinc-400 hover:text-[#ff0000] transition-colors" aria-label="Facebook">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                  </svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-[#ff0000] transition-colors" aria-label="Instagram">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                <a href="#" className="text-zinc-400 hover:text-[#ff0000] transition-colors" aria-label="LinkedIn">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://www.youtube.com/@thaprobandigital/videos" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-[#ff0000] transition-colors" aria-label="YouTube">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
              <a href="https://www.thaproban.com" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-[#ff0000] transition-colors text-xs text-zinc-400 flex items-center gap-1.5">
                <svg className="h-3.5 w-3.5 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                www.thaproban.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
