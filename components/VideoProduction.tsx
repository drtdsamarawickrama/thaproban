"use client";

import { motion } from "framer-motion";

export default function VideoProduction() {
  return (
    <section id="video-production" className="pt-10 pb-20 bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex flex-col items-start space-y-3">
              <span className="text-[#ff0000] text-sm font-bold tracking-wider uppercase">Our Services</span>
              <h2 className="text-[#ff0000] text-3xl sm:text-4xl font-black uppercase leading-tight">Video Production</h2>
              <div className="w-[60px] h-1 bg-[#ff0000] rounded-full" />
            </div>
            <p className="text-zinc-800 dark:text-zinc-200 text-lg font-semibold leading-relaxed tracking-wide">
              Cinematic storytelling that conveys your message and connects visually.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-lg">
              We manage all phases of video creation—from concepts, scripts, and production logistics to post-production, sound edits, and color grading.
            </p>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900 flex items-center justify-center p-8 shadow-xl">
              <div className="text-center space-y-3">
                <div className="mx-auto h-12 w-12 rounded-xl bg-[#ff0000]/10 flex items-center justify-center text-[#ff0000]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-white text-base font-bold">Production Studio</h4>
                <p className="text-zinc-500 text-xs max-w-[280px]">Pro cameras, lighting gears, scripting boards and video post-processing tools.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
