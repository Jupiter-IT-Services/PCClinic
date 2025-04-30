import Dash from "@/components/Dash";
import HeroServices from "@/components/pages/HeroServices";
import Pricing from "@/components/pages/Pricing";

export default function Services() {
  return (
    <div>
      <HeroServices />
      <Dash text="Pricing" className="mt-[10rem]" />
      <Pricing />
    </div>
  );
}
