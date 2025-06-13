"use client";

import Contact from "@/components/Contact/Contact";
import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Projects from "@/sections/Projects/Projects";
import Skills from "@/sections/Skills/Skills";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-teal-50 dark:from-purple-950 dark:to-teal-950">
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
