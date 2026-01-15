import type { Country } from "@/services/countries.api.ts";

export const getRandomCountries = (allCountries: Country[], count: number) => {
  return [...allCountries].sort(() => Math.random() - 0.5).slice(0, count);
};
