import { useMemo } from "react";
import { useCountries } from "@/hooks/useCountries";
import { getRandomCountries } from "@/utils/shuffle";

export default function useRandomCountries() {
  const { data: allCountries, ...rest } = useCountries();

  const randomCountries = useMemo(() => {
    if (!allCountries) return [];
    return getRandomCountries(allCountries, 32);
  }, [allCountries]);

  return {
    ...rest,
    data: randomCountries,
  };
}
