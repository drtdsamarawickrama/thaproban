"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface Slide {
  image: string;
  title: string;
  description: string;
  tag: string;
  link?: string;
}

const slides: Slide[] = [
  {
    image: "/event-slide-1.png",
    tag: "Data & AI Forum",
    title: "Snowflake Data and AI Innovation Forum 2025",
    description: "Co-partnering and executing elite corporate tech forums with industry giants like Altria, Boomi, and Snowflake.",
  },
  {
    image: "/event-slide-2.jpg",
    tag: "Business Forum",
    title: "16th International Conference on Business & Information",
    description: "Official tech infrastructure and event management partner for the flagship ICBI 2025 conference.",
  },
  {
    image: "/event-child.png",
    tag: "Academic Conference",
    title: "International Conference on Child Protection 2025",
    description: "Providing high-end operations, digital management, and university inauguration ceremony coordination.",
  },
];

export default function EventSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  return (
    <div
      className="relative w-full aspect-4/3 sm:aspect-16/10 lg:aspect-square xl:aspect-16/10 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 shadow-2xl group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full bg-zinc-950">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                isActive
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-105 z-0 pointer-events-none"
              }`}
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              {/* Dark overlay for text contrast */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
              
              {/* Glassmorphic Caption Card */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 text-white z-20 flex flex-col space-y-3">
                <span className="self-start inline-flex items-center rounded-full bg-[#ff3b30] px-3 py-1 text-xs font-bold leading-5 text-white shadow-md">
                  {slide.tag}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white line-clamp-2">
                  {slide.title}
                </h3>
                <p className="text-sm text-zinc-300 line-clamp-2 sm:line-clamp-none leading-relaxed">
                  {slide.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex
                ? "w-8 bg-[#ff3b30]"
                : "w-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
