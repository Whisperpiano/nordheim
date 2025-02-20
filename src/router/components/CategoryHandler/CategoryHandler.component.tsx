import { lazy } from "react";
import { useParams } from "react-router";

const City = lazy(() => import("../../../pages/Products/City/City.page.tsx"));
const Mountain = lazy(
  () => import("../../../pages/Products/Mountain/Mountain.page.tsx")
);
const ErrorPage = lazy(() => import("../../../pages/Error/ErrorPage.page.tsx"));

export default function CategoryHandler() {
  const { category } = useParams();

  if (category === "city") return <City />;
  if (category === "mountain") return <Mountain />;

  return <ErrorPage />;
}
