import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Principles from "@/components/Principles";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Hero />
      <About />
      <Principles />
      <Services />
      <Projects />
      <Highlights />
      <Contact />
      <Partners />
      <Footer />
    </main>
  );
}
