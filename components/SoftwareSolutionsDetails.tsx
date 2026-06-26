"use client";

import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 14 } },
};

export default function SoftwareSolutionsDetails() {
  const categories = [
    {
      title: "Custom Web Applications",
      desc: "Tailor-made web solutions designed using high-performance frameworks (like React, Next.js, and Node.js) that offer speed, scalability, and clean layouts.",
      tags: ["React / Next.js", "Tailwind CSS", "TypeScript", "SaaS Dashboards"]
    },
    {
      title: "Cloud Infrastructure",
      desc: "Architecting cloud-native solutions on AWS, Azure, or GCP with containerized environments, load balancing, and secure data storage schemas.",
      tags: ["AWS Cloud", "Docker / Kubernetes", "CI/CD Pipelines", "Serverless"]
    },
    {
      title: "API Design & Databases",
      desc: "Building highly-performant RESTful and GraphQL APIs linked to secure Postgres, MySQL, or MongoDB database clusters.",
      tags: ["GraphQL / REST", "Database Sharding", "JWT Authentication", "Redis Caching"]
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "UX Design & Prototyping",
      desc: "We align on layouts and wireframes, structuring application workflows before developing clean codebase configurations."
    },
    {
      step: "02",
      title: "Agile Development",
      desc: "Our engineering sprints build features using clean, reusable TypeScript code tracked via Git repositories and automated builds."
    },
    {
      step: "03",
      title: "QA & Deployment",
      desc: "Thorough testing checks functionality, APIs, and page speed benchmarks before deploying to secure production servers."
    }
  ];

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 py-20 border-t border-zinc-200/60 dark:border-zinc-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Core Pillars Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase font-mono">Engineering Standards</span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            Digital Capabilities
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="bg-white dark:bg-zinc-900/30 p-8 rounded-3xl border border-zinc-200/50 dark:border-zinc-800/40 shadow-sm flex flex-col space-y-4 hover:shadow-xl hover:border-[#ff0000]/30 transition-all duration-300 group cursor-default"
            >
              <div className="h-10 w-10 rounded-xl bg-[#ff0000]/10 text-[#ff0000] flex items-center justify-center font-bold">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-[#ff0000] transition-colors">
                {cat.title}
              </h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed grow">
                {cat.desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-900">
                {cat.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-semibold text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Workflow Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-[#ff0000] text-sm font-bold tracking-widest uppercase">Development Lifecycle</span>
          <h2 className="text-3xl sm:text-4xl font-black text-zinc-950 dark:text-white mt-3 uppercase leading-none">
            How We Build Software
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 mt-4 text-sm sm:text-base">
            From architecture diagrams to automated tests, we build with clean standard practices.
          </p>
        </motion.div>

        {/* Timeline Steps Layout */}
        <div className="relative">
          {/* Solid line between circles */}
          <div className="absolute top-[48px] left-[15%] right-[15%] h-0.5 bg-linear-to-r from-red-500 via-[#ff0000] to-rose-600 rounded-full hidden md:block opacity-40 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {workflow.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="relative bg-white dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200/50 dark:border-zinc-800/40 shadow-sm flex flex-col space-y-4 hover:shadow-xl hover:border-[#ff0000]/30 transition-all duration-500 group cursor-default z-10"
              >
                <div className="h-12 w-12 rounded-full bg-white dark:bg-zinc-950 border border-[#ff0000]/30 flex items-center justify-center font-bold text-sm text-[#ff0000] group-hover:bg-[#ff0000] group-hover:text-white group-hover:border-[#ff0000] group-hover:scale-110 shadow-lg transition-all duration-300 z-20">
                  {step.step}
                </div>

                <h3 className="text-xl font-bold text-[#ff0000] mt-2 z-20">{step.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed z-20">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
