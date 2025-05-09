"use client";

import { CircleFadingArrowUp, Construction, ShieldPlus, ShieldPlusIcon, Stethoscope, UploadIcon, Wrench } from "lucide-react";
import Box from "../Box";
import { motion } from "motion/react";

const SERVICES = [
    {
        title: "Tablet Repairs",
        icon: <Stethoscope />,
        children: "Screen replacements, battery issues, charging port repairs for iPads and Android tablets."
    },
    {
        title: "Maintenance Services",
        icon: <Construction />,
        children: "Boost your device's performance with our Regular maintenance, cleaning, and optimization to keep your devices running smoothly. upgrade services."
    },
    {
        title: "Diagnostics",
        icon: <Stethoscope />,
        children: "Get instant and reliable diagnostics for all your devices from out specialized team."
    },
    {
        title: "Laptop Repairs",
        icon: <Wrench />,
        children: "Screen replacements, keyboard repairs, battery replacements, and more for all laptop brands."
    },
    {
        title: "Software Solutions",
        icon: <ShieldPlus />,
        children: "Virus removal, operating system installation, data recovery, and software troubleshooting."
    },
    {
        title: "Phone Repairs",
        icon: <Wrench />,
        children: "Screen replacements, battery replacements, water damage recovery for all smartphone brands."
    },
    {
        title: "Desktop Repairs",
        icon: <ShieldPlus />,
        children: "Hardware troubleshooting, component replacements, custom builds, and performance upgrades."
    },
    {
        title: "System Upgrades",
        icon: <CircleFadingArrowUp />,
        children: "Boost your device's performance with our professional upgrade services."
    }
]

export default function HeroServices() {
    return (
        <div className="flex flex-col items-center justify-center mt-[6rem] mb-[4rem]">
            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-bold text-4xl">Services</motion.h1>
            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 0.7 }} transition={{ delay: 0.12 }} className="opacity-70 max-w-[300px]  md:max-w-full">Professional computer repair and maintenance services for all your devices</motion.p>

            <div className="md:grid md:grid-cols-4 flex flex-col px-[4rem] gap-3 mt-[2rem]">
                {SERVICES.map((s, i) => <Box delay={0.12 * i} {...s} key={i} />)}
            </div>
        </div>
    )
}