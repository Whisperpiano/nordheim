import { FullProduct } from "../../../lib/schemas/productSchema";

export interface ProductDetailsProps {
  product: FullProduct;
  scrollToReviews: () => void;
}
