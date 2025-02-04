import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";

import Contact from "../pages/Contact/Contact.page";
import City from "../pages/Products/City/City.page";
import Mountain from "../pages/Products/Mountain/Mountain.page";

const Home = lazy(() => import("../pages/Home/Home.page"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loader for home...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "city", element: <City /> },
      { path: "mountain", element: <Mountain /> },
      { path: "contact", element: <Contact /> },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
