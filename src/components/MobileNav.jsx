"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const MobileNav = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/resume", label: "Resume" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav>
      <Sheet>
        <SheetTrigger className="flex justify-center items-center">
          <CiMenuFries className="text-[32px] text-green-400" />
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          {/* Add screen reader accessible title */}
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>

          <div className="mt-32 mb-32 text-center text-2xl">
            <Link href="/">
              <h1 className="text-4xl font-semibold">
                Rahul <span className="text-green-400">.</span>
              </h1>
            </Link>
          </div>

          <nav className="flex flex-col items-center gap-6 text-xl">
            {links.map((link, index) => (
              <Link
                href={link.href}
                key={index}
                className={`transition hover:text-green-400 ${
                  pathname === link.href ? "text-green-500 underline" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
