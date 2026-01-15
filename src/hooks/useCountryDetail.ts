import { useQuery } from "@tanstack/react-query";
import { getCountryDetail } from "@/services/countryDetail.api.ts";

export const useCountryDetail = (name: string) => {
  return useQuery({
    queryKey: ["country", name],
    queryFn: () => getCountryDetail(name),
    enabled: !!name,
  });
};
