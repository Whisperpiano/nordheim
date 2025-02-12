import { categories } from "../../../../constants";
import { BannerProps } from "./Banner.types";

export default function Banner({ category }: BannerProps) {
  return (
    <section className="bg-center bg-no-repeat bg-cover bg-[url('/city-products.jpg')] bg-black/25 bg-blend-multiply h-[650px] flex items-end">
      <div className="px-4 mb-16">
        <h1 className="mb-2 text-6xl font-semibold tracking-tight leading-none text-neutral-50 uppercase font-condensed ">
          {categories[category].title}
        </h1>
        <p className="text-lg font-normal text-neutral-50 font-sans">
          {categories[category].description}
        </p>
      </div>
    </section>
  );
}
