import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins.js";
import { getBooking } from "../../services/apiBookings.js";
import { useParams } from "react-router-dom";

export function useBooking() {
  const { bookingId } = useParams();

  // react query will refetch if theres no data so we set it to false to prevent that

  const {
    isLoading,
    data: booking,
    error,
  } = useQuery({
    queryKey: ["booking", bookingId],
    queryFn: () => getBooking(bookingId),
    retry: false,
  });

  return { isLoading, booking, error };
}
