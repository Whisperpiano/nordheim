import { useNavigate, useHref } from "react-router";
import { HeroUIProvider } from "@heroui/system";
import { HeroUIWrapperProps } from "./HeroUIWrapper.types";

export function HeroUIWrapper({ children }: HeroUIWrapperProps) {
  const navigate = useNavigate();
  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </HeroUIProvider>
  );
}
