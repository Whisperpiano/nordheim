import { ReviewsArray } from "../../../../../lib/schemas/productSchema";

export interface ProductHeaderProps {
  title: string;
  price: number;
  reviews: ReviewsArray;
  scrollToReviews: () => void;
}
