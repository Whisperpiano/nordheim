import {
  RiMenu3Line,
  RiSearchLine,
  RiShoppingBag2Line,
  RiUserLine,
} from "react-icons/ri";
import { Link } from "react-router";
import { useModalStore } from "../../../../store/modalStore";
import Button from "../../../../components/Button/Button.component";
import buttonVariants from "../../../../components/Button/Button.styles";
import { useCartStore } from "../../../../store/cartStore";

export default function SecondaryNav() {
  const setCartOpen = useModalStore((state) => state.setCartOpen);
  const setSearchOpen = useModalStore((state) => state.setSearchOpen);
  const setMobileMenuOpen = useModalStore((state) => state.setMobileMenuOpen);

  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="flex text-neutral-500" aria-label="Secondary navigation">
      <ul className="flex items-center gap-3 list-none">
        <li className="flex">
          <Button
            variant="default"
            size="sm"
            shape="rounded"
            onClick={() => setSearchOpen(true)}
            aria-label="Open searchbar"
          >
            <RiSearchLine size={20} />
          </Button>
        </li>
        <li className="flex">
          <Link
            to="/account/login"
            className={buttonVariants({
              variant: "default",
              size: "sm",
              shape: "rounded",
            })}
          >
            <span className="sr-only">Account</span>
            <RiUserLine size={20} />
          </Link>
        </li>
        <li className="flex group">
          <Button
            variant="default"
            size="sm"
            shape="rounded"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
            className="relative"
          >
            <RiShoppingBag2Line size={20} />
            {cart.length > 0 && (
              <span className="top-1.5 right-1.5 absolute text-xs font-bold font-sans bg-neutral-500 h-2 w-2 rounded-full group-hover:bg-neutral-700 transition-colors duration-300"></span>
            )}
          </Button>
        </li>
        <li className="flex lg:hidden ">
          <Button
            variant="default"
            size="sm"
            shape="rounded"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open cart"
          >
            <RiMenu3Line size={20} />
          </Button>
        </li>
      </ul>
    </nav>
  );
}
