"use client";

import { motion } from "framer-motion";
import {
  ChevronDown,
  GitlabIcon as GitHub,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectCard } from "@/components/Project-Card/ProjectCard";
import Contact from "@/components/Contact/Contact";
import { ProjectData, SkillsData } from "@/lib/data";
import Avatar from "/public/Image/Avatar.jpg";
import Avatar2 from "/public/Image/Avatar 2.jpg";
import { useState } from "react";

export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const skills = SkillsData;

  const project = ProjectData;

  const visibleProjects = showAll ? project : project.slice(0, 6);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-teal-50 dark:from-purple-950 dark:to-teal-950">
      <main>
        <section id="home" className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1"
              >
                <Badge className="mb-4 bg-amber-500 hover:bg-amber-600">
                  Available for hire
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  <span className="block">Hi, I&apos;m</span>
                  <span className="bg-gradient-to-r from-purple-600 to-teal-500 text-transparent bg-clip-text">
                    Usmon Developer
                  </span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
                  Frontend Developer & UI/UX Enthusiast
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-lg">
                  I build exceptional digital experiences that are fast,
                  accessible, and visually appealing.
                </p>
                <div className="flex gap-4">
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-purple-600 hover:bg-purple-700 text-white"
                  >
                    Contact Me
                  </Button>
                  <Button
                    onClick={() => scrollToSection("projects")}
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-100 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-950"
                  >
                    View Projects
                  </Button>
                </div>
                <div className="flex gap-4 mt-8">
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="https://github.com/Pheonix999777/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    <GitHub size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -5 }}
                    href="mailto:Pheonix4777@gmail.com"
                    className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400"
                  >
                    <Mail size={24} />
                  </motion.a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex justify-center"
              >
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-600 dark:border-purple-400">
                  <Image
                    src={Avatar}
                    alt="John Developer"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="flex justify-center mt-16"
            >
              <motion.button
                onClick={() => scrollToSection("about")}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="text-gray-600 dark:text-gray-300"
              >
                <ChevronDown size={32} />
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                About{" "}
                <span className="bg-gradient-to-r from-purple-600 to-teal-500 text-transparent bg-clip-text">
                  Me
                </span>
              </h2>
              <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <Image
                  src={Avatar2}
                  alt="About me"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex-1"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                  Frontend Developer based in New York
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  I&apos;m a passionate frontend developer with 1.2 years of
                  experience creating beautiful, functional, and user-centered
                  digital experiences. I am always looking to learn new
                  technologies and stay on top of the latest trends.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  With a strong foundation in JavaScript and modern frameworks
                  like React and Next.js, I build applications that are not only
                  functional but also intuitive and responsive.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200">
                      Name:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">Usmon</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200">
                      Email:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Pheonix4777@gmail.com
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200">
                      Location:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Uzbekistan, Tashkent
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200">
                      Availability:
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Freelance & Full-time
                    </p>
                  </div>
                </div>

                <Button
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/Resume.pdf";
                    link.setAttribute("download", "resume.pdf");
                    link.click();
                  }}
                >
                  Download Resume
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
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

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
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
                  Skills
                </span>
              </h2>
              <div className="h-1 w-20 bg-amber-500 mx-auto"></div>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mt-4">
                I&apos;ve worked with a variety of technologies in the web
                development world. Here are my main areas of expertise:
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                        {skillGroup.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            className="bg-teal-100 text-teal-800 hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-100 dark:hover:bg-teal-800"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <Contact />
      </main>
    </div>
  );
}
