import React from "react";
import { Hero } from "./Hero";
import { About } from "./About";
import { MoodInfluence } from "./MoodInfluence";
import { BlogSection } from "./BlogSection";
import { Testimonials } from "./Testimonials";

export const Landing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <MoodInfluence />
      <BlogSection />
      <Testimonials />
    </div>
  );
};
