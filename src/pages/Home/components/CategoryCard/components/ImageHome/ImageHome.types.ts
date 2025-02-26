export interface ImageHomeProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: "city" | "mountain";
  format: "avif" | "webp" | "both";
}
