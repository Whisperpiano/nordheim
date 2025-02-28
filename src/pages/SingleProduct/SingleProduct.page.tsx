import { motion } from "framer-motion";
import { useSingleProduct } from "../../hooks/data/useSingleProduct";
import { useScrollToReviews } from "../../hooks/scroll/useScrollToReviews";
import { singleProductVariants } from "./SingleProduct.variants";

import Comments from "./Comments/Comments.component";
import ProductDetails from "./ProductInfo/ProductDetails.component";
import ErrorPage from "../Error/ErrorPage.page";
import ProductPicture from "./ProductPicture/ProductPicture.component";
import Loader from "../../components/Loader/Loader.component";
import usePageTitle from "../../hooks/title/usePageTitle";

export default function SingleProduct() {
  const { reviewsRef, scrollToReviews } = useScrollToReviews();
  const { product, isLoading, slug, category } = useSingleProduct();
  usePageTitle(`Nordheim | ${product?.title}`);

  if (isLoading) return <Loader />;

  if (!product || !slug) return <ErrorPage />;

  return (
    <>
      <motion.section {...singleProductVariants.product}>
        <article className="grid grid-cols-12 mt-[100px] border-t border-gray-300 px-4 pb-8 pt-4">
          <ProductPicture slug={slug} category={category} />
          <ProductDetails product={product} scrollToReviews={scrollToReviews} />
        </article>

        <section className="px-6" ref={reviewsRef}>
          <Comments reviews={product.reviews} />
        </section>
      </motion.section>
    </>
  );
}
