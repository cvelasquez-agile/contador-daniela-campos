"use client";
import { useState } from "react";
import Reveal from "./Reveal";

const REVIEWS = [
  {
    name: "Carlos Herrera",
    role: "Propietario, Ferretería El Clavo",
    stars: 5,
    text: "Daniela lleva mi contabilidad desde 2019. En ese tiempo nunca he tenido un problema con la DIAN. Vale cada peso.",
  },
  {
    name: "María Fernanda Ríos",
    role: "Propietaria, Salón Belleza & Más",
    stars: 5,
    text: "Me ayudó a ponerme al día con tres años de declaraciones pendientes. El proceso fue ordenado, sin sobresaltos y a un precio muy justo. Hoy duermo tranquila.",
  },
  {
    name: "Claudia Moreno",
    role: "Dueña, Tienda Naturista El Roble",
    stars: 5,
    text: "Llevo cinco años con ella. Nunca un requerimiento de la DIAN, nunca un error. Eso vale más que cualquier precio. La recomiendo con los ojos cerrados.",
  },
  {
    name: "Sebastián Vargas",
    role: "Médico especialista",
    stars: 5,
    text: "Como médico no tengo tiempo para entender formularios tributarios. Daniela se encarga de todo y me avisa solo cuando necesita algo de mi parte. Servicio impecable.",
  },
];

const TRACK = [...REVIEWS, ...REVIEWS];

export default function Testimonios() {
  const [paused, setPaused] = useState(false);

  return (
    <section id="testimonios" className="bg-[#0F2016] py-16 md:py-24 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          gap: 1rem;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>

      {/* Header */}
      <Reveal className="max-w-7xl mx-auto px-6 mb-12 flex items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#C9A84C]" />
            <span className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.25em] uppercase">
              Testimonios
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold text-[#F5F0E8] leading-tight"
            style={{ fontSize: "clamp(1.8rem,4vw,3rem)" }}
          >
            Lo que dicen nuestros clientes
          </h2>
        </div>

        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? "Reanudar el desplazamiento de reseñas" : "Pausar el desplazamiento de reseñas"}
          className="flex-shrink-0 w-10 h-10 rounded-full border border-[#C9A84C]/30 text-[#C9A84C] flex items-center justify-center hover:border-[#C9A84C]/60 hover:bg-[#C9A84C]/10 transition-colors mb-1"
        >
          {paused ? (
            <svg className="w-4 h-4 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
            </svg>
          )}
        </button>
      </Reveal>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-r from-[#0F2016] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 bg-gradient-to-l from-[#0F2016] to-transparent z-10 pointer-events-none" />

        <div
          className="marquee-track px-4"
          style={paused ? { animationPlayState: "paused" } : undefined}
        >
          {TRACK.map((r, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[280px] sm:w-[320px] bg-[#162B1E] border border-[#C9A84C]/20 rounded-2xl p-5 sm:p-7 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-[#C9A84C] text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-[family-name:var(--font-inter)] text-sm text-[#EDE5D4]/65 leading-relaxed flex-1">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[#C9A84C]/10 pt-4">
                <div className="w-9 h-9 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-[family-name:var(--font-playfair)] text-[#C9A84C] font-bold text-sm">
                    {r.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-xs font-semibold text-[#F5F0E8]">
                    {r.name}
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/55 mt-0.5">
                    {r.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
