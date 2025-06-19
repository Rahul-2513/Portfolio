"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import { CardSpotlight } from "../components/ui/card-spotlight";


const content = [
  {
    title: "Frontend Development",
    description:
      "I build responsive and interactive UIs using React, Tailwind CSS, and Framer Motion. Ensuring performance, accessibility, and modern design.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-500 to-purple-500 text-white text-xl font-semibold">
        React + Tailwind UI Design
      </div>
    ),
  },
  {
    title: "Backend Development",
    description:
      "I create robust REST APIs with Node.js and Express, integrate databases like MongoDB and MySQL, and handle authentication and business logic.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900 text-white text-xl font-semibold">
        Node.js + Express + DB Integration
      </div>
    ),
  },
  {
    title: "Full-Stack Project Development",
    description:
      "From planning to deployment, I can handle complete full-stack projects with modern tools, CI/CD, and best practices.",
    content: (
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Dark overlay to keep white text visible */}
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 text-white text-xl font-semibold">
          MERN Stack Apps & Deployment
        </div>
      </div>
    ),
  },

  {
    title: "API & Payment Integration",
    description:
      "I integrate third-party APIs like Razorpay, Stripe, and Google Maps to make your applications fully functional and business-ready.",
    content: (
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Dark overlay to keep white text visible */}
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 text-white text-xl font-semibold">
          Razorpay / Stripe Integration
        </div>
      </div>
    ),
  },
  {
    title: "Data Analysis & Visualization",
    description:
      "I analyze data using Python, NumPy, Pandas, and Matplotlib to uncover insights and create powerful visualizations that support decision-making and reporting.",
    content: (
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Dark overlay to keep white text visible */}
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="relative z-10 text-white text-xl font-semibold">
          Python | Pandas | Matplotlib
        </div>
      </div>
    ),
  },

  {
    content: (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-yellow-500 to-orange-500 text-white text-xl font-semibold"></div>
    ),
  },
];

export function StickyRoll() {
  return (
    <div className="w-full py-4 ">
      {" "}
      {/* Ensures last block is fully visible */}
      <StickyScroll content={content} />
    </div>
  );
}
