'use client'
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <section className="fixed font-kanit bottom-0 z-10 w-full rounded-t-3xl bg-glassmorphism p-4 backdrop-blur-lg xs: px-7 md:hidden">
      <div className="flex items-center justify-between gap-3 xs:gap-5">
        {navLinks.map((link) => {
          const active =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              key={link.label}
              href={link.route}
              className={`relative flex flex-col items-center gap-2 rounded-lg p-2 sm: flex-1 sm:px-2 sm:py-2.5 hover:bg-slate-600 transition-all duration-150 ${
                active && "bg-slate-600"
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />
              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
