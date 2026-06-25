import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import About from "@/components/About";
import Principles from "@/components/Principles";
import Services from "@/components/Services";
import Highlights from "@/components/Highlights";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Principles />
      <Services />
      <Highlights />
      <Contact />
      <Partners />
    </div>
  );
}
