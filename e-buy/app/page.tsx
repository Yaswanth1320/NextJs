import Navbar from "@/components/Navbar";
import SliderOne from "@/components/ui/Slider";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";
import WebsiteDesign from "./websiteDesign";
import GraphicDesign from "./graphicDesign";

export default function Home() {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />
      <Spotlight
        className="hidden md:flex left-80"
        fill="white"
      />

      <div className="p-4 mx-auto relative w-full z-10 pt-10 md:pt-20 px-2">
        <div className="text-4xl md:text-7xl pb-5 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          Welcome to E-Buy, <br /> your ultimate destination for digital
          marketing success! world!
        </div>
        <p className="px-4 mx-auto mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center">
          Discover the latest trends, tactics, and strategies to stay ahead of
          the curve with our expert insights and resources.
        </p>

        <Link className="flex items-center justify-center rounded-full border w-48 p-2 mx-auto my-6 text-white cursor-pointer hover:bg-white hover:text-black duration-500" href={'/book'}>
          Book Now
        </Link>

        <div className="w-full pt-20">
          <SliderOne />
          <WebsiteDesign />
          {/* <GraphicDesign /> */}
        </div>
      </div>
    </div>
  );
}
