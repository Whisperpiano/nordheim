export const singleProductVariants = {
  product: {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.1 } },
    transition: { transition: "slide-in", duration: 0.25 },
  },
};
