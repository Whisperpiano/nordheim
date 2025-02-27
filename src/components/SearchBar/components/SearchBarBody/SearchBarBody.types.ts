import { NavigateFunction } from "react-router";
import { FullProductsArray } from "../../../../lib/schemas/productSchema";

export interface SearchBarBodyProps {
  searchedProducts: FullProductsArray;
  query: string;
  onClose: () => void;
  navigate: NavigateFunction;
}
