import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

import Layout from "../layout/Layout.component.tsx";
import FadingFallback from "./components/FadingFallback/FadingFallback.component.tsx";
import CategoryHandler from "./components/CategoryHandler/CategoryHandler.component.tsx";
import City from "../pages/Products/City/City.page";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.component.tsx";
import CheckoutSuccess from "../pages/Checkout/CheckoutSuccess.page.tsx";

const Home = lazy(() => import("../pages/Home/Home.page"));
const Contact = lazy(() => import("../pages/Contact/Contact.page"));

const SingleProduct = lazy(
  () => import("../pages/SingleProduct/SingleProduct.page.tsx")
);
const Login = lazy(() => import("../pages/Auth/Login/Login.page.tsx"));
const Register = lazy(() => import("../pages/Auth/Register/Register.page.tsx"));
const Search = lazy(() => import("../pages/Search/Search.page.tsx"));
const ErrorPage = lazy(() => import("../pages/Error/ErrorPage.page.tsx"));
const Checkout = lazy(() => import("../pages/Checkout/Checkout.page.tsx"));

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
      { index: true, element: <City /> },
      { path: ":category", element: <CategoryHandler /> },
      { path: ":category/:slug", element: <SingleProduct /> },
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
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    ),
  },

  {
    path: "checkout/success",
    element: (
      <ProtectedRoute>
        <CheckoutSuccess />
      </ProtectedRoute>
    ),
  },

  {
    path: "*",
    element: <ErrorPage />,
  },
]);
