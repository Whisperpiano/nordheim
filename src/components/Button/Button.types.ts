import { VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import buttonVariants from "./Button.styles";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export type { ButtonProps };
