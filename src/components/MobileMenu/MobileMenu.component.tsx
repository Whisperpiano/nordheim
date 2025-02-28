import { motion } from "framer-motion";
import { Drawer, DrawerBody, DrawerContent } from "@heroui/drawer";
import { mobileMenuStyles } from "./MobileMenu.styles";
import { useMobileMenu } from "../../hooks/mobilemenu/useMobileMenu";

export default function MobileMenu() {
  const { isMobileMenuOpen, handleClick, setMobileMenuOpen } = useMobileMenu();

  return (
    <Drawer
      isOpen={isMobileMenuOpen}
      onOpenChange={() => setMobileMenuOpen(!isMobileMenuOpen)}
      size="sm"
      placement="left"
      classNames={mobileMenuStyles.drawer}
    >
      <DrawerContent>
        <>
          <DrawerBody>
            <nav aria-label="Mobile main navigation" className="mt-12">
              <ul className="flex flex-col text-sm uppercase font-condensed font-medium gap-2 text-neutral-500">
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <button
                    onClick={() => handleClick("city")}
                    className={mobileMenuStyles.button}
                  >
                    City
                  </button>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.175 }}
                  className="group"
                >
                  <button
                    onClick={() => handleClick("mountain")}
                    className={mobileMenuStyles.button}
                  >
                    Mountain
                  </button>
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.35 }}
                  className="group"
                >
                  <button
                    onClick={() => handleClick("contact")}
                    className={mobileMenuStyles.button}
                  >
                    Contact
                  </button>
                </motion.li>
              </ul>
            </nav>
          </DrawerBody>
        </>
      </DrawerContent>
    </Drawer>
  );
}
