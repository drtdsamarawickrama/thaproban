"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import EventSlider from "@/components/EventSlider";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 85, damping: 15 },
  },
};

const sliderVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { type: "spring", stiffness: 60, damping: 15, delay: 0.2 },
  },
};

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 py-16 sm:py-24 lg:py-32 flex items-center min-h-[85vh] lg:h-[88vh] lg:min-h-[750px] border-b border-zinc-900">
      {/* Dynamic Glow Effects */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-red-600/10 blur-[150px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-red-800/5 blur-[120px] pointer-events-none z-0" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-size-[4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8"
          >
            {/* Animated Brand Badge */}
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3.5 py-1.5 text-xs font-semibold leading-5 text-[#ff3b30] border border-red-500/20 backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              </span>
              Events, Branding & Media Production Agency
            </motion.span>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white leading-[1.1] sm:leading-[1.1]"
            >
              Empowering Your{" "}
              <span className="text-[#ff3b30] bg-gradient-to-r from-[#ff3b30] to-red-500 bg-clip-text text-transparent">
                Brand&apos;s Potential
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg leading-8 text-zinc-300 max-w-2xl"
            >
              Your trusted partner in Event Management, Branding, Printing, Video Production, Advertising, and Digital Marketing. Delivering ideas that inspire and experiences that last.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-[#ff3b30] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-red-500/20 hover:bg-[#cc2b20] hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Explore Our Services
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 hover:border-white/45 backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Event Slider Column */}
          <motion.div
            variants={sliderVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 w-full flex justify-center z-10"
          >
            <div className="w-full max-w-lg lg:max-w-none shadow-[0_20px_50px_rgba(255,59,48,0.15)] rounded-3xl">
              <EventSlider />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
