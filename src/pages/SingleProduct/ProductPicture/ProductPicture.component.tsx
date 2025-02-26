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
                https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}-xl.webp 1458w
                
              `}
        sizes="
             
              1458px"
        type="image/webp"
      />

      {/* Fallback */}
      <img
        alt="City"
        src={`https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/${category}-images/${slug}.jpg`}
        sizes="
             
              1458px"
        className="object-cover object-center w-full h-full"
      />
    </picture>
  );
}
