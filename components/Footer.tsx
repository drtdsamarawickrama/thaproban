import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-zinc-900">
          
          {/* Column 1: Branding & Intro */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center">
              <Image 
                src="/logo-dark.png" 
                alt="Thaproban Logo" 
                width={160} 
                height={32} 
                className="h-8 w-auto object-contain" 
                style={{ width: "auto" }}
              />
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Your trusted partner in Event Management, Branding, Video Production, Advertising, and Web Development. Delivering ideas that inspire and experiences that last.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <a href="#" className="h-9 w-9 rounded-full bg-zinc-900 hover:bg-[#ff0000] hover:text-white flex items-center justify-center transition-all duration-300 text-zinc-400 cursor-pointer" aria-label="Facebook">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-zinc-900 hover:bg-[#ff0000] hover:text-white flex items-center justify-center transition-all duration-300 text-zinc-400 cursor-pointer" aria-label="Instagram">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@thaprobandigital/videos" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-zinc-900 hover:bg-[#ff0000] hover:text-white flex items-center justify-center transition-all duration-300 text-zinc-400 cursor-pointer" aria-label="YouTube">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-zinc-900 hover:bg-[#ff0000] hover:text-white flex items-center justify-center transition-all duration-300 text-zinc-400 cursor-pointer" aria-label="LinkedIn">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-100">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#ff0000] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ff0000] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ff0000] transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ff0000] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Services Summary */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-100">Services</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services" className="hover:text-[#ff0000] transition-colors">Event Management</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ff0000] transition-colors">Video Production</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ff0000] transition-colors">Branding & Identity</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ff0000] transition-colors">Advertising & Marketing</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#ff0000] transition-colors">Software Development</Link>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-100">Get in Touch</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <svg className="h-5 w-5 text-[#ff0000] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  303/9, Attanayake Mawatha,<br />
                  Kotte Road, Jubilee Post,<br />
                  Nugegoda 10300
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="h-5 w-5 text-[#ff0000] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+94715238369" className="hover:text-[#ff0000] transition-colors">+94 71 523 8369</a>
              </li>
              <li className="flex items-start gap-2.5">
                <svg className="h-5 w-5 text-[#ff0000] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col">
                  <a href="mailto:ushan@thaproban.com" className="hover:text-[#ff0000] transition-colors leading-tight">ushan@thaproban.com</a>
                  <a href="mailto:thaprobandigital@gmail.com" className="transition-colors leading-tight mt-1 text-zinc-500 hover:text-[#ff0000]">thaprobandigital@gmail.com</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="h-5 w-5 text-[#ff0000] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <a href="https://www.thaproban.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff0000] transition-colors">www.thaproban.com</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Bottom copyright/links */}
        <div className="pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} Thaproban. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="text-zinc-700">|</span>
            <span className="flex items-center gap-1 font-semibold text-zinc-400">
              Made in Sri Lanka
            </span>
          </div>
        </div>
        
      </div>
    </footer>
  );
}
