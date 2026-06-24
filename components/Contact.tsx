"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32 bg-zinc-100 dark:bg-zinc-900/40 border-t border-zinc-200/60 dark:border-zinc-800/60 transition-colors duration-300 overflow-hidden">
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
              <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                Let&apos;s Build Something Together
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                Have a research proposal, consulting project, or need training courses? Reach out to our leadership team.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-center group">
                <div className="h-10 w-10 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[#ff0000] group-hover:scale-110 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-zinc-950 dark:text-white text-sm">Email Us</h5>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">contact@thaproban.org</p>
                </div>
              </div>

              <div className="flex gap-4 items-center group">
                <div className="h-10 w-10 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[#ff0000] group-hover:scale-110 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-zinc-950 dark:text-white text-sm">Call Us</h5>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">+94 (11) 234-5678</p>
                </div>
              </div>

              <div className="flex gap-4 items-center group">
                <div className="h-10 w-10 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-[#ff0000] group-hover:scale-110 transition-transform">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h5 className="font-semibold text-zinc-950 dark:text-white text-sm">Headquarters</h5>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm">Galle Road, Colombo 03, Sri Lanka</p>
                </div>
              </div>
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
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">Last Name</label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-950 focus:border-[#ff0000] focus:bg-white focus:outline-none dark:border-zinc-800 dark:bg-zinc-950 dark:text-white dark:focus:border-[#ff0000] dark:focus:bg-zinc-900 transition-colors"
                    placeholder="Doe"
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
                  placeholder="jane.doe@company.com"
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
