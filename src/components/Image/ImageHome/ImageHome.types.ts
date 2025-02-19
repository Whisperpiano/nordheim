export interface ImageHomeProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  name: string;
  format: "avif" | "webp" | "both";
  folder: string;
}
