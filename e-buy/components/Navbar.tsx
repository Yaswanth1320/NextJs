'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { AlignJustify, X } from "lucide-react";
import DropDownMenu from "./DropDownMenu";

const Navbar = () => {
    const [menu,setMenu] = useState(false);

    const toggleDropDown = () =>{
        setMenu(!menu);
    }

    const closeDropDown = () =>{
        setMenu(false);
    }

  return (
    <div>
      <div className="flex items-center justify-between z-50 p-6 md:pd-10">
        <div>
          <Link className="cursor-pointer" href="/">
            <Image
              priority
              src="/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10 md:w-14 md:h-14"
            />
          </Link>
        </div>
        <div className="hidden md:flex cursor-pointer items-center space-x-10 text-center text-slate-300 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50">
          <div className="hover:text-gray-50">Website design</div>
          <div className="hover:text-gray-50">Graphic design</div>
          <div className="hover:text-gray-50">Shopify stores</div>
          <div className="hover:text-gray-50">Brands</div>

          <Link href="/pricing" className="hover:text-gray-50">
            Pricing
          </Link>
        </div>

        <div className="flex md:hidden">
          {menu ? (
            <div
              className="w-8 h-8 text-slate-300 cursor-pointer"
              onClick={toggleDropDown}
            >
              <X />
              <DropDownMenu onClose={closeDropDown} />
            </div>
          ) : (
            <AlignJustify
              onClick={toggleDropDown}
              className="w-8 h-8 text-slate-300 cursor-pointer"
            />
          )}
        </div>

        <div className="hidden md:flex">
          <Link
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
      


