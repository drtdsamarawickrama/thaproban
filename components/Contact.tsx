"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-zinc-100 dark:bg-zinc-950 border-t border-zinc-200/60 dark:border-zinc-800/60 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Column (Slide-in from Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <span className="text-[#ff0000] text-sm font-bold tracking-wider uppercase">Connect</span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-zinc-950 dark:text-white">
                Let&apos;s <span className="text-[#ff0000]">Talk</span>
              </h2>
              <div className="w-[75%] h-[3px] bg-zinc-200 dark:bg-zinc-800 relative rounded-full">
                <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-[#ff0000] rounded-full" />
                <span className="absolute left-[40%] top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#ff0000] shadow-[0_0_8px_#ff0000]" />
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed pt-2">
                We&apos;d love to understand your upcoming event needs and discuss how Thaproban can create something extraordinary for your brand.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              {/* Call Us */}
              <div className="flex gap-4 items-center group">
                <div className="h-10 w-10 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-lg shadow-red-500/15 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-extrabold text-zinc-950 dark:text-white text-sm uppercase tracking-wider">Call Us:</span>
                  <a href="tel:+94715238369" className="text-zinc-600 dark:text-zinc-400 text-sm font-semibold hover:text-[#ff0000] dark:hover:text-red-500 transition-colors duration-200">
                    +94 71 523 8369
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 items-center group">
                <div className="h-10 w-10 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-lg shadow-red-500/15 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="font-extrabold text-zinc-950 dark:text-white text-sm uppercase tracking-wider">Email:</span>
                    <a href="mailto:ushan@thaproban.com" className="text-zinc-600 dark:text-zinc-400 text-sm font-semibold hover:text-[#ff0000] dark:hover:text-red-500 transition-colors duration-200">
                      ushan@thaproban.com
                    </a>
                  </div>
                  <a href="mailto:thaprobandigital@gmail.com" className="text-zinc-500 dark:text-zinc-500 text-xs font-semibold hover:text-[#ff0000] dark:hover:text-red-500 transition-colors duration-200 ml-0 sm:ml-12.5">
                    thaprobandigital@gmail.com
                  </a>
                </div>
              </div>

              {/* Web */}
              <div className="flex gap-4 items-center group">
                <div className="h-10 w-10 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-lg shadow-red-500/15 group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-extrabold text-zinc-950 dark:text-white text-sm uppercase tracking-wider">Web:</span>
                  <a href="https://www.thaproban.com" target="_blank" rel="noopener noreferrer" className="text-zinc-600 dark:text-zinc-400 text-sm font-semibold hover:text-[#ff0000] dark:hover:text-red-500 transition-colors duration-200">
                    www.thaproban.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-start group">
                <div className="h-10 w-10 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-lg shadow-red-500/15 group-hover:scale-110 transition-transform duration-300 shrink-0 mt-0.5">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-zinc-950 dark:text-white text-sm uppercase tracking-wider mb-0.5">Location:</span>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm font-medium leading-relaxed max-w-[280px]">
                    303/9, Attanayake Mawatha, Kotte Road, Jubilee Post, Nugegoda 10300
                  </p>
                </div>
              </div>
            </div>

            {/* Help box banner */}
            <div className="flex gap-4 items-center pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div className="h-10 w-10 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-lg shadow-red-500/15 shrink-0">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 text-sm font-bold leading-snug">
                We&apos;re here to help you create <span className="text-[#ff0000] font-black uppercase tracking-wider block sm:inline">impactful experiences.</span>
              </p>
            </div>
          </motion.div>

          {/* Form Column (Slide-in from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-8 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">First Name</label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-950 focus:border-[#ff0000] focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-[#ff0000] dark:focus:bg-zinc-900 transition-colors"
                    placeholder="Kasun"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-950 focus:border-[#ff0000] focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-[#ff0000] dark:focus:bg-zinc-900 transition-colors"
                    placeholder="Sadaruwan"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-950 focus:border-[#ff0000] focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-[#ff0000] dark:focus:bg-zinc-900 transition-colors"
                  placeholder="kasun@gmail.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">How can we help you?</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-950 focus:border-[#ff0000] focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-[#ff0000] dark:focus:bg-zinc-900 transition-colors resize-none"
                  placeholder="Describe your project or inquiry..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                className="w-full inline-flex items-center justify-center rounded-full bg-[#ff0000] px-6 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#cc0000] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff0000]"
              >
                Send Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
