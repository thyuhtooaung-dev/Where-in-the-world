import { Link } from "react-router-dom";

interface CardProps {
  name: string;
  population: number;
  region: string;
  capital: string[] | undefined;
  img: {
    png: string;
    svg: string;
    alt?: string;
  };
}

export default function Card({
  name,
  population,
  region,
  capital,
  img,
}: CardProps) {
  return (
    <Link to={`/country/${name}`}>
      <div
        className={
          " flex flex-col rounded-md overflow-hidden bg-gray-50 dark:bg-blue-900 shadow-md hover:shadow-lg cursor-pointer active:scale-[.95] transition-shadow duration-300"
        }
      >
        <div className={"h-47.5"}>
          <img
            src={img.svg}
            alt={img.alt}
            className={"w-full h-full select-none"}
          />
        </div>

        <div className="flex flex-col gap-6 px-5 pt-6 pb-12">
          <header>
            <h1 className={"font-extrabold text-xl"}>{name}</h1>
          </header>
          <div className={"flex flex-col gap-1"}>
            <p>
              <span className="font-semibold text-base">Population</span>:{" "}
              <span className={"text-base"}>{population.toLocaleString()}</span>
            </p>
            <p>
              <span className="font-semibold text-base">Region</span>:{" "}
              <span className={"text-base"}>{region}</span>
            </p>

            <p>
              <span className="font-semibold text-base">Capital</span>:{" "}
              <span className={"text-base"}>{capital?.join(", ")}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
