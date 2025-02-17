import { useParams } from "react-router";
import Comments from "./Comments/Comments.component";
import ProductDetails from "./ProductInfo/ProductDetails.component";
import ProductPicture from "./ProductPicture/ProductPicture.component";
import { useSingleProduct } from "../../hooks/data/useSingleProduct";
import { useRef } from "react";

export default function SingleProduct() {
  const { slug } = useParams();
  const reviewsRef = useRef<HTMLDivElement>(null);

  const scrollToReviews = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const { data: product, isLoading } = useSingleProduct(slug ?? "");

  if (!slug || isLoading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <>
      <article className="grid grid-cols-12 gap-10 mt-[100px] border-t border-gray-300 px-4 pb-8 pt-4">
        <ProductPicture slug={slug} category={product.category} />
        <ProductDetails product={product} scrollToReviews={scrollToReviews} />
      </article>

      <section className="p-4" ref={reviewsRef}>
        <Comments reviews={product.reviews} />
      </section>
    </>
  );
}
