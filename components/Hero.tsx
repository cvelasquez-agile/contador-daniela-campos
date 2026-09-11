"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { WHATSAPP_NUMBER as WA, DIAN_CALENDARIO_URL } from "@/lib/site";
import { CALENDARIO_RENTA as CALENDARIO } from "@/lib/calendarioRenta";
import CountUp from "./CountUp";
import LiveCountdown from "./LiveCountdown";

function getDias(ts: number) {
  const now = new Date(); now.setHours(0, 0, 0, 0);
  return Math.ceil((ts - now.getTime()) / 86400000);
}

function CalculatorCard({
  digit0,
  digit1,
  ref0,
  ref1,
  onDigitChange,
  onDigitKeyDown,
  result,
  urgency,
  waMsg,
}: {
  digit0: string;
  digit1: string;
  ref0: React.RefObject<HTMLInputElement | null>;
  ref1: React.RefObject<HTMLInputElement | null>;
  onDigitChange: (index: 0 | 1, value: string) => void;
  onDigitKeyDown: (index: 0 | 1, e: React.KeyboardEvent<HTMLInputElement>) => void;
  result: { label: string; dias: number } | null;
  urgency: { ring: string; pill: string; dot: string; date: string; msg: string } | null;
  waMsg: string;
}) {
  const boxClass =
    "w-14 h-16 bg-[#081510] border border-[#C9A84C]/20 focus:border-[#C9A84C]/70 rounded-xl text-center font-[family-name:var(--font-playfair)] font-bold text-[#F5F0E8] focus:outline-none transition-all";
  return (
    <div
      className={`relative rounded-2xl border border-[#C9A84C]/25 bg-[#0F2016]/95 backdrop-blur-sm transition-all duration-500 ${result && urgency ? `ring-2 ${urgency.ring}` : ""}`}
    >
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="font-[family-name:var(--font-inter)] text-[10px] tracking-[0.2em] text-[#C9A84C] uppercase font-semibold border border-[#C9A84C]/30 px-2.5 py-1 rounded-full">
            DIAN · Renta 2026
          </span>
          <svg className="w-4 h-4 text-[#C9A84C]/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h2 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#F5F0E8] mb-0.5">
          Calcula tu fecha límite
        </h2>
        <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 mb-3">
          Dos últimos dígitos de tu cédula
        </p>

        <div className="flex items-center justify-center gap-3 mb-2">
          <input
            ref={ref0}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit0}
            onChange={(e) => onDigitChange(0, e.target.value)}
            onKeyDown={(e) => onDigitKeyDown(0, e)}
            placeholder="_"
            aria-label="Primer dígito de tu cédula"
            className={boxClass}
            style={{ fontSize: "1.75rem" }}
          />
          <span className="text-[#EDE5D4]/25 text-xl" aria-hidden="true">·</span>
          <input
            ref={ref1}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit1}
            onChange={(e) => onDigitChange(1, e.target.value)}
            onKeyDown={(e) => onDigitKeyDown(1, e)}
            placeholder="_"
            aria-label="Segundo dígito de tu cédula"
            className={boxClass}
            style={{ fontSize: "1.75rem" }}
          />
        </div>

        {result && urgency ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 tracking-wider uppercase">
                Tu fecha límite
              </span>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border font-[family-name:var(--font-inter)] ${urgency.pill}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${urgency.dot}`} />
                {result.dias > 0 ? `${result.dias} días` : result.dias === 0 ? "Hoy" : `Venció hace ${Math.abs(result.dias)} días`}
              </span>
            </div>
            <p
              className={`font-[family-name:var(--font-playfair)] font-bold leading-none ${urgency.date}`}
              style={{ fontSize: "clamp(1.6rem,5vw,2.2rem)" }}
            >
              {result.label}
            </p>
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60" role="status" aria-live="polite">
              {urgency.msg}
            </p>
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent(waMsg)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 bg-[#C9A84C] text-[#081510] font-semibold rounded-lg hover:bg-[#E2C97E] transition-colors text-sm font-[family-name:var(--font-inter)] tracking-wide"
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar mi declaración para esta fecha
            </a>
          </div>
        ) : (
          <div className="text-center py-2">
            <div className="flex justify-center gap-1 mb-2">
              {["Ago", "Sep", "Oct"].map((m) => (
                <span key={m} className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 px-1.5 py-0.5 border border-[#EDE5D4]/15 rounded">
                  {m}
                </span>
              ))}
            </div>
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/55 leading-relaxed">
              Sanciones desde{" "}
              <span className="text-[#C9A84C]/70 font-semibold">$524.000 COP</span>
              {" "}por extemporaneidad
            </p>
          </div>
        )}
      </div>

      <div className="px-6 pb-3">
        <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 text-center">
          Calendario estimado ·{" "}
          <a
            href={DIAN_CALENDARIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[#EDE5D4]/30 hover:decoration-[#C9A84C] hover:text-[#C9A84C] transition-colors"
          >
            Confirme con el calendario DIAN oficial
          </a>
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const [digit0, setDigit0] = useState("");
  const [digit1, setDigit1] = useState("");
  const [result, setResult] = useState<{ label: string; dias: number } | null>(null);
  const ref0 = useRef<HTMLInputElement>(null);
  const ref1 = useRef<HTMLInputElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Cursor-following spotlight — desktop mouse only (no-op, and no listener
  // attached, on touch devices where hover doesn't apply).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
      el.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    };
    el.addEventListener("mousemove", handleMove);
    return () => el.removeEventListener("mousemove", handleMove);
  }, []);

  const handleDigitChange = (index: 0 | 1, raw: string) => {
    const val = raw.replace(/\D/g, "").slice(-1);
    const next0 = index === 0 ? val : digit0;
    const next1 = index === 1 ? val : digit1;
    if (index === 0) setDigit0(val); else setDigit1(val);

    if (next0 && next1) {
      const e = CALENDARIO[next0 + next1];
      setResult(e ? { label: e.label, dias: getDias(e.ts) } : null);
    } else {
      setResult(null);
    }

    if (index === 0 && val) ref1.current?.focus();
  };

  const handleDigitKeyDown = (index: 0 | 1, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && index === 1 && !digit1) {
      ref0.current?.focus();
    }
  };

  const urgency =
    result === null ? null
    : result.dias < 0
      ? { ring: "ring-red-500/60", pill: "bg-red-500/15 text-red-400 border-red-500/30", dot: "bg-red-500 animate-pulse", date: "text-red-400", msg: "Ya venció · la sanción está corriendo" }
      : result.dias <= 30
        ? { ring: "ring-red-500/60", pill: "bg-red-500/15 text-red-400 border-red-500/30", dot: "bg-red-500 animate-pulse", date: "text-red-400", msg: "Actúe hoy · quedan pocos días" }
        : result.dias <= 90
          ? { ring: "ring-yellow-500/50", pill: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30", dot: "bg-yellow-400", date: "text-yellow-300", msg: "Prepárese · el plazo se acerca" }
          : { ring: "ring-emerald-500/40", pill: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", dot: "bg-emerald-500", date: "text-emerald-400", msg: "Tiempo disponible · planifique con calma" };

  const waMsg = result
    ? result.dias < 0
      ? `Hola Daniela, calculé mi fecha límite de renta 2026: *${result.label}* (venció hace ${Math.abs(result.dias)} días). Quiero que me ayude a ponerme al día cuanto antes.`
      : `Hola Daniela, calculé mi fecha límite de renta 2026: *${result.label}* (${result.dias} días). Quiero que me ayude a prepararla.`
    : `Hola Daniela, quiero información sobre la declaración de renta 2026.`;

  const calcProps = {
    digit0,
    digit1,
    ref0,
    ref1,
    onDigitChange: handleDigitChange,
    onDigitKeyDown: handleDigitKeyDown,
    result,
    urgency,
    waMsg,
  };

  return (
    <section
      ref={sectionRef}
      id="renta-2026"
      className="relative min-h-screen flex overflow-hidden bg-[#081510]"
    >
      {/* Cursor-following spotlight — desktop mouse only */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0 hidden md:block"
        style={{
          background:
            "radial-gradient(500px circle at var(--spot-x, 50%) var(--spot-y, 20%), rgba(201,168,76,0.07), transparent 60%)",
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.08) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Left glow */}
      <div className="absolute -left-48 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#C9A84C]/5 blur-[120px] pointer-events-none z-0" />

      <div className="relative z-10 w-full flex flex-col xl:flex-row min-h-screen">

        {/* Photo — phones, tablets & small laptops (<xl), full-bleed banner up top so it's
            never hidden. The side-by-side overlap layout below needs a wide photo column to
            read well (the floating card needs room above it to clear the face) — that's only
            reliably true at xl+, so everything narrower gets one full-width portrait instead
            of a photo squeezed thin and buried behind the card. */}
        <div className="xl:hidden relative w-full shrink-0 mt-12 h-[clamp(200px,50vw,420px)] animate-fade-rise [animation-delay:150ms]">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div className="w-2/3 h-2/3 rounded-full bg-[#C9A84C]/25 blur-[70px] animate-ambient-glow" />
          </div>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/daniela-prueba.webp"
              alt="Daniela Campos, Contadora Pública en Fusagasugá"
              fill
              sizes="100vw"
              className="object-contain object-bottom animate-photo-breathe"
              priority
            />
          </div>
          <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-[#081510] to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#081510] to-transparent pointer-events-none" />
        </div>

        {/* LEFT: Editorial copy */}
        <div className="flex-[55] flex items-center justify-center px-6 sm:px-8 pt-6 pb-10 xl:py-0 xl:pl-16 xl:pr-8 2xl:pl-24">
          <div className="max-w-xl w-full">

            {/* Overline */}
            <div className="flex items-center gap-2 mb-5 xl:mb-8 animate-fade-rise">
              <span className="w-8 h-px bg-[#C9A84C]" />
              <span className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.25em] uppercase">
                Fusagasugá · Cundinamarca
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-[family-name:var(--font-playfair)] font-bold leading-[1.05] mb-4 animate-fade-rise [animation-delay:80ms]"
              style={{ fontSize: "clamp(2.4rem,4.5vw,4rem)" }}
            >
              <span className="text-[#F5F0E8]">Contabilidad<br />sin sorpresas.</span>
              <br />
              <span className="text-[#C9A84C] italic">Cada vez.</span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-4 xl:mb-6 animate-fade-rise [animation-delay:180ms]">
              <p className="font-[family-name:var(--font-playfair)] text-[#EDE5D4]/60 text-base italic">
                Daniela Campos · Contadora Pública
              </p>
            </div>

            {/* Paragraph */}
            <p className="font-[family-name:var(--font-inter)] text-[#EDE5D4]/55 text-sm leading-relaxed mb-4 xl:mb-6 max-w-md animate-fade-rise [animation-delay:250ms]">
              Personas y empresas de Fusagasugá y la región que cumplen sus obligaciones a tiempo, sin carreras de último momento.
            </p>

            {/* Live deadline countdown */}
            <LiveCountdown />

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6 xl:mb-10 animate-fade-rise [animation-delay:320ms]">
              {[
                { icon: "✦", text: <><CountUp to={10} prefix="+" /> años de experiencia</> },
                { icon: "✦", text: <><CountUp to={200} prefix="+" /> clientes activos</> },
                { icon: "✦", text: "Atención directa" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[#C9A84C] text-[10px]">{t.icon}</span>
                  <span className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 tracking-wide">
                    {t.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10 animate-fade-rise [animation-delay:390ms]">
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent(waMsg)}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#C9A84C] text-[#081510] font-semibold rounded-lg hover:bg-[#E2C97E] transition-colors text-sm font-[family-name:var(--font-inter)] tracking-wider"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Consulta por WhatsApp
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#C9A84C]/30 text-[#EDE5D4]/60 hover:text-[#C9A84C] hover:border-[#C9A84C]/60 transition-colors text-sm rounded-lg font-[family-name:var(--font-inter)] tracking-wider"
              >
                Ver servicios
              </a>
            </div>

            {/* Calculator — phones/tablets/small laptops (inline). data-calculator-card
                lets the Navbar's "Renta 2026" link jump straight to whichever of the two
                calculator instances is actually visible, instead of just the top of the
                section (which, in this stacked mobile layout, can leave the calculator
                itself well below the fold). */}
            <div data-calculator-card className="xl:hidden" style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6))" }}>
              <CalculatorCard {...calcProps} />
            </div>
          </div>
        </div>

        {/* RIGHT: Photo + floating calculator — wide desktop only */}
        <div className="hidden xl:flex flex-[45] relative items-end min-h-screen py-10">

          {/* Portrait — sized to its own aspect ratio (not stretched to viewport height), so the
              floating card below is anchored to the photo itself and stays correctly placed no
              matter how tall or short the screen is (laptop, ultrawide, etc). */}
          <div className="relative w-full animate-fade-rise [animation-delay:200ms]">
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="w-1/2 h-1/2 rounded-full bg-[#C9A84C]/25 blur-[90px] animate-ambient-glow" />
            </div>
            <div className="relative w-full overflow-hidden">
              <Image
                src="/daniela-prueba.webp"
                alt="Daniela Campos, Contadora Pública en Fusagasugá"
                width={1280}
                height={1280}
                sizes="(min-width: 1280px) 45vw, 0px"
                className="w-full h-auto object-contain object-bottom animate-photo-breathe"
                priority
              />
            </div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#081510] to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#081510] to-transparent pointer-events-none z-10" />

            {/* Floating calculator — anchored to the photo's own box */}
            <div
              data-calculator-card
              className="absolute bottom-8 -left-8 w-[340px] 2xl:w-[380px] z-20"
              style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6))" }}
            >
              <CalculatorCard {...calcProps} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#081510] to-transparent pointer-events-none z-10" />
    </section>
  );
}
