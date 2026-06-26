"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 80, damping: 14 },
  },
};

const solutions = [
  {
    title: "Creative Designs",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Quick Print Services",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Offset Printing",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <circle cx="12" cy="6" r="3" />
        <path d="M6 15V9a3 3 0 0 1 3-3h0" />
        <path d="M18 15V9a3 3 0 0 0-3-3h0" />
      </svg>
    ),
  },
  {
    title: "Digital Printing",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
        <rect x="6" y="14" width="12" height="8" rx="1" />
        <path d="M6 9V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5" />
      </svg>
    ),
  },
  {
    title: "Screen Printing",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" opacity="0.6" />
        <circle cx="15" cy="15" r="2" />
      </svg>
    ),
  },
  {
    title: "T-Shirt & Mug Printing",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 2H9L3 7v4h4v11h10V11h4V7L15 2z" />
        <path d="M9 7c0-2 3-3 3-3s3 1 3 3" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: "Exhibition Stall",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 22V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v18" />
        <path d="M8 6h8M8 10h8" />
        <path d="M6 16h12" />
      </svg>
    ),
  },
  {
    title: "Dealer boards & Hoardings",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="12" rx="2" />
        <line x1="7" y1="16" x2="5" y2="21" />
        <line x1="17" y1="16" x2="19" y2="21" />
      </svg>
    ),
  },
  {
    title: "Handmade greeting cards",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
  {
    title: "Product & Event Photography",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
];

const previewPanels = [
  { image: "/print-creative-designs.webp", alt: "Creative Designs & Profile Mockups" },
  { image: "/print-tshirt-mug.webp", alt: "T-Shirt & Mug Printing" },
  { image: "/print-offset-digital.webp", alt: "High-speed Offset & Digital Printing" },
  { image: "/print-dealer-boards.webp", alt: "Dealer Boards & Signage" },
  { image: "/print-exhibition-stall.webp", alt: "Exhibition Stalls & Banners" },
  { image: "/print-greeting-cards.webp", alt: "Handmade Greeting Cards" },
];

export default function PrintingSolutions() {
  const [isDark, setIsDark] = useState(false);
  const [hoveredPanelIndex, setHoveredPanelIndex] = useState<number | null>(null);
  const [activeOverlayPanel, setActiveOverlayPanel] = useState<{ image: string; alt: string } | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  // Listen to global website clicks to close the overlay
  useEffect(() => {
    if (!activeOverlayPanel) return;
    const handleGlobalClick = () => {
      setActiveOverlayPanel(null);
    };
    const timer = setTimeout(() => {
      window.addEventListener("click", handleGlobalClick);
    }, 50);
    return () => {
      window.removeEventListener("click", handleGlobalClick);
      clearTimeout(timer);
    };
  }, [activeOverlayPanel]);

  return (
    <section
      id="printing-solutions"
      className="pt-10 pb-20 sm:pt-14 sm:pb-28 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden border-t border-zinc-200/60 dark:border-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Solutions List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-start space-y-4 w-fit"
            >
              <span className="text-[#7c2ebd] text-sm font-bold tracking-wider uppercase">Our Services</span>
              <h2 className="text-[#7c2ebd] text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase flex flex-wrap leading-none">
                Printing Solutions
              </h2>
              <div className="w-[75%] h-[4px] bg-[#7c2ebd] mt-[3px] rounded-full relative">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#7c2ebd] shadow-[0_0_12px_#7c2ebd]" />
              </div>
            </motion.div>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3"
            >
              {solutions.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-3.5 p-2 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-all duration-300 group"
                >
                  <div className="h-10 w-10 rounded-xl bg-[#7c2ebd]/10 dark:bg-[#7c2ebd]/20 text-[#7c2ebd] border border-[#7c2ebd]/20 flex items-center justify-center shadow-inner group-hover:scale-110 group-hover:bg-[#7c2ebd] group-hover:text-white group-hover:border-[#7c2ebd] transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base font-bold tracking-wide transition-colors duration-300 group-hover:text-[#7c2ebd] dark:group-hover:text-purple-400">
                    {item.title}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Column: Visual Stage Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col"
          >
            <div className="relative h-[450px] sm:h-[500px] lg:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-950 flex flex-col justify-between p-6 sm:p-8">
              
              {/* Inline Lightbox Overlay (scales up inside the box container) */}
              <AnimatePresence>
                {activeOverlayPanel && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 z-30 bg-zinc-950 flex items-center justify-center p-4 sm:p-6"
                  >
                    <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
                      <Image
                        src={activeOverlayPanel.image}
                        alt={activeOverlayPanel.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 80vw"
                        className="object-cover"
                      />
                      
                      {/* Caption Bar under/bottom of the image */}
                      <div className="absolute bottom-0 inset-x-0 bg-black/85 backdrop-blur-md p-3.5 text-center border-t border-white/10 z-40">
                        <span className="text-white text-xs sm:text-sm font-bold tracking-wide">
                          {activeOverlayPanel.alt}
                        </span>
                      </div>

                      {/* Close button inside overlay */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveOverlayPanel(null);
                        }}
                        className="absolute top-4 right-4 bg-black/60 hover:bg-[#7c2ebd] text-white rounded-full p-2 backdrop-blur-sm cursor-pointer z-40 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg"
                        aria-label="Close preview"
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Background image covering the banner container */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/print-background.webp"
                  alt="CMYK inks background"
                  fill
                  priority
                  className="object-cover opacity-90 dark:opacity-80 scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Softer dark overlay for text readability */}
                <div className="absolute inset-0 bg-black/35 dark:bg-black/55 z-10" />
                {/* Accent slanted purple chevrons */}
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#7c2ebd] opacity-80 z-20" />
                <div className="absolute left-2 top-1/3 bottom-1/3 w-1.5 bg-[#7c2ebd]/60 z-20 rounded-r-lg" />
              </div>

              {/* Top Area: Logo and Slogan Overlay */}
              <div className="relative z-20 self-end flex flex-col items-end space-y-2 max-w-[80%] text-right drop-shadow-lg">
                <div className="flex items-center gap-2.5 justify-end">
                  <div className="relative h-12 w-12 shrink-0">
                    <Image
                      src="/logo-inkspire.webp"
                      alt="Thaproban Inkspire Logo"
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-white text-base sm:text-lg font-black tracking-wider leading-none uppercase">
                      THAPROBAN
                    </span>
                    <span className="text-zinc-300 text-[10px] font-bold tracking-widest leading-none uppercase mt-1">
                      INKSPIRE PVT LTD
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm font-medium text-white tracking-wider uppercase">
                  Printing solutions <span className="text-[#7c2ebd] font-bold">that make</span> an impact!
                </p>
                <div className="w-24 h-1px bg-white/40 relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#7c2ebd]" />
                </div>
              </div>

              {/* Bottom Area: Interactive 6-Panel Accordion Gallery */}
              <div className="relative z-20 w-full mt-auto">
                <h3 className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 drop-shadow-md flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#7c2ebd] animate-pulse" />
                  Showcase & Collaterals
                </h3>
                
                <div className="flex items-center gap-2 sm:gap-3 h-36 sm:h-44 md:h-48 overflow-hidden w-full">
                  {previewPanels.map((panel, idx) => {
                    const isHovered = hoveredPanelIndex === idx;
                    const isAnyHovered = hoveredPanelIndex !== null;
                    
                    return (
                      <div
                        key={idx}
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveOverlayPanel({ image: panel.image, alt: panel.alt });
                        }}
                        onMouseEnter={() => setHoveredPanelIndex(idx)}
                        onMouseLeave={() => setHoveredPanelIndex(null)}
                        className={`relative h-full rounded-2xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer ${
                          isHovered 
                            ? "flex-[2.8] border-[#7c2ebd] shadow-[0_0_20px_rgba(124,46,189,0.3)] scale-[1.02]" 
                            : isAnyHovered 
                            ? "flex-[0.7] border-white/5 opacity-55 scale-95" 
                            : "flex-1 border-white/10"
                        }`}
                      >
                        <Image
                          src={panel.image}
                          alt={panel.alt}
                          fill
                          sizes="(max-width: 768px) 30vw, 15vw"
                          className="object-cover transition-transform duration-700 ease-out"
                        />
                        
                        {/* Dark overlay showing title on hover */}
                        <div className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-2 sm:p-3 transition-opacity duration-300 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}>
                          <span className="text-[10px] sm:text-xs font-bold text-white tracking-wider line-clamp-1">
                            {panel.alt}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Professional Text Block below the Showcase Box */}
            <div className="border-l-2 border-[#7c2ebd] pl-4 py-1 mt-4 flex flex-col gap-4">
              <div>
                <h4 className="text-zinc-900 dark:text-zinc-50 text-base sm:text-lg font-extrabold tracking-wide uppercase">
                  Why Thaproban Inkspire?
                </h4>
                <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium tracking-wide">
                  Best quality guaranteed • Fast turnaround • Custom solutions • Doorstep delivery
                </p>
              </div>

              {/* Quick Contacts Bar */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-6 pt-3 border-t border-zinc-200/60 dark:border-zinc-800/40">
                {/* Phone */}
                <div className="flex items-center gap-2.5 group/phone">
                  <div className="h-8 w-8 rounded-lg bg-[#7c2ebd]/10 dark:bg-[#7c2ebd]/20 text-[#7c2ebd] border border-[#7c2ebd]/20 flex items-center justify-center shadow-inner group-hover/phone:scale-105 group-hover/phone:bg-[#7c2ebd] group-hover/phone:text-white group-hover/phone:border-[#7c2ebd] transition-all duration-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <a href="tel:+94767376355" className="text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:text-[#7c2ebd] dark:hover:text-purple-400 transition-colors duration-200">
                    +94 76 737 6355
                  </a>
                </div>

                {/* Divider */}
                <div className="hidden sm:block h-4 w-px bg-zinc-200 dark:bg-zinc-800/80" />

                {/* Email */}
                <div className="flex items-center gap-2.5 group/email">
                  <div className="h-8 w-8 rounded-lg bg-[#7c2ebd]/10 dark:bg-[#7c2ebd]/20 text-[#7c2ebd] border border-[#7c2ebd]/20 flex items-center justify-center shadow-inner group-hover/email:scale-105 group-hover/email:bg-[#7c2ebd] group-hover/email:text-white group-hover/email:border-[#7c2ebd] transition-all duration-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <a href="mailto:thaprobaninkspire@gmail.com" className="text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:text-[#7c2ebd] dark:hover:text-purple-400 transition-colors duration-200">
                    thaprobaninkspire@gmail.com
                  </a>
                </div>

                {/* Divider */}
                <div className="hidden md:block h-4 w-px bg-zinc-200 dark:bg-zinc-800/80" />

                {/* Website */}
                <div className="flex items-center gap-2.5 group/web">
                  <div className="h-8 w-8 rounded-lg bg-[#7c2ebd]/10 dark:bg-[#7c2ebd]/20 text-[#7c2ebd] border border-[#7c2ebd]/20 flex items-center justify-center shadow-inner group-hover/web:scale-105 group-hover/web:bg-[#7c2ebd] group-hover/web:text-white group-hover/web:border-[#7c2ebd] transition-all duration-300">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </div>
                  <a href="https://www.thaproban.com" target="_blank" rel="noopener noreferrer" className="text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:text-[#7c2ebd] dark:hover:text-purple-400 transition-colors duration-200">
                    www.thaproban.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
