import { HeroUIWrapper } from "./components/HeroUIWrapper/HeroUIWrapper.component";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import AnimatedOutlet from "../router/components/AnimatedOutlet.tsx/AnimatedOutlet.component";
import Modals from "./components/Modals/Modals.component";
import BrandValues from "./components/BrandValues/BrandValues.component";

export default function Layout() {
  return (
    <>
      <HeroUIWrapper>
        <Header />
        <main>
          <AnimatedOutlet />
          <Modals />
          <BrandValues />
        </main>
        <Footer />
      </HeroUIWrapper>
    </>
  );
}
