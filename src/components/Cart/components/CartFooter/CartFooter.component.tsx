import { DrawerFooter } from "@heroui/drawer";
import { useNavigate } from "react-router";
import { useModalStore } from "../../../../store/modalStore";
import { RiCircleFill } from "react-icons/ri";

import Button from "../../../Button/Button.component";

export default function CartFooter() {
  const setCartOpen = useModalStore((state) => state.setCartOpen);
  const navigate = useNavigate();

  const handleChekout = () => {
    setCartOpen(false);
    navigate("/checkout");
  };

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
      >
        Checkout
        <span className="mx-6">
          <RiCircleFill size={5} />
        </span>
        2595 kr
      </Button>
    </DrawerFooter>
  );
}
