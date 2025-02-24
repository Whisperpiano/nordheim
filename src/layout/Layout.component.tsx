import { HeroUIWrapper } from "./components/HeroUIWrapper/HeroUIWrapper.component";
import Header from "./components/Header/Header.component";
import Footer from "./components/Footer/Footer.component";
import AnimatedOutlet from "../router/components/AnimatedOutlet/AnimatedOutlet.component";
import Modals from "./components/Modals/Modals.component";
import BrandValues from "./components/BrandValues/BrandValues.component";
import { ScrollRestoration } from "react-router";
import { useEffect } from "react";

import { useAuthStore } from "../store/authStore";

export default function Layout() {
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <>
      <HeroUIWrapper>
        <ScrollRestoration />
        <div className="min-h-[calc(100vh-120px)] ">
          <Header />
          <main>
            <AnimatedOutlet />
            <Modals />
          </main>
        </div>
        <BrandValues />
        <Footer />
      </HeroUIWrapper>
    </>
  );
}
