"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/Project-Card/ProjectCard";
import { ProjectData } from "@/lib/data";
import { useState } from "react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const project = ProjectData;

  const visibleProjects = showAll ? project : project.slice(0, 6);
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-purple-600 to-teal-500 text-transparent bg-clip-text">
              Projects
            </span>
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
            Here are some of my recent projects. Each project is unique and
            showcases different skills and technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {project.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              variant="outline"
              onClick={() => setShowAll(!showAll)}
              className="border-purple-600 text-purple-600 hover:bg-purple-100 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-950"
            >
              {showAll ? "Show Less" : "View All Projects"}
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
