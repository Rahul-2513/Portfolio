"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const info = [
  {
    icon: <FaPhoneAlt />,
    name: "Phone",
    description: "+91 9123456789",
  },
  {
    icon: <FaEnvelope />,
    name: "Email",
    description: "rahul@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    name: "Address",
    description: "Dhanbad, Jharkhand",
  },
];

const page = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:h-[54%] order-2 xl:order-none w-full xl:w-[800px]">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-green-400">Let's work together</h3>
              <p className="text-white/60">
                I’d love to hear about your project. Fill out the form and I’ll
                get back to you as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" />
                <Input type="text" placeholder="Lastname" />
                <Input type="email" placeholder="Email Address" />
                <Input type="tel" placeholder="Phone" />
              </div>

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web-dev">Web Development</SelectItem>
                    <SelectItem value="data">Data Analysis</SelectItem>
                    <SelectItem value="fullstack">
                      Full Stack Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea placeholder="Your message..." rows={5} />
              <Button type="submit" className="w-fit hover:bg-green-900">
                Submit
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="flex-1 flex flex-col justify-center gap-6 xl:items-start order-1 xl:order-none mb-8 xl:mb-8 xl:ml-20">
            {info.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-green-400 text-2xl bg-[#27272c] p-2 rounded-md">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-white font-semibold">{item.name}</h4>
                  <p className="text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default page;
