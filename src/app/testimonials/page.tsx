import Box from "@/components/Box";
import LeaveReview from "@/components/pages/LeaveReview";
import Record from "@/components/pages/Record";
import Reviews from "@/components/pages/Reviews";
import { Star } from "lucide-react";

 
export default function Testiominals() {
  return <div className="flex flex-col gap-3">
    <Reviews/>
    <Record/>
    <LeaveReview/>
  </div>;
}
