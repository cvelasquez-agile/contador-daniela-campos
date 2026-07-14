"use client";
import { useState } from "react";
import { FAQS } from "@/lib/faqs";

const WA = "573028031478";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-[#081510] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-px bg-[#C9A84C]" />
            <span className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.25em] uppercase">
              Preguntas frecuentes
            </span>
          </div>
          <h2
            className="font-[family-name:var(--font-playfair)] font-bold text-[#F5F0E8] leading-tight"
            style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
          >
            Todo lo que necesita saber
          </h2>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-12 xl:gap-20 items-start">
          {/* LEFT */}
          <div className="hidden lg:flex flex-col gap-8">
            <div className="relative h-48 overflow-hidden select-none pointer-events-none">
              <span
                aria-hidden="true"
                className="absolute font-[family-name:var(--font-playfair)] font-bold text-[#C9A84C]/6 leading-none"
                style={{ fontSize: "9rem", transform: "rotate(-90deg) translateX(-60px) translateY(60px)", transformOrigin: "left center", whiteSpace: "nowrap" }}
              >
                FAQ
              </span>
            </div>

            <div className="rounded-2xl border border-[#C9A84C]/20 bg-[#0F2016]/60 p-6">
              <div className="w-8 h-8 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/30 flex items-center justify-center mb-4">
                <svg className="w-4 h-4 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-[family-name:var(--font-playfair)] font-bold text-[#F5F0E8] text-base mb-1 leading-snug">
                ¿Tiene otra pregunta?
              </p>
              <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/45 leading-relaxed mb-4">
                Escríbanos directamente y le respondemos en menos de 24 horas.
              </p>
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola Daniela, tengo una pregunta sobre contabilidad o renta.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#C9A84C] text-[#081510] font-semibold rounded-lg hover:bg-[#E2C97E] transition-colors text-xs font-[family-name:var(--font-inter)] tracking-wider w-full justify-center"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escríbanos
              </a>
            </div>
          </div>

          {/* RIGHT: Accordion */}
          <div className="divide-y divide-[#C9A84C]/10">
            {FAQS.map((item, idx) => {
              const isOpen = open === idx;
              const num = String(idx + 1).padStart(2, "0");
              return (
                <div key={idx} className="group">
                  <button
                    className="w-full text-left py-6 flex items-start gap-5 transition-colors focus:outline-none"
                    onClick={() => setOpen(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span
                      aria-hidden="true"
                      className="font-[family-name:var(--font-playfair)] font-bold text-[#C9A84C] select-none flex-shrink-0 leading-none mt-0.5 transition-opacity"
                      style={{ fontSize: "2.5rem", opacity: isOpen ? 0.25 : 0.1 }}
                    >
                      {num}
                    </span>
                    <div className="flex-1 flex items-center justify-between gap-4 min-w-0">
                      <span
                        className={`font-[family-name:var(--font-playfair)] font-bold leading-snug transition-colors ${isOpen ? "text-[#C9A84C]" : "text-[#F5F0E8] group-hover:text-[#EDE5D4]"}`}
                        style={{ fontSize: "1.05rem" }}
                      >
                        {item.q}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-full border flex items-center justify-center text-lg font-light flex-shrink-0 transition-all duration-300 ${
                          isOpen
                            ? "border-[#C9A84C] text-[#C9A84C] bg-[#C9A84C]/10 rotate-45"
                            : "border-[#C9A84C]/30 text-[#C9A84C] group-hover:border-[#C9A84C]/60"
                        }`}
                        style={{ lineHeight: 1 }}
                      >
                        +
                      </span>
                    </div>
                  </button>
                  <div
                    style={{
                      maxHeight: isOpen ? "600px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  >
                    <div className="pb-6 pl-4 md:pl-[calc(2.5rem+1.25rem)] pr-4 md:pr-8">
                      <p className="font-[family-name:var(--font-inter)] text-sm text-[#EDE5D4]/50 leading-relaxed max-w-xl">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
