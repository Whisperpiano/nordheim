import { categories } from "../../../../constants";
import { BannerProps } from "./Banner.types";

export default function Banner({ category }: BannerProps) {
  return (
    <section className={`relative h-[400px] lg:h-[650px] flex items-end`}>
      <div className="px-4 mb-16 absolute w-full h-ful z-20">
        <h1 className="mb-2 text-6xl font-semibold tracking-tight leading-none text-neutral-50 uppercase font-condensed ">
          {categories[category].title}
        </h1>
        <p className="text-lg font-normal text-neutral-50 font-sans">
          {categories[category].description}
        </p>
      </div>
      <div className="absolute inset-0 z-[5] bg-black/55 backdrop-blur-none"></div>

      <picture className="h-full w-full">
        {/* WEBP */}
        <source
          srcSet={`
              https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images/${category}-banner-xl.webp 2560w,
              https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images/${category}-banner-lg.webp 1920w,
              https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images/${category}-banner-md.webp 1200w,
              https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images/${category}-banner-sm.webp 600w,
            `}
          sizes="100vw"
          type="image/webp"
        />

        {/* Fallback */}
        <img
          src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images/${category}-banner-lg.webp`}
          alt={`Imagen de ${category}`}
          className="absolute w-full h-full object-cover z-1"
          loading="eager"
        />
      </picture>
    </section>
  );
}
