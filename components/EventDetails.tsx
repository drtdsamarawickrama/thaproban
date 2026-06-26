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

export default function EventDetails() {
  const eventTypes = [
    {
      title: "Corporate Events",
      desc: "Comprehensive solutions for AGMs, product launches, corporate seminars, and executive board meetings with professional handling.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Concerts & Live Shows",
      desc: "Grand-scale audio, intelligent concert lighting, high-resolution LED screens, and active crowd management for an immersive experience.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
        </svg>
      ),
    },
    {
      title: "Promos & Activations",
      desc: "High-impact brand activations, experiential marketing setups, and promotional events designed to maximize engagement and reach.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
    },
    {
      title: "Virtual & Hybrid Events",
      desc: "Live multi-camera streaming, virtual AGM configurations, custom graphics integration, and remote interactive workflows.",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Creative Concept & Plan",
      desc: "We discuss details with you to draft a tailored setup design, plan schedules, and arrange resources matching your event guidelines.",
    },
    {
      step: "02",
      title: "Technical Assembly",
      desc: "Our active crew installs high-end sound rigs, fine-pitched LED displays, and custom DMX fixtures to fit stage specs perfectly.",
    },
    {
      step: "03",
      title: "Execution & Orchestration",
      desc: "During the live event, directors manage multi-camera systems, lighting desks, and visual playbacks for an absolute zero-error run.",
    },
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 py-20 sm:py-28 border-t border-zinc-200/60 dark:border-zinc-900 overflow-hidden">
      
      {/* 1. Specialized Event Services */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase">Scope of Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            Corporate & Live Services
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-base sm:text-lg">
            We provide specialized setups and operation units across multiple categories, ensuring professional brand promotion and audience reach.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {eventTypes.map((event, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="bg-white/60 dark:bg-zinc-900/30 backdrop-blur-md p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/40 shadow-sm flex flex-col space-y-4 hover:shadow-xl hover:border-[#ff0000]/30 dark:hover:border-[#ff0000]/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-14 w-14 rounded-2xl bg-[#ff0000]/10 dark:bg-[#ff0000]/20 text-[#ff0000] border border-[#ff0000]/20 flex items-center justify-center shadow-inner group-hover:bg-[#ff0000] group-hover:text-white group-hover:border-[#ff0000] group-hover:scale-105 transition-all duration-300 shrink-0">
                {event.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#ff0000] transition-colors duration-200">
                {event.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">
                {event.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 2. Process / How We Work */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase">Our Workflow</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            Event Management Steps
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-base sm:text-lg">
            From design boards to live broadcasting setups, we manage every single technical aspect for a smooth delivery.
          </p>
        </motion.div>

        {/* Timeline Steps Layout */}
        <div className="relative">
          <div className="absolute top-[48px] left-[15%] right-[15%] h-1 bg-linear-to-r from-[#ff0000] via-[#ff4500] to-red-600 rounded-full hidden md:block opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-white dark:bg-black p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/40 shadow-sm flex flex-col space-y-4 hover:shadow-xl hover:border-zinc-300 dark:hover:border-zinc-700 hover:scale-[1.03] transition-all duration-500 group cursor-default"
              >
                <div className="h-12 w-12 rounded-full bg-[#ff0000]/10 dark:bg-[#ff0000]/20 border border-[#ff0000]/30 flex items-center justify-center font-bold text-sm text-[#ff0000] group-hover:bg-[#ff0000] group-hover:text-white group-hover:border-[#ff0000] group-hover:scale-110 shadow-lg transition-all duration-300">
                  {step.step}
                </div>

                <h3 className="text-xl font-bold text-[#ff0000] dark:text-[#ff0000] mt-2">{step.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm sm:text-base leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
