import { forwardRef } from "react";
import { cn } from "../../../../../../utils/cn";
import { ImageHomeProps } from "./ImageHome.types";

const ImageHome = forwardRef<HTMLImageElement, ImageHomeProps>(
  ({ name, className, format = "both", ...props }, ref) => {
    return (
      <picture>
        {/* AVIF */}
        {format === "avif" || format === "both" ? (
          <source
            srcSet={`
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${name}-xl.avif 1920w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${name}-lg.avif 1200w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${name}-md.avif 600w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${name}-sm.avif 400w
          `}
            sizes={`
            (max-width: 768px) 50vh, 
            50vw`}
            type="image/avif"
          />
        ) : null}

        {/* WebP */}
        {format === "webp" || format === "both" ? (
          <source
            srcSet={`
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${name}-xl.webp 1920w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${name}-lg.webp 1200w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${name}-md.webp 600w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${name}-sm.webp 400w
          `}
            sizes={`
            (max-width: 768px) 50vh, 
            50vw`}
            type="image/webp"
          />
        ) : null}

        {/* Fallback */}
        <img
          ref={ref}
          src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/home-images/${name}.jpg`}
          alt={`Home image of ${name}`}
          sizes={`
            (max-width: 768px) 50vh, 
            50vw`}
          className={cn(className)}
          {...props}
        />
      </picture>
    );
  }
);

export default ImageHome;
