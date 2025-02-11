export const categoryCardVariants = {
  city: {
    initial: {
      x: window.matchMedia("(max-width: 768px)").matches ? 0 : "-100vh",
      y: window.matchMedia("(max-width: 768px)").matches ? "-100vh" : 0,
      opacity: 0,
    },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  mountain: {
    initial: {
      x: window.matchMedia("(max-width: 768px)").matches ? 0 : "100vh",
      y: window.matchMedia("(max-width: 768px)").matches ? "100vh" : 0,
      opacity: 0,
    },
    animate: { x: 0, y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  },
  button: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5, delay: 0.5 },
  },
};
