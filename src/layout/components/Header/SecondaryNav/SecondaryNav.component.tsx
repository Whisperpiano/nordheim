import {
  RiHandbagLine,
  RiMenu3Line,
  RiSearchLine,
  RiUserLine,
} from "react-icons/ri";
import { Link } from "react-router";
import { useModalStore } from "../../../../store/modalStore";
import Button from "../../../../components/Button/Button.component";
import buttonVariants from "../../../../components/Button/Button.styles";

export default function SecondaryNav() {
  const setCartOpen = useModalStore((state) => state.setCartOpen);
  const setSearchOpen = useModalStore((state) => state.setSearchOpen);
  const setMobileMenuOpen = useModalStore((state) => state.setMobileMenuOpen);

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
            <RiUserLine size={20} />
          </Link>
        </li>
        <li className="flex">
          <Button
            variant="default"
            size="sm"
            shape="rounded"
            onClick={() => setCartOpen(true)}
            aria-label="Open cart"
          >
            <RiHandbagLine size={20} />
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
