import { Link } from "react-router";

export default function MainNav() {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex text-sm uppercase font-condensed font-medium gap-2 pl-3 ml-4 border-l border-neutral-300 text-neutral-500">
        <li className="group">
          <Link
            to="/products/city"
            className="px-2 py-2 group-hover:text-neutral-900 transition-colors duration-300"
          >
            City
          </Link>
        </li>
        <li className="group">
          <Link
            to="/products/mountain"
            className="px-2 py-2 group-hover:text-neutral-900 transition-colors duration-300"
          >
            Mountain
          </Link>
        </li>
        <li className="group">
          <Link
            to="/contact"
            className="px-2 py-2 group-hover:text-neutral-900 transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
