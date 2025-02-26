import { Spinner } from "@heroui/spinner";

export default function Loader() {
  return (
    <div className="mt-[100px] flex justify-center min-h-[calc(100dvh-100px)]">
      <Spinner size="lg" color="default" />
    </div>
  );
}
