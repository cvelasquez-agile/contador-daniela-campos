import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Daniela Campos – Contadora Pública en Fusagasugá";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#081510",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          fontFamily: "Georgia, serif",
          padding: "0 80px",
        }}
      >
        {/* Dot grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(circle, rgba(201,168,76,0.10) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
            display: "flex",
          }}
        />

        {/* Left glow */}
        <div
          style={{
            position: "absolute",
            left: -150,
            top: "50%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(201,168,76,0.07)",
            filter: "blur(80px)",
            display: "flex",
          }}
        />

        {/* Right glow */}
        <div
          style={{
            position: "absolute",
            right: -100,
            top: "50%",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(201,168,76,0.05)",
            filter: "blur(100px)",
            display: "flex",
          }}
        />

        {/* LEFT: Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 0,
            zIndex: 10,
            maxWidth: 620,
          }}
        >
          {/* Overline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              marginBottom: 28,
            }}
          >
            <div
              style={{
                width: 32,
                height: 1,
                background: "#C9A84C",
                display: "flex",
              }}
            />
            <span
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 13,
                color: "#C9A84C",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              Fusagasugá · Cundinamarca
            </span>
          </div>

          {/* Badge */}
          <div
            style={{
              display: "flex",
              marginBottom: 20,
            }}
          >
            <span
              style={{
                fontFamily: "Arial, sans-serif",
                fontSize: 12,
                color: "#C9A84C",
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                border: "1px solid rgba(201,168,76,0.4)",
                padding: "6px 16px",
                borderRadius: 999,
              }}
            >
              Contadora Pública
            </span>
          </div>

          {/* Main name */}
          <div
            style={{
              fontSize: 74,
              fontWeight: 700,
              color: "#F5F0E8",
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            Daniela
            <br />
            Campos
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: 20,
              color: "rgba(237,229,212,0.55)",
              marginBottom: 40,
              letterSpacing: "0.02em",
            }}
          >
            Contabilidad sin sorpresas. Cada vez.
          </div>

          {/* Trust row */}
          <div
            style={{
              display: "flex",
              gap: 28,
            }}
          >
            {["+10 años", "+200 clientes", "Consulta gratis"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span style={{ color: "#C9A84C", fontSize: 10 }}>✦</span>
                <span
                  style={{
                    fontFamily: "Arial, sans-serif",
                    fontSize: 14,
                    color: "rgba(237,229,212,0.50)",
                    letterSpacing: "0.05em",
                  }}
                >
                  {t}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Decorative hexagon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
            position: "relative",
          }}
        >
          <svg
            width="280"
            height="280"
            viewBox="0 0 280 280"
          >
            {/* Outer hex */}
            <polygon
              points="140,10 255,75 255,205 140,270 25,205 25,75"
              fill="none"
              stroke="rgba(201,168,76,0.25)"
              strokeWidth="1.5"
            />
            {/* Mid hex */}
            <polygon
              points="140,35 232,88 232,192 140,245 48,192 48,88"
              fill="none"
              stroke="rgba(201,168,76,0.12)"
              strokeWidth="1"
            />
            {/* Inner hex filled */}
            <polygon
              points="140,60 212,102 212,186 140,228 68,186 68,102"
              fill="rgba(201,168,76,0.06)"
              stroke="rgba(201,168,76,0.35)"
              strokeWidth="1.5"
            />
            {/* DC monogram */}
            <text
              x="140"
              y="158"
              textAnchor="middle"
              fontSize="80"
              fontFamily="Georgia, serif"
              fontWeight="700"
              fill="rgba(201,168,76,0.80)"
              letterSpacing="-4"
            >
              DC
            </text>
          </svg>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 80,
            fontFamily: "Arial, sans-serif",
            fontSize: 13,
            color: "rgba(237,229,212,0.25)",
            letterSpacing: "0.1em",
            display: "flex",
          }}
        >
          danielacamposcontadora.com
        </div>

        {/* Bottom right: WhatsApp */}
        <div
          style={{
            position: "absolute",
            bottom: 32,
            right: 80,
            fontFamily: "Arial, sans-serif",
            fontSize: 13,
            color: "rgba(201,168,76,0.50)",
            letterSpacing: "0.05em",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span>+57 302 803 1478</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
