import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { logoutUser } from "../../../api/auth/auth";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../../store/authStore";
import { useEffect } from "react";

export default function Profile() {
  const navigate = useNavigate();
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/account/login");
    }
  }, [isLoggedIn, navigate]);

  const { mutate: logoutUserMutation } = useMutation({
    mutationFn: () => logoutUser(),
    onSuccess: () => {
      toast.success("Logged out successfully!");
      navigate("/");
    },
    onError: () => {
      toast.error("Error logging out.");
    },
  });
  const handleLogout = () => {
    logoutUserMutation();
  };
  return (
    <div className="h-screen grid place-content-center">
      Profile{" "}
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}
