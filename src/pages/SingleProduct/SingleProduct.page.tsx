import { useParams } from "react-router";
import Comments from "./Comments/Comments.component";
import ProductDetails from "./ProductInfo/ProductDetails.component";

import { useRef } from "react";
import { motion } from "framer-motion";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductBySlug } from "../../api/products/products";
import ErrorPage from "../Error/ErrorPage.page";
import { FullProduct } from "../../lib/schemas/productSchema";
import ProductPicture from "./ProductPicture/ProductPicture.component";

export default function SingleProduct() {
  const { slug, category = "city" } = useParams<{
    slug: string;
    category: "city" | "mountain";
  }>();

  const reviewsRef = useRef<HTMLDivElement>(null);

  const scrollToReviews = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const queryClient = useQueryClient();
  const cachedProducts = queryClient.getQueryData<FullProduct[]>([
    "products",
    category,
  ]);

  const cachedProduct = cachedProducts?.find(
    (product) => product.slug === slug
  );

  const { data: product, isLoading } = useQuery({
    queryKey: ["products", category, slug],
    queryFn: () => {
      console.log("📡 Fetching product from API:", slug);
      return getProductBySlug(slug ?? "");
    },
    initialData: cachedProduct ?? undefined,
    gcTime: 500,
  });

  if (isLoading || !slug) return <div>Loading...</div>;

  if (!product) return <ErrorPage />;

  return (
    <>
      <motion.section
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0, transition: { duration: 0.1 } }}
        transition={{ transition: "slide-in", duration: 0.25 }}
      >
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
