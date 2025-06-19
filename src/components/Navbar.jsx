"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/resume", label: "Resume" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="pt-1 flex gap-10">
      {links.map(({ href, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={href}
            href={href}
            className={`text-lg  hover:underline   ${
              isActive
                ? "text-green-500  underline capitalize font-medium transition-all"
                : "text-gray-700"
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
