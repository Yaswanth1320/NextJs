import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  HomeIcon,
  ViewGridIcon,
  UserGroupIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { auth } from '@clerk/nextjs'
import HeaderIcon from "./HeaderIcon";
import { redirect } from "next/navigation";

export default function Navbar() {

  return (
    <div className="font-abc flex items-center gap-3 sticky top-0 z-50 bg-white p-2 lg:px-5 shadow-md">
      <div>
        <Image src="/icon.png" width={40} height={40} />
      </div>
      <div className="flex items-center bg-gray-100 p-2 rounded-3xl gap-2">
        <SearchIcon className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Serach for a profile"
          className="hidden lg:inline-flex bg-transparent placeholder:text-gray-500 outline-none"
        />
      </div>

      <div className="flex justify-center flex-grow">
        <div className="flex md:space-x-1 space-x-6 lg:space-x-6">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      <div className="flex items-center sm:space-x-2 justify-end">
        <p className="font-semibold">yaswanth</p>
        <ViewGridIcon className="hidden xl:inline-flex h-10 w-10 rounded-full cursor-pointer bg-gray-200 p-2 text-gray-700 hover:bg-gray-300" />
        <ChatIcon className="hidden xl:inline-flex h-10 w-10 rounded-full cursor-pointer bg-gray-200 p-2 text-gray-700 hover:bg-gray-300" />
        <BellIcon className="hidden xl:inline-flex h-10 w-10 rounded-full cursor-pointer bg-gray-200 p-2 text-gray-700 hover:bg-gray-300" />
        <ChevronDownIcon className="hidden xl:inline-flex h-10 w-10 rounded-full cursor-pointer bg-gray-200 p-2 text-gray-700 hover:bg-gray-300" />
      </div>
    </div>
  );
}
