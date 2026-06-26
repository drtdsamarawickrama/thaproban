"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TrainingWorkshops() {
  return (
    <section id="training-workshops" className="pt-10 pb-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex flex-col items-start space-y-3">
              <span className="text-[#ff0000] text-sm font-bold tracking-wider uppercase">Our Services</span>
              <h2 className="text-[#ff0000] text-3xl sm:text-4xl font-black uppercase leading-tight">Training & Workshops</h2>
              <div className="w-[60px] h-1 bg-[#ff0000] rounded-full" />
            </div>
            <p className="text-zinc-800 dark:text-zinc-200 text-lg font-semibold leading-relaxed tracking-wide">
              We offer the full spectrum of skills, attitude, and knowledge solutions to people and organizations to work better.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-lg">
              Our comprehensive, result-driven training covers a wide range of critical professional areas. Conducted by industry experts, these programs ensure a high-quality learning experience, direct organizational impact, and skill enhancement.
            </p>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[480px] aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl group cursor-pointer">
              <Image
                src="/thaproban_crew.webp"
                alt="Thaproban Crew and Training Visual"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 480px) 100vw, 480px"
                priority
              />
              <div className="absolute inset-0 bg-black/10 dark:bg-black/35 group-hover:bg-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

