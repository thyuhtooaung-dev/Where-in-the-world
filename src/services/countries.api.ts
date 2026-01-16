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
  const endpointFields = import.meta.env.VITE_COUNTRIES_API_FIELDS;
  const response = await api.get<Country[]>(`${endpointFields}`);
  return response.data;
};
