import { VariantsArray } from "../../../../../lib/schemas/productSchema";

export interface ProductFormProps {
  variants: VariantsArray;
  title: string;
  slug: string;
  price: number;
  category: "city" | "mountain";
}
