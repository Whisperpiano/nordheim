import { cva } from "class-variance-authority";

const buttonVariants = cva("transition-all duration-200 ease-in-out", {
  variants: {
    variant: {
      default: "bg-amber-500 text-white",
      home: "bg-red-500 text-white",
    },
    size: {
      default: "px-8 py-2 rounded-full",
      sm: "px-4 py-1 rounded-sm",
    },
    font: {
      primary: "font-condensed",
      secondary: "font-sans",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    font: "primary",
  },
});

export default buttonVariants;
