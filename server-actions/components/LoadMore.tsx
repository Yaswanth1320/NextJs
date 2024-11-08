"use client";
import { fetchAnimes } from "@/app/action";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard from "./AnimeCard";

let pageno = 2;
export type AnimeCard = JSX.Element;

function LoadMore() {
  const [data, setData] = useState<AnimeCard[]>([]);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchAnimes(pageno).then((res) => {
        setData([...data, ...res]);
      });
      pageno++;
    }
  }, [inView, data]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">
        {data}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
