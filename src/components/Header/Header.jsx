"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-teal-500 text-transparent bg-clip-text"
        >
          Dev<span className="text-amber-500">Portfolio</span>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-6">
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-colors ${
                activeSection === item
                  ? "text-purple-600 dark:text-purple-400 font-medium"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item}
            </motion.button>
          ))}

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex gap-2 items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isMenuOpen && (
        <motion.nav
          className="md:hidden flex flex-col items-center space-y-4 bg-white dark:bg-gray-900 p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {["home", "about", "projects", "skills", "contact"].map((item) => (
            <motion.button
              key={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                scrollToSection(item);
                setIsMenuOpen(false);
              }}
              className={`capitalize ${
                activeSection === item
                  ? "text-purple-600 dark:text-purple-400 font-medium"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              {item}
            </motion.button>
          ))}
        </motion.nav>
      )}
    </header>
  );
}
