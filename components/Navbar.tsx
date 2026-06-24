"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Fallback: If we are at the very top of the page, highlight Home
    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set up intersection observer for other sections
    const observerOptions = {
      root: null, // use viewport
      rootMargin: "-30% 0px -60% 0px", // triggers when section is in upper-mid viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sectionIds = ["about", "services", "projects", "contact"];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/[0.06] dark:border-white/[0.06] bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Thaproban Logo"
                width={200}
                height={40}
                className="h-10 w-auto block dark:hidden object-contain"
                priority
              />
              <Image
                src="/logo-dark.png"
                alt="Thaproban Logo"
                width={200}
                height={40}
                className="h-10 w-auto hidden dark:block object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => {
              const linkId = link.href === "/" ? "home" : link.href.substring(1);
              const isActive = activeSection === linkId;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative text-base font-semibold transition-colors duration-200 py-2 group ${
                    isActive
                      ? "text-[#ff0000]"
                      : "text-zinc-700 dark:text-zinc-300 hover:text-[#ff0000] dark:hover:text-[#ff0000]"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#ff0000] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-200 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-black/[0.06] dark:border-white/[0.06] bg-white dark:bg-black" id="mobile-menu">
          <div className="space-y-1 px-4 py-3 pb-4">
            {navLinks.map((link) => {
              const linkId = link.href === "/" ? "home" : link.href.substring(1);
              const isActive = activeSection === linkId;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-red-500/10 text-[#ff0000]"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-[#ff0000] dark:hover:text-[#ff0000]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-black/[0.06] dark:border-white/[0.06] mt-4 px-3">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-center rounded-full bg-zinc-950 px-5 py-3 text-base font-semibold text-white transition-all hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
