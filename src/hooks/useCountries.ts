import { useQuery } from "@tanstack/react-query";
import { getCountries, type Country } from "@/services/countries.api";

export const countryKeys = {
  all: ["countries"] as const,
};

// 2. The Hook
export const useCountries = () => {
  return useQuery<Country[]>({
    queryKey: countryKeys.all,
    queryFn: getCountries,
    staleTime: 1000 * 60 * 5,
  });
};
