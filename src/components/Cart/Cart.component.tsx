import { Drawer, DrawerBody, DrawerContent } from "@heroui/drawer";
import { useModalStore } from "../../store/modalStore";

import CartProduct from "./components/CartProduct.tsx/CartProduct.component";
import CartHeader from "./components/CartHeader/CartHeader.component";
import CartFooter from "./components/CartFooter/CartFooter.component";

export default function Cart() {
  const isCartOpen = useModalStore((state) => state.isCartOpen);
  const setCartOpen = useModalStore((state) => state.setCartOpen);

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
        <CartHeader />
        <DrawerBody>
          <div className="border-y border-neutral-300 py-4">
            <p className="px-6 text-neutral-500 font-sans text-sm font-normal">
              Spend 235 kr more and get free shipping!
            </p>
          </div>

          <div className="flex flex-col gap-6 px-6 py-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <CartProduct key={i} />
            ))}
          </div>
        </DrawerBody>
        <CartFooter />
      </DrawerContent>
    </Drawer>
  );
}
