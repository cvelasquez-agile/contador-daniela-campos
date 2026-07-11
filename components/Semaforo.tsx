"use client";
import { useMemo, useState } from "react";

interface Vencimiento {
  fecha: string; // "MM-DD"
  descripcion: string;
  tipo: string;
  entidad: string;
}

const VENCIMIENTOS: Vencimiento[] = [
  // IVA bimestral
  { fecha: "01-15", descripcion: "IVA Bimestral (Nov–Dic)", tipo: "iva", entidad: "DIAN" },
  { fecha: "03-10", descripcion: "IVA Bimestral (Ene–Feb)", tipo: "iva", entidad: "DIAN" },
  { fecha: "05-12", descripcion: "IVA Bimestral (Mar–Abr)", tipo: "iva", entidad: "DIAN" },
  { fecha: "07-14", descripcion: "IVA Bimestral (May–Jun)", tipo: "iva", entidad: "DIAN" },
  { fecha: "09-08", descripcion: "IVA Bimestral (Jul–Ago)", tipo: "iva", entidad: "DIAN" },
  { fecha: "11-10", descripcion: "IVA Bimestral (Sep–Oct)", tipo: "iva", entidad: "DIAN" },
  // Renta
  { fecha: "04-07", descripcion: "Renta personas jurídicas (grandes)", tipo: "renta", entidad: "DIAN" },
  { fecha: "04-09", descripcion: "Renta personas jurídicas", tipo: "renta", entidad: "DIAN" },
  { fecha: "08-12", descripcion: "Renta personas naturales (grandes)", tipo: "renta", entidad: "DIAN" },
  { fecha: "08-19", descripcion: "Renta personas naturales", tipo: "renta", entidad: "DIAN" },
  // Retención en la fuente
  { fecha: "01-22", descripcion: "Retención en la fuente (Dic)", tipo: "retencion", entidad: "DIAN" },
  { fecha: "02-24", descripcion: "Retención en la fuente (Ene)", tipo: "retencion", entidad: "DIAN" },
  { fecha: "03-24", descripcion: "Retención en la fuente (Feb)", tipo: "retencion", entidad: "DIAN" },
  { fecha: "04-22", descripcion: "Retención en la fuente (Mar)", tipo: "retencion", entidad: "DIAN" },
  { fecha: "05-26", descripcion: "Retención en la fuente (Abr)", tipo: "retencion", entidad: "DIAN" },
  { fecha: "06-23", descripcion: "Retención en la fuente (May)", tipo: "retencion", entidad: "DIAN" },
  { fecha: "07-21", descripcion: "Retención en la fuente (Jun)", tipo: "retencion", entidad: "DIAN" },
  { fecha: "08-25", descripcion: "Retención en la fuente (Jul)", tipo: "retencion", entidad: "DIAN" },
  { fecha: "09-22", descripcion: "Retención en la fuente (Ago)", tipo: "retencion", entidad: "DIAN" },
  { fecha: "10-20", descripcion: "Retención en la fuente (Sep)", tipo: "retencion", entidad: "DIAN" },
  { fecha: "11-24", descripcion: "Retención en la fuente (Oct)", tipo: "retencion", entidad: "DIAN" },
  { fecha: "12-22", descripcion: "Retención en la fuente (Nov)", tipo: "retencion", entidad: "DIAN" },
  // PILA
  { fecha: "01-10", descripcion: "PILA (Dic) – empleadores", tipo: "pila", entidad: "UGPP" },
  { fecha: "02-10", descripcion: "PILA (Ene) – empleadores", tipo: "pila", entidad: "UGPP" },
  { fecha: "03-10", descripcion: "PILA (Feb) – empleadores", tipo: "pila", entidad: "UGPP" },
  { fecha: "04-10", descripcion: "PILA (Mar) – empleadores", tipo: "pila", entidad: "UGPP" },
  { fecha: "05-12", descripcion: "PILA (Abr) – empleadores", tipo: "pila", entidad: "UGPP" },
  { fecha: "06-10", descripcion: "PILA (May) – empleadores", tipo: "pila", entidad: "UGPP" },
  { fecha: "07-10", descripcion: "PILA (Jun) – empleadores", tipo: "pila", entidad: "UGPP" },
  { fecha: "08-11", descripcion: "PILA (Jul) – empleadores", tipo: "pila", entidad: "UGPP" },
  { fecha: "09-10", descripcion: "PILA (Ago) – empleadores", tipo: "pila", entidad: "UGPP" },
  { fecha: "10-10", descripcion: "PILA (Sep) – empleadores", tipo: "pila", entidad: "UGPP" },
  { fecha: "11-10", descripcion: "PILA (Oct) – empleadores", tipo: "pila", entidad: "UGPP" },
  { fecha: "12-10", descripcion: "PILA (Nov) – empleadores", tipo: "pila", entidad: "UGPP" },
];

const TIPO_LABELS: Record<string, string> = {
  iva: "IVA",
  renta: "Renta",
  retencion: "Retención",
  pila: "PILA",
};

