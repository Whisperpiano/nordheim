import Button from "../../../../components/Button/Button.component";
import { ProductsErrorProps } from "./ProductError.types";

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
