"use client";

import { motion } from "framer-motion";

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
              Empower your teams and community with technical and creative workshops.
            </p>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed max-w-lg">
              We conduct customized training sessions led by experienced industry leads. Our topics cover creative design, video workflows, leadership skills, and targeted digital marketing strategies.
            </p>
          </div>
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[450px] aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-950 flex items-center justify-center p-8 shadow-xl">
              <div className="text-center space-y-3">
                <div className="mx-auto h-12 w-12 rounded-xl bg-[#ff0000]/10 flex items-center justify-center text-[#ff0000]">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h4 className="text-white text-base font-bold">Workshops Center</h4>
                <p className="text-zinc-500 text-xs max-w-[280px]">Interactive labs, slideshow panels, practical gear sets and feedback forms.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
