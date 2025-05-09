"use client";
import { motion } from "motion/react";

export type BoxProps = {
  children: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  className?: string;
  ey?: boolean;
  delay?: number
};
export default function Box({
  ey = true,
  ...props
}: BoxProps) {
  return (
    <motion.div
      initial={{
        y: 20,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1
      }}
      transition={{
        delay: props.delay || 0
      }}
      className={`border flex flex-col gap-3 ${ey ? "px-[2rem] py-[4rem]" : "p-[2rem]"} bg-white border-blue-500/30  hover:shadow-md shadow-sm rounded-lg ${props.className} smooth_transition`}
    >
      <div className="flex gap-3">
        {props.icon && <div className="bg-blue-600/30 p-2 h-fit text-blue-600 rounded-full">
          {props.icon}
        </div>}
        {props.title && <h1 className="font-bold text-2xl">{props.title}</h1>}
      </div>
      <p>{props.children}</p>
    </motion.div>
  );
}
