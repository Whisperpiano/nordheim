export interface ImageProductProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  category: "city" | "mountain";
  format?: "avif" | "webp" | "both";
  slug: string;
}
