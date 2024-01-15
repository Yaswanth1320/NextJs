import React from "react";
import { ModeToggle } from "./Toggler";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex font-kanit items-center justify-between border-b border-border px-5 hover:cursor-pointer py-3">
      <div>
        <Link href='/' className="text-4xl font-italico dark:text-[#caf0f8] text-[#03045e] ">Formcraft</Link>
      </div>

      <div className="flex gap-4">
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};
