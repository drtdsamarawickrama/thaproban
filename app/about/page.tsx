import type { Metadata } from "next";
import About from "@/components/About";
import AboutDetails from "@/components/AboutDetails";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About Us | Thaproban",
  description: "Learn more about Thaproban, our agency, our vision, and our core principles.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <PageHeader title="About Us" subtitle="Empowering brands with innovative solutions and seamless execution." />
      <About />
      <AboutDetails />
    </div>
  );
}
