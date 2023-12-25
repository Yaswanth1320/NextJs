import Link from "next/link";
import React from "react";
import Image from "next/image";
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import { dark } from '@clerk/themes';

export default function Navbar() {
  return (
    <nav className="font-kanit fixed top-0 z-30 flex w-full items-center justify-between bg-dark-2 px-6 py-3">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="cursor-pointer flex">
                <Image
                  src="/assets/logout.svg"
                  alt="logo"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher
          appearance={{
            baseTheme: dark,
            elements: {
              organizationSwitcherTrigger: "py-2 px-4 text-white",
            },
          }}
        />
      </div>
    </nav>
  );
}