const TIPO_COLORS: Record<string, string> = {
  iva: "bg-[#C9A84C]/20 text-[#C9A84C] border-[#C9A84C]/40",
  renta: "bg-[#C9A84C]/10 text-[#E2C97E] border-[#C9A84C]/30",
  retencion: "bg-[#EDE5D4]/10 text-[#EDE5D4] border-[#EDE5D4]/25",
  pila: "bg-[#EDE5D4]/5 text-[#EDE5D4]/75 border-[#EDE5D4]/15",
};

function getDiasRestantes(fecha: string): number {
  const now = new Date();
  const year = now.getFullYear();
  const [mm, dd] = fecha.split("-").map(Number);
  const target = new Date(year, mm - 1, dd);
  if (target < now) target.setFullYear(year + 1);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function getSemaforo(dias: number) {
  if (dias <= 7) return { color: "border-red-800/50 bg-red-950/20", dot: "bg-red-500 animate-pulse" };
  if (dias <= 20) return { color: "border-amber-700/45 bg-amber-950/15", dot: "bg-amber-400" };
  return { color: "border-[#C9A84C]/20 bg-[#162B1E]", dot: "bg-[#C9A84C]" };
}

type Filtro = "todos" | "iva" | "renta" | "retencion" | "pila";

const MESES = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];

export default function Semaforo() {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const items = useMemo(() => {
    return VENCIMIENTOS.map((v) => ({ ...v, dias: getDiasRestantes(v.fecha) }))
      .filter((v) => v.dias <= 90)
      .filter((v) => filtro === "todos" || v.tipo === filtro)
      .sort((a, b) => a.dias - b.dias);
  }, [filtro]);

  return (
    <section id="vencimientos" className="py-24 bg-[#081510]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.3em] uppercase mb-4">
            Herramienta gratuita
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Semáforo de Vencimientos
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-[#EDE5D4]/60 max-w-xl mx-auto text-sm leading-relaxed mb-6">
            Próximas obligaciones tributarias y de seguridad social. Actualizadas
            conforme al calendario DIAN.
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-8" />

          {/* Leyenda */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {[
              { dot: "bg-red-500", label: "= 7 días – Urgente" },
              { dot: "bg-yellow-400", label: "= 20 días – Próximo" },
              { dot: "bg-emerald-500", label: "+ 20 días – Pendiente" },
            ].map((l) => (
              <div key={l.label} className="flex items-center gap-2 text-xs text-[#EDE5D4]/50 font-[family-name:var(--font-inter)]">
                <span className={`w-2 h-2 rounded-full ${l.dot}`} />
                {l.label}
              </div>
            ))}
          </div>

          {/* Filtros */}
          <div className="flex flex-wrap justify-center gap-2">
            {(["todos", "iva", "renta", "retencion", "pila"] as Filtro[]).map((t) => (
              <button
                key={t}
                onClick={() => setFiltro(t)}
                className={`px-4 py-1.5 rounded-full text-xs font-[family-name:var(--font-inter)] tracking-wider border transition-all ${
                  filtro === t
                    ? "bg-[#C9A84C] text-[#081510] border-[#C9A84C] font-semibold"
                    : "border-[#C9A84C]/30 text-[#EDE5D4]/50 hover:border-[#C9A84C]/60"
                }`}
              >
                {t === "todos" ? "Todos" : TIPO_LABELS[t]}
              </button>
            ))}
          </div>
        </div>

        {items.length === 0 ? (
          <p className="text-center py-16 text-[#EDE5D4]/40 font-[family-name:var(--font-inter)] text-sm">
            No hay vencimientos próximos (90 días) para este filtro.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((v, i) => {
              const sem = getSemaforo(v.dias);
              const [mm, dd] = v.fecha.split("-");
              const fechaLabel = `${dd} ${MESES[parseInt(mm) - 1]}`;
              return (
                <div key={i} className={`p-5 rounded-lg border ${sem.color} transition-all`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border ${TIPO_COLORS[v.tipo]} font-[family-name:var(--font-inter)]`}>
                      {TIPO_LABELS[v.tipo]}
                    </span>
                    <span className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/40">{v.entidad}</span>
                  </div>

                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] mb-3 leading-snug">
                    {v.descripcion}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${sem.dot}`} />
                      <span className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50">
                        {v.dias === 0 ? "Hoy" : v.dias === 1 ? "Mañana" : `${v.dias} días`}
                      </span>
                    </div>
                    <span className="font-[family-name:var(--font-playfair)] text-sm font-bold text-[#C9A84C]">
                      {fechaLabel}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-10 text-center">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/30 mb-4">
            ¿Necesita ayuda con alguna de estas obligaciones?
          </p>
          <a
            href="https://wa.me/573028031478?text=Hola%20Daniela,%20necesito%20ayuda%20con%20un%20vencimiento"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#C9A84C]/40 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#081510] transition-all rounded text-sm font-[family-name:var(--font-inter)] font-semibold tracking-wider"
          >
            Gestionar con Daniela
          </a>
        </div>
      </div>
    </section>
  );
}
