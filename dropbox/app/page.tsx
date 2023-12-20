import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import Image from "next/image";
import Curosel from "@/components/Curosel";
import Plans from "@/components/Plans";
import { LargerData, feature1, feature2, feature3, feature4, professionalsData, smallerData } from "@/Data";
import Features from "@/components/Features";
import Footer from '@/components/Footer';


export default function Home() {
  return (
    <main className="font-abc z-0">
      <div className="flex flex-col items-center justify-center gap-4 p-12 bg-[#2B2929] dark:bg-slate-800 text-white lg:flex-row">
        <div className="flex flex-col">
          <h1 className="text-5xl font-bold pb-6">
            Welcome to DropZone
            <br />
            Store and access from anywhere
          </h1>
          <p className="pb-10">
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
          <Image
            src="/img1.jpg"
            alt="img1"
            width={1300}
            height={1300}
            className="rounded-xl"
          />
        </div>

        {/* <Curosel/> */}
      </div>
      <div className="w-full h-[34vh] bg-[#f5f5f5] dark:bg-[#19191b] flex items-center justify-center flex-col">
        <h1 className=" text-2xl pb-2 lg:text-4xl lg:pb-3">
          All the tools you need in one plan
        </h1>
        <p className="lg:text-xl font-bold text-sm px-10 text-center">
          Store and share files. Sign and send documents. Record screens and
          comment. All in one place.
        </p>
      </div>

      <div className="w-full px-20 py-14 ">
        <h1 className="text-center text-3xl mb-10">User Plans</h1>
        <div className="flex flex-col items-center justify-around gap-8 lg:flex-row lg:gap-16">
          <Plans data={professionalsData} />
          <Plans data={smallerData} />
          <Plans data={LargerData} />
        </div>
      </div>

      <div className="w-full px-24 py-14 bg-[#f5f5f5] dark:bg-[#19191b]">
        <h2 className="text-center text-4xl mb-12">
          Dropbox supports you and your business
          <br />
          at every stage
        </h2>
        <div className="flex flex-col justify-around gap-8 lg:flex-row lg:gap-10">
          <Features feature={feature1} />
          <Features feature={feature2} />
          <Features feature={feature3} />
          <Features feature={feature4} />
        </div>
      </div>
      <Footer />
    </main>
  );
}
