import Image from "next/image";
import Link from "next/link";

export default function Content() {
  return (
    <>
      <section className="mx-auto max-w-[1120px] flex flex-col lg:flex-row items-center mt-8 p-4 bg-white lg:rounded-lg">
        <div>
          <Image src="/img1.png" alt="image" width={250} height={250} />
        </div>
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl mb-3 font-bold">Get instant discounts</h1>
          <p className="lg:mb-8 mb-6 ">
            Simply sign into your Destination.com account and look <br /> for
            the blue Genius logo to save
          </p>
          <div className="flex gap-4">
            <Link
              className="bg-[#344e41] hover:bg-black duration-150 text-white px-4 py-2 rounded-sm"
              href="/"
            >
              Signup
            </Link>
            <Link
              className="bg-[#344e41] hover:bg-black duration-150 text-white px-4 py-2 rounded-sm"
              href="/"
            >
              Login
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto overflow-hidden max-w-[1120px] lg:max-h-[34vh] flex flex-col lg:flex-row items-center lg:justify-around mt-8 p-4 bg-white lg:rounded-lg">
        <div className="relative z-0">
          <Image src="/graph.png" alt="image" width={450} height={450} />
          <div className="absolute z-10 top-0 translate-x-28 translate-y-36">
            <p className="text-[1.7rem] text-white mb-6 font-bold">
              Find home <br /> for your next trip.
            </p>
            <Link
              className="bg-white px-8 py-1 ml-2 hover:bg-black hover:text-white duration-500"
              href="/"
            >
              Discover homes
            </Link>
          </div>
        </div>
        <div>
          <Image src="/img2.png" alt="image" width={500} height={500} />
        </div>
      </section>
    </>
  );
}
