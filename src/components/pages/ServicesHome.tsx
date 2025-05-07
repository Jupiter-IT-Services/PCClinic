import { CircleFadingArrowUp, ShieldPlus, Stethoscope, Wrench } from "lucide-react"
import Box from "../Box"
import Button from "../Button"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"

const SERVICES = [
    {
        name: "Hardware Repairs",
        icon: <Wrench />,
        description: "From screen replacements to motherboard repairs, we fix all hardware issues."
    },
    {
        name: "Software Solutions",
        icon: <ShieldPlus />,
        description: "Virus removal, OS installation, and software troubleshooting services."
    },
    {
        name: "System Upgrades",
        icon: <CircleFadingArrowUp />,
        description: "Boost your device's performance with our professional upgrade services."
    },
    {
        name: "Diagnostics",
        icon: <Stethoscope />,
        description: "Get instant and reliable diagnostics for all your devices from out specialized team."
    }
]

export default function ServicesHome() {
    return (
        <div className="flex items-center justify-center w-full mb-[2rem]">
            <div className="flex flex-col items-center justify-center">
                <div className="flex md:flex-row flex-col gap-3  mb-[2rem] w-[85%] mt-[2rem]">
                    {SERVICES.map((s, i) => <Box className="p-[2rem]" delay={0.12 * i} key={i} title={s.name} icon={s.icon}>{s.description}</Box>)}
                </div>
                <Button href="/services" variant="secondary" className="md:w-[20%] mt-[2rem] w-full max-w-[70%]" icon={<ArrowTopRightIcon />}>
                    Learn More
                </Button>
            </div>
        </div>
    )
}