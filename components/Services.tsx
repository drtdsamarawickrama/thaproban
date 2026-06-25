"use client";

import { useState, useEffect } from "react";
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
    title: "Event Solutions",
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
    title: "Printing Solutions",
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
  // Keep track of theme state (light vs dark mode)
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check theme state on initial mount
    setIsDark(document.documentElement.classList.contains("dark"));
    
    // Listen for theme toggles on the root html element classes
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    
    // Clean up theme observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20 sm:py-28 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden border-t border-zinc-200/60 dark:border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-start space-y-4 mb-16 w-fit">
          <h2 className="text-[#ff0000] text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase flex flex-wrap leading-none">
            {(() => {
              // Split into words to prevent letters wrapping individually
              const words = "WE SPECIALIZE IN".split(" ");
              let charCount = 0;
              return words.map((word, wordIndex) => {
                const wordElement = (
                  <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em]">
                    {word.split("").map((char, charIndex) => {
                      // Global letter index for smooth sequential animation flow
                      const absoluteIndex = charCount;
                      charCount++;
                      return (
                        <motion.span
                          key={charIndex}
                          animate={{
                            // Adjust opacity and colors to maintain readability across themes
                            opacity: isDark ? [0.35, 1, 0.35] : [0.75, 1, 0.75],
                            color: isDark 
                              ? ["#ff0000", "#ff6666", "#ff0000"] // Glowing red in dark mode
                              : ["#b30000", "#ff3333", "#b30000"], // High-contrast red in light mode
                            textShadow: isDark
                              ? [
                                  "0 0 0px rgba(255, 0, 0, 0)",
                                  "0 0 12px rgba(255, 0, 0, 0.8)", // Glowing red shadow for dark mode
                                  "0 0 0px rgba(255, 0, 0, 0)"
                                ]
                              : [
                                  "0 0 0px rgba(255, 0, 0, 0)",
                                  "0 0 2px rgba(255, 0, 0, 0.2)", // Subtle glow shadow for light mode
                                  "0 0 0px rgba(255, 0, 0, 0)"
                                ]
                          }}
                          transition={{
                            duration: 2.2,
                            repeat: Infinity,
                            delay: absoluteIndex * 0.08,
                            ease: "easeInOut"
                          }}
                          className="inline-block"
                        >
                          {char}
                        </motion.span>
                      );
                    })}
                  </span>
                );
                charCount++; // Account for word spacing in absolute index timing
                return wordElement;
              });
            })()}
          </h2>
          {/* Animated red underline container with a glowing dot at the end */}
          <motion.div
            initial={{ width: "0%", opacity: 0 }}
            whileInView={{ width: "75%", opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              width: { duration: 1.5, ease: "easeOut" },
              opacity: { duration: 0.5 }
            }}
            className="relative h-[2.5px] mt-[3px]"
          >
            {/* Horizontal line */}
            <motion.div
              animate={{
                backgroundColor: isDark 
                  ? ["#ff0000", "#ff6666", "#ff0000"] 
                  : ["#b30000", "#ff3333", "#b30000"],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full"
            />
            {/* Glowing dot at the right end */}
            <motion.div
              animate={{
                backgroundColor: isDark 
                  ? ["#ff0000", "#ff6666", "#ff0000"] 
                  : ["#b30000", "#ff3333", "#b30000"],
                boxShadow: isDark
                  ? [
                      "0 0 4px rgba(255, 0, 0, 0.4)",
                      "0 0 16px rgba(255, 0, 0, 1)",
                      "0 0 4px rgba(255, 0, 0, 0.4)"
                    ]
                  : [
                      "0 0 2px rgba(255, 0, 0, 0.2)",
                      "0 0 8px rgba(255, 0, 0, 0.8)",
                      "0 0 2px rgba(255, 0, 0, 0.2)"
                    ]
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute right-0 top-1/2 -translate-y-1/2 h-3.5 w-3.5 rounded-full"
            />
          </motion.div>
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
                  whileHover={{ y: -6, scale: 1.01 }}
                  className={`group flex items-start gap-5 p-5 rounded-2xl bg-white/40 dark:bg-zinc-900/10 border border-zinc-200/50 dark:border-zinc-800/30 hover:border-[#ff0000]/40 dark:hover:border-[#ff0000]/40 hover:bg-white dark:hover:bg-zinc-900/30 shadow-xs hover:shadow-xl hover:shadow-[#ff0000]/5 dark:hover:shadow-[#ff0000]/2 transition-all duration-300 ${
                    index === serviceList.length - 1 && serviceList.length % 2 !== 0
                      ? "sm:col-span-2"
                      : ""
                  }`}
                >
                  {/* Modern Glowing Icon Container */}
                  <div className="shrink-0 h-12 w-12 rounded-xl bg-[#ff0000]/10 dark:bg-[#ff0000]/20 text-[#ff0000] border border-[#ff0000]/20 flex items-center justify-center shadow-inner group-hover:bg-[#ff0000] group-hover:text-white group-hover:border-[#ff0000] group-hover:scale-110 transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-black text-zinc-900 dark:text-white uppercase tracking-wider group-hover:text-[#ff0000] dark:group-hover:text-[#ff0000] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed font-medium">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>


          </div>

          {/* Right Column: Creative Mockups Collage (Dark theme flyer styled) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 60, damping: 15 }}
            className="group lg:col-span-5 self-start justify-self-center relative w-full rounded-3xl max-w-[520px] aspect-square overflow-hidden cursor-pointer"
          >
            {/* Background Services Image Backdrop spanning the full box */}
            <div className="absolute inset-0 pointer-events-none opacity-100 dark:opacity-100 z-0 overflow-hidden">
              <Image
                src="/services22.png"
                alt="Services Backdrop"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 520px) 100vw, 40vw"
                priority
              />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
