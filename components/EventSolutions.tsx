"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
    title: "LED Walls with operations with Creative visuals",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M6 7h12" strokeWidth="1" strokeDasharray="1 3" opacity="0.8" />
        <path d="M6 11h12" strokeWidth="1" strokeDasharray="1 3" opacity="0.8" />
      </svg>
    ),
  },
  {
    title: "Professional Sound system",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 5L6 9H2v6h4l5 4V5z" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" opacity="0.5" />
      </svg>
    ),
  },
  {
    title: "Professional and creative Light solutions",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
      </svg>
    ),
  },
  {
    title: "Live Broadcasting (Multi camera production)",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 7l-7 5 7 5V7z" />
        <rect x="1" y="5" width="15" height="14" rx="2" />
        <circle cx="6" cy="12" r="2" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Professional Videography and Photography",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    title: "Event materials and Branding",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M21 12H3M12 3v18" opacity="0.5" />
        <path d="M7 7h3M7 17h3M14 7h3" />
      </svg>
    ),
  },
  {
    title: "Event Management",
    icon: (
      <svg className="h-5.5 w-5.5 transition-transform duration-300 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
];

const previewPanels = [
  { image: "/event-led-walls.png", alt: "LED Walls & Visual Operations" },
  { image: "/event-sound-system.png", alt: "Professional Sound Systems" },
  { image: "/event-light-solutions.png", alt: "Creative Stage Lighting" },
  { image: "/event-live-broadcasting.png", alt: "Multi-Camera Live Broadcasting" },
  { image: "/event-videography.png", alt: "Videography & Photography" },
  { image: "/event-branding-materials.png", alt: "Branding & Event Materials" },
];

export default function EventSolutions() {
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
      id="event-solutions"
      className="pt-10 pb-20 sm:pt-14 sm:pb-28 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden border-t border-zinc-200/60 dark:border-zinc-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Solutions List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-8">
            <div className="flex flex-col items-start space-y-4 w-fit">
              <span className="text-[#ff0000] text-sm font-bold tracking-wider uppercase">Our Services</span>
              <h2 className="text-[#ff0000] text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase flex flex-wrap leading-none">
                Our Event Solutions
              </h2>
              <div className="w-[75%] h-[4px] bg-[#ff0000] mt-[3px] rounded-full relative">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#ff0000] shadow-[0_0_12px_#ff0000]" />
              </div>
            </div>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {solutions.map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-center space-x-4 p-3 rounded-2xl hover:bg-zinc-100 dark:hover:bg-zinc-900/40 transition-all duration-300 group"
                >
                  <div className="h-11 w-11 rounded-xl bg-[#ff0000]/10 dark:bg-[#ff0000]/20 text-[#ff0000] border border-[#ff0000]/20 flex items-center justify-center shadow-inner group-hover:bg-[#ff0000] group-hover:text-white group-hover:border-[#ff0000] group-hover:scale-110 transition-all duration-300 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-zinc-800 dark:text-zinc-200 text-base sm:text-lg font-bold tracking-wide transition-colors duration-300 group-hover:text-[#ff0000] dark:group-hover:text-red-500">
                    {item.title}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Column: Visual Stage Showcase */}
          <div className="lg:col-span-7 flex flex-col">
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
                      className="absolute top-4 right-4 bg-black/60 hover:bg-[#ff0000] text-white rounded-full p-2 backdrop-blur-sm cursor-pointer z-40 border border-white/10 hover:border-white/20 transition-all duration-300 shadow-lg"
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
                src="/event-child.png"
                alt="Live concert lighting background"
                fill
                priority
                className="object-cover opacity-90 dark:opacity-80 scale-105"
              />
              {/* Softer dark overlay for text readability without washing out the left side */}
              <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10" />
              {/* Accent slanted red chevrons (sleek red border decorations on left side) */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#ff0000] opacity-80 z-20" />
              <div className="absolute left-2 top-1/3 bottom-1/3 w-1.5 bg-[#ff0000]/60 z-20 rounded-r-lg" />
            </div>

            {/* Top Area: Logo and Slogan Overlay */}
            <div className="relative z-20 self-end flex flex-col items-end space-y-2 max-w-[80%] text-right drop-shadow-lg">
              <div className="relative w-48 sm:w-56 h-12">
                <Image
                  src="/logo-dark.png"
                  alt="Thaproban Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-white tracking-wider uppercase">
                Empowering your <span className="text-[#ff0000] font-bold">Brand&apos;s</span> Potential
              </p>
              <div className="w-24 h-1px bg-white/40 relative">
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#ff0000]" />
              </div>
            </div>

            {/* Bottom Area: Interactive 6-Panel Accordion Gallery */}
            <div className="relative z-20 w-full mt-auto">
              <h3 className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 drop-shadow-md flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff0000] animate-pulse" />
                Live Setup & Operations
              </h3>
              
              <div className="flex items-center gap-2 sm:gap-3 h-36 sm:h-44 md:h-48 overflow-hidden w-full">
                {previewPanels.map((panel, idx) => {
                  const isHovered = hoveredPanelIndex === idx;
                  const isAnyHovered = hoveredPanelIndex !== null;
                  
                  return (
                    <div
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent immediate global trigger closure
                        setActiveOverlayPanel({ image: panel.image, alt: panel.alt });
                      }}
                      onMouseEnter={() => setHoveredPanelIndex(idx)}
                      onMouseLeave={() => setHoveredPanelIndex(null)}
                      className={`relative h-full rounded-2xl overflow-hidden border transition-all duration-500 ease-out cursor-pointer ${
                        isHovered 
                          ? "flex-[2.8] border-[#ff0000] shadow-[0_0_20px_rgba(255,0,0,0.3)] scale-[1.02]" 
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
          <div className="border-l-2 border-[#ff0000] pl-4 py-1 mt-4">
            <h4 className="text-zinc-900 dark:text-zinc-50 text-base sm:text-lg font-extrabold tracking-wide uppercase">
              Expertise in Event Management
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm font-medium tracking-wide">
              Any kind of corporate event solutions
            </p>
          </div>
        </div>

        </div>
      </div>
    </section>
  );
}
