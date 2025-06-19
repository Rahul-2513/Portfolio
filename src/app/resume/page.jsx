"use client";

import "devicon/devicon.min.css";
import {
  FaCode,
  FaCuttlefish,
  FaPython,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaTools,
  FaChartBar,
} from "react-icons/fa";
import {
  SiNumpy,
  SiPandas,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
} from "react-icons/si";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About me",
  description:
    "Hi, I’m Rahul — a software developer passionate about building efficient and user-friendly web applications. I work with technologies like React, Node.js, MySQL, and Python to bring ideas to life. I enjoy solving real-world problems through clean code and continuous learning. Currently, I’m exploring TypeScript and integrating payment systems like Razorpay and Stripe.",
  info: [
    { fieldName: "Name", fieldValue: "Rahul" },
    { fieldName: "Phone", fieldValue: "+91 9134567890" },
    { fieldName: "Experience", fieldValue: "Fresher" },
    { fieldName: "Nationality", fieldValue: "Indian" },
    { fieldName: "Email", fieldValue: "rahul@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Hindi" },
    { fieldName: "Location", fieldValue: "Dhanbad, Jharkhand, India" },
    {
      fieldName: "Education",
      fieldValue: "B.Tech in Computer Science, BIT Mesra",
    },
    {
      fieldName: "Skills",
      fieldValue:
        "C++, JavaScript, React, Node.js, MySQL, Python, C, HTML, CSS, Tailwind CSS, Express.js, MongoDB, Numpy, Pandas, Matplotlib, Next.js",
    },
    { fieldName: "GitHub", fieldValue: "https://github.com/Rahul-2513" },
    {
      fieldName: "LinkedIn",
      fieldValue: "https://www.linkedin.com/in/rahul-kumar-a363bb215/",
    },
  ],
};

const experience = {
  title: "My Experience",
  description:
    "While I haven't worked in a formal job yet, I’ve gained hands-on experience by building real-world web applications. I’m confident in my full-stack skills and always ready to take on professional challenges.",
  items: [
    {
      company: "Freelancer",
      role: "Full-Stack Developer",
      duration: "Available",
      details: [
        "Building full-stack web apps using React, Node.js, and MySQL.",
        "Integrating payment systems like Razorpay and Stripe.",
        "Exploring TypeScript, API design, and deployment workflows.",
      ],
    },
  ],
};

const education = {
  title: "My Education",
  description:
    "My academic journey has helped me build a strong foundation in computer science and analytical thinking. From mastering core subjects in school to diving into software development in college, I’m continuously learning and evolving.",
  items: [
    {
      institution: "Birla Institute of Technology, Mesra",
      degree: "B.Tech in Computer Science and Engineering",
      duration: "2023 – 2027",
      details: [
        "Currently pursuing core subjects like Data Structures, Web Development, and Operating Systems.",
        "Building real-world projects and exploring new technologies like TypeScript and backend APIs.",
      ],
    },
    {
      institution: "DAV Public School, Alkusa",
      degree: "12th – PCM (Physics, Chemistry, Mathematics)",
      duration: "2021 – 2022",
      details: [
        "Focused on mathematics and logical reasoning, laying the foundation for programming.",
        "Completed studies under CBSE curriculum with a focus on science and problem solving.",
      ],
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Technologies and tools I use to build efficient and scalable applications.",
  items: [
    { icon: <FaCuttlefish />, name: "C" },
    {
      icon: <i className="devicon-cplusplus-plain  text-4xl"></i>,
      name: "C++",
    },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaDatabase />, name: "MySQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaTools />, name: "VS Code" },
    {
      icon: <FaChartBar className="text-green-400 text-4xl" />,
      name: "Matplotlib",
    },
  ],
};

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <div>
              <div className="text-4xl mb-4">Why Hire me?</div>
              <p className="text-white/70 mb-2">
                As a fresher, I bring a solid foundation in full-stack
                development, a passion for problem-solving, and eagerness to
                learn and grow. I'm excited to contribute to real projects,
                collaborate with teams, and deliver clean, efficient solutions.
              </p>
            </div>
            <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
            </TabsList>
          </div>

          <div className="min-h-[70vh] w-full">
            {/* EXPERIENCE */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-green-400">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.role}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[245px] py-6 px-8 rounded-xl flex flex-col justify-start gap-2"
                      >
                        <span className="text-green-400 text-sm">
                          {item.duration}
                        </span>
                        <h4 className="text-lg font-semibold">
                          {item.institution}
                        </h4>
                        <p className="text-white/80 text-sm italic">
                          {item.degree}
                        </p>
                        <ul className="text-sm text-white/60 list-disc pl-5 mt-2">
                          {item.details.map((detail, i) => (
                            <li key={i}>{detail}</li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center mt-8">
                  <TooltipProvider>
                    {skills.items.map((skill, index) => (
                      <Tooltip key={index}>
                        <TooltipTrigger asChild>
                          <div className="text-4xl text-green-400 hover:scale-110 transition-all bg-[#232329] rounded-md p-2">
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </TooltipProvider>
                </div>
              </div>
            </TabsContent>

            {/* ABOUT */}
            <TabsContent value="about">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ScrollArea className="h-[400px] mt-4">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {about.info.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-4 px-6 rounded-xl flex flex-col"
                      >
                        <span className="text-green-400 font-medium">
                          {item.fieldName}
                        </span>
                        <span className="text-white/80 text-sm break-words">
                          {item.fieldValue}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default page;
