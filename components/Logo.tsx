interface LogoProps {
  variant?: "icon" | "full" | "stacked";
  className?: string;
  size?: number;
}

const gold = "#C9A84C";
const goldLight = "#E2C97E";
const cream = "#F5F0E8";

function hex(cx: number, cy: number, r: number) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 180) * (60 * i);
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return pts.join(" ");
}

function LogoIcon({ s, className: cls = "" }: { s: number; className?: string }) {
  return (
    <svg
      width={s}
      height={s}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Daniela Campos Contadora Pública"
      className={cls}
    >
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={goldLight} />
          <stop offset="50%" stopColor={gold} />
          <stop offset="100%" stopColor="#A07830" />
        </linearGradient>
      </defs>

      {/* Hexagon — flat sides top/bottom (pointy sides left/right) */}
      <polygon
        points={hex(50, 50, 46)}
        stroke="url(#goldGrad)"
        strokeWidth="4"
        fill="none"
        strokeLinejoin="round"
      />

      {/* D — serif bowl shape */}
      <path
        d="M30 28 L30 72 L38 72 Q58 72 62 56 Q66 44 62 38 Q58 28 38 28 Z"
        fill="url(#goldGrad)"
      />
      {/* D inner cutout */}
      <path
        d="M37 36 L37 64 L39 64 Q54 63 57 53 Q60 44 57 41 Q54 36 39 36 Z"
        fill="#081510"
      />

      {/* C */}
      <path
        d="M74 38 Q66 26 54 30 Q42 34 42 50 Q42 66 54 70 Q66 74 74 62"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ variant = "full", className = "", size = 40 }: LogoProps) {
  if (variant === "icon") return <LogoIcon s={size} className={className} />;

  if (variant === "stacked") {
    return (
      <div className={`flex flex-col items-center gap-2 ${className}`}>
        <LogoIcon s={size} />
        <div className="text-center">
          <p
            className="font-[family-name:var(--font-playfair)] font-bold leading-none"
            style={{ color: gold, fontSize: size * 0.28 }}
          >
            Daniela Campos
          </p>
          <p
            className="font-[family-name:var(--font-inter)] tracking-[0.18em] uppercase leading-none mt-1"
            style={{ color: cream, fontSize: size * 0.14, opacity: 0.65 }}
          >
            Contadora Pública
          </p>
        </div>
      </div>
    );
  }

  // variant === "full" — horizontal
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <LogoIcon s={size} />
      <div>
        <p
          className="font-[family-name:var(--font-playfair)] font-bold leading-tight"
          style={{ color: gold, fontSize: size * 0.3 }}
        >
          Daniela Campos
        </p>
        <p
          className="font-[family-name:var(--font-inter)] tracking-[0.18em] uppercase leading-none"
          style={{ color: cream, fontSize: size * 0.155, opacity: 0.6 }}
        >
          Contadora Pública
        </p>
      </div>
    </div>
  );
}
