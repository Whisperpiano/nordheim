export interface ImageAuthProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  format?: "avif" | "webp" | "both";
}
