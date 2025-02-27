import { forwardRef } from "react";
import { cn } from "../../../../../../utils/cn";
import { ImageSearchProductProps } from "./ImageSearchProduct.types";

const ImageSearchProduct = forwardRef<
  HTMLImageElement,
  ImageSearchProductProps
>(({ category, slug, className, format = "both", ...props }, ref) => {
  return (
    <picture>
      {/* AVIF */}
      {format === "avif" || format === "both" ? (
        <source
          srcSet={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}-md.avif 640w, https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}-sm.avif 360w`}
          sizes="(min-width: 1024px) 640px, 360px"
          type="image/avif"
        />
      ) : null}

      {/* WebP */}
      {format === "webp" || format === "both" ? (
        <source
          srcSet={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}-md.webp 640w, https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}-sm.webp 360w`}
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
        {...props}
      />
    </picture>
  );
});

export default ImageSearchProduct;
