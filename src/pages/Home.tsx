import { FourSquare } from "react-loading-indicators";
import { useState } from "react";
import SearchBar from "@/components/SearchBar.tsx";
import Filter from "@/components/Filter.tsx";
import Card from "@/components/Card.tsx";
import useRandomCountries from "@/hooks/useRandomCountries.ts";
import { useCountries } from "@/hooks/useCountries.ts";

export default function Home() {
  const { data: allCountries } = useCountries();
  const { data: countries, isLoading, isError, error } = useRandomCountries();
  const [region, setRegion] = useState<string | null>(null);

  const filteredCountries = region
    ? allCountries?.filter((c) => c.region === region)
    : countries;

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <FourSquare
          color="#2563eb"
          size="medium"
          text="Loading Countries"
          textColor=""
        />
      </div>
    );
  }
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <main className="">
      <div className={"px-4 py-6"}>
        <section
          className={
            " w-full flex flex-col md:flex-row justify-between gap-10 md:gap-0"
          }
        >
          <SearchBar />
          <Filter onChange={setRegion} />
        </section>
        <article
          className={
            "px-8 py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-12"
          }
        >
          {filteredCountries?.map((country) => (
            <Card
              name={country.name.common}
              key={country.name.common}
              population={country.population}
              region={country.region}
              capital={country.capital}
              img={country.flags}
            />
          ))}
        </article>
      </div>
    </main>
  );
}
