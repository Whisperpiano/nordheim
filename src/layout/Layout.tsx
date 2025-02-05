import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import AnimatedOutlet from "../router/AnimatedOutlet";

export default function Layout() {
  return (
    <>
      <Header />
      <AnimatedOutlet />
      <Footer />
    </>
  );
}
