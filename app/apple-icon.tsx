import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        }}
      >
        <svg width="150" height="150" viewBox="0 0 420 420">
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
          <text
            x="210"
            y="255"
            textAnchor="middle"
            fontSize="160"
            fontFamily="Georgia, serif"
            fontWeight="700"
            fill="url(#g)"
            letterSpacing="-6"
          >
            DC
          </text>
        </svg>
      </div>
    ),
    { ...size }
  );
}
