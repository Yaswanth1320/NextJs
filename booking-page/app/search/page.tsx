import { fetchResults } from "@/lib/fetchResults";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  checkin: string;
  checkout: string;
  group_adults: string;
  group_childrens: string;
  no_rooms: string;
};

async function Search({ searchParams }: Props) {
  if (!searchParams.url) return notFound();

  const results = await fetchResults(searchParams);

  if (!results) return <div>No results</div>;

  return (
    <section>
      <div className="mx-auto max-w-[1120px] p-6 lg:px-8 font-abc">
        <h1 className="text-4xl font-bold pb-3">Your trip results</h1>
        <h2 className="pb-3">
          Dates:
          <span className="italic text-gray-500 ml-2">
            {searchParams.checkin} to {searchParams.checkout}
          </span>
        </h2>

        <hr className="mb-5" />

        <h3 className="font-semibold text-xl">
          {results.content.total_listings}
        </h3>

        <div className="mt-5 space-y-2">
          {results.content.listings.map((item, i) => (
            <div
              key={i}
              className="flex space-y-2 justify-between space-x-4 p-5 border rounded-lg"
            >
              <Image
                src={item.url}
                height={200}
                width={200}
                alt="image"
                className="rounded-lg"
              />

              <div className="flex flex-1 justify-between space-x-5">
                <div>
                  <Link
                    href={item.url}
                    className="font-bold text-[#588157] text-[1.1rem] hover:text-[#344e41]"
                  >
                    {item.title}
                  </Link>
                  <p className="text-black text-xs">{item.description}</p>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="flex item-start justify-end space-x-2 text-right">
                    <div>
                      <p className="font-bold">{item.rating_word}</p>
                      <p className="text-xs">{item.rating_count}</p>
                    </div>

                    <p className="flex items-center justify-center font-bold text-sm w-10 h-10 text-white bg-[#588157] rounded-lg flex-shrink-0">
                      {item.rating || "N/A"}
                    </p>
                  </div>

                  <div className="text-right">
                      <p className="text-xs">{item.booking_metadata}</p>
                      <p className="text-2xl font-bold">{item.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Search;
