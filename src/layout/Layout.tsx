import { AnimatePresence, motion } from "framer-motion";
import { Link, Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <header className="p-4 bg-gray-800 text-white">
          <nav>
            <Link to="/" className="mr-4">
              Home
            </Link>
            <Link to="/city" className="mr-4">
              City
            </Link>
            <Link to="/mountain">Mountain</Link>
            <Link to="/contact" className="ml-4">
              Contact
            </Link>
          </nav>
        </header>
      </motion.div>

      <AnimatePresence mode="wait">
        <Outlet />
      </AnimatePresence>
      <footer className="p-4 bg-gray-800 text-white mt-8 text-center">
        &copy; 2025 Nordheim
      </footer>
    </>
  );
}
