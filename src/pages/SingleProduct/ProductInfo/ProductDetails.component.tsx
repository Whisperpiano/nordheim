import { ProductDetailsProps } from "./ProductDetails.types";

import ProductAccordion from "./components/ProductAccordion/ProductAccordion.component";
import ProductVariants from "./components/ProductVariants/ProductVariants.component";
import ProductHeader from "./components/ProductHeader/ProductHeader.component";
import ProductFooter from "./components/ProductFooter/ProductFooter.component";
import ProductForm from "./components/ProductForm/ProductForm.component";

export default function ProductDetails({
  product,
  scrollToReviews,
}: ProductDetailsProps) {
  const {
    title,
    price,
    description,
    features,
    reviews,
    variants,
    category,
    slug,
  } = product;

  return (
    <section className="col-span-12 lg:col-span-5 pl-0 pr-0 pt-6 lg:pl-10 lg:pr-6 lg:pt-0">
      <ProductHeader
        title={title}
        price={price}
        reviews={reviews}
        scrollToReviews={scrollToReviews}
      />
      <ProductVariants variants={variants} />

      <ProductForm
        variants={variants}
        title={title}
        slug={slug}
        price={price}
        category={category}
      />

      <ProductAccordion
        description={description}
        features={features}
        variants={variants}
      />

      <ProductFooter />
    </section>
  );
}
