import api from "./axios";

export type Country = {
  flags: {
    png: string;
    svg: string;
    alt?: string;
  };
  name: {
    common: string;
    official: string;
    nativeName?: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital?: string[];
  region: string;
  population: number;
  cca3?: string;
};

export const getCountries = async (): Promise<Country[]> => {
  const response = await api.get<Country[]>(
    "/all?fields=name,flags,region,capital,population,cca3",
  );
  return response.data;
};
