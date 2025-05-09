import { CheckCircle } from "lucide-react";
import Button from "../Button";

const PRICES = [
  {
    name: "Diagnosis",
    price: "FREE",
    features: [
      "Comprehensive device evaluation",
      "Problem identification",
      "Repair cost estimate",
    ],
    mp: false,
  },
  {
    name: "Standard Repair",
    price: "£25-45",
    features: [
      "Software troubleshooting",
      "Virus & malware removal",
      "Basic hardware repairs",
      "System optimization",
      "3-month warranty",
    ],
    mp: true,
  },
  {
    name: "Advanced Repairs",
    price: "£65-120",
    features: [
      "Motherboard repairs",
      "Screen replacements",
      "Data recovery",
      "Hardware upgrades",
      "6-month warranty",
    ],
    mp: false,
  },
];

export type PricingCardProps = {
  name: string;
  price: string;
  features: string[];
  mp: boolean;
};
export function PricingCard(props: PricingCardProps) {
  return (
    <div
      className={`${props.mp ? "text-white bg-blue-600" : "text-blue-600 bg-white"
        } shadow-md rounded-lg p-[2rem] w-[90%] mid:w-[20vw] flex flex-col items-center justify-center relative`}
    >
      {props.mp && (
        <div className="absolute top-[-5%] left-[50%] font-semibold h-fit w-fit right-0 bottom-0 bg-blue-300 text-blue-700 py-2 px-5 rounded-md">
          Most Popular
        </div>
      )}
      <h1
        className={`${props.mp ? "text-white" : "text-black"
          } font-bold text-xl`}
      >
        {props.name}
      </h1>
      <h1 className="font-black text-5xl mt-2">{props.price}</h1>

      <div className="flex flex-col gap-2 mt-[2rem] items-start">
        {props.features.map((z, i) => (
          <div key={i} className="flex gap-3">
            <CheckCircle /> <p className="text-sm">{z}</p>
          </div>
        ))}
      </div>

      <Button
        variant={props.mp ? "default" : "secondary"}
        href="#"
        className="w-full mt-[2rem]"
      >
        Book Now
      </Button>
    </div>
  );
}

export default function Pricing() {
  return (
    <div className="flex md:flex-row flex-col gap-3 justify-center items-center mt-[3rem]">
      {PRICES.map((s, i) => (
        <PricingCard {...s} key={i} />
      ))}
    </div>
  );
}
