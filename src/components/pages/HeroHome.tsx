import Image from "next/image";
import HeroLogo from "@/assets/HeroLogoBlob.png";
import { ExternalLinkIcon } from "@radix-ui/react-icons";

export default function HeroHome() {
  return (
    <div className="w-full h-[70vh] p-[3rem] flex items-center justify-center  bg-blue-600 text-white">
      <div className="flex w-[80%] gap-3 items-center justify-between ">
        <div className="flex flex-col gap-2 max-w-[700px]">
          <h1 className="text-6xl font-black">
            Expert Computer Repair Services For You
          </h1>
          <p className="opacity-70">
            Professional and affordable repairs for laptops, desktops, and
            phones. Hardware and software, all fixable at PC Clinic
          </p>
          <div className="flex gap-2 mt-4 font-bold">
            <a
              href="#"
              className="shadow-md flex gap-3 bg-white p-[12px] rounded-md text-blue-600 items-center justify-center w-[60%] hover:gap-6 smooth_transition"
            >
              Book a Repair <ExternalLinkIcon />
            </a>
            <a
              href="#"
              className="shadow-md flex gap-3 bg-white p-[12px] rounded-md text-black items-center justify-center w-[40%]"
            >
              Contact Us Now
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-w-[335px] max-h-[335px]">
          <Image src={HeroLogo} alt="Icon showing repaired computers." />
        </div>
      </div>
    </div>
  );
}
