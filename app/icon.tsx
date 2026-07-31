import { ImageResponse } from "next/og";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#081510",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        {/* Hexagon */}
        <svg width="420" height="420" viewBox="0 0 420 420" style={{ position: "absolute" }}>
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E2C97E" />
              <stop offset="100%" stopColor="#C9A84C" />
            </linearGradient>
          </defs>
          <polygon
            points="210,30 370,120 370,300 210,390 50,300 50,120"
            fill="none"
            stroke="url(#g)"
            strokeWidth="14"
          />
        </svg>
        {/* DC monogram as a div — Satori cannot rasterize SVG <text> nodes */}
        <div
          style={{
            display: "flex",
            fontFamily: "Georgia, serif",
            fontSize: 170,
            fontWeight: 700,
            letterSpacing: "-6px",
            backgroundImage: "linear-gradient(135deg, #E2C97E, #C9A84C)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          DC
        </div>
      </div>
    ),
    { ...size }
  );
}
