export const cartVariants = {
  cart: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2, delay: 0.2 },
  },
  cartProduct: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};
