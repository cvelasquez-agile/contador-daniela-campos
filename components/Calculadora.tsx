"use client";
import { useState, useRef } from "react";

// DIAN 2026 - Renta año gravable 2025 – personas naturales
// Pattern based on official DIAN schedules (update when Decreto 2025 is published)
const CALENDARIO: Record<string, { fecha: Date; label: string }> = {
  "01": { fecha: new Date(2026, 7, 11), label: "11 Ago 2026" },
  "02": { fecha: new Date(2026, 7, 12), label: "12 Ago 2026" },
  "03": { fecha: new Date(2026, 7, 13), label: "13 Ago 2026" },
  "04": { fecha: new Date(2026, 7, 14), label: "14 Ago 2026" },
  "05": { fecha: new Date(2026, 7, 17), label: "17 Ago 2026" },
  "06": { fecha: new Date(2026, 7, 18), label: "18 Ago 2026" },
  "07": { fecha: new Date(2026, 7, 19), label: "19 Ago 2026" },
  "08": { fecha: new Date(2026, 7, 20), label: "20 Ago 2026" },
  "09": { fecha: new Date(2026, 7, 21), label: "21 Ago 2026" },
  "10": { fecha: new Date(2026, 7, 24), label: "24 Ago 2026" },
  "11": { fecha: new Date(2026, 7, 25), label: "25 Ago 2026" },
  "12": { fecha: new Date(2026, 7, 26), label: "26 Ago 2026" },
  "13": { fecha: new Date(2026, 7, 27), label: "27 Ago 2026" },
  "14": { fecha: new Date(2026, 7, 28), label: "28 Ago 2026" },
  "15": { fecha: new Date(2026, 8, 1),  label: "1 Sep 2026" },
  "16": { fecha: new Date(2026, 8, 2),  label: "2 Sep 2026" },
  "17": { fecha: new Date(2026, 8, 3),  label: "3 Sep 2026" },
  "18": { fecha: new Date(2026, 8, 4),  label: "4 Sep 2026" },
  "19": { fecha: new Date(2026, 8, 7),  label: "7 Sep 2026" },
  "20": { fecha: new Date(2026, 8, 8),  label: "8 Sep 2026" },
  "21": { fecha: new Date(2026, 8, 9),  label: "9 Sep 2026" },
  "22": { fecha: new Date(2026, 8, 10), label: "10 Sep 2026" },
  "23": { fecha: new Date(2026, 8, 11), label: "11 Sep 2026" },
  "24": { fecha: new Date(2026, 8, 14), label: "14 Sep 2026" },
  "25": { fecha: new Date(2026, 8, 15), label: "15 Sep 2026" },
  "26": { fecha: new Date(2026, 8, 16), label: "16 Sep 2026" },
  "27": { fecha: new Date(2026, 8, 17), label: "17 Sep 2026" },
  "28": { fecha: new Date(2026, 8, 18), label: "18 Sep 2026" },
  "29": { fecha: new Date(2026, 8, 21), label: "21 Sep 2026" },
  "30": { fecha: new Date(2026, 8, 22), label: "22 Sep 2026" },
  "31": { fecha: new Date(2026, 8, 23), label: "23 Sep 2026" },
  "32": { fecha: new Date(2026, 8, 24), label: "24 Sep 2026" },
  "33": { fecha: new Date(2026, 8, 25), label: "25 Sep 2026" },
  "34": { fecha: new Date(2026, 8, 28), label: "28 Sep 2026" },
  "35": { fecha: new Date(2026, 8, 29), label: "29 Sep 2026" },
  "36": { fecha: new Date(2026, 8, 30), label: "30 Sep 2026" },
  "37": { fecha: new Date(2026, 9, 1),  label: "1 Oct 2026" },
  "38": { fecha: new Date(2026, 9, 2),  label: "2 Oct 2026" },
  "39": { fecha: new Date(2026, 9, 5),  label: "5 Oct 2026" },
  "40": { fecha: new Date(2026, 9, 6),  label: "6 Oct 2026" },
  "41": { fecha: new Date(2026, 9, 7),  label: "7 Oct 2026" },
  "42": { fecha: new Date(2026, 9, 8),  label: "8 Oct 2026" },
  "43": { fecha: new Date(2026, 9, 9),  label: "9 Oct 2026" },
  "44": { fecha: new Date(2026, 9, 13), label: "13 Oct 2026" },
  "45": { fecha: new Date(2026, 9, 14), label: "14 Oct 2026" },
  "46": { fecha: new Date(2026, 9, 15), label: "15 Oct 2026" },
  "47": { fecha: new Date(2026, 9, 16), label: "16 Oct 2026" },
  "48": { fecha: new Date(2026, 9, 19), label: "19 Oct 2026" },
  "49": { fecha: new Date(2026, 9, 20), label: "20 Oct 2026" },
  "50": { fecha: new Date(2026, 9, 21), label: "21 Oct 2026" },
  "51": { fecha: new Date(2026, 9, 22), label: "22 Oct 2026" },
  "52": { fecha: new Date(2026, 9, 23), label: "23 Oct 2026" },
  "53": { fecha: new Date(2026, 9, 26), label: "26 Oct 2026" },
  "54": { fecha: new Date(2026, 9, 27), label: "27 Oct 2026" },
  "55": { fecha: new Date(2026, 9, 28), label: "28 Oct 2026" },
  "56": { fecha: new Date(2026, 9, 29), label: "29 Oct 2026" },
  "57": { fecha: new Date(2026, 9, 30), label: "30 Oct 2026" },
  "58": { fecha: new Date(2026, 10, 2), label: "2 Nov 2026" },
  "59": { fecha: new Date(2026, 10, 3), label: "3 Nov 2026" },
  "60": { fecha: new Date(2026, 10, 4), label: "4 Nov 2026" },
  "61": { fecha: new Date(2026, 10, 5), label: "5 Nov 2026" },
  "62": { fecha: new Date(2026, 10, 6), label: "6 Nov 2026" },
  "63": { fecha: new Date(2026, 10, 9), label: "9 Nov 2026" },
  "64": { fecha: new Date(2026, 10, 10), label: "10 Nov 2026" },
  "65": { fecha: new Date(2026, 10, 11), label: "11 Nov 2026" },
  "66": { fecha: new Date(2026, 10, 12), label: "12 Nov 2026" },
  "67": { fecha: new Date(2026, 10, 13), label: "13 Nov 2026" },
  "68": { fecha: new Date(2026, 10, 16), label: "16 Nov 2026" },
  "69": { fecha: new Date(2026, 10, 17), label: "17 Nov 2026" },
  "70": { fecha: new Date(2026, 10, 18), label: "18 Nov 2026" },
  "71": { fecha: new Date(2026, 10, 19), label: "19 Nov 2026" },
  "72": { fecha: new Date(2026, 10, 20), label: "20 Nov 2026" },
  "73": { fecha: new Date(2026, 10, 23), label: "23 Nov 2026" },
  "74": { fecha: new Date(2026, 10, 24), label: "24 Nov 2026" },
  "75": { fecha: new Date(2026, 10, 25), label: "25 Nov 2026" },
  "76": { fecha: new Date(2026, 10, 26), label: "26 Nov 2026" },
  "77": { fecha: new Date(2026, 10, 27), label: "27 Nov 2026" },
  "78": { fecha: new Date(2026, 11, 1), label: "1 Dic 2026" },
  "79": { fecha: new Date(2026, 11, 2), label: "2 Dic 2026" },
  "80": { fecha: new Date(2026, 11, 3), label: "3 Dic 2026" },
  "81": { fecha: new Date(2026, 11, 4), label: "4 Dic 2026" },
  "82": { fecha: new Date(2026, 11, 7), label: "7 Dic 2026" },
  "83": { fecha: new Date(2026, 11, 8), label: "8 Dic 2026" },
  "84": { fecha: new Date(2026, 11, 9), label: "9 Dic 2026" },
  "85": { fecha: new Date(2026, 11, 10), label: "10 Dic 2026" },
  "86": { fecha: new Date(2026, 11, 11), label: "11 Dic 2026" },
  "87": { fecha: new Date(2026, 11, 14), label: "14 Dic 2026" },
  "88": { fecha: new Date(2026, 11, 15), label: "15 Dic 2026" },
  "89": { fecha: new Date(2026, 11, 16), label: "16 Dic 2026" },
  "90": { fecha: new Date(2026, 11, 17), label: "17 Dic 2026" },
  "91": { fecha: new Date(2026, 11, 18), label: "18 Dic 2026" },
  "92": { fecha: new Date(2026, 11, 21), label: "21 Dic 2026" },
  "93": { fecha: new Date(2026, 11, 22), label: "22 Dic 2026" },
  "94": { fecha: new Date(2026, 11, 23), label: "23 Dic 2026" },
  "95": { fecha: new Date(2026, 11, 28), label: "28 Dic 2026" },
  "96": { fecha: new Date(2026, 11, 29), label: "29 Dic 2026" },
  "97": { fecha: new Date(2027, 0, 11), label: "11 Ene 2027" },
  "98": { fecha: new Date(2027, 0, 12), label: "12 Ene 2027" },
  "99": { fecha: new Date(2027, 0, 13), label: "13 Ene 2027" },
  "00": { fecha: new Date(2027, 0, 14), label: "14 Ene 2027" },
};

