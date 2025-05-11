"use client";
import { motion } from "motion/react"
import { Star } from "lucide-react";
import Box from "../Box";

export type Review = {
    name: string;
    tag: string;
    review: number;
    message: string;
}
export const reviews: Review[] = []

for (let i = 0; i < 8; i++) {
    const n = Math.floor(Math.random() * 5) + 1

    reviews.push({
        name: "John Doe",
        tag: "student",
        review: n > 5 ? 5 : n,
        message: "The PC Clinic team fixed my laptop when I thought it was beyond repair. The screen was completely shattered and I was worried I'd lost all my coursework. Not only did they replace the screen quickly, but they also recovered all my data. Fast service and very professional!"
    })
}

export default function Reviews() {
    return (

        <div className="mt-[7rem]">
            <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-black text-4xl text-center">Customer Testimonials</motion.h1>
            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 0.7 }} transition={{ delay: 0.12 }} className="opacity-70 text-center">See what our satisfied customers have to say about our services</motion.p>
            <div className="md:flex flex flex-col md:flex-row gap-3 md:flex-wrap items-center justify-center mt-[4rem]">
                {reviews.map((r, i) => <Box className="md:w-[23%] w-[90%]" delay={0.12 * i} ey={false} key={i}>
                    <h1 suppressHydrationWarning className="font-bold text-2xl">{r.name}</h1>
                    <p suppressHydrationWarning className="opacity-70 italic">{r.tag}</p>
                    <div suppressHydrationWarning className="flex gap-1 mt-3">
                        {Array(r.review).fill(0).map((_, i) => <Star className="text-amber-400" key={i} />)}
                    </div>
                    <p className="mt-4">{r.message}</p>
                </Box>)}
            </div>
        </div>

    )

}