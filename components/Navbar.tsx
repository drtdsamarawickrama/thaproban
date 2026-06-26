"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  
  // Theme state: default to 'dark' (dark mode on first visit)
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  // Load saved theme preference from local storage when page mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark"); // Switch to light styles if saved
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark"); // Default to dark styles
    }
  }, []);

  // Toggles between light and dark modes
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark"); // Add .dark to <html> root
      localStorage.setItem("theme", "dark"); // Save user choice
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark"); // Remove .dark from <html> root
      localStorage.setItem("theme", "light"); // Save user choice
    }
  };

  console.log("[Navbar] Current active section:", activeSection);

  useEffect(() => {
    if (pathname === "/") {
      setActiveSection("home");
    } else if (pathname.startsWith("/services")) {
      setActiveSection("services");
    } else {
      const match = navLinks.find(link => {
        const linkPath = link.href.split("#")[0];
        return linkPath === pathname;
      });
      if (match) {
        const pathPart = match.href.split("#")[0].substring(1);
        setActiveSection(pathPart || "home");
      } else {
        setActiveSection("home");
      }
    }
  }, [pathname]);

  const handleLinkClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.includes("#")) {
      const [linkPath, targetId] = href.split("#");
      const normalizedPath = linkPath === "" ? "/" : linkPath;
      
      if (pathname === normalizedPath) {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      const currentFullUrl = window.location.pathname + window.location.search;
      if (currentFullUrl === href || (currentFullUrl === "/services" && href === "/services")) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    }
  };

  const toggleMobileMenu = () => {
    setIsOpen((prev) => {
      const next = !prev;
      if (!next) {
        setIsMobileServicesOpen(false);
      }
      return next;
    });
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-black/6 dark:border-white/6 bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Thaproban Logo"
                width={200}
                height={40}
                className="h-10 w-auto block dark:hidden object-contain"
                style={{ width: "auto" }}
                priority
              />
              <Image
                src="/logo-dark.png"
                alt="Thaproban Logo"
                width={200}
                height={40}
                className="h-10 w-auto hidden dark:block object-contain"
                style={{ width: "auto" }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                const isActive = activeSection === "services";
                return (
                  <div key={link.name} className="relative group py-2">
                    <Link
                      href={link.href}
                      onClick={(e) => handleLinkClick(link.href, e)}
                      className={`relative text-base font-semibold transition-colors duration-200 flex items-center gap-1 group-hover:text-[#ff0000] ${
                        isActive
                          ? "text-[#ff0000]"
                          : "text-zinc-700 dark:text-zinc-300"
                      }`}
                    >
                      {link.name}
                      <svg className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#ff0000] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 w-80 rounded-2xl border border-black/5 dark:border-white/5 bg-white/95 dark:bg-black/95 backdrop-blur-lg p-2 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 z-50 max-h-[80vh] overflow-y-auto">
                      
                      {/* Event Solutions */}
                      <Link
                        href="/services?filter=event"
                        onClick={(e) => handleLinkClick("/services?filter=event", e)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-red-500/10 text-zinc-800 dark:text-zinc-200 hover:text-[#ff0000] dark:hover:text-red-500 transition-all duration-200"
                      >
                        <div className="shrink-0 h-9 w-9 rounded-lg bg-red-500/10 dark:bg-red-500/20 text-[#ff0000] flex items-center justify-center">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-bold">Event Solutions</div>
                          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">LED walls, sound, lights & live broadcasting.</div>
                        </div>
                      </Link>

                      {/* Digital Marketing */}
                      <Link
                        href="/services?filter=digital-marketing"
                        onClick={(e) => handleLinkClick("/services?filter=digital-marketing", e)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-red-500/10 text-zinc-800 dark:text-zinc-200 hover:text-[#ff0000] dark:hover:text-red-500 transition-all duration-200"
                      >
                        <div className="shrink-0 h-9 w-9 rounded-lg bg-red-500/10 dark:bg-red-500/20 text-[#ff0000] flex items-center justify-center">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-bold">Digital Marketing</div>
                          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Social media campaigns, SEO & PPC advertising.</div>
                        </div>
                      </Link>

                      {/* Video Production */}
                      <Link
                        href="/services?filter=video-production"
                        onClick={(e) => handleLinkClick("/services?filter=video-production", e)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-red-500/10 text-zinc-800 dark:text-zinc-200 hover:text-[#ff0000] dark:hover:text-red-500 transition-all duration-200"
                      >
                        <div className="shrink-0 h-9 w-9 rounded-lg bg-red-500/10 dark:bg-red-500/20 text-[#ff0000] flex items-center justify-center">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-bold">Video Productions</div>
                          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Commercials, TV advertisements & promos.</div>
                        </div>
                      </Link>

                      {/* Training and Workshops */}
                      <Link
                        href="/services?filter=training-workshops"
                        onClick={(e) => handleLinkClick("/services?filter=training-workshops", e)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-red-500/10 text-zinc-800 dark:text-zinc-200 hover:text-[#ff0000] dark:hover:text-red-500 transition-all duration-200"
                      >
                        <div className="shrink-0 h-9 w-9 rounded-lg bg-red-500/10 dark:bg-red-500/20 text-[#ff0000] flex items-center justify-center">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-bold">Training and Workshops</div>
                          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Media programs, bootcamps & skills labs.</div>
                        </div>
                      </Link>

                      {/* Printing Solutions */}
                      <Link
                        href="/services?filter=print"
                        onClick={(e) => handleLinkClick("/services?filter=print", e)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-purple-500/10 text-zinc-800 dark:text-zinc-200 hover:text-[#7c2ebd] dark:hover:text-purple-400 transition-all duration-200"
                      >
                        <div className="shrink-0 h-9 w-9 rounded-lg bg-purple-500/10 dark:bg-purple-500/20 text-[#7c2ebd] flex items-center justify-center">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-bold">Printing Solutions</div>
                          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Offset, digital, signage, stalls & greeting cards.</div>
                        </div>
                      </Link>

                      {/* Software & Web Development */}
                      <Link
                        href="/services?filter=software-solutions"
                        onClick={(e) => handleLinkClick("/services?filter=software-solutions", e)}
                        className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-red-500/10 text-zinc-800 dark:text-zinc-200 hover:text-[#ff0000] dark:hover:text-red-500 transition-all duration-200"
                      >
                        <div className="shrink-0 h-9 w-9 rounded-lg bg-red-500/10 dark:bg-red-500/20 text-[#ff0000] flex items-center justify-center">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                        <div className="text-left">
                          <div className="text-sm font-bold">Software & Web Development</div>
                          <div className="text-[11px] text-zinc-500 dark:text-zinc-400 font-medium mt-0.5">Web applications, cloud systems & APIs.</div>
                        </div>
                      </Link>

                      <div className="h-px bg-black/5 dark:bg-white/5 my-1" />

                      {/* All Services */}
                      <Link
                        href="/services"
                        onClick={(e) => handleLinkClick("/services", e)}
                        className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-950 text-zinc-800 dark:text-zinc-200 hover:text-[#ff0000] dark:hover:text-red-500 transition-all duration-200"
                      >
                        <div className="shrink-0 h-8 w-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 flex items-center justify-center">
                          <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                          </svg>
                        </div>
                        <div className="text-left text-sm font-bold">
                          All Services
                        </div>
                      </Link>
                    </div>
                  </div>
                );
              }

              const linkId = link.href === "/" ? "home" : link.href.split("#")[0].substring(1);
              const isActive = activeSection === linkId;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
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

          {/* Call to Action Button & Theme Toggle */}
          <div className="hidden md:flex md:items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-black/8 dark:border-white/8 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-zinc-950 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:shadow-lg dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu & Theme Toggle Section */}
          <div className="flex md:hidden items-center gap-2">
            {/* Theme Toggle Button Mobile */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-black/08 dark:border-white/8 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-zinc-700 dark:text-zinc-300 cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              )}
            </button>

            <button
              onClick={toggleMobileMenu}
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
        <div className="md:hidden border-t border-black/6 dark:border-white/6 bg-white dark:bg-black" id="mobile-menu">
          <div className="space-y-1 px-4 py-3 pb-4">
            {navLinks.map((link) => {
              if (link.name === "Services") {
                const isActive = activeSection === "services";
                return (
                  <div key={link.name} className="space-y-1">
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-red-500/10 text-[#ff0000]"
                          : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-[#ff0000] dark:hover:text-[#ff0000]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <svg className={`h-4 w-4 transition-transform duration-250 ${isMobileServicesOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {isMobileServicesOpen && (
                      <div className="pl-4 space-y-1 mt-1 border-l border-zinc-200 dark:border-zinc-800 ml-4">
                        <Link
                          href="/services?filter=event"
                          onClick={(e) => {
                            setIsOpen(false);
                            handleLinkClick("/services?filter=event", e);
                          }}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-[#ff0000] dark:hover:text-[#ff0000]"
                        >
                          Event Solutions
                        </Link>
                        <Link
                          href="/services?filter=digital-marketing"
                          onClick={(e) => {
                            setIsOpen(false);
                            handleLinkClick("/services?filter=digital-marketing", e);
                          }}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-[#ff0000] dark:hover:text-red-500"
                        >
                          Digital Marketing
                        </Link>
                        <Link
                          href="/services?filter=video-production"
                          onClick={(e) => {
                            setIsOpen(false);
                            handleLinkClick("/services?filter=video-production", e);
                          }}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-[#ff0000] dark:hover:text-red-500"
                        >
                          Video Productions
                        </Link>
                        <Link
                          href="/services?filter=training-workshops"
                          onClick={(e) => {
                            setIsOpen(false);
                            handleLinkClick("/services?filter=training-workshops", e);
                          }}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-[#ff0000] dark:hover:text-red-500"
                        >
                          Training and Workshops
                        </Link>
                        <Link
                          href="/services?filter=print"
                          onClick={(e) => {
                            setIsOpen(false);
                            handleLinkClick("/services?filter=print", e);
                          }}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-[#7c2ebd] dark:hover:text-purple-400"
                        >
                          Printing Solutions
                        </Link>
                        <Link
                          href="/services?filter=software-solutions"
                          onClick={(e) => {
                            setIsOpen(false);
                            handleLinkClick("/services?filter=software-solutions", e);
                          }}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-[#ff0000] dark:hover:text-red-500"
                        >
                          Software & Web Development
                        </Link>
                        <Link
                          href="/services"
                          onClick={(e) => {
                            setIsOpen(false);
                            handleLinkClick("/services", e);
                          }}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900 hover:text-[#ff0000] dark:hover:text-[#ff0000]"
                        >
                          All Services
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              const linkId = link.href === "/" ? "home" : link.href.split("#")[0].substring(1);
              const isActive = activeSection === linkId;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setIsOpen(false);
                    handleLinkClick(link.href, e);
                  }}
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
            <div className="pt-4 border-t border-black/6 dark:border-white/6 mt-4 px-3">
              <Link
                href="/contact"
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
