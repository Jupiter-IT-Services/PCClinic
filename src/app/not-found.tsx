import Button from "@/components/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="w-[99.2vw] h-[60vh] flex items-center flex-col gap-3 justify-center">
      <h1 className="text-5xl text-blue-600 font-black">Error 404</h1>
      <h1 className="opacity-70">
        It seems like this page doesnt seem to exist?
      </h1>
      <Button variant="ghost" className=" bg-blue-300 text-blue-600 mt-[1rem]" href="/">
        Go Back Home
      </Button>
    </div>
  );
}
