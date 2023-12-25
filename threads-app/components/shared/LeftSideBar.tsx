'use client'
import React from 'react';
import { navLinks } from '@/constants'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { SignOutButton, SignedIn } from '@clerk/nextjs';

export default function LeftSideBar() {
  const pathname = usePathname();
  const router = useRouter()
  return (
    <section className="font-kanit custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {navLinks.map((link) => {
          const active =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              key={link.label}
              href={link.route}
              className={`relative flex justify-start gap-4 rounded-lg p-3 hover:bg-slate-600 transition-all duration-150 ${
                active && "bg-slate-600"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="px-6 mt-10">
        <SignedIn>
          <SignOutButton signOutCallback={() =>{
            router.push('/sign-in')
          }}>
            <div className="cursor-pointer flex p-4 gap-4">
              <Image
                src="/assets/logout.svg"
                alt="logo"
                width={24}
                height={24}
              />
              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}
