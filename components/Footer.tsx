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
              <a href="https://www.youtube.com/@thaproban_LK" target="_blank" rel="noopener noreferrer" className="h-9 w-9 rounded-full bg-zinc-900 hover:bg-[#ff0000] hover:text-white flex items-center justify-center transition-all duration-300 text-zinc-400 cursor-pointer" aria-label="YouTube">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.545 12 3.545 12 3.545s-7.518 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.508 9.388.508 9.388.508s7.518 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
                <Link href="/services?filter=event" className="hover:text-[#ff0000] transition-colors">Event Management</Link>
              </li>
              <li>
                <Link href="/services?filter=video-production" className="hover:text-[#ff0000] transition-colors">Video Production</Link>
              </li>
              <li>
                <Link href="/services?filter=digital-marketing" className="hover:text-[#ff0000] transition-colors">Branding & Identity</Link>
              </li>
              <li>
                <Link href="/services?filter=digital-marketing" className="hover:text-[#ff0000] transition-colors">Advertising & Marketing</Link>
              </li>
              <li>
                <Link href="/services?filter=software-solutions" className="hover:text-[#ff0000] transition-colors">Software Development</Link>
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
