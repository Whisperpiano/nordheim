import { Link } from "react-router";
import Logo from "../../../../components/Logo/Logo.component";

export default function LogoHeader() {
  return (
    <h1>
      <Link to="/">
        <span className="sr-only">Nordheim</span>
        <Logo theme="dark" />
      </Link>
    </h1>
  );
}
