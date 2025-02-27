import { useQuery } from "@tanstack/react-query";
import { getUserProfile } from "../../api/profile/profile";

export function useProfile() {
  const { data: userProfile, isLoading } = useQuery({
    queryKey: ["userProfile"],
    queryFn: () => getUserProfile(),
  });

  return {
    userEmail: userProfile?.userEmail,
    userProfile: userProfile?.userProfile,
    userOrders: userProfile?.userOrders,
    isLoading,
  };
}
