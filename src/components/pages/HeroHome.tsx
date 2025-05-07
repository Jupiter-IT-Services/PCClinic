"use client";
import Image from "next/image";
import { motion } from "motion/react";
import HeroLogo from "@/assets/HeroLogoBlob.png";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function HeroHome() {
  return (
    <div className="w-full h-[70vh] p-[3rem] flex items-center justify-center  bg-blue-600 text-white">
      <div className="flex md:w-[80%] w-full gap-3 items-center justify-between ">
        <div className="flex flex-col gap-2 max-w-[700px]">
          <motion.h1 initial={{ y: 10, opacity: 0}} animate={{ y: 0, opacity: 1}} className="md:text-6xl md:mb-0 mb-[1rem] text-4xl font-black">
            Expert Computer Repair Services For You
          </motion.h1>
          <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 0.7 }} transition={{ delay: 0.12}} className="opacity-70">
            Professional and affordable repairs for laptops, desktops, and
            phones. Hardware and software, all fixable at PC Clinic
          </motion.p>
          <div className="flex md:flex-row flex-col gap-2 mt-4 font-bold">
            <motion.a
              initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }}
              href="#"
              className="shadow-md flex gap-3 bg-white p-[12px] rounded-md text-blue-600 items-center justify-center w-full md:w-[60%] hover:gap-6 smooth_transition"
            >
              Book a Repair <ExternalLinkIcon />
            </motion.a>
            <motion.a
              initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}
              href="#"
              className="shadow-md flex gap-3 bg-white p-[12px] rounded-md text-black items-center justify-center w-full md:w-[40%]"
            >
              Contact Us Now
            </motion.a>
          </div>
        </div>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.45 }} className=" flex-col gap-2 max-w-[335px] max-h-[335px] md:flex hidden">
          <Image src={HeroLogo} alt="Icon showing repaired computers." />
        </motion.div>
      </div>
    </div>
  );
}
