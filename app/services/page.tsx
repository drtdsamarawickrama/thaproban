import type { Metadata } from "next";
import Services from "@/components/Services";
import PageHeader from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Our Services | Thaproban",
  description: "Explore the wide range of services offered by Thaproban, including Event Management, Branding, Printing, Video Production, and Software & Web Development.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <PageHeader title="Our Services" subtitle="Discover our range of professional digital and physical solutions." />
      <Services />
    </div>
  );
}
