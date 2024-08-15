import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins.js";
import toast from "react-hot-toast";

export function useDeleteCabin() {
  // for call invalid the data we use queryClient
  // to get access to queryClient instance we use special hook (useQueryClient)
  const queryClient = useQueryClient();

  // for mutation not using useQuery but useMutation

  // mutationFn is function that react query will call
  // mutate is function that can connect with button (will call mutationFn)
  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    // mutationFn: (id) => deleteCabin(id),
    mutationFn: deleteCabinApi,
    // tell react query what to do as the mutation successfull
    // to refetch the data again we need to invalidating the cache
    onSuccess: () => {
      toast.success("Cabin successfully deleted");
      queryClient.invalidateQueries({
        // identify which data will be invalid
        queryKey: ["cabins"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isDeleting, deleteCabin };
}
