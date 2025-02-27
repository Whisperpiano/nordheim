import { useNavigate } from "react-router";
import { useAuthStore } from "../../store/authStore";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import registerUser from "../../api/auth/auth";
import { RegisterFormData } from "../../lib/schemas/authSchema";

export function useRegister() {
  const navigate = useNavigate();
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  return useMutation({
    mutationFn: (data: RegisterFormData) => registerUser(data),
    onSuccess: (data) => {
      setIsLoggedIn(true);
      navigate("/account/profile");
      toast.success("User created successfully! Please log in.");
      console.log(data);
    },
    onError: (error) => {
      if (error.message.includes("rate limit")) {
        toast.error("Too many requests. Please try again later.");
      } else if (error.message.includes("already registered")) {
        toast.error("Email already exists. Please log in.");
      } else {
        toast.error("Error creating user from database.");
      }
    },
  });
}
