"use client";
import { useEffect, useRef, useState } from "react";

const proceso = [
  {
    paso: "1",
    titulo: "Diagnóstico gratuito",
    desc: "Revisamos su situación tributaria y contable sin costo. 30 minutos que pueden ahorrarle millones.",
  },
  {
    paso: "2",
    titulo: "Propuesta a su medida",
    desc: "Sin paquetes genéricos. El plan se adapta al tamaño, sector y necesidades reales de su negocio.",
  },
  {
    paso: "3",
    titulo: "Ejecución y tranquilidad",
    desc: "Usted se dedica a su negocio. Daniela se encarga de que todo esté al día, siempre.",
  },
];

export default function ProcesoSteps() {
  const [visible, setVisible] = useState(false);
  const [line, setLine] = useState<{ left: number; width: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const firstNodeRef = useRef<HTMLDivElement>(null);
  const lastNodeRef = useRef<HTMLDivElement>(null);

  // Measure the real center of the first/last numbered circles so the connecting
  // line lines up exactly with them, regardless of column widths or gaps.
  useEffect(() => {
    function measure() {
      const container = containerRef.current;
      const first = firstNodeRef.current;
      const last = lastNodeRef.current;
      if (!container || !first || !last) return;
      const containerRect = container.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();
      const firstCenter = firstRect.left + firstRect.width / 2 - containerRect.left;
      const lastCenter = lastRect.left + lastRect.width / 2 - containerRect.left;
      setLine({ left: firstCenter, width: lastCenter - firstCenter });
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
      {/* Timeline: draws left-to-right as the steps reveal, anchored to the real
          center of the first and last numbered nodes. */}
      {line && (
        <div
          aria-hidden="true"
          className="hidden md:block absolute top-7 h-px bg-[#C9A84C]/25 origin-left transition-transform duration-[1100ms] ease-out"
          style={{
            left: `${line.left}px`,
            width: `${line.width}px`,
            transform: visible ? "scaleX(1)" : "scaleX(0)",
          }}
        />
      )}

      {proceso.map((p, i) => (
        <div
          key={p.paso}
          className="relative flex flex-col transition-all duration-700 ease-out"
          style={{
            transitionDelay: `${i * 150}ms`,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(18px)",
          }}
        >
          {/* Numbered node — opaque background covers the timeline behind it */}
          <div
            ref={i === 0 ? firstNodeRef : i === proceso.length - 1 ? lastNodeRef : undefined}
            className="relative z-10 w-14 h-14 rounded-full border-2 border-[#C9A84C] bg-[#0F2016] flex items-center justify-center mb-5"
          >
            <span className="font-[family-name:var(--font-playfair)] font-bold text-[#C9A84C] text-xl">
              {p.paso}
            </span>
          </div>

          <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#F5F0E8] mb-3">
            {p.titulo}
          </h4>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#EDE5D4]/60 leading-relaxed max-w-xs">
            {p.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
