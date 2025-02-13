import { useEffect } from "react";
import Comments from "./Comments/Comments.component";
import ProductDetails from "./ProductInfo/ProductInfo.component";
import ProductPicture from "./ProductPicture/ProductPicture.component";
import { useSearchParams } from "react-router";

export default function SingleProduct() {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.delete("sort");
    setSearchParams(params);
  }, [searchParams, setSearchParams]);

  return (
    <>
      <article className="grid grid-cols-12 gap-10 mt-[100px] border-t border-gray-300 px-4 pb-8 pt-4">
        <ProductPicture />
        <ProductDetails />
      </article>

      <Comments />
    </>
  );
}
