import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { logoutUser } from "../../api/auth/auth";
import { toast } from "sonner";

export function useLogout() {
  const navigate = useNavigate();
  const {
    mutate: logoutUserMutation,
    isError,
    isSuccess,
  } = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: () => {
      navigate("/");
    },
    onError: () => {
      toast.error("Something went wrong trying to log out.");
    },
  });
  const handleLogout = () => {
    logoutUserMutation();
  };

  return { handleLogout, isLogoutError: isError, isLogotutSuccess: isSuccess };
}
