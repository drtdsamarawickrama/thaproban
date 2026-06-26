"use client";

import { motion } from "framer-motion";

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
            <div className="relative w-full max-w-[450px] aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-900 flex items-center justify-center p-8 shadow-xl">
              <div className="text-center space-y-3">
                <div className="mx-auto h-12 w-12 rounded-xl bg-[#ff0000]/10 flex items-center justify-center text-[#ff0000]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-white text-base font-bold">Marketing Campaigns Console</h4>
                <p className="text-zinc-500 text-xs max-w-[280px]">Custom dashboards, targeting parameters and campaign performance analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
