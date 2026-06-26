"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function VideoProduction() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = "XTJQc_rTW8Q"; // Video ID from Thaproban's highlights (e.g. HNB Anniversary)

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
            <div className="relative w-full max-w-[480px] aspect-video rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-xl bg-zinc-950 group">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              ) : (
                <div 
                  onClick={() => setIsPlaying(true)}
                  className="relative w-full h-full cursor-pointer flex items-center justify-center"
                >
                  <Image
                    src="/event-slide-4.webp"
                    alt="Video Production Cover"
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 480px) 100vw, 480px"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-500" />
                  
                  {/* Glowing Red Play Button */}
                  <div className="absolute z-10 h-16 w-16 rounded-full bg-[#ff0000] text-white flex items-center justify-center shadow-[0_0_35px_rgba(255,0,0,0.5)] group-hover:scale-110 group-hover:bg-red-500 transition-all duration-300">
                    <svg className="h-8 w-8 fill-current ml-1" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  
                  {/* Outer Pulsing Ring */}
                  <div className="absolute z-0 h-16 w-16 rounded-full bg-[#ff0000] opacity-40 animate-ping" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

