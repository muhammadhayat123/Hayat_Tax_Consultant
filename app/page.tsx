import React from "react";
import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import WhyChooseUs from "@/sections/WhyChooseUs";
import Testimonials from "@/sections/Testimonials";
import BubblesBackground from "@/components/BubblesBackground";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full overflow-hidden bg-luxury-bg">
      <BubblesBackground />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}

