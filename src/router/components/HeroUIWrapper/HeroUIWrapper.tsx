import { useNavigate, useHref } from "react-router";
import { HeroUIProvider } from "@heroui/system";
import { ReactNode } from "react";

interface HeroUIWrapperProps {
  children: ReactNode;
}

export function HeroUIWrapper({ children }: HeroUIWrapperProps) {
  const navigate = useNavigate();
  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </HeroUIProvider>
  );
}
