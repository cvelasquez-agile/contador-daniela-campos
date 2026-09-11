import Image from "next/image";

interface LogoProps {
  variant?: "icon" | "full";
  className?: string;
  /** Rendered height in px; width follows the source image's own aspect ratio. */
  size?: number;
}

const SOURCES = {
  icon: { src: "/logo-icon.png", width: 859, height: 991 },
  full: { src: "/logo-full.png", width: 2724, height: 598 },
};

export default function Logo({ variant = "full", className = "", size = 40 }: LogoProps) {
  const { src, width, height } = SOURCES[variant];
  const renderedWidth = Math.round((size * width) / height);

  return (
    <Image
      src={src}
      alt="Daniela Campos, Contadora Pública"
      width={width}
      height={height}
      style={{ height: size, width: renderedWidth }}
      className={className}
      priority
    />
  );
}
