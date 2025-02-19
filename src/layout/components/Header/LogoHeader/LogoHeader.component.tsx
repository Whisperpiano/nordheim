import { Link } from "react-router";
import { motion } from "framer-motion";
import Logo from "../../../../components/Logo/Logo.component";

export default function LogoHeader() {
  return (
    <motion.h1 initial={{ x: -100 }} animate={{ x: 0 }}>
      <Link to="/">
        <span className="sr-only">Nordheim</span>
        <Logo theme="dark" />
      </Link>
    </motion.h1>
  );
}
