import { useNavigate } from "react-router";
import { useModalStore } from "../../store/modalStore";

export function useMobileMenu() {
  const isMobileMenuOpen = useModalStore((state) => state.isMobileMenuOpen);
  const setMobileMenuOpen = useModalStore((state) => state.setMobileMenuOpen);
  const navigate = useNavigate();

  const handleClick = (to: "city" | "mountain" | "contact") => {
    setMobileMenuOpen(false);
    navigate(to === "contact" ? "/contact" : `/products/${to}`);
  };

  return {
    isMobileMenuOpen,
    setMobileMenuOpen,
    handleClick,
  };
}
