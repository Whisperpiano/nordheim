import { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { ButtonProps } from "./Button.types";
import buttonVariants from "./Button.styles";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, font, shape, fontSize, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, font, shape, fontSize }),
          className
        )}
        {...props}
      />
    );
  }
);

export default Button;
