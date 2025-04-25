"use client";

import { motion } from "framer-motion";
import { GitlabIcon as GitHub, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 text-transparent bg-clip-text">
              Dev<span className="text-amber-500">Portfolio</span>
            </div>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating beautiful digital experiences that make a difference.
            </p>
          </div>

          <div className="flex gap-6">
            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com/Pheonix999777/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <GitHub size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <Linkedin size={20} />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="mailto:contact@example.com"
              className="text-gray-400 hover:text-purple-400"
            >
              <Mail size={20} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}
