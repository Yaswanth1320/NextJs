import SearchForm from "@/components/SearchForm";
import { trending } from "@/data/data";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-abc bg-[#344e41]">
      <header className="mx-auto max-w-[1120px] p-6">
        <h2 className="text-white text-4xl lg:text-5xl font-bold">
          Find your next stay
        </h2>
        <h3 className="text-white lg:py-5 py-2 text-xl">
          Creating Lasting Memories One Journey at a Time.
        </h3>
      </header>

      <section className="m-4 mt-0 -mb-14 px-2 lg:px-4">
        <SearchForm />
      </section>

      <section className="mx-auto max-w-[1120px] mt-10 p-6 bg-white rounded-t-lg">
        <div className="pt-5">
          <h3 className="text-xl font-bold">Trending Destinations</h3>
          <p className="font-light">
            Most popular choices for travellers from around the world{" "}
          </p>
        </div>
        <div className="flex space-x-4 py-5 overflow-x-scroll">
          {trending.map((item) => (
            <div key={item.id} className="space-y-1 cursor-pointer shrink-0">
              <Image
                key={item.id}
                src={item.src}
                priority={false}
                width={300}
                height={300}
                alt="home"
                className="w-auto h-auto object-cover pb-2 rounded-lg"
              />

              <p className="font-bold text-[0.9rem]">{item.title}</p>
              <p>{item.location}</p>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
