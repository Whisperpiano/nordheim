import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";

import Contact from "../pages/Contact/Contact.page";
import City from "../pages/Products/City/City.page";
import Mountain from "../pages/Products/Mountain/Mountain.page";
import FadingFallback from "./components/FadingFallback/FadingFallback.component.tsx";
import Home from "../pages/Home/Home.page";

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
      { path: "mountain", element: <Mountain /> },
    ],
  },
  {
    path: "contact",
    element: <Layout />,
    children: [{ index: true, element: <Contact /> }],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
