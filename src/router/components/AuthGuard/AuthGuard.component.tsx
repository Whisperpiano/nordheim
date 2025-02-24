import { Navigate } from "react-router";
import { useAuthStore } from "../../../store/authStore";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return isLoggedIn ? <Navigate to="/account/profile" /> : children;
}
