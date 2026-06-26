"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DigitalMarketing() {
  return (
    <section id="digital-marketing" className="pt-10 pb-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex flex-col items-start space-y-3">
              <span className="text-[#ff0000] text-sm font-bold tracking-wider uppercase">Our Services</span>
              <h2 className="text-[#ff0000] text-3xl sm:text-4xl font-black uppercase leading-tight">Digital Marketing</h2>
              <div className="w-[60px] h-1 bg-[#ff0000] rounded-full" />
            </div>
            <p className="text-zinc-800 dark:text-zinc-200 text-lg font-semibold leading-relaxed tracking-wide">
              Drive engagement and grow your digital footprint with custom online campaigns.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-lg">
              We create targeted campaigns that elevate your brand across digital networks, optimizing performance metrics, SEO, and paid advertisements to generate growth and capture leads.
            </p>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl group cursor-pointer">
              <Image
                src="/event-slide-1.webp"
                alt="Digital Marketing Campaign Visual"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 480px) 100vw, 480px"
                priority
              />
              {/* Softer overlay for premium look */}
              <div className="absolute inset-0 bg-black/10 dark:bg-black/25 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


