import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins.js";

export function useCabin() {
  // passed 2 object

  // querykey: what identifies each data (id we useQuery on another page with exact key, then the data would be read from the cache)

  // queryFn: function for querying (for fetch data from api)
  // function that we specify needs to return a promise
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return {isLoading, cabins, error}
}
