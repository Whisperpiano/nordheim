import { forwardRef } from "react";
import { cn } from "../../../../utils/cn";
import { ImageAuthProps } from "./ImageAuth.types";

const ImageAuth = forwardRef<HTMLImageElement, ImageAuthProps>(
  ({ className, format = "both", ...props }, ref) => {
    return (
      <picture className={cn(className)}>
        {/* AVIF */}
        {format === "avif" || format === "both" ? (
          <source
            srcSet={`
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/login-images/login-xl.avif 1920w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/login-images/login-lg.avif 1200w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/login-images/login-md.avif 600w,
         
          `}
            sizes={`50vw`}
            type="image/avif"
          />
        ) : null}

        {/* WebP */}
        {format === "webp" || format === "both" ? (
          <source
            srcSet={`
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/login-images/login-xl.webp 1920w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/login-images/login-lg.webp 1200w,
            https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/login-images/login-md.webp 600w,
           
          `}
            sizes={`50vw`}
            type="image/webp"
          />
        ) : null}

        {/* Fallback */}
        <img
          ref={ref}
          src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/login-images/login.jpg`}
          alt={`Login image`}
          sizes={`50vw`}
          className={cn(className)}
          {...props}
        />
      </picture>
    );
  }
);

export default ImageAuth;
