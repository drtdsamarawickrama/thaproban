"use client";

import { motion } from "framer-motion";

export default function ContactDetails() {
  const office = {
    name: "Corporate Headquarters",
    address: "303/9, Attanayake Mawatha, Kotte Road, Jubilee Post, Nugegoda 10300",
    phone: "+94 71 523 8369",
    email: "ushan@thaproban.com",
    secondaryEmail: "thaprobandigital@gmail.com",
    hours: "Mon - Sat: 8:30 AM - 5:30 PM",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9022510165977!2d79.89662029999999!3d6.8770847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae245f13afb8395%3A0x544321d8bcdf8c0c!2sThaproban!5e0!3m2!1sen!2slk!4v1719321300000!5m2!1sen!2slk",
    googleMapsLink: "https://maps.app.goo.gl/z6CQGNCxav3eroxe9"
  } as const;

  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 py-20 sm:py-28 border-t border-zinc-200/60 dark:border-zinc-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase">Find Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            Where to Find Us
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-base sm:text-lg">
            Visit us at our corporate headquarters in Nugegoda.
          </p>
        </motion.div>

        {/* Grid layout containing card & map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Office Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full p-8 sm:p-10 rounded-3xl border bg-white dark:bg-zinc-900/90 border-zinc-200/60 dark:border-zinc-800/80 shadow-md shadow-zinc-200/10 dark:shadow-none flex flex-col justify-between space-y-8 relative">
              <span className="absolute top-8 right-8 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0000] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff0000]"></span>
              </span>
              
              <div className="space-y-6">
                <div>
                  <span className="text-[#ff0000] text-xs font-bold uppercase tracking-wider block mb-1">
                    Corporate Office
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-zinc-950 dark:text-white">
                    {office.name}
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 font-medium pt-2">
                  {/* Address */}
                  <div className="flex gap-4 items-start">
                    <div className="h-10 w-10 rounded-xl bg-[#ff0000]/10 text-[#ff0000] flex items-center justify-center shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <span className="pt-2">{office.address}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4 items-center">
                    <div className="h-10 w-10 rounded-xl bg-[#ff0000]/10 text-[#ff0000] flex items-center justify-center shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <a href={`tel:${office.phone.replace(/\s+/g, "")}`} className="hover:text-[#ff0000] transition-colors pt-1">
                      {office.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div className="h-10 w-10 rounded-xl bg-[#ff0000]/10 text-[#ff0000] flex items-center justify-center shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex flex-col pt-1">
                      <a href={`mailto:${office.email}`} className="hover:text-[#ff0000] transition-colors font-semibold">
                        {office.email}
                      </a>
                      <a href={`mailto:${office.secondaryEmail}`} className="hover:text-[#ff0000] transition-colors mt-0.5 text-xs text-zinc-400">
                        {office.secondaryEmail}
                      </a>
                    </div>
                  </div>

                  {/* Clock */}
                  <div className="flex gap-4 items-center">
                    <div className="h-10 w-10 rounded-xl bg-[#ff0000]/10 text-[#ff0000] flex items-center justify-center shrink-0">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="pt-1">{office.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80">
                <a
                  href={office.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white bg-[#ff0000] hover:bg-red-700 px-6 py-3.5 rounded-full shadow-lg shadow-red-500/15 hover:shadow-red-500/25 transition-all duration-300"
                >
                  Get Directions
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-4 shadow-sm h-[400px] sm:h-[480px] md:h-auto min-h-[400px]"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-950 border border-zinc-200/50 dark:border-zinc-800">
              <iframe
                src={office.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${office.name} Google Map`}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
