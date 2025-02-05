import { Link } from "react-router";
import { motion } from "framer-motion";
import Logo from "../../../components/Logo/Logo.component";
import { RiHandbagLine, RiSearchLine, RiUserLine } from "react-icons/ri";

export default function Header() {
  return (
    <motion.header
      className="px-4 py-4 bg-transparent text-neutral-50 flex items-center justify-between fixed top-0 left-0 right-0 z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex items-center">
        <motion.div initial={{ x: "-10vw" }} animate={{ x: 0 }}>
          <Link to="/">
            <Logo />
          </Link>
        </motion.div>
        <nav>
          <ul className="flex uppercase font-condensed gap-4 ml-8">
            <li>
              <Link to="/products/city" className="px-2 py-2">
                City
              </Link>
            </li>
            <li>
              <Link to="/products/mountain" className="px-2 py-2">
                Mountain
              </Link>
            </li>
            <li>
              <Link to="/contact" className="px-2 py-2">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <aside className="flex items-center gap-8">
        <button className="cursor-pointer">
          <RiSearchLine size={24} />
        </button>
        <button className="cursor-pointer">
          <RiUserLine size={24} />
        </button>
        <button className="cursor-pointer">
          <RiHandbagLine size={24} />
        </button>
      </aside>
    </motion.header>
  );
}
