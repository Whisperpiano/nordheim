import { DrawerFooter } from "@heroui/drawer";
import { RiCircleFill } from "react-icons/ri";
import { useCartStore } from "../../../../store/cartStore";
import { Spinner } from "@heroui/spinner";
import { useHandleCheckout } from "../../../../hooks/cart/useHandleCheckout";

import Button from "../../../Button/Button.component";

export default function CartFooter() {
  const { isNavigating, handleChekout } = useHandleCheckout();

  const totalPrice = useCartStore((state) => state.totalPrice);

  return (
    <DrawerFooter className="flex flex-col gap-4 border-t border-neutral-300 py-8">
      <p className="text-neutral-500 font-sans text-sm font-normal mb-2">
        Taxes and shipping calculated at checkout
      </p>
      <Button
        variant="primary"
        size="sm"
        font="primary"
        shape="square"
        fontSize="sm"
        onClick={handleChekout}
        disabled={isNavigating}
      >
        {isNavigating && <Spinner size="sm" color="default" />}

        {!isNavigating && (
          <>
            Checkout
            <span className="mx-6">
              <RiCircleFill size={5} />
            </span>
            {totalPrice} kr
          </>
        )}
      </Button>
    </DrawerFooter>
  );
}
