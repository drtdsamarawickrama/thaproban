"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 70, damping: 14 },
  },
};

export default function AboutDetails() {
  const reasons = [
    {
      title: "Quality Services",
      desc: "We understand the importance of delivering quality services and results, striving to ensure all of our clients are satisfied with the services we provide.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Experienced Team",
      desc: "Our team of experienced professionals has the knowledge and expertise to provide effective strategies that will help your business reach its goals.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Attention to Detail",
      desc: "We know that details matter when it comes to marketing, so we pay extremely close attention to every aspect of the process to ensure brand success.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Customer Service",
      desc: "We strive to provide the best customer service possible, making sure to communicate openly, transparently, and clearly with all our clients.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Strategic Planning",
      desc: "We understand that each client and situation is unique, so we provide tailored marketing and educational solutions that perfectly match your goals.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
    },
    {
      title: "Affordable Excellence",
      desc: "We focus on providing high-impact, custom marketing services at an affordable cost, maximizing value and returns for every campaign.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "The Foundation",
      desc: "Founded as a third-party marketer supplying customized Promotion, Advertising, and Event Management solutions across Sri Lanka.",
    },
    {
      year: "2020",
      title: "The Turning Point",
      desc: "Enhanced our core capacity in Digital Marketing and Video Production, launching high-impact digital campaigns for prestigious national brands.",
    },
    {
      year: "2022",
      title: "Resource Expansion",
      desc: "Expanded our assets to offer tailored corporate training and organizational development programs to keep brands competitive.",
    },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 py-20 sm:py-28 border-t border-zinc-200/60 dark:border-zinc-900 overflow-hidden">
      
      {/* 1. Journey / Milestones Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase">Our History</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            Milestones of Excellence
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-base sm:text-lg">
            Since our inception, Thaproban has consistently expanded its capabilities to remain a cutting-edge partner for our clients.
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Horizontal connecting line (hidden on mobile, visible on md+) */}
          <div className="absolute top-[48px] left-[15%] right-[15%] h-1 bg-linear-to-r from-[#ff0000] via-[#7c2ebd] to-indigo-600 rounded-full hidden md:block opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {milestones.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-white dark:bg-black p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/40 shadow-sm flex flex-col space-y-4 hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:scale-[1.03] transition-all duration-500 group cursor-default"
              >
                {/* Year Indicator Node */}
                <div className="h-12 w-12 rounded-full bg-[#ff0000]/10 dark:bg-[#ff0000]/20 border border-[#ff0000]/30 flex items-center justify-center font-bold text-sm text-[#ff0000] group-hover:bg-[#ff0000] group-hover:text-white group-hover:border-[#ff0000] group-hover:scale-110 shadow-lg transition-all duration-300">
                  {idx + 1}
                </div>

                <span className="text-6xl font-black text-zinc-100 dark:text-zinc-800/50 absolute top-4 right-6 pointer-events-none group-hover:text-[#ff0000]/10 dark:group-hover:text-[#ff0000]/10 transition-colors duration-500">
                  {m.year}
                </span>

                <h3 className="text-xl font-bold text-[#ff0000] dark:text-[#ff0000] mt-2">{m.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why Choose Us Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase">Our Value Promise</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            Why Choose Thaproban?
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-base sm:text-lg">
            We deliver tailored solutions that meet the specific needs of each individual client, driven by precision and quality.
          </p>
        </motion.div>

        {/* Reasons Grid (3x2 grid layout) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((r, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white/60 dark:bg-zinc-900/30 backdrop-blur-md p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/40 shadow-sm flex flex-col space-y-4 hover:shadow-xl hover:border-[#ff0000]/30 dark:hover:border-[#ff0000]/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-14 w-14 rounded-2xl bg-[#ff0000]/10 dark:bg-[#ff0000]/20 text-[#ff0000] border border-[#ff0000]/20 flex items-center justify-center shadow-inner group-hover:bg-[#ff0000] group-hover:text-white group-hover:border-[#ff0000] group-hover:scale-105 transition-all duration-300 shrink-0">
                {r.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#ff0000] transition-colors duration-200">
                {r.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Team Culture Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative bg-zinc-950 text-white rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl border border-white/5"
        >
          {/* Creative layout highlights */}
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-[#ff0000] opacity-90 shadow-[0_0_20px_#ff0000]" />
          <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-[#ff0000]/15 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 w-64 h-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10 flex flex-col space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-4 flex flex-col space-y-3">
                <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase">Our Driving Force</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-none">
                  The Thaproban<br />Team
                </h2>
                <div className="w-16 h-1.5 bg-[#ff0000] mt-1.5 rounded-full" />
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="text-zinc-200 text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed tracking-wide">
                  The team at Thaproban is energetic, passionate, and motivated to work round the clock to ensure successful fulfillment of all professional commitments made within permissible timelines.
                </p>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-normal">
                  Our organizational culture is built on transparency, discipline, honesty, and hard work, ensuring that we bring unmatched reliability and growth to every brand we collaborate with.
                </p>
              </div>
            </div>

            {/* Premium Stat Counters Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-white/10 text-center sm:text-left">
              <div className="space-y-1">
                <span className="text-[#ff0000] text-4xl sm:text-5xl font-black tracking-tight block">2019</span>
                <span className="text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block">Founded & Operational</span>
              </div>
              <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
                <span className="text-white text-4xl sm:text-5xl font-black tracking-tight block">33+</span>
                <span className="text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block">Trusted Brand Partners</span>
              </div>
              <div className="space-y-1 border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6">
                <span className="text-[#ff0000] text-4xl sm:text-5xl font-black tracking-tight block">24/7</span>
                <span className="text-zinc-400 text-xs sm:text-sm font-semibold uppercase tracking-wider block">Execution & Support</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
