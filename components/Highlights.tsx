"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface VideoHighlight {
  title: string;
  tag: string;
  description: string;
  url: string;
  coverImage?: string;
  isLogoCover?: boolean;
}

const videos: VideoHighlight[] = [
  {
    title: "Snowflake Data and AI Innovation Forum 2025",
    tag: "Data & AI Forum",
    description: "Keynotes, panel discussions, and technical breakouts hosted with Altria, Boomi, and Snowflake.",
    url: "https://youtu.be/KzBkL3buubM?si=TQXRY98l4lWqqN3C",
    coverImage: "/event-slide-1.png",
  },
  {
    title: "16th International Conference on Business & Information",
    tag: "Academic Conference",
    description: "Digital infrastructure, live streaming operations, and conference platform management recaps.",
    url: "https://youtu.be/RLW-KoTEtG4?si=o0oVn4YnkXDI0OSF",
    coverImage: "/event-slide-2.jpg",
  },
  {
    title: "3MT Competition | ICBI 2024",
    tag: "Event Highlights",
    description: "3MT (Three Minute Thesis) Competition highlights and production support at the University of Kelaniya.",
    url: "https://youtu.be/X2qrD6zQDBc?si=pqqhzjOc595hGp-6",
    coverImage: "/event-slide-33.png",
  },
  {
    title: "HNB GI 10th Anniversary Celebration",
    tag: "Corporate Event",
    description: "Providing production coordination, tech setup, and digital highlights for HNB General Insurance 10th Anniversary.",
    url: "https://youtu.be/XTJQc_rTW8Q?si=4eVBKPzjPWtsIRIJ",
    // isLogoCover: true,
    coverImage: "/event-slide-4.png",
  },
];

// Helper function to extract YouTube video ID and return embed URL with autoplay
const getEmbedUrl = (url: string) => {
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0];
  } else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1].split("?")[0];
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Highlights() {
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <section id="highlights" className="pt-24 pb-12 sm:pt-32 sm:pb-16 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <span className="text-[#ff3b30] text-sm font-bold tracking-wider uppercase">Event Media</span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Featured Event Highlights
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Take a look at the recap reels, technical presentations, and event highlights from our flagship corporate and academic summits.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {videos.map((video, idx) => (
            <motion.button
              key={idx}
              onClick={() => setActiveVideoUrl(video.url)}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl border border-zinc-200/50 dark:border-zinc-800/80 overflow-hidden bg-white dark:bg-zinc-900 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer text-left w-full focus:outline-none"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-950 flex items-center justify-center">
                {video.isLogoCover ? (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-tr from-red-950/40 via-zinc-950/95 to-zinc-900 z-0" />
                    <Image
                      src="/logo-dark.png"
                      alt="Thaproban Logo"
                      width={220}
                      height={50}
                      className="object-contain opacity-50 group-hover:scale-105 transition-transform duration-500 z-10"
                    />
                  </>
                ) : (
                  <>
                    <Image
                      src={video.coverImage || "/event-slide-1.png"}
                      alt={video.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                  </>
                )}

                {/* Animated Red Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="h-14 w-14 rounded-full bg-[#ff3b30] flex items-center justify-center text-white shadow-lg shadow-red-500/30 group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                    <svg className="h-6 w-6 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Duration/Tag badge in corner */}
                <span className="absolute top-4 left-4 z-20 inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs font-semibold leading-5 text-white backdrop-blur-sm">
                  {video.tag}
                </span>
              </div>

              {/* Card Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-[#ff3b30] transition-colors duration-300 line-clamp-1">
                    {video.title}
                  </h4>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-2">
                    {video.description}
                  </p>
                </div>
                
                <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between text-sm font-semibold text-[#ff3b30] group-hover:text-red-500 transition-colors">
                  <span>Watch Highlights Reel</span>
                  <svg className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* YouTube Video Modal Player Overlay */}
        {activeVideoUrl && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6">
            {/* Click outside to close */}
            <div className="absolute inset-0 cursor-pointer" onClick={() => setActiveVideoUrl(null)} />
            
            <div className="relative w-full max-w-[850px] aspect-video rounded-2xl overflow-hidden bg-black border border-zinc-800 shadow-2xl z-10">
              {/* Close Button */}
              <button 
                onClick={() => setActiveVideoUrl(null)}
                className="absolute -top-12 right-0 sm:-right-12 text-white/70 hover:text-white transition-colors p-2 z-20 cursor-pointer"
                aria-label="Close video player"
              >
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Embedded Player */}
              <iframe
                src={getEmbedUrl(activeVideoUrl)}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link
            href="#event-solutions"
            className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-6 py-3.5 text-base font-semibold text-zinc-900 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all duration-300"
          >
            <span>Explore More Events</span>
            <svg className="h-4 w-4 text-red-600 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
