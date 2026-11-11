import type { ImgHTMLAttributes } from "react";
import dimensions from "@/content/photo-dimensions.json";

const photos: Record<string, { width: number; height: number; sources: { file: string; width: number }[] }> = dimensions;

/** "/revive-photos/bar.jpg" -> "/revive-photos/bar-640.webp 640w, ..." (base path preserved) */
export function deriveSrcSet(src: string): string | undefined {
  const file = src.split("/").pop() ?? "";
  const photo = photos[file];
  if (!photo) return undefined;
  const prefix = src.slice(0, src.lastIndexOf("/") + 1);
  return photo.sources.map((source) => `${prefix}${source.file} ${source.width}w`).join(", ");
}

type VenueImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt"> & {
  src: string;
  alt: string;
  sizes?: string;
  width?: number;
  height?: number;
  /** Hero / above-the-fold: eager + high fetch priority */
  priority?: boolean;
};

export function VenueImage({
  src,
  alt,
  sizes = "100vw",
  width,
  height,
  priority = false,
  ...rest
}: VenueImageProps) {
  const srcSet = deriveSrcSet(src);
  const photo = photos[src.split("/").pop() ?? ""];
  return (
    <picture className="contents">
      {srcSet && <source type="image/webp" srcSet={srcSet} sizes={sizes} />}
      <img
        src={src}
        alt={alt}
        width={width ?? photo?.width}
        height={height ?? photo?.height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : undefined}
        {...rest}
      />
    </picture>
  );
}
