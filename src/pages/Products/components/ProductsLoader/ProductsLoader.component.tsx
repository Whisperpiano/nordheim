import { Spinner } from "@heroui/spinner";

export default function ProductsLoader() {
  return (
    <div className="flex justify-center min-h-[calc(100dvh-454px)] lg:min-h-[calc(100dvh-704px)]">
      <Spinner size="lg" color="default" />
    </div>
  );
}
