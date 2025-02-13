import ProductAccordion from "./components/ProductAccordion/ProductAccordion.component";
import ProductVariants from "./components/ProductVariants/ProductVariants.component";
import ProductHeader from "./components/ProductHeader/ProductHeader.component";
import ProductFooter from "./components/ProductFooter/ProductFooter.component";
import ProductForm from "./components/ProductForm/ProductForm.component";

export default function ProductDetails() {
  return (
    <section className="col-span-12 lg:col-span-5 px-4">
      <ProductHeader />
      <ProductVariants />
      <ProductForm />
      <ProductAccordion />
      <ProductFooter />
    </section>
  );
}
