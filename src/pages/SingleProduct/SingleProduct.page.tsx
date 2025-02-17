import { useParams } from "react-router";
import Comments from "./Comments/Comments.component";
import ProductDetails from "./ProductInfo/ProductInfo.component";
import ProductPicture from "./ProductPicture/ProductPicture.component";
import { useSingleProduct } from "../../hooks/data/useSingleProduct";

export default function SingleProduct() {
  const { slug } = useParams();

  const { data: product, isLoading } = useSingleProduct(slug ?? "");

  if (!slug || isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <article className="grid grid-cols-12 gap-10 mt-[100px] border-t border-gray-300 px-4 pb-8 pt-4">
        <ProductPicture slug={slug} category={product.category} />
        <ProductDetails product={product} />
      </article>
      <Comments reviews={product.reviews} />
    </>
  );
}