function getDias(fecha: Date): number {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.ceil((fecha.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

export default function Calculadora() {
  const [digitos, setDigitos] = useState("");
  const [resultado, setResultado] = useState<null | { label: string; dias: number }>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (val: string) => {
    const clean = val.replace(/\D/g, "").slice(0, 2);
    setDigitos(clean);
    if (clean.length === 2) {
      const key = clean.padStart(2, "0");
      const entry = CALENDARIO[key];
      if (entry) {
        setResultado({ label: entry.label, dias: getDias(entry.fecha) });
      }
    } else {
      setResultado(null);
    }
  };

  const semaforo =
    resultado === null ? null
    : resultado.dias <= 30 ? { color: "text-red-400", border: "border-red-500/50 bg-red-950/30", badge: "bg-red-500/20 text-red-400 border-red-500/40", texto: "¡Urgente! Quedan pocos días" }
    : resultado.dias <= 90 ? { color: "text-yellow-400", border: "border-yellow-500/50 bg-yellow-950/20", badge: "bg-yellow-500/20 text-yellow-400 border-yellow-500/40", texto: "Próximo – prepare sus documentos" }
    : { color: "text-emerald-400", border: "border-emerald-500/40 bg-emerald-950/20", badge: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40", texto: "Tiempo disponible – planifique con calma" };

  const waText = resultado
    ? `Hola Daniela, calculé mi fecha límite de renta 2026: *${resultado.label}* (${resultado.dias} días). Me gustaría que me ayudara a prepararla a tiempo.`
    : "Hola Daniela, quiero información sobre la declaración de renta 2026.";

  return (
    <section
      id="calculadora"
      aria-label="Calculadora de fecha límite renta DIAN 2026"
      className="py-20 bg-[#0A1A12]"
    >
      <div className="max-w-3xl mx-auto px-6">
        {/* Card */}
        <div className="relative rounded-2xl border border-[#C9A84C]/30 bg-[#112119] overflow-hidden shadow-2xl shadow-black/60">
          {/* Top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/60 to-transparent" />

          <div className="p-8 md:p-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9A84C]/40 bg-[#C9A84C]/10 text-[#C9A84C] text-xs font-semibold tracking-widest mb-6 font-[family-name:var(--font-inter)]">
              DIAN · RENTA 2026
            </div>

            {/* Heading */}
            <div className="flex items-start gap-3 mb-2">
              <svg className="w-6 h-6 text-[#C9A84C] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h2 className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold text-[#F5F0E8] leading-snug">
                Calcula tu fecha límite para declarar renta
              </h2>
            </div>
            <p className="font-[family-name:var(--font-inter)] text-sm text-[#EDE5D4]/50 mb-8 ml-9">
              Ingresa los <strong className="text-[#EDE5D4]/80">dos últimos dígitos</strong> de tu cédula y te decimos exactamente cuándo vence.
            </p>

            {/* Input */}
            <div
              className="relative mb-3 cursor-text"
              onClick={() => inputRef.current?.focus()}
            >
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                maxLength={2}
                value={digitos}
                onChange={(e) => handleChange(e.target.value)}
                placeholder="Ej: 27"
                aria-label="Dos últimos dígitos de tu cédula"
                className="w-full bg-[#081510] border border-[#C9A84C]/25 hover:border-[#C9A84C]/50 focus:border-[#C9A84C] rounded-xl px-6 py-4 text-center text-3xl font-[family-name:var(--font-playfair)] font-bold text-[#F5F0E8] placeholder-[#EDE5D4]/15 focus:outline-none transition-all tracking-[0.3em]"
              />
              {digitos.length > 0 && digitos.length < 2 && (
                <p className="absolute -bottom-5 left-0 right-0 text-center text-xs text-[#C9A84C]/60 font-[family-name:var(--font-inter)]">
                  Ingresa el segundo dígito…
                </p>
              )}
            </div>

            {/* Helper */}
            {!resultado && (
              <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/35 text-center mt-7">
                Evita sanciones de extemporaneidad DIAN – para 2026 inician en{" "}
                <span className="font-semibold text-[#C9A84C]/80">$470.000 COP</span>
              </p>
            )}

            {/* Resultado */}
            {resultado && semaforo && (
              <div className={`mt-7 rounded-xl border p-6 transition-all ${semaforo.border}`}>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50 mb-1 tracking-wider">
                      TU FECHA LÍMITE
                    </p>
                    <p className={`font-[family-name:var(--font-playfair)] text-4xl font-bold ${semaforo.color}`}>
                      {resultado.label}
                    </p>
                    <div className={`inline-flex items-center gap-1.5 mt-2 px-2.5 py-1 rounded-full border text-xs font-[family-name:var(--font-inter)] font-semibold ${semaforo.badge}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${semaforo.color.replace("text-", "bg-")}`} />
                      {resultado.dias > 0 ? `${resultado.dias} días restantes` : resultado.dias === 0 ? "Vence hoy" : "Vencido"}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 sm:text-right">
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50">
                      {semaforo.texto}
                    </p>
                    <a
                      href={`https://wa.me/573028031478?text=${encodeURIComponent(waText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#C9A84C] text-[#081510] font-semibold rounded-lg hover:bg-[#E2C97E] transition-colors text-sm font-[family-name:var(--font-inter)] whitespace-nowrap"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Que Daniela me ayude
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#EDE5D4]/45 mt-4 font-[family-name:var(--font-inter)]">
          Fechas estimadas basadas en el patrón DIAN. Verifique con el decreto oficial cuando sea publicado.
        </p>
      </div>
    </section>
  );
}
