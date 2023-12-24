import { getClient } from "@/apollo-client";
import { fetchWeatherQueries } from "@/graphql/fetchWeatherQueries";

type Props = {
  params: {
    city: string;
    lat: string;
    long: string;
  };
};

async function HomePage({ params: { city, lat, long } }: Props) {
  const client = getClient();

  const { data } = await client.query({
    query: fetchWeatherQueries,
    variables: {
      current_weather: true,
      longitude: long,
      latitude: lat,
      timezone: "GMT",
    },
  });

  const results: Root = data.myQuery;

  console.log(results);

  return (
    <div className="font-cabin">
      weather page og {city} {lat} {long}
    </div>
  );
}

export default HomePage;
