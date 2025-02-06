import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";

import Contact from "../pages/Contact/Contact.page";
import City from "../pages/Products/City/City.page";
import Mountain from "../pages/Products/Mountain/Mountain.page";
import FadingFallback from "./components/FadingFallback/FadingFallback.component.tsx";
import Home from "../pages/Home/Home.page";
import SingleProduct from "../pages/SingleProduct/SingleProduct.page.tsx";
import Login from "../pages/Auth/Login/Login.page.tsx";
import Register from "../pages/Auth/Register/Register.page.tsx";
import Search from "../pages/Search/Search.page.tsx";
import ErrorPage from "../pages/Error/ErrorPage.component.tsx";

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
    path: "*",
    element: <ErrorPage />,
  },
]);
