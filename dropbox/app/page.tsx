import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import Curosel from "@/components/Curosel";

export default function Home() {
  return (
    <main className="font-abc z-0">
      <div className="flex flex-col items-center justify-center gap-4 p-12 bg-[#2B2929] dark:bg-slate-800 text-white lg:flex-row">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold pb-4">
            Welcome to DropZone
            <br />
            Store and access from anywhere
          </h1>
          <p className="pb-8">
            Dropbox is a cloud storage and file synchronization service that
            allows you to store and access your files from anywhere. It provides
            a seamless way to sync files across multiple devices and share them
            with others. With Dropbox, you can collaborate on documents, back up
            important files, and access your data on the go. It also offers
            features like file versioning, offline access, and integration with
            various apps and platforms.
          </p>
          <Link
            href="/dashboard"
            className="flex items-center gap-2 hover:gap-4 transition-all ease-in hover:duration-600 rounded-xlcursor-pointer bg-blue-500 px-4 py-3 w-fit"
          >
            Try for free <ArrowRightIcon />
          </Link>
        </div>

        <div className="p-4 bg-[#2B2929] dark:bg-slate-800 h-full">
          <Image src="/img1.jpg" alt="img1" width={1300} height={1300} className="rounded-xl" />
        </div>

        {/* <Curosel/> */}
      </div>
    </main>
  );
}
