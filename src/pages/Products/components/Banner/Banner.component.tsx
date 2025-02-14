import { categories } from "../../../../constants";
import { BannerProps } from "./Banner.types";

export default function Banner({ category }: BannerProps) {
  console.log(category);
  return (
    <section
      className={`bg-center bg-no-repeat bg-cover bg-[url('https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images//${category}-banner-1024.webp')] lg:bg-[url('https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images//${category}-banner-2560.webp')] bg-black/25 bg-blend-multiply h-[400px] lg:h-[650px] flex items-end`}
    >
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
