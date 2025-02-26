import { QueryObserverResult, RefetchOptions } from "@tanstack/react-query";
import Button from "../../../../components/Button/Button.component";
import { FullProductsArray } from "../../../../lib/schemas/productSchema";

interface ProductsErrorProps {
  refetch: (
    options?: RefetchOptions
  ) => Promise<QueryObserverResult<FullProductsArray | null, Error>>;
}

export default function ProductsError({ refetch }: ProductsErrorProps) {
  return (
    <div className="grid place-content-center min-h-[calc(100dvh-454px)] lg:min-h-[calc(100dvh-704px)]">
      <p>No products found</p>
      <Button
        variant={"primary"}
        size={"sm"}
        shape={"square"}
        onClick={() => refetch()}
        className="mt-4"
      >
        Try again
      </Button>
    </div>
  );
}
