import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import AnimatedOutlet from "../router/components/AnimatedOutlet.tsx/AnimatedOutlet.component";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <AnimatedOutlet />
      </main>
      <Footer />
    </>
  );
}
