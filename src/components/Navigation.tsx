import Logo from "@/assets/Logo V1.png";
import Image from "next/image";

const links = [
  {
    name: "Home",
    href: "/"
  },
  {
    name: "Services",
    href: "/services"
  },
  {
    name: "Testimonials",
    href: "/testimonials"
  },
  {
    name: "Contact",
    href: "/contact"
  }
]

export default function Navigation() {
  return (
    <div className="flex justify-between w-full px-[1rem] pt-[1.25rem] pb-[1rem] ">
      <div>
        <Image className="h-[40px] w-[40px]" src={Logo} alt="PC Clinic Logo" />
      </div>
      <div className="flex gap-6 text-black items-center">
        {links.map((l, i) => <a
          href={l.href}
          key={i}
          className="text-black hover:text-blue-800 smooth_transition"
        >
          {l.name}
        </a>)}

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


function BurgerMenu() {
  return (
    <div>

    </div>
  )
}