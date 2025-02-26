import { forwardRef } from "react";
import { cn } from "../../../../../../utils/cn";
import { ImageBannerProps } from "./ImageBanner.types";

const ImageBanner = forwardRef<HTMLImageElement, ImageBannerProps>(
  ({ category, className, ...props }, ref) => {
    return (
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
          ref={ref}
          src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images/${category}-banner.jpg`}
          alt={`Banner image of ${category} products`}
          sizes="100vw"
          className={cn(className)}
          {...props}
        />
      </picture>
    );
  }
);

export default ImageBanner;
