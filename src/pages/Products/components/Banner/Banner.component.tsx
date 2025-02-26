import { categories } from "../../../../config/config";
import { BannerProps } from "./Banner.types";
import ImageBanner from "./components/ImageBanner/ImageBanner.component";

export default function Banner({ category }: BannerProps) {
  return (
    <section className={`relative h-[400px] lg:h-[650px] flex items-end`}>
      <div className="px-4 sm:px-8 lg:px-12 xl:px-16 pb-8 lg:pb-12 xl:mb-16 absolute w-full z-20">
        <h1 className="mb-1 sm:mb-2 text-4xl sm:text-6xl font-semibold tracking-tight leading-none text-neutral-50 uppercase font-condensed ">
          {categories[category].title}
        </h1>
        <p className="ml-1 text-sm sm:text-lg font-normal text-neutral-50 font-sans">
          {categories[category].description}
        </p>
      </div>

      <div className="absolute inset-0 z-[5] bg-black/55 backdrop-blur-none"></div>

      <ImageBanner
        category={category}
        className="absolute w-full h-full object-cover z-1"
      />
    </section>
  );
}
