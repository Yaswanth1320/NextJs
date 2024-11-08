import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#161921]">
      <div className="flex items-center gap-2">
        <Image
          src="./logo.svg"
          alt="logo"
          width={47}
          height={44}
          className="object-contain"
        />
        <p className="text-base font-bold text-white">AnimeVerse</p>
      </div>
      <p className="text-base font-bold text-white">All rights reserved 2023</p>
      <div className="flex items-center gap-6">
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
