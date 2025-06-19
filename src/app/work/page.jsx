import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import React from "react";

const page = () => {
  const projects = [
    {
      quote:
        "An e-commerce website for sunglasses featuring product listings, cart system, admin dashboard, and integrated Razorpay/Stripe payments.",
      name: "Lens-Star",
      designation: "React, Node.js, Express, MySQL, Stripe",
      src: "/image1.png",
      rotate: -5,
      github: "https://github.com/Rahul-2513/Lens-Star",
    },
    {
      quote:
        "A modern personal portfolio to showcase my skills, projects, and contact info with smooth UI animations.",
      name: "Portfolio Website",
      designation: "Next.js, Tailwind CSS, Framer Motion",
      src: "/image3.png",
      rotate: 2,
    },

    {
      quote:
        "A React-based utility app that lets users generate strong, customizable passwords instantly.",
      name: "Password Generator",
      designation: "React, Tailwind CSS",
      src: "/image4.png",
      rotate: 6,
    },
  ];

  return <AnimatedTestimonials testimonials={projects} />;
};

export default page;
