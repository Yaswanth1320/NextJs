import { fetchResults } from "@/lib/fetchResults";
import { notFound } from "next/navigation";

type Props = {
  searchParams: SearchParams;
};

export type SearchParams = {
  url: URL;
  cheakin: string;
  cheakout: string;
  group_adults: string;
  group_childrens: string;
  no_rooms: string;
};

async function Search({ searchParams }:Props) {
  if(!searchParams.url) return notFound();

  const results = await fetchResults(searchParams);

  if(!results) return <div>No results</div>

  return <div>search</div>;
}

export default Search;
