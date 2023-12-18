import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <div className="flex flex-col p-10 bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to DropZone
            <br />
            Store and access from anywhere
          </h1>
          <p className="pb-20">
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
            className="flex items-center gap-3  rounded-xlcursor-pointer bg-blue-500 p-5 w-fit"
          >
            Try for free <ArrowRightIcon />
          </Link>
        </div>
    </main>
  );
}
