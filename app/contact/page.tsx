import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Partners from "@/components/Partners";

export const metadata: Metadata = {
  title: "Contact Us | Thaproban",
  description: "Get in touch with the Thaproban leadership team to collaborate on consulting, academic partnerships, or branding projects.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <Contact />
      <Partners />
    </div>
  );
}
