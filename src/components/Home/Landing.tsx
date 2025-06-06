import React from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { MoodInfluence } from "./MoodInfluence";
import { Testimonials } from "./Testimonials";
import { Resources } from "./Resources";

export const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <MoodInfluence />
      <Testimonials />
      <Resources />
    </div>
  );
};
