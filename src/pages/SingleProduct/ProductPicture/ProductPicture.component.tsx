import { motion } from "framer-motion";

export interface ProductPictureProps {
  slug: string;
  category: "city" | "mountain";
}

export default function ProductPicture({
  slug,
  category,
}: ProductPictureProps) {
  return (
    <picture className="col-span-12 lg:col-span-7 max-h-[calc(100vh-130px)] overflow-hidden">
      <source
        srcSet={`
                https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images//${slug}-xl.webp 1458w,
                https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images//${slug}-lg.webp 1024w,
                https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images//${slug}-md.webp 640w,
                https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images//${slug}-sm.webp 360w,
                https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images//${slug}-xs.webp 180w,
              `}
        sizes="
                (max-width: 480px) 180px, 
                (max-width: 768px) 360px, 
                (max-width: 1024px) 640px, 
                1458px"
        type="image/webp"
      />
      <motion.img
        src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images//${slug}-xs.webp`}
        alt="City"
        className="object-cover object-center w-full h-full"
      />
    </picture>
  );
}
