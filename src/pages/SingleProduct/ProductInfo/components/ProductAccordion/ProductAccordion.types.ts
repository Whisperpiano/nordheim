import { VariantsArray } from "../../../../../lib/schemas/productSchema";

export interface ProductAccordionProps {
  description: string;
  features: string[];
  variants: VariantsArray;
}
