import { Drawer, DrawerBody, DrawerContent } from "@heroui/drawer";
import { useModalStore } from "../../store/modalStore";

import CartProduct from "./components/CartProduct.tsx/CartProduct.component";
import CartHeader from "./components/CartHeader/CartHeader.component";
import CartFooter from "./components/CartFooter/CartFooter.component";
import { useCartStore } from "../../store/cartStore";
import { AnimatePresence, motion } from "framer-motion";

export default function Cart() {
  const isCartOpen = useModalStore((state) => state.isCartOpen);
  const setCartOpen = useModalStore((state) => state.setCartOpen);
  const cart = useCartStore((state) => state.cart);
  const count = useCartStore((state) => state.count);

  return (
    <Drawer
      isOpen={isCartOpen}
      onOpenChange={() => setCartOpen(!isCartOpen)}
      size="lg"
      placement="right"
      classNames={{
        backdrop: "bg-black/50",
        base: "bg-neutral-50 rounded-none",
        closeButton: "translate-y-2.5 cursor-pointer",
        body: "px-0",
      }}
    >
      <DrawerContent>
        <CartHeader cartCount={count} />
        <DrawerBody>
          <div className="flex flex-col gap-6 px-6 py-4 border-t border-neutral-300 h-full">
            <AnimatePresence>
              {cart.length > 0 ? (
                cart.map((item) => <CartProduct key={item.id} item={item} />)
              ) : (
                <motion.div
                  className="grid place-content-center h-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <p className="text-neutral-500 font-sans text-sm font-normal">
                    Your cart is empty
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </DrawerBody>
        {cart.length > 0 && <CartFooter />}
      </DrawerContent>
    </Drawer>
  );
}
