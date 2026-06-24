import type { Metadata } from "next";
import About from "@/components/About";
import Principles from "@/components/Principles";

export const metadata: Metadata = {
  title: "About Us | Thaproban",
  description: "Learn more about Thaproban, our agency, our vision, and our core principles.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <About />
      <Principles />
    </div>
  );
}
