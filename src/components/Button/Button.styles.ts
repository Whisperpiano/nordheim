import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "cursor-pointer transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        default:
          "text-neutral-500 hover:text-neutral-700 hover:bg-neutral-200/50",
        primary:
          "flex justify-center gap-2 items-center bg-neutral-950 text-neutral-50 uppercase font-lighter tracking-widest isolation-auto border-neutral-950 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-neutral-50 hover:text-neutral-950 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-400 relative z-10 overflow-hidden border-1  group transition-colors duration-300 before:aspect-square before:rounded-none",
        secondary:
          "bg-neutral-50 text-neutral-900 uppercase hover:bg-neutral-200 tracking-widest",
      },
      size: {
        sm: "p-2",
        md: "p-3",
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
      fontSize: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-base",
        lg: "text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
      font: "primary",
      shape: "square",
      fontSize: "sm",
    },
  }
);

export default buttonVariants;
