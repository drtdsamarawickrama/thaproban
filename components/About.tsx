"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Image with Red Border */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative flex items-stretch h-[400px] sm:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden group shadow-lg"
          >
            {/* The Crew Image */}
            <div className="relative w-full h-full">
              <Image
                src="/thaproban_crew.png"
                alt="Thaproban Crew"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
              {/* Subtle lighting overlay to match the stage vibes */}
              <div className="absolute inset-0 bg-linear-to-tr from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Thick Red Right Border - matches the slide design */}
            <div className="absolute right-0 top-0 bottom-0 w-3 bg-[#ff0000] z-10 shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
          </motion.div>

          {/* Right Column: Text & Branding */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center space-y-8 pl-0 lg:pl-6"
          >
            <div className="space-y-4">
              <span className="text-[#ff0000] text-lg font-bold tracking-widest uppercase">
                Who we are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15] sm:leading-[1.15]">
                Your trusted partner in creating impactful campaigns that deliver results.
              </h2>
            </div>

            {/* Divider and Branding */}
            <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
              <div className="flex flex-col items-start gap-4">
                {/* Adaptive logo */}
                <div className="relative h-12 w-48 sm:w-56">
                  <Image
                    src="/logo.png"
                    alt="Thaproban Logo"
                    fill
                    className="object-contain block dark:hidden"
                    sizes="(max-width: 640px) 192px, 224px"
                  />
                  <Image
                    src="/logo-dark.png"
                    alt="Thaproban Logo"
                    fill
                    className="object-contain hidden dark:block"
                    sizes="(max-width: 640px) 192px, 224px"
                  />
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 text-base sm:text-lg font-medium tracking-wide italic">
                  Empowering Your Brand&apos;s Potential
                </p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
