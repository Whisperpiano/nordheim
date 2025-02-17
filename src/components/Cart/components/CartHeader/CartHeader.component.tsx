import { DrawerHeader } from "@heroui/drawer";

export default function CartHeader({ cartCount }: { cartCount: number }) {
  return (
    <DrawerHeader className="uppercase font-sans font-medium flex items-center text-xl gap-3">
      Cart
      <span className="text-xs px-2 py-0.5 bg-neutral-950 text-neutral-50">
        {cartCount}
      </span>
    </DrawerHeader>
  );
}
