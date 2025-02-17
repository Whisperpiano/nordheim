import ProductAccordion from "./components/ProductAccordion/ProductAccordion.component";
import ProductVariants from "./components/ProductVariants/ProductVariants.component";
import ProductHeader from "./components/ProductHeader/ProductHeader.component";
import ProductFooter from "./components/ProductFooter/ProductFooter.component";
import ProductForm from "./components/ProductForm/ProductForm.component";
import { FullProduct } from "../../../lib/schemas/productSchema";

export default function ProductDetails({ product }: { product: FullProduct }) {
  const { title, price, description, features, reviews } = product;
  return (
    <section className="col-span-12 lg:col-span-5 px-4">
      <ProductHeader title={title} price={price} reviews={reviews} />
      <ProductVariants />
      <ProductForm />
      <ProductAccordion description={description} features={features} />
      <ProductFooter />
    </section>
  );
}
