import Logo from "@/assets/Logo V1.png";
import Image from "next/image";

export default function Navigation() {
  return (
    <div className="flex justify-between w-full px-[1rem] pt-[1.25rem] pb-[1rem] ">
      <div>
        <Image className="h-[40px] w-[40px]" src={Logo} alt="PC Clinic Logo" />
      </div>
      <div className="flex gap-6 text-black items-center">
        <a
          href="#"
          className="text-black hover:text-blue-800 smooth_transition"
        >
          Home
        </a>
        <a
          href="/services"
          className="text-black hover:text-blue-800 smooth_transition"
        >
          Services
        </a>
        <a
          href="/testimonials"
          className="text-black hover:text-blue-800 smooth_transition"
        >
          Testimonials
        </a>
        <a
          href="/contact"
          className="text-black hover:text-blue-800 smooth_transition"
        >
          Contact
        </a>
        <a
          href="#"
          className="bg-blue-600 py-[7px] font-bold shadow-md px-[12px] rounded-md text-white hover:bg-blue-600 smooth_transition"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
