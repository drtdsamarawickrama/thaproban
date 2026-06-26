"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  currentPage?: string;
  themeColor?: "red" | "purple" | "blue" | "rose" | "orange";
}

export default function PageHeader({ title, subtitle, currentPage, themeColor = "red" }: PageHeaderProps) {
  // Dynamic color classes based on themeColor
  let textClass = "text-[#ff0000]";
  let hoverClass = "hover:text-[#ff0000] dark:hover:text-red-500";
  let bgClass = "bg-[#ff0000]";
  let glowBg1 = "bg-[#ff0000]/5 dark:bg-[#ff0000]/10";
  let glowBg2 = "bg-[#ff0000]/2 dark:bg-[#ff0000]/5";

  if (themeColor === "purple") {
    textClass = "text-[#7c2ebd] dark:text-purple-400";
    hoverClass = "hover:text-[#7c2ebd] dark:hover:text-purple-400";
    bgClass = "bg-[#7c2ebd]";
    glowBg1 = "bg-[#7c2ebd]/5 dark:bg-[#7c2ebd]/10";
    glowBg2 = "bg-[#7c2ebd]/2 dark:bg-[#7c2ebd]/5";
  } else if (themeColor === "blue") {
    textClass = "text-[#2563eb] dark:text-blue-400";
    hoverClass = "hover:text-[#2563eb] dark:hover:text-blue-400";
    bgClass = "bg-[#2563eb]";
    glowBg1 = "bg-[#2563eb]/5 dark:bg-[#2563eb]/10";
    glowBg2 = "bg-[#2563eb]/2 dark:bg-[#2563eb]/5";
  } else if (themeColor === "rose") {
    textClass = "text-[#e11d48] dark:text-rose-400";
    hoverClass = "hover:text-[#e11d48] dark:hover:text-rose-400";
    bgClass = "bg-[#e11d48]";
    glowBg1 = "bg-[#e11d48]/5 dark:bg-[#e11d48]/10";
    glowBg2 = "bg-[#e11d48]/2 dark:bg-[#e11d48]/5";
  } else if (themeColor === "orange") {
    textClass = "text-[#ea580c] dark:text-orange-400";
    hoverClass = "hover:text-[#ea580c] dark:hover:text-orange-400";
    bgClass = "bg-[#ea580c]";
    glowBg1 = "bg-[#ea580c]/5 dark:bg-[#ea580c]/10";
    glowBg2 = "bg-[#ea580c]/2 dark:bg-[#ea580c]/5";
  }

  return (
    <div className="relative overflow-hidden bg-zinc-50 dark:bg-black py-16 sm:py-20 border-b border-zinc-200/80 dark:border-zinc-900 transition-colors duration-300">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-40">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size:24px_24px" />
        
        {/* Ambient light */}
        <div className={`absolute -right-40 -top-40 w-96 h-96 rounded-full blur-3xl ${glowBg1}`} />
        <div className={`absolute -left-40 -bottom-40 w-96 h-96 rounded-full blur-3xl ${glowBg2}`} />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-3">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400"
          >
            <Link href="/" className={`${hoverClass} transition-colors`}>
              Home
            </Link>
            <span className={textClass}>•</span>
            <span className="text-zinc-400 dark:text-zinc-500">{currentPage || title}</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-zinc-950 dark:text-white leading-none"
          >
            {(() => {
              const words = title.split(" ");
              return words.map((word, i) => {
                const isLast = i === words.length - 1;
                return (
                  <span key={i} className="inline-block mr-[0.3em]">
                    {isLast ? <span className={textClass}>{word}</span> : word}
                  </span>
                );
              });
            })()}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 max-w-xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}

          {/* Visual bottom accent line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`h-1 rounded-full mt-2 ${bgClass}`}
          />
        </div>
      </div>
    </div>
  );
}
