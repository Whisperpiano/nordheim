import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "cursor-pointer transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default:
          "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-200/50",
        primary: "bg-red-500 text-white",
        secondary: "bg-blue-500 text-white",
      },
      size: {
        sm: "p-2",
        lg: "p-4",
      },
      font: {
        primary: "font-condensed",
        secondary: "font-sans",
      },
      shape: {
        rounded: "rounded-full",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
      font: "primary",
      shape: "square",
    },
  }
);

export default buttonVariants;
