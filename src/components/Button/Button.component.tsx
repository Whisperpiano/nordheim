import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import buttonVariants from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, font, shape, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, font, shape }),
          className
        )}
        {...props}
      />
    );
  }
);

export default Button;
