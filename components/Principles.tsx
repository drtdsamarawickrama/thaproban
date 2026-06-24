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
      <svg className="h-8 w-8 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Focus",
    subtitle: "on impact",
    icon: (
      <svg className="h-8 w-8 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
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
      <svg className="h-8 w-8 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Grow",
    subtitle: "together",
    icon: (
      <svg className="h-8 w-8 text-[#ff0000]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Principles() {
  return (
    <section id="principles" className="py-20 sm:py-28 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300 border-t border-zinc-200/60 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Slogan, Logo, Principles */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Branding Logo */}
            <div className="flex flex-col gap-2">
              <div className="relative h-10 w-40 sm:w-48">
                <Image
                  src="/logo.png"
                  alt="Thaproban Logo"
                  fill
                  className="object-contain block dark:hidden"
                />
                <Image
                  src="/logo-dark.png"
                  alt="Thaproban Logo"
                  fill
                  className="object-contain hidden dark:block"
                />
              </div>
              <p className="text-[10px] sm:text-xs text-zinc-500 font-bold uppercase tracking-wider pl-1">
                Empowering Your Brand&apos;s Potential
              </p>
            </div>

            {/* Section Heading & Mission Split */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-zinc-900 dark:text-white uppercase tracking-tight leading-none">
                Guiding <span className="text-[#ff0000]">Principles</span>
              </h2>

              {/* Vertical red divider mission box */}
              <div className="flex items-stretch gap-6 pl-1">
                {/* Red divider line with dot */}
                <div className="relative w-[3px] bg-[#ff0000] flex items-center justify-center rounded-full">
                  <div className="absolute h-3 w-3 rounded-full bg-[#ff0000] shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
                </div>
                
                <p className="text-xl sm:text-2xl font-semibold text-zinc-800 dark:text-zinc-200 leading-relaxed max-w-2xl py-1">
                  To deliver innovative solutions that empower brands to thrive in a competitive digital world.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Target & Dart Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, type: "spring" }}
            className="lg:col-span-5 relative flex items-center justify-center aspect-square max-w-[400px] mx-auto w-full"
          >
            {/* Background red glow */}
            <div className="absolute w-72 h-72 rounded-full bg-[#ff0000]/5 dark:bg-[#ff0000]/10 blur-[60px] pointer-events-none" />

            {/* Target Board SVG Container */}
            <div className="relative w-full h-full p-4 flex items-center justify-center">
              <svg className="w-full h-full text-zinc-200 dark:text-zinc-800" viewBox="0 0 200 200" fill="none">
                {/* Outer Ring */}
                <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="2" />
                
                {/* Mid Ring */}
                <circle cx="100" cy="100" r="55" stroke="#ff0000" strokeWidth="1.5" strokeOpacity="0.3" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="2.5" />
                
                {/* Bullseye Rings */}
                <circle cx="100" cy="100" r="25" stroke="#ff0000" strokeWidth="3" />
                <circle cx="100" cy="100" r="10" fill="#ff0000" />
                
                {/* Target Crosshairs */}
                <line x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
                <line x1="10" y1="100" x2="190" y2="100" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.4" />
              </svg>

              {/* The Dart (Animated hitting the bullseye) */}
              <motion.div
                initial={{ x: 120, y: -120, scale: 1.4, rotate: -45, opacity: 0 }}
                whileInView={{ x: 0, y: 0, scale: 1, rotate: -45, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.7, type: "spring", stiffness: 90 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {/* SVG Dart representation */}
                <svg className="h-28 w-28 drop-shadow-[0_10px_20px_rgba(255,0,0,0.4)]" viewBox="0 0 100 100" fill="none">
                  {/* Dart shaft and metal tip */}
                  <line x1="10" y1="90" x2="80" y2="20" stroke="#71717a" strokeWidth="3" strokeLinecap="round" />
                  <polygon points="10,90 22,86 14,78" fill="#e4e4e7" />
                  
                  {/* Dart barrel */}
                  <rect x="52" y="32" width="10" height="24" rx="2" transform="rotate(-45 52 32)" fill="#3f3f46" />
                  
                  {/* Red Flight feathers */}
                  <path d="M72 28 L90 10 L84 4 L66 22 Z" fill="#ff0000" />
                  <path d="M78 34 L96 16 L90 10 L72 28 Z" fill="#b91c1c" />
                </svg>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Section: 4 Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-zinc-200 dark:border-zinc-800"
        >
          {values.map((val, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800/80 hover:shadow-lg transition-all duration-300"
            >
              {/* Value Icon wrapper */}
              <div className="h-16 w-16 rounded-2xl bg-[#ff0000]/5 dark:bg-[#ff0000]/10 flex items-center justify-center mb-4 border border-[#ff0000]/10">
                {val.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white leading-tight">
                {val.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mt-1">
                {val.subtitle}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand Slogans and Links Footer */}
        <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6 w-full text-zinc-500">
          
          {/* Tagline */}
          <div className="flex items-center gap-2 font-bold text-xs sm:text-sm tracking-wider">
            <span className="text-zinc-900 dark:text-white">IDEAS THAT INSPIRE.</span>
            <span className="text-[#ff0000]">EXPERIENCES THAT LAST.</span>
            <span className="text-[#ff0000] font-black">/</span>
          </div>

          {/* Social and Web link */}
          <div className="flex items-center gap-8 text-xs sm:text-sm">
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-[#ff0000] transition-colors" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-[#ff0000] transition-colors" aria-label="Instagram">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="hover:text-[#ff0000] transition-colors" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            
            <a 
              href="https://www.thaproban.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="font-bold hover:text-[#ff0000] transition-colors"
            >
              www.thaproban.com
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
