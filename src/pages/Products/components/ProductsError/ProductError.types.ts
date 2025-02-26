import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import { FullProductsArray } from "../../../../lib/schemas/productSchema";

export interface ProductsErrorProps {
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<FullProductsArray | null, Error>>;
}
