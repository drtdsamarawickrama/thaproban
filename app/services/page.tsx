"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Services from "@/components/Services";
import PageHeader from "@/components/PageHeader";
import EventSolutions from "@/components/EventSolutions";
import EventDetails from "@/components/EventDetails";
import PrintingSolutions from "@/components/PrintingSolutions";
import DigitalMarketing from "@/components/DigitalMarketing";
import DigitalMarketingDetails from "@/components/DigitalMarketingDetails";
import VideoProduction from "@/components/VideoProduction";
import VideoProductionDetails from "@/components/VideoProductionDetails";
import TrainingWorkshops from "@/components/TrainingWorkshops";
import TrainingWorkshopsDetails from "@/components/TrainingWorkshopsDetails";

function ServicesContent() {
  const searchParams = useSearchParams();
  const filter = searchParams.get("filter"); // 'event', 'print', 'digital-marketing', 'video-production', 'training-workshops', or null

  const getHeaderDetails = () => {
    switch (filter) {
      case "event":
        return {
          title: "Event Solutions",
          subtitle: "Seamlessly executed professional event management and setups.",
          themeColor: "red" as const,
        };
      case "print":
        return {
          title: "Printing Solutions",
          subtitle: "Premium printing solutions that make an impact.",
          themeColor: "purple" as const,
        };
      case "digital-marketing":
        return {
          title: "Digital Marketing",
          subtitle: "Driving engagement and visibility across digital landscapes.",
          themeColor: "red" as const,
        };
      case "video-production":
        return {
          title: "Video Production",
          subtitle: "Cinematic storytelling and commercial visuals that captivate.",
          themeColor: "red" as const,
        };
      case "training-workshops":
        return {
          title: "Training & Workshops",
          subtitle: "Interactive training programs and industry-led workflows.",
          themeColor: "red" as const,
        };
      default:
        return {
          title: "Our Services",
          subtitle: "Discover our range of professional digital and physical solutions.",
          themeColor: "red" as const,
        };
    }
  };

  const header = getHeaderDetails();

  return (
    <div className="flex flex-col overflow-hidden min-h-screen bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <PageHeader 
        title={header.title} 
        subtitle={header.subtitle}
        themeColor={header.themeColor}
      />
      
      {/* Conditionally render with exit/entry transition animations */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter || "services"}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="w-full grow bg-zinc-50 dark:bg-zinc-950"
        >
          {filter === "event" && (
            <>
              <EventSolutions />
              <EventDetails />
            </>
          )}
          {filter === "print" && <PrintingSolutions />}
          {filter === "digital-marketing" && (
            <>
              <DigitalMarketing />
              <DigitalMarketingDetails />
            </>
          )}
          {filter === "video-production" && (
            <>
              <VideoProduction />
              <VideoProductionDetails />
            </>
          )}
          {filter === "training-workshops" && (
            <>
              <TrainingWorkshops />
              <TrainingWorkshopsDetails />
            </>
          )}
          {(!filter || filter === "services") && <Services />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950">
        <span className="text-zinc-500 font-semibold animate-pulse">Loading services...</span>
      </div>
    }>
      <ServicesContent />
    </Suspense>
  );
}
