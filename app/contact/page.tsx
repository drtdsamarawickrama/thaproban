import type { Metadata } from "next";
import Contact from "@/components/Contact";
import ContactDetails from "@/components/ContactDetails";
import Partners from "@/components/Partners";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact Us | Thaproban",
  description: "Get in touch with the Thaproban leadership team to collaborate on consulting, academic partnerships, or branding projects.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <PageHeader title="Contact Us" subtitle="Get in touch with the Thaproban team to collaborate on your next project." />
      <Contact />
      <ContactDetails />
      <Partners />
    </div>
  );
}
