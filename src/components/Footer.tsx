import {
  Facebook,
  Instagram,
  MailSearch,
  MapPin,
  Phone,
  PhoneCallIcon,
  PhoneOutgoingIcon,
  Pin,
  Twitter,
} from "lucide-react";

export default function Footer() {
  return (
    <div className="flex flex-col mt-[12rem]">
      <div className="md:h-[25vh] h-[40vh]  bg-blue-600 text-white flex md:flex-row flex-col  mdjustify-between justify-center gap-[2rem] md:gap-0 px-[6rem] items-center ">
        <div className="flex flex-col gap-1 md:gap-3 max-w-[600px]">
          <h1 className="font-bold text-4xl">Ready to fix your device?</h1>
          <p className="opacity-70">
            Contact PC Clinic today for a free consultations and get your
            technology back in working order.
          </p>
        </div>
        <div>
          <a
            href="/contact"
            className="bg-white shadow-md flex gap-7 p-[12px] rounded-md text-blue-600 w-[16rem] font-bold items-center justify-center hover:gap-12 smooth_transition "
          >
            Contact Us <PhoneOutgoingIcon />
          </a>
        </div>
      </div>
      <div className="md:h-[40vh] h-[100vh] bg-blue-950 text-white flex md:flex-row flex-col justify-evenly py-[4rem]  px-[6rem]">
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">PC Clinic</h1>
          <p className="w-[300px] opacity-70">
            Professional computer repair services at Burton and South Derbyshire
            College.
          </p>
          <div className="flex gap-3">
            <a href="#" className="text-blue-600">
              <Facebook />
            </a>
            <a href="#" className="text-blue-600">
              <Twitter />
            </a>
            <a href="#" className="text-blue-600">
              <Instagram />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-bold">Quick Links</h1>
          <div className="flex flex-col gap-1 md:gap-3">
            <a
              href="/"
              className="opacity-70 hover:opacity-90 smooth_transition"
            >
              Home
            </a>
            <a
              href="/services"
              className="opacity-70 hover:opacity-90 smooth_transition"
            >
              Services
            </a>
            <a
              href="/testimonials"
              className="opacity-70 hover:opacity-90 smooth_transition"
            >
              Testimonials
            </a>
            <a
              href="/contact"
              className="opacity-70 hover:opacity-90 smooth_transition"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[350px]">
          <h1 className="font-bold">Contact Us</h1>
          <div className="flex flex-col gap-1 md:gap-3">
            <p className="flex gap-2  justify-center">
              <MapPin className="text-blue-600 w-[35px] h-[35px]" />
              <span className="opacity-70">
                PC Clinic, Burton and South Derbyshire College Lichfield Street,
                Burton-on-Trent DE14 3RL
              </span>
            </p>
            <p className="flex gap-2">
              <Phone className="text-blue-600 w-[17px] h-[17px] mt-[6px]" />
              <a href="tel:01283 494400" className="opacity-70 underline">
                01283 494400
              </a>
            </p>
            <p className="flex gap-2">
              <MailSearch className="text-blue-600 w-[17px] h-[17px] mt-[6px]" />
              <a href="tel:01283 494400" className="opacity-70 underline">
                pcclinic@bsdc.ac.uk
              </a>
            </p>
          </div>
        </div>
        <div className="max-w-[150px] opacity-70">
          © 2025 PC Clinic At Burton and South Derbyshire College, All rights
          reserved
        </div>
      </div>
    </div>
  );
}
