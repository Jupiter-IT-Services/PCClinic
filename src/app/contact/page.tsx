"use client";
import Button from "@/components/Button";
import GoogleMap from "@/components/Map";
import { ArrowDown, ChevronDown, Clock, MailSearch, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const issueTypes = [
    "Motherboard Repair",
    "Broken Screen",
    "Battery Replacement",
    "Other"
]


export default function Contact() {
    return (
        <div className="flex flex-col gap-3">
            <div className="w-full bg-blue-600 text-white py-[6rem] flex items-center justify-center flex-col gap-3-">
                <motion.h1 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="font-black text-4xl">Contact Us</motion.h1>
                <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.12 }}>Get in touch with our team for all your computer repair needs</motion.p>
            </div>
            <div className="flex gap-2 mt-[2rem] px-[2rem]">
                <div className="w-[48%]">
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="border flex flex-col gap-4 border-black/5 shadow-sm px-[2rem] py-[2.5rem] rounded-md">
                        <div className="flex gap-2">
                            <Input name="First Name" />
                            <Input name="Last Name" />
                        </div>
                        <div className="flex gap-2">
                            <Input name="Phonenumber" type="tel" />
                            <Input name="Email" type="email" />
                        </div>
                        <Dropdown />
                        <div className="flex flex-col gap-1 w-full">
                            <p className="opacity-70">Describe Issue</p>
                            <textarea className={`bg-gray-100 border rounded-md outline-black/15 smooth_transition border-black/10 shadow-sm py-2 px-4 min-h-[300px]`} />
                        </div>
                        <PreferedContactType />

                        <Button variant="secondary" className="mt-3">Send Message</Button>
                    </motion.div>
                </div>

                <div className="w-[48%]">
                    <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.45 }} className="border flex flex-col gap-4 border-black/5 shadow-sm px-[2rem] py-[2.5rem] rounded-md">
                        <h1 className="font-bold">Contact Information</h1>

                        <div className="flex flex-col gap-3 mt-[0.6rem] ">
                            <div className="flex gap-2">
                                <MapPin className="text-blue-600" />
                                <p className="max-w-[300px]">PC Clinic, Burton and South Derbyshire College Lichfield Street, Burton-on-Trent DE14 3RL</p>
                            </div>
                            <div className="flex gap-2">
                                <Phone className="text-blue-600" />
                                <p className="max-w-[300px]">01283 494400</p>
                            </div>
                            <div className="flex gap-2">
                                <MailSearch className="text-blue-600" />
                                <p className="max-w-[300px]">pcclinic@bsdc.ac.uk</p>
                            </div>
                            <div className="flex gap-2">
                                <Clock className="text-blue-600" />
                                <p className="max-w-[300px]">Monday - Friday: 9:00 AM - 5:00 PM<br/>Saturday - Sunday: Closed</p>
                            </div>
                        </div>
                        <div className="mt-[2rem]">
                            <GoogleMap/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

function Input(props: { name: string, className?: string; type?: string }) {
    return (
        <div className="flex flex-col gap-1 w-full">
            <p className="opacity-70">{props.name}</p>
            <input className={`bg-gray-100 border rounded-md outline-black/15 smooth_transition border-black/10 shadow-sm py-2 px-4 ${props.className}`} type={props.type || "text"} />
        </div>
    )
}

function Dropdown() {
    const [open, setOpen] = useState(false)
    const [issue, setIssue] = useState<string | null>()
    return (
        <div className="relative">
            <p className="opacity-70 mb-1">Issue Type</p>
            <div onClick={() => setOpen(!open)} className="bg-gray-100 cursor-pointer border rounded-md outline-black/15 smooth_transition border-black/10 shadow-sm py-2 px-4 flex justify-between items-center ">
                <p className="opacity-70 text-sm">{issue ? issue : "Pick An Issue"}</p>
                <ChevronDown className={`h-[15px] w-[15px] ${open ? "rotate-180" : "rotate-0"} smooth_transition`} />
            </div>

            <motion.div initial={{
                y: 10,
                opacity: 0,
                pointerEvents: "none"
            }} animate={{
                y: open ? 0 : 10,
                opacity: open ? 1 : 0,
                pointerEvents: open ? "all" : "none"
            }} className="bg-gray-100 z-1 absolute w-full border rounded-md outline-black/15 smooth_transition border-black/10 shadow-sm p-4 mt-[1rem] flex flex-col gap-2">
                {issueTypes.map((z, i) => <div className="cursor-pointer px-2 py-2 bg-gray-200 rounded-md hover:bg-gray-300 smooth_transition" onClick={() => {
                    setOpen(false)
                    setIssue(z)
                }} key={i} >{z}</div>)}
            </motion.div>
        </div>
    )
}


function PreferedContactType() {
    const [type, setType] = useState<"email" | "phone">("email")
    return (
        <div className="flex flex-col gap-4 w-full">
            <p className="opacity-70">Prefered Contact Type</p>

            <div className="flex gap-8">
                <div className="flex gap-2 items-center">
                    <div onClick={() => setType("email")} className="border cursor-pointer w-[20px] h-[20px] flex items-center justify-center border-black rounded-md">
                        {type === "email" && <div className="bg-blue-600 h-[10px] w-[10px] rounded-full flex" />}
                    </div>
                    <p className="text-sm font-semibold">Email</p>
                </div>
                <div className="flex gap-2 items-center">
                    <div onClick={() => setType("phone")} className="border cursor-pointer w-[20px] h-[20px] flex items-center justify-center border-black rounded-md">
                        {type === "phone" && <div className="bg-blue-600 h-[10px] w-[10px] rounded-full flex" />}
                    </div>
                    <p className="text-sm font-semibold">Phone</p>
                </div>
            </div>
        </div>
    )
}