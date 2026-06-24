import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Image src="/logo-dark.png" alt="Thaproban Logo" width={140} height={28} className="h-6 w-auto object-contain" />
        </div>
        <p className="text-xs text-zinc-500">&copy; {new Date().getFullYear()} Thaproban. All rights reserved.</p>
        <div className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
