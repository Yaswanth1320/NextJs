"use client";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import { Dialog,Disclosure,Popover,Transition } from "@headlessui/react";

export default function componentName() {
  const [menu, setMenu] = useState(false);
  return (
    <nav className="bg-[#344e41] font-abc mx-auto flex items-center lg:px-8 w-full justify-between p-6">
      <div className="flex lg:flex-1">
        <Link href="/" className="text-white text-xl">
          GoBeyond
        </Link>
      </div>

      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white "
          onClick={() => setMenu(!menu)}
        >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden='true' />
        </button>
      </div>

      <Popover.Group className='lg:flex hidden lg:gap-x-12'>
            <Popover className='relative'>
                <Popover.Button className='flex item-center gap-x-1 text-sm font-semibold  text-white'>
                    stays
                    <ChevronDownIcon className=" w-4 h-4 flex-none text-white" aria-hidden='true'/>
                </Popover.Button>
            </Popover>
      </Popover.Group>
    </nav>
  );
}
