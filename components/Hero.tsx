"use client";
import { useState, useRef } from "react";
import Image from "next/image";

const CALENDARIO: Record<string, { label: string; ts: number }> = {
  "01": { label: "11 Ago 2026", ts: new Date(2026, 7, 11).getTime() },
  "02": { label: "12 Ago 2026", ts: new Date(2026, 7, 12).getTime() },
  "03": { label: "13 Ago 2026", ts: new Date(2026, 7, 13).getTime() },
  "04": { label: "14 Ago 2026", ts: new Date(2026, 7, 14).getTime() },
  "05": { label: "17 Ago 2026", ts: new Date(2026, 7, 17).getTime() },
  "06": { label: "18 Ago 2026", ts: new Date(2026, 7, 18).getTime() },
  "07": { label: "19 Ago 2026", ts: new Date(2026, 7, 19).getTime() },
  "08": { label: "20 Ago 2026", ts: new Date(2026, 7, 20).getTime() },
  "09": { label: "21 Ago 2026", ts: new Date(2026, 7, 21).getTime() },
  "10": { label: "24 Ago 2026", ts: new Date(2026, 7, 24).getTime() },
  "11": { label: "25 Ago 2026", ts: new Date(2026, 7, 25).getTime() },
  "12": { label: "26 Ago 2026", ts: new Date(2026, 7, 26).getTime() },
  "13": { label: "27 Ago 2026", ts: new Date(2026, 7, 27).getTime() },
  "14": { label: "28 Ago 2026", ts: new Date(2026, 7, 28).getTime() },
  "15": { label: "1 Sep 2026",  ts: new Date(2026, 8, 1).getTime()  },
  "16": { label: "2 Sep 2026",  ts: new Date(2026, 8, 2).getTime()  },
  "17": { label: "3 Sep 2026",  ts: new Date(2026, 8, 3).getTime()  },
  "18": { label: "4 Sep 2026",  ts: new Date(2026, 8, 4).getTime()  },
  "19": { label: "7 Sep 2026",  ts: new Date(2026, 8, 7).getTime()  },
  "20": { label: "8 Sep 2026",  ts: new Date(2026, 8, 8).getTime()  },
  "21": { label: "9 Sep 2026",  ts: new Date(2026, 8, 9).getTime()  },
  "22": { label: "10 Sep 2026", ts: new Date(2026, 8, 10).getTime() },
  "23": { label: "11 Sep 2026", ts: new Date(2026, 8, 11).getTime() },
  "24": { label: "14 Sep 2026", ts: new Date(2026, 8, 14).getTime() },
  "25": { label: "15 Sep 2026", ts: new Date(2026, 8, 15).getTime() },
  "26": { label: "16 Sep 2026", ts: new Date(2026, 8, 16).getTime() },
  "27": { label: "17 Sep 2026", ts: new Date(2026, 8, 17).getTime() },
  "28": { label: "18 Sep 2026", ts: new Date(2026, 8, 18).getTime() },
  "29": { label: "21 Sep 2026", ts: new Date(2026, 8, 21).getTime() },
  "30": { label: "22 Sep 2026", ts: new Date(2026, 8, 22).getTime() },
  "31": { label: "23 Sep 2026", ts: new Date(2026, 8, 23).getTime() },
  "32": { label: "24 Sep 2026", ts: new Date(2026, 8, 24).getTime() },
  "33": { label: "25 Sep 2026", ts: new Date(2026, 8, 25).getTime() },
  "34": { label: "28 Sep 2026", ts: new Date(2026, 8, 28).getTime() },
  "35": { label: "29 Sep 2026", ts: new Date(2026, 8, 29).getTime() },
  "36": { label: "30 Sep 2026", ts: new Date(2026, 8, 30).getTime() },
  "37": { label: "1 Oct 2026",  ts: new Date(2026, 9, 1).getTime()  },
  "38": { label: "2 Oct 2026",  ts: new Date(2026, 9, 2).getTime()  },
  "39": { label: "5 Oct 2026",  ts: new Date(2026, 9, 5).getTime()  },
  "40": { label: "6 Oct 2026",  ts: new Date(2026, 9, 6).getTime()  },
  "41": { label: "7 Oct 2026",  ts: new Date(2026, 9, 7).getTime()  },
  "42": { label: "8 Oct 2026",  ts: new Date(2026, 9, 8).getTime()  },
  "43": { label: "9 Oct 2026",  ts: new Date(2026, 9, 9).getTime()  },
  "44": { label: "13 Oct 2026", ts: new Date(2026, 9, 13).getTime() },
  "45": { label: "14 Oct 2026", ts: new Date(2026, 9, 14).getTime() },
  "46": { label: "15 Oct 2026", ts: new Date(2026, 9, 15).getTime() },
  "47": { label: "16 Oct 2026", ts: new Date(2026, 9, 16).getTime() },
  "48": { label: "19 Oct 2026", ts: new Date(2026, 9, 19).getTime() },
  "49": { label: "20 Oct 2026", ts: new Date(2026, 9, 20).getTime() },
  "50": { label: "21 Oct 2026", ts: new Date(2026, 9, 21).getTime() },
  "51": { label: "22 Oct 2026", ts: new Date(2026, 9, 22).getTime() },
  "52": { label: "23 Oct 2026", ts: new Date(2026, 9, 23).getTime() },
  "53": { label: "26 Oct 2026", ts: new Date(2026, 9, 26).getTime() },
  "54": { label: "27 Oct 2026", ts: new Date(2026, 9, 27).getTime() },
  "55": { label: "28 Oct 2026", ts: new Date(2026, 9, 28).getTime() },
  "56": { label: "29 Oct 2026", ts: new Date(2026, 9, 29).getTime() },
  "57": { label: "30 Oct 2026", ts: new Date(2026, 9, 30).getTime() },
  "58": { label: "2 Nov 2026",  ts: new Date(2026, 10, 2).getTime() },
  "59": { label: "3 Nov 2026",  ts: new Date(2026, 10, 3).getTime() },
  "60": { label: "4 Nov 2026",  ts: new Date(2026, 10, 4).getTime() },
  "61": { label: "5 Nov 2026",  ts: new Date(2026, 10, 5).getTime() },
  "62": { label: "6 Nov 2026",  ts: new Date(2026, 10, 6).getTime() },
  "63": { label: "9 Nov 2026",  ts: new Date(2026, 10, 9).getTime() },
  "64": { label: "10 Nov 2026", ts: new Date(2026, 10, 10).getTime() },
  "65": { label: "11 Nov 2026", ts: new Date(2026, 10, 11).getTime() },
  "66": { label: "12 Nov 2026", ts: new Date(2026, 10, 12).getTime() },
  "67": { label: "13 Nov 2026", ts: new Date(2026, 10, 13).getTime() },
  "68": { label: "16 Nov 2026", ts: new Date(2026, 10, 16).getTime() },
  "69": { label: "17 Nov 2026", ts: new Date(2026, 10, 17).getTime() },
  "70": { label: "18 Nov 2026", ts: new Date(2026, 10, 18).getTime() },
  "71": { label: "19 Nov 2026", ts: new Date(2026, 10, 19).getTime() },
  "72": { label: "20 Nov 2026", ts: new Date(2026, 10, 20).getTime() },
  "73": { label: "23 Nov 2026", ts: new Date(2026, 10, 23).getTime() },
  "74": { label: "24 Nov 2026", ts: new Date(2026, 10, 24).getTime() },
  "75": { label: "25 Nov 2026", ts: new Date(2026, 10, 25).getTime() },
  "76": { label: "26 Nov 2026", ts: new Date(2026, 10, 26).getTime() },
  "77": { label: "27 Nov 2026", ts: new Date(2026, 10, 27).getTime() },
  "78": { label: "1 Dic 2026",  ts: new Date(2026, 11, 1).getTime() },
  "79": { label: "2 Dic 2026",  ts: new Date(2026, 11, 2).getTime() },
  "80": { label: "3 Dic 2026",  ts: new Date(2026, 11, 3).getTime() },
  "81": { label: "4 Dic 2026",  ts: new Date(2026, 11, 4).getTime() },
  "82": { label: "7 Dic 2026",  ts: new Date(2026, 11, 7).getTime() },
  "83": { label: "8 Dic 2026",  ts: new Date(2026, 11, 8).getTime() },
  "84": { label: "9 Dic 2026",  ts: new Date(2026, 11, 9).getTime() },
  "85": { label: "10 Dic 2026", ts: new Date(2026, 11, 10).getTime() },
  "86": { label: "11 Dic 2026", ts: new Date(2026, 11, 11).getTime() },
  "87": { label: "14 Dic 2026", ts: new Date(2026, 11, 14).getTime() },
  "88": { label: "15 Dic 2026", ts: new Date(2026, 11, 15).getTime() },
  "89": { label: "16 Dic 2026", ts: new Date(2026, 11, 16).getTime() },
  "90": { label: "17 Dic 2026", ts: new Date(2026, 11, 17).getTime() },
  "91": { label: "18 Dic 2026", ts: new Date(2026, 11, 18).getTime() },
  "92": { label: "21 Dic 2026", ts: new Date(2026, 11, 21).getTime() },
  "93": { label: "22 Dic 2026", ts: new Date(2026, 11, 22).getTime() },
  "94": { label: "23 Dic 2026", ts: new Date(2026, 11, 23).getTime() },
  "95": { label: "28 Dic 2026", ts: new Date(2026, 11, 28).getTime() },
  "96": { label: "29 Dic 2026", ts: new Date(2026, 11, 29).getTime() },
  "97": { label: "11 Ene 2027", ts: new Date(2027, 0, 11).getTime() },
  "98": { label: "12 Ene 2027", ts: new Date(2027, 0, 12).getTime() },
  "99": { label: "13 Ene 2027", ts: new Date(2027, 0, 13).getTime() },
  "00": { label: "14 Ene 2027", ts: new Date(2027, 0, 14).getTime() },
};

