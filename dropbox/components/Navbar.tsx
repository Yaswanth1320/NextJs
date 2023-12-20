import { SignInButton, SignedOut, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="flex font-abc items-center justify-between px-5 py-2">
      <Link href="/" className="flex items-center gap-2">
        <div>
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </div>
        <h1 className="font-bold text-xl">DropZone</h1>
      </Link>

      <div className="flex items-center gap-3">
        <Link
          className=" bg-blue-500 py-1 px-4 text-white dark:text-black hover:bg-blue-400 rounded-sm"
          href="/dashboard"
        >
          Dashboard
        </Link>
        <ModeToggle />
        <UserButton afterSignOutUrl="/" />
        <SignedOut>
          <SignInButton afterSignUpUrl="/" mode="modal" />
        </SignedOut>
      </div>
    </div>
  );
}
