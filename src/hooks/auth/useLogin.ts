import { useNavigate } from "react-router";
import { useAuthStore } from "../../store/authStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { loginUser } from "../../api/auth/auth";
import { LoginFormData } from "../../lib/schemas/authSchema";

export function useLogin() {
  const navigate = useNavigate();
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  return useMutation({
    mutationFn: (data: LoginFormData) => loginUser(data),
    onSuccess: (data) => {
      setIsLoggedIn(true);
      toast.success("Logged in successfully!");
      navigate("/account/profile");
      console.log("useLogin", data);
    },
    onError: (error) => {
      if (error.message.includes("Invalid login credentials")) {
        toast.error("Invalid email or password.");
      } else {
        toast.error("Error logging in.");
      }
    },
  });
}
