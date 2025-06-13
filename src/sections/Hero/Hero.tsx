import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ChevronDown,
  GitlabIcon as GitHub,
  Linkedin,
  Mail,
} from "lucide-react";
import Image from "next/image";

export default function Hero() {
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
              I build exceptional digital experiences that are fast, accessible,
              and visually appealing.
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
                src="/Image/Avatar.jpg"
                alt="Avatar"
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
  );
}