function getDias(ts: number) {
  const now = new Date(); now.setHours(0, 0, 0, 0);
  return Math.ceil((ts - now.getTime()) / 86400000);
}

const WA = "573028031478";

function CalculatorCard({
  digits,
  result,
  urgency,
  waMsg,
  inputRef,
  handleInput,
}: {
  digits: string;
  result: { label: string; dias: number } | null;
  urgency: { ring: string; pill: string; dot: string; date: string; msg: string } | null;
  waMsg: string;
  inputRef: React.RefObject<HTMLInputElement | null>;
  handleInput: (v: string) => void;
}) {
  return (
    <div
      className={`relative rounded-2xl border border-[#C9A84C]/25 bg-[#0F2016]/95 backdrop-blur-sm transition-all duration-500 ${result && urgency ? `ring-2 ${urgency.ring}` : ""}`}
    >
      <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent" />

      <div className="p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
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
        <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 mb-4">
          Dos últimos dígitos de tu cédula
        </p>

        <div
          className="relative cursor-text mb-4"
          onClick={() => inputRef.current?.focus()}
        >
          <input
            ref={inputRef}
            type="text"
            inputMode="numeric"
            maxLength={2}
            value={digits}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="_ _"
            aria-label="Dos últimos dígitos de tu cédula"
            className="w-full bg-[#081510] border border-[#C9A84C]/20 focus:border-[#C9A84C]/70 rounded-xl px-6 py-4 text-center font-[family-name:var(--font-playfair)] font-bold text-[#F5F0E8] placeholder-[#EDE5D4]/12 focus:outline-none transition-all tracking-[0.5em]"
            style={{ fontSize: "clamp(1.5rem,5vw,2rem)" }}
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
                {result.dias > 0 ? `${result.dias} días` : "Hoy"}
              </span>
            </div>
            <p
              className={`font-[family-name:var(--font-playfair)] font-bold leading-none ${urgency.date}`}
              style={{ fontSize: "clamp(1.6rem,5vw,2.2rem)" }}
            >
              {result.label}
            </p>
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60">
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
              Preparar con Daniela
            </a>
          </div>
        ) : (
          <div className="text-center py-2">
            <div className="flex justify-center gap-1 mb-2">
              {["Ago", "Sep", "Oct", "Nov", "Dic"].map((m) => (
                <span key={m} className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/45 px-1.5 py-0.5 border border-[#EDE5D4]/15 rounded">
                  {m}
                </span>
              ))}
            </div>
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/55 leading-relaxed">
              Sanciones desde{" "}
              <span className="text-[#C9A84C]/70 font-semibold">$470.000 COP</span>
              {" "}por extemporaneidad
            </p>
          </div>
        )}
      </div>

      <div className="px-6 pb-4">
        <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/45 text-center">
          Calendario estimado · Confirme con el decreto DIAN oficial
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  const [digits, setDigits] = useState("");
  const [result, setResult] = useState<{ label: string; dias: number } | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = (v: string) => {
    const clean = v.replace(/\D/g, "").slice(0, 2);
    setDigits(clean);
    if (clean.length === 2) {
      const e = CALENDARIO[clean.padStart(2, "0")];
      if (e) setResult({ label: e.label, dias: getDias(e.ts) });
    } else {
      setResult(null);
    }
  };

  const urgency =
    result === null ? null
    : result.dias <= 30
      ? { ring: "ring-red-500/60", pill: "bg-red-500/15 text-red-400 border-red-500/30", dot: "bg-red-500 animate-pulse", date: "text-red-400", msg: "Actúe hoy · quedan pocos días" }
      : result.dias <= 90
        ? { ring: "ring-yellow-500/50", pill: "bg-yellow-500/15 text-yellow-400 border-yellow-500/30", dot: "bg-yellow-400", date: "text-yellow-300", msg: "Prepárese · el plazo se acerca" }
        : { ring: "ring-emerald-500/40", pill: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30", dot: "bg-emerald-500", date: "text-emerald-400", msg: "Tiempo disponible · planifique con calma" };

  const waMsg = result
    ? `Hola Daniela, calculé mi fecha límite de renta 2026: *${result.label}* (${result.dias} días). Quiero que me ayude a prepararla.`
    : `Hola Daniela, quiero información sobre la declaración de renta 2026.`;

  const calcProps = { digits, result, urgency, waMsg, inputRef, handleInput };

  return (
    <section
      id="renta-2026"
      className="relative min-h-screen flex overflow-hidden bg-[#081510]"
    >
      {/* Ghost background text */}
      <span
        aria-hidden="true"
        className="absolute left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-playfair)] font-bold select-none pointer-events-none whitespace-nowrap z-0"
        style={{ fontSize: "clamp(100px,20vw,260px)", color: "rgba(201,168,76,0.035)", letterSpacing: "-0.04em" }}
      >
        RENTA
      </span>

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

      <div className="relative z-10 w-full flex flex-col lg:flex-row min-h-screen">

        {/* LEFT: Editorial copy */}
        <div className="flex-[55] flex items-center justify-center px-6 sm:px-8 pt-28 pb-10 lg:py-0 lg:pl-16 lg:pr-8 xl:pl-24">
          <div className="max-w-xl w-full">

            {/* Overline */}
            <div className="flex items-center gap-2 mb-8">
              <span className="w-8 h-px bg-[#C9A84C]" />
              <span className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.25em] uppercase">
                Fusagasugá · Cundinamarca
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-[family-name:var(--font-playfair)] font-bold leading-[1.05] mb-4"
              style={{ fontSize: "clamp(2.4rem,4.5vw,4rem)" }}
            >
              <span className="text-[#F5F0E8]">Contabilidad<br />sin sorpresas.</span>
              <br />
              <span className="text-[#C9A84C] italic">Cada vez.</span>
            </h1>

            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-6">
              <div className="lg:hidden relative w-11 h-11 rounded-full overflow-hidden border border-[#C9A84C]/40 flex-shrink-0">
                <Image
                  src="/daniela.webp"
                  alt="Daniela Campos"
                  fill
                  sizes="44px"
                  className="object-cover object-top"
                />
              </div>
              <p className="font-[family-name:var(--font-playfair)] text-[#EDE5D4]/50 text-base italic">
                Daniela Campos · Contadora Pública
              </p>
            </div>

            {/* Paragraph */}
            <p className="font-[family-name:var(--font-inter)] text-[#EDE5D4]/55 text-sm leading-relaxed mb-10 max-w-md">
              Personas y empresas en Fusagasugá que cumplen sus obligaciones a tiempo, sin carreras de último momento.
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
              {[
                { icon: "✦", text: "+10 años de experiencia" },
                { icon: "✦", text: "+200 clientes activos" },
                { icon: "✦", text: "Atención directa" },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-2">
                  <span className="text-[#C9A84C] text-[10px]">{t.icon}</span>
                  <span className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50 tracking-wide">
                    {t.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
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

            {/* Calculator — mobile only (inline) */}
            <div className="lg:hidden" style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6))" }}>
              <CalculatorCard {...calcProps} />
            </div>
          </div>
        </div>

        {/* RIGHT: Photo + floating calculator — desktop only */}
        <div className="hidden lg:flex flex-[45] relative items-stretch min-h-screen">

          {/* Portrait */}
          <div className="relative w-full overflow-hidden bg-[#081510]">
            <Image
              src="/daniela.webp"
              alt="Daniela Campos, Contadora Pública en Fusagasugá"
              fill
              sizes="(min-width: 1024px) 45vw, 0px"
              className="object-contain object-bottom"
              priority
            />
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#081510] to-transparent pointer-events-none z-10" />
            <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#081510] to-transparent pointer-events-none z-10" />
          </div>

          {/* Floating calculator — desktop */}
          <div
            className="absolute bottom-8 -left-8 w-[340px] xl:w-[380px] z-20"
            style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6))" }}
          >
            <CalculatorCard {...calcProps} />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#081510] to-transparent pointer-events-none z-10" />
    </section>
  );
}
