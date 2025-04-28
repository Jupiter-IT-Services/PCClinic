import { StopwatchIcon } from "@radix-ui/react-icons";
import { HardHat, MapPin, TimerReset } from "lucide-react";
import Box from "../Box";

const REASONS = [
    {
        name: "Expert Technicians",
        icon: <HardHat />,
        description:
            "Our team consists of skilled student technicians supervised by industry professionals.",
    },
    {
        name: "Quick Turnaround",
        icon: <TimerReset />,
        description:
            "We understand the importance of your devices and strive to provide fast repair services.",
    },
    {
        name: "Easy and Convenient Location",
        icon: <MapPin />,
        description:
            "Located at Burton and South Derbyshire College, easily accessible for students and the public.",
    },
];

export default function WhyHome() {
    return (
        <div className="min-h-[35vh] bg-gray-100 mt-[8rem] flex flex-col gap-4 py-[2rem]">
            <h1 className="font-bold text-2xl flex items-center justify-center mt-[2rem]">
                Why Pick Us?
            </h1>
            <div className="w-full flex items-center justify-center">
                {" "}
                <div className="flex gap-3 mt-[2rem] w-[80%] mb-[8rem]">
                    {REASONS.map((r, i) => (
                        <Box key={i} icon={r.icon} title={r.name}>
                            {r.description}
                        </Box>
                    ))}
                </div>
            </div>
        </div>
    );
}
