import { forwardRef, useEffect, useState } from "react";
import { cn } from "../../../../utils/cn";
import { ImageProductProps } from "./ImageProduct.types";

const ImageProduct = forwardRef<HTMLImageElement, ImageProductProps>(
  ({ category, slug, className, format = "both", ...props }, ref) => {
    const [isLoading, setIsLoading] = useState(true);

    // Preload image in browser, so it loads faster in single product page and in cart
    useEffect(() => {
      const preloadImageXL = new Image();
      preloadImageXL.src = `https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}-xl.webp`;
      const preloadImageXS = new Image();
      preloadImageXS.src = `https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}-xs.webp`;
    }, [category, slug]);

    return (
      <div
        className={cn(
          "relative w-full h-full",
          isLoading && "bg-neutral-500/25 animate-pulse"
        )}
      >
        <picture>
          {/* AVIF */}
          {format === "avif" || format === "both" ? (
            <source
              srcSet={`
                https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}-md.avif 640w, 
                https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}-sm.avif 360w
              `}
              sizes="(min-width: 1024px) 640px, 360px"
              type="image/avif"
            />
          ) : null}

          {/* WebP */}
          {format === "webp" || format === "both" ? (
            <source
              srcSet={`
                https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}-md.webp 640w, 
                https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}-sm.webp 360w
              `}
              sizes="(min-width: 1024px) 640px, 360px"
              type="image/webp"
            />
          ) : null}

          {/* Fallback JPG */}
          <img
            ref={ref}
            src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}.jpg`}
            alt={`Home image of ${slug}`}
            sizes="(min-width: 1024px) 640px, 360px"
            className={cn(className)}
            onLoad={() => setIsLoading(false)}
            {...props}
          />
        </picture>
      </div>
    );
  }
);

export default ImageProduct;
