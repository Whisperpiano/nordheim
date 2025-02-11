export const homeVariants = {
  header: {
    initial: {
      y: window.matchMedia("(max-width: 768px)").matches ? 0 : "-100vh",
      opacity: 0,
    },
    animate: { y: 0, opacity: 1 },
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },

  footer: {
    initial: { y: "100vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      delay: 0.3,
      duration: 0.5,
    },
  },
};
