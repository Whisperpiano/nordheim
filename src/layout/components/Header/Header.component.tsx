import { Link } from "react-router";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <header className="p-4 bg-gray-800 text-white">
        <nav>
          <Link to="/" className="mr-4">
            Home
          </Link>
          <Link to="/products/city" className="mr-4">
            City
          </Link>
          <Link to="/products/mountain">Mountain</Link>
          <Link to="/contact" className="ml-4">
            Contact
          </Link>
        </nav>
      </header>
    </motion.div>
  );
}
