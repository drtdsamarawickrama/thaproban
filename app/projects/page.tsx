import type { Metadata } from "next";
import Projects from "@/components/Projects";
import Highlights from "@/components/Highlights";

export const metadata: Metadata = {
  title: "Our Projects & Highlights | Thaproban",
  description: "Take a look at some of our recent collaborations, initiatives, academic partnerships, and event highlight reels.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <Projects />
      <Highlights />
    </div>
  );
}
