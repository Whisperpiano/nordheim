import { Drawer, DrawerBody, DrawerContent } from "@heroui/drawer";
import { useModalStore } from "../../store/modalStore";
import { useCartStore } from "../../store/cartStore";
import { AnimatePresence, motion } from "framer-motion";
import { cartVariants } from "./Cart.variants";
import { cartDrawerStyles } from "./Cart.styles";

import CartProduct from "./components/CartProduct.tsx/CartProduct.component";
import CartHeader from "./components/CartHeader/CartHeader.component";
import CartFooter from "./components/CartFooter/CartFooter.component";

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
      classNames={cartDrawerStyles}
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
                  {...cartVariants.cart}
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
