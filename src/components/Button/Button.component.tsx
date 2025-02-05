import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import buttonVariants from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, variant, font, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, font }), className)}
        {...props}
      />
    );
  }
);

export default Button;
