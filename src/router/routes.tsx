import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

import Layout from "../layout/Layout.component.tsx";
import FadingFallback from "./components/FadingFallback/FadingFallback.component.tsx";

// Lazy loading for pages
const Home = lazy(() => import("../pages/Home/Home.page"));
const City = lazy(() => import("../pages/Products/City/City.page"));
const CategoryHandler = lazy(
  () => import("./components/CategoryHandler/CategoryHandler.component.tsx")
);
const CheckoutSuccess = lazy(
  () => import("../pages/Checkout/CheckoutSuccess.page.tsx")
);

const ProtectedRoute = lazy(
  () => import("./components/ProtectedRoute/ProtectedRoute.component.tsx")
);
const AuthGuard = lazy(
  () => import("./components/AuthGuard/AuthGuard.component.tsx")
);

const Contact = lazy(() => import("../pages/Contact/Contact.page"));
const SingleProduct = lazy(
  () => import("../pages/SingleProduct/SingleProduct.page.tsx")
);
const Login = lazy(() => import("../pages/Auth/Login/Login.page.tsx"));
const Register = lazy(() => import("../pages/Auth/Register/Register.page.tsx"));
const Search = lazy(() => import("../pages/Search/Search.page.tsx"));
const ErrorPage = lazy(() => import("../pages/Error/ErrorPage.page.tsx"));
const Checkout = lazy(() => import("../pages/Checkout/Checkout.page.tsx"));
const Profile = lazy(
  () => import("../pages/Auth/Profile/Profile.component.tsx")
);

// Routes
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
      {
        index: true,
        path: "login",
        element: (
          <AuthGuard>
            <Login />
          </AuthGuard>
        ),
      },
      {
        path: "register",
        element: (
          <AuthGuard>
            <Register />
          </AuthGuard>
        ),
      },
      {
        path: "profile",
        element: <Profile />,
      },
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
