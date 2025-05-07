"use client";
import { motion } from "motion/react"

export type DashProps = {
    text: string;
    className?: string;
    about?: string;
    transition?: boolean;
}

export default function Dash(props: DashProps) {
    return (
        <div className={`flex flex-col items-center justify-center gap-3 w-full px-[1rem] ${props.className}`}>
            <div className={`flex items-center w-full justify-center gap-3`}>
                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="bg-gradient-to-r from-transparent to-blue-500 w-[40%] h-[1px]" />
                <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }}  className="font-bold text-2xl">{props.text}</motion.p>
                <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}  className="bg-gradient-to-l from-transparent to-blue-500 w-[40%] h-[1px]" />
            </div>
            <div >
                <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 0.7 }} transition={{ delay: 0.25 }} className="opacity-70">{props.about}</motion.p>
            </div>
        </div>
    )
}