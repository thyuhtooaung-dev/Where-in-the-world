import api from "@/services/axios.ts";

export type CountryDetail = {
  name: {
    common: string;
    official: string;
    nativeName?: {
      [languageCode: string]: {
        official: string;
        common: string;
      };
    };
  };

  tld?: string[];

  cca2: string;
  cca3: string;
  ccn3?: string;
  cioc?: string;

  independent?: boolean;
  status: string;
  unMember?: boolean;

  currencies?: {
    [currencyCode: string]: {
      name: string;
      symbol?: string;
    };
  };

  idd?: {
    root?: string;
    suffixes?: string[];
  };

  capital?: string[];

  altSpellings?: string[];

  region: string;
  subregion?: string;

  languages?: {
    [languageCode: string]: string;
  };

  latlng?: [number, number];
  landlocked?: boolean;

  borders?: string[]; // CCA3 codes

  area?: number;

  demonyms?: {
    eng?: {
      f: string;
      m: string;
    };
    fra?: {
      f: string;
      m: string;
    };
    [key: string]:
      | {
          f: string;
          m: string;
        }
      | undefined;
  };

  translations?: {
    [languageCode: string]: {
      official: string;
      common: string;
    };
  };

  flag?: string;

  maps?: {
    googleMaps?: string;
    openStreetMaps?: string;
  };

  population: number;

  gini?: {
    [year: string]: number;
  };

  fifa?: string;

  car?: {
    signs?: string[];
    side?: "left" | "right";
  };

  timezones?: string[];
  continents?: string[];

  flags: {
    png: string;
    svg: string;
    alt?: string;
  };

  coatOfArms?: {
    png?: string;
    svg?: string;
  };

  startOfWeek?: string;

  capitalInfo?: {
    latlng?: [number, number];
  };

  postalCode?: {
    format?: string;
    regex?: string;
  };
};

export const getCountryDetail = async (
  name: string,
): Promise<CountryDetail> => {
  const response = await api.get<CountryDetail[]>(
    `/name/${name}?fullText=true`,
  );
  return response.data[0];
};
