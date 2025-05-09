"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import Button from "../Button";

export default function LeaveReview() {

    return (
        <div className="flex flex-col w-full items-center justify-center mt-[6rem]">
            <h1 className="font-black text-4xl text-center mb-[4rem]">Leave us a review</h1>
            <div className="flex flex-col gap-4 w-[90%] md:w-[1000px]">
                <div className="flex md:flex-row flex-col w-full gap-2 mb-2">
                    <Input className="w-full" name={"Full Name"} />
                    <Input className="w-full" name={"Occupation"} />
                </div>
                <ReviewStars />
                <div className="flex flex-col gap-1 mt-2">
                    <p className="opacity-70">Message</p>
                    <textarea className="bg-gray-100 border rounded-md outline-black/15 smooth_transition border-black/10 shadow-sm py-2 px-4 min-h-[400px]" />
                </div>

                <Button variant="secondary" className="mt-[1.5rem]">Submit Review</Button>
            </div>

        </div>
    )
}

function Input(props: { name: string, className?: string; }) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <p className="opacity-70">{props.name}</p>
            <input className={`bg-gray-100 border rounded-md outline-black/15 smooth_transition border-black/10 shadow-sm py-2 px-4 ${props.className}`} type="text" />
        </div>
    )
}

function ReviewStars() {
    const [reviews, setReviews] = useState(0)
    return (
        <div className="flex flex-col gap-1 w-full">
            <p className="opacity-70">Review</p>
            <div className="flex gap-1">
                {Array(5).fill(0).map((_, i) => {
                    const isGold = (i + 1) <= reviews
                    return <Star
                        key={i}
                        onClick={() => setReviews(i + 1)}
                        className={`${isGold ? "text-amber-500" : "text-black/50"} cursor-pointer smooth_transition`} />
                })}
            </div>
        </div>
    )
}