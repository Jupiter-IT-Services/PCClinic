"use client";

import Logo from "@/assets/Logo V1.png";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Testimonials",
    href: "/testimonials",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navigation() {
  return (
    <div className="flex justify-between w-full px-[1rem] pt-[1.25rem] pb-[1rem] ">
      <div>
        <Image className="h-[40px] w-[40px]" src={Logo} alt="PC Clinic Logo" />
      </div>
      <div className="md:flex hidden gap-6  text-black items-center">
        {links.map((l, i) => (
          <a
            href={l.href}
            key={i}
            className="text-black hover:text-blue-800 smooth_transition"
          >
            {l.name}
          </a>
        ))}

        <a
          href="#"
          className="bg-blue-600 py-[7px] font-bold shadow-md px-[12px] rounded-md text-white hover:bg-blue-600 smooth_transition"
        >
          Book Now
        </a>
      </div>
      <div className="md:hidden block">
        <BurgerMenu />
      </div>
    </div>
  );
}

function BurgerMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col h-full">
      <div
        onClick={() => setOpen(!open)}
        className="bg-blue-500 w-fit px-1 h-[80%] items-center justify-center flex gap-[4px] flex-col cursor-pointer rounded-md text-white"
      >
        <div
          className={`w-[24px] ${
            open ? "rotate-45 translate-y-[6px]" : "rotate-0"
          } smooth_transition bg-white h-[2px]`}
        ></div>
        <div
          className={`w-[24px] ${
            open ? "opacity-0" : "opacity-100"
          } smooth_transition bg-white h-[2px]`}
        ></div>
        <div
          className={`w-[24px] ${
            open ? "rotate-[-45deg] translate-y-[-6px]" : "rotate-0"
          } smooth_transition  bg-white h-[2px]`}
        ></div>
      </div>
      <motion.div
        initial={{
          y: 10,
          opacity: 0,
          pointerEvents: "none",
        }}
        animate={{
          y: open ? 0 : 10,
          opacity: open ? 1 : 0,
          pointerEvents: open ? "all" : "none",
        }}
        className="bg-gray-100 absolute top-[8%] left-0 right-0 bottom-0 z-1 w-[90%] h-fit border rounded-md outline-black/15 smooth_transition border-black/10 shadow-md p-4 mt-[1rem] flex flex-col gap-2 m-auto"
      >
        {links.map((l, i) => (
          <a
            href={l.href}
            key={i}
            className="text-black hover:text-blue-800 smooth_transition"
          >
            {l.name}
          </a>
        ))}

        <a
          href="#"
          className="bg-blue-600 py-[7px] font-bold shadow-md px-[12px] rounded-md text-white hover:bg-blue-600 smooth_transition"
        >
          Book Now
        </a>
      </motion.div>
    </div>
  );
}
