import { Link } from "react-router";

import { FullProduct } from "../../lib/schemas/productSchema";
import RatingStars from "../RatingStars/RatingStars.component";

export default function SearchProductCard({
  product,
  onClose,
}: {
  product: FullProduct;
  onClose: () => void;
}) {
  const totalRating = product.reviews.length
    ? product.reviews.reduce((acc, review) => acc + review.rating, 0) /
      product.reviews.length
    : 0;

  return (
    <Link
      to={`/products/${product.category}/${product.slug}`}
      className="group"
      onClick={onClose}
    >
      <article className="flex lg:block">
        <div className="overflow-hidden">
          <picture>
            <source
              srcSet={`
                  https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${product.category}-images//${product.slug}-xl.webp 1458w,
                  https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${product.category}-images//${product.slug}-lg.webp 1024w,
                  https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${product.category}-images//${product.slug}-md.webp 640w,
                  https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${product.category}-images//${product.slug}-sm.webp 360w,
                  https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${product.category}-images//${product.slug}-xs.webp 180w,
                  `}
              sizes="
                (max-width: 480px) 180px, 
                (max-width: 768px) 360px, 
                (max-width: 1024px) 640px, 
                1458px"
              type="image/webp"
            />
            <img
              src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${product.category}-images//${product.slug}.jpg`}
              alt="City"
              className="object-cover aspect-[4/5] w-[100px] lg:w-full group-hover:scale-105 transition-transform duration-700 blur-xl"
              style={{
                backgroundImage: `https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${product.category}-images//${product.slug}-xs.webp`,
              }}
              loading="lazy"
              onLoad={(e) => e.currentTarget.classList.remove("blur-xl")}
            />
          </picture>
        </div>

        <div className="p-4">
          <h2 className="text-neutral-950 text-base font-semibold font-condensed">
            {product.title}
          </h2>
          <span className="text-neutral-500 font-sans text-sm font-normal">
            {product.price} kr
          </span>
          <div className="flex gap-2 items-center mt-1">
            <div className="flex gap-0.5 items-center">
              <RatingStars size={12} rating={totalRating} />
            </div>
            <span className="text-neutral-500 font-sans text-xs font-normal">
              {product.reviews.length} reviews
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}
