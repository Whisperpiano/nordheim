import { cloneElement } from "react";
import { useLocation, useOutlet } from "react-router";
import { AnimatePresence } from "framer-motion";

const AnimatedOutlet = () => {
  const location = useLocation();
  const outletElement = useOutlet();

  return (
    <AnimatePresence mode="wait" initial={true}>
      {outletElement && cloneElement(outletElement, { key: location.pathname })}
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
