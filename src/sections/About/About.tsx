import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
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
            About
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
              src="/Image/Avatar 2.jpg"
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
              Frontend Developer based in Tashkent
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m a passionate frontend developer with 1.2 years of
              experience creating beautiful, functional, and user-centered
              digital experiences. I am always looking to learn new technologies
              and stay on top of the latest trends.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              With a strong foundation in JavaScript and modern frameworks like
              React and Next.js, I build applications that are not only
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
  );
}
