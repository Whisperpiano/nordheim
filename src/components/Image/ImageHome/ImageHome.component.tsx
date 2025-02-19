import { forwardRef } from "react";
import { cn } from "../../../utils/cn";
import { ImageHomeProps } from "./ImageHome.types";

const ImageHome = forwardRef<HTMLImageElement, ImageHomeProps>(
  ({ name, className, format, folder, ...props }, ref) => {
    return (
      <picture>
        {/* AVIF */}
        {format === "avif" || format === "both" ? (
          <source
            srcSet={`
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${folder}/${name}-xl.avif 1920w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${folder}/${name}-lg.avif 1200w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${folder}/${name}-md.avif 600w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${folder}/${name}-sm.avif 400w
          `}
            sizes={`
              (max-width: 480px) 100vw, 
              (max-width: 768px) 50vw, 
              (max-width: 1024px) 50vw, 
              (max-width: 1440px) 50vw, 
              50vw`}
            type="image/avif"
          />
        ) : null}

        {/* WebP */}
        {format === "webp" || format === "both" ? (
          <source
            srcSet={`
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${folder}/${name}-xl.webp 1920w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${folder}/${name}-lg.webp 1200w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${folder}/${name}-md.webp 600w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${folder}/${name}-sm.webp 400w
          `}
            sizes={`
            (max-width: 480px) 100vw, 
            (max-width: 768px) 50vw, 
            (max-width: 1024px) 50vw, 
            (max-width: 1440px) 50vw, 
            50vw`}
            type="image/webp"
          />
        ) : null}

        {/* Fallback */}
        <img
          ref={ref}
          src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${folder}/${name}-lg.webp`}
          alt={`Imagen de ${name}`}
          className={cn(className)}
          {...props}
        />
      </picture>
    );
  }
);

export default ImageHome;
