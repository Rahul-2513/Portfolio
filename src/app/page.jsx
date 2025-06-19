"use client";

import {
  ArrowDownToLine,
  Github,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import {ColourfulText} from "../components/ui/colourful-text";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 xl:px-0">
        {/* Main Flex Row */}
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-16 xl:pb-24 gap-10">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center xl:text-left order-2 xl:order-none">
            <h6 className="text-green-500 text-sm uppercase tracking-widest">
              Software Developer
            </h6>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hello, I'm{" "}
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { delay: 1, duration: 0.4, ease: "easeIn" },
                }}
              >
                <div>
                  {" "}
                  <ColourfulText text="Rahul" />
                </div>
              </motion.span>
            </h1>

            <p className="text-gray-300 max-w-xl mx-auto xl:mx-0">
              A passionate software developer skilled in building full-stack web
              applications. I love turning ideas into reality through clean,
              efficient code.
            </p>

            {/* Buttons and Socials */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a
                href="/RAHUL RESUME.pdf"
                download
                className="border border-green-300 rounded-full px-6 py-2 flex items-center gap-2 text-green-300 hover:bg-green-300 hover:text-black transition"
              >
                Download CV <ArrowDownToLine className="w-5 h-5" />
              </a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/Rahul-2513"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                >
                  <Github className="w-8 h-8 border border-green-300 rounded-full p-1 text-green-300 hover:bg-green-300 hover:text-black cursor-pointer transition" />
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-kumar-a363bb215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                >
                  <Linkedin className="w-8 h-8 border border-green-300 rounded-full p-1 text-green-300 hover:bg-green-300 hover:text-black cursor-pointer transition" />
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                >
                  <Youtube className="w-8 h-8 border border-green-300 rounded-full p-1 text-green-300 hover:bg-green-300 hover:text-black cursor-pointer transition" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Twitter"
                >
                  <Twitter className="w-8 h-8 border border-green-300 rounded-full p-1 text-green-300 hover:bg-green-300 hover:text-black cursor-pointer transition" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className=" order-1 xl:order-none">
            <Photo />
          </div>
        </div>

        {/* CountUp Block */}
        <div className="flex flex-wrap justify-center gap-20 mt-10">
          {/* Years of Experience */}
          <div className="flex items-center gap-4">
            <CountUp
              className="text-4xl font-bold text-green-600"
              end={12}
              duration={9}
              delay={2}
            />
            <p className="text-sm text-gray-500 leading-tight">
              Years of <br />
              Experience
            </p>
          </div>

          {/* Projects Completed */}
          <div className="flex items-center gap-4">
            <CountUp
              className="text-4xl font-bold text-green-600"
              end={6}
              duration={9}
              delay={2}
            />
            <p className="text-sm text-gray-500 leading-tight">
              Projects <br />
              Completed
            </p>
          </div>

          {/* Technologies Mastered */}
          <div className="flex items-center gap-3">
            <CountUp
              className="text-4xl font-bold text-green-600"
              end={8}
              duration={9}
              delay={2}
            />
            <p className="text-sm text-gray-500 leading-tight">
              Technologies <br />
              Mastered
            </p>
          </div>

          {/* Code Commits */}
          <div className="flex items-center gap-4">
            <CountUp
              className="text-4xl font-bold text-green-600"
              end={500}
              duration={4}
              delay={2}
            />
            <p className="text-sm text-gray-500 leading-tight">
              Code <br />
              Commits
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
