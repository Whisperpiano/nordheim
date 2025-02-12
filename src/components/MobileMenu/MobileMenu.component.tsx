import { Drawer, DrawerBody, DrawerContent } from "@heroui/drawer";
import { useModalStore } from "../../store/modalStore";
import { Link } from "react-router";
import { motion } from "framer-motion";

export default function MobileMenu() {
  const isMobileMenuOpen = useModalStore((state) => state.isMobileMenuOpen);
  const setMobileMenuOpen = useModalStore((state) => state.setMobileMenuOpen);
  return (
    <Drawer
      isOpen={isMobileMenuOpen}
      onOpenChange={() => setMobileMenuOpen(!isMobileMenuOpen)}
      size="sm"
      placement="left"
      classNames={{
        backdrop: "bg-black/50",
        base: "bg-neutral-50 rounded-none",
        closeButton:
          "left-0 text-2xl text-neutral-400 inline-flex max-w-fit transition-colors duration-300 hover:bg-transparent hover:text-neutral-500 mt-2",
        body: "px-0",
      }}
    >
      <DrawerContent>
        <>
          <DrawerBody>
            <nav aria-label="Mobile main navigation" className="mt-12">
              <ul className="flex flex-col text-sm uppercase font-condensed font-medium gap-2   text-neutral-500">
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <Link
                    to="/products/city"
                    className="group-hover:text-neutral-900 transition-all duration-300 flex py-5 mx-4 hover:-tracking-tighter"
                  >
                    City
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.175 }}
                  className="group"
                >
                  <Link
                    to="/products/mountain"
                    className="group-hover:text-neutral-900 transition-all duration-300 flex py-5 border-t border-gray-300 mx-4 hover:-tracking-tighter"
                  >
                    Mountain
                  </Link>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="group"
                >
                  <Link
                    to="/contact"
                    className="group-hover:text-neutral-900 transition-all duration-300 flex py-5 border-t border-gray-300 mx-4 hover:-tracking-tighter"
                  >
                    Contact
                  </Link>
                </motion.li>
              </ul>
            </nav>
          </DrawerBody>
        </>
      </DrawerContent>
    </Drawer>
  );
}
