import type { Metadata } from "next";
import Services from "@/components/Services";

export const metadata: Metadata = {
  title: "Our Services | Thaproban",
  description: "Explore the wide range of services offered by Thaproban, including Event Management, Branding, Printing, Video Production, and Software & Web Development.",
};

export default function ServicesPage() {
  return <Services />;
}
