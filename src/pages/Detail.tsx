import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCountries } from "@/hooks/useCountries.ts";
import { useCountryDetail } from "@/hooks/useCountryDetail.ts";
import { useMemo } from "react";
import { FourSquare } from "react-loading-indicators";

export default function DetailPage() {
  const { data: allCountries } = useCountries();
  const { name } = useParams();
  const { data: country, isLoading } = useCountryDetail(name || "");
  const navigate = useNavigate();

  function getFirstValue<T>(record?: Record<string, T>): T | undefined {
    return Object.values(record ?? {})[0];
  }

  const borderNames = useMemo(() => {
    if (!country?.borders || !allCountries) return [];
    return country.borders.map((code) => {
      const found = allCountries.find((c) => c.cca3 === code);
      return {
        code: code,
        commonName: found ? found.name.common : code,
      };
    });
  }, [allCountries, country?.borders]);
  const currencyName = getFirstValue(country?.currencies)?.name ?? "N/A";
  const nativeNameCommon =
    getFirstValue(country?.name.nativeName)?.common ?? "N/A";
  const commonLanguages = getFirstValue(country?.languages) ?? "N/A";

  if (isLoading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center">
        <FourSquare
          color="#2563eb"
          size="medium"
          text="Loading Details"
          textColor=""
        />
      </div>
    );
  }

  return (
    <main className={"px-10 py-8 flex flex-col gap-15"}>
      <header className="shadow-[0_0_15px_rgba(0,0,0,0.25)] rounded-sm bg-white w-fit hover:scale-[.95] transition-transform duration-300">
        <Button
          size="icon"
          aria-label="Submit"
          onClick={() => navigate(-1)}
          className={"flex py-3 px-14 gap-3 items-center cursor-pointer"}
        >
          <ArrowLeft />
          <span>Back</span>
        </Button>
      </header>
      <article
        className={"grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-12"}
      >
        <img src={country?.flags.svg} alt={country?.flags.alt} className={""} />
        <div className={"flex flex-col gap-8 lg:px-4 lg:py-5 xl:gap-14"}>
          <h1 className={"text-xl md:text-2xl font-extrabold"}>
            {country?.name.common}
          </h1>

          <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
            <div className={"flex flex-col gap-1"}>
              <p>
                <span className="font-semibold text-base">Native Name</span>:{" "}
                <span className={"text-base"}>{nativeNameCommon}</span>
              </p>
              <p>
                <span className="font-semibold text-base">Population</span>:{" "}
                <span className={"text-base"}>
                  {country?.population.toLocaleString()}
                </span>
              </p>
              <p>
                <span className="font-semibold text-base">Region</span>:{" "}
                <span className={"text-base"}>{country?.region}</span>
              </p>
              <p>
                <span className="font-semibold text-base">Sub Region</span>:{" "}
                <span className={"text-base"}>{country?.subregion}</span>
              </p>
              <p>
                <span className="font-semibold text-base">Capital</span>:{" "}
                <span className={"text-base"}>
                  {country?.capital?.join(", ")}
                </span>
              </p>
            </div>
            <div className={"flex flex-col gap-1"}>
              <p>
                <span className="font-semibold text-base">
                  Top Level Domain
                </span>
                :{" "}
                <span className={"text-base"}>{country?.tld?.join(", ")}</span>
              </p>
              <p>
                <span className="font-semibold text-base">Currency</span>:{" "}
                <span className={"text-base"}>{currencyName}</span>
              </p>
              <p>
                <span className="font-semibold text-base">Languages</span>:{" "}
                <span className={"text-base"}>{commonLanguages}</span>
              </p>
            </div>
          </div>

          <div className={"flex flex-col lg:flex-row gap-3"}>
            <h2 className={"text-lg font-semibold whitespace-nowrap"}>
              Border Countries:
            </h2>
            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-3 gap-x-2 items-center text-center flex-1">
              {borderNames.map((border) => (
                <Link
                  to={`/country/${border.commonName.toLowerCase()}`}
                  key={border.code}
                  className={
                    "shadow-[0_0_15px_rgba(0,0,0,0.25)] rounded-sm py-2 bg-white dark:bg-gray-800 text-sm hover:scale-[.95] transition-transform duration-300"
                  }
                >
                  {border.commonName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
