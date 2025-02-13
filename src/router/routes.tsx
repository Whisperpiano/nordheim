import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

import Layout from "../layout/Layout.component.tsx";
import FadingFallback from "./components/FadingFallback/FadingFallback.component.tsx";

const Home = lazy(() => import("../pages/Home/Home.page"));
const Contact = lazy(() => import("../pages/Contact/Contact.page"));
const City = lazy(() => import("../pages/Products/City/City.page"));
const Mountain = lazy(() => import("../pages/Products/Mountain/Mountain.page"));
const SingleProduct = lazy(
  () => import("../pages/SingleProduct/SingleProduct.page.tsx")
);
const Login = lazy(() => import("../pages/Auth/Login/Login.page.tsx"));
const Register = lazy(() => import("../pages/Auth/Register/Register.page.tsx"));
const Search = lazy(() => import("../pages/Search/Search.page.tsx"));
const ErrorPage = lazy(() => import("../pages/Error/ErrorPage.page.tsx"));
const Checkout = lazy(() => import("../pages/Checkout/Checkout.page.tsx"));
const CheckoutForm = lazy(
  () =>
    import("../pages/Checkout/components/CheckoutForm/CheckoutForm.component")
);
const CheckoutSuccess = lazy(
  () => import("../pages/Checkout/components/Success/Success.component.tsx")
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<FadingFallback />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "products",
    element: <Layout />,
    children: [
      { path: "city", element: <City /> },
      { path: "city/:slug", element: <SingleProduct /> },
      { path: "mountain", element: <Mountain /> },
      { path: "mountain/:slug", element: <SingleProduct /> },
    ],
  },
  {
    path: "contact",
    element: <Layout />,
    children: [{ index: true, element: <Contact /> }],
  },
  {
    path: "account",
    element: <Layout />,
    children: [
      { index: true, path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
  {
    path: "search",
    element: <Layout />,
    children: [{ index: true, element: <Search /> }],
  },
  {
    path: "checkout",
    element: <Checkout />,
    children: [
      { index: true, element: <CheckoutForm /> },
      { path: "success", element: <CheckoutSuccess /> },
    ],
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);
