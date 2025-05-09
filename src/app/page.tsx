"use client";
import Dash from "@/components/Dash";
import HeroHome from "@/components/pages/HeroHome";
import ServicesHome from "@/components/pages/ServicesHome";
import WhyHome from "@/components/pages/WhyHome";

export default function Home() {
  return (
    <>
      <HeroHome />
      <Dash text="Services" about="We offer a comprehensive range of repair and maintenance services for all your devices." className="mt-[4rem] mb-[2rem] md:text-start text-center" />
      <ServicesHome/>
      <WhyHome/>
    </>
  )
}