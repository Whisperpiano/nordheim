import { HeroUIWrapper } from "./components/HeroUIWrapper/HeroUIWrapper.component";
import Header from "./components/Header/Header.component";

import AnimatedOutlet from "../router/components/AnimatedOutlet/AnimatedOutlet.component";
import Modals from "./components/Modals/Modals.component";
import BrandValues from "./components/BrandValues/BrandValues.component";
import { ScrollRestoration } from "react-router";
import { useEffect } from "react";

import { useAuthStore } from "../store/authStore";
import Footer from "./components/Footer/Footer.component";

export default function Layout() {
  const checkAuth = useAuthStore((state) => state.checkAuth);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  useEffect(() => {
    checkAuth();
  }, [checkAuth, isLoggedIn]);

  return (
    <>
      <HeroUIWrapper>
        <ScrollRestoration />
        <Header />
        <main>
          <AnimatedOutlet />
          <Modals />
        </main>
        <BrandValues />
        <Footer />
      </HeroUIWrapper>
    </>
  );
}
