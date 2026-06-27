const valores = [
  { label: "Confianza", desc: "Relaciones duraderas basadas en la honestidad y el cumplimiento." },
  { label: "Transparencia", desc: "Comunicación clara, tarifas sin costos ocultos, sin letra pequeña." },
  { label: "Responsabilidad", desc: "Cada obligación tributaria, entregada a tiempo y sin errores." },
  { label: "Ética Profesional", desc: "Actuamos siempre dentro del marco legal, con criterio independiente." },
  { label: "Excelencia", desc: "Actualización permanente en normatividad contable y fiscal." },
  { label: "Cercanía", desc: "Atención directa y personal — usted habla con su contadora, no con un bot." },
];

export default function Valores() {
  return (
    <section className="bg-[#0C1D13] border-y border-[#C9A84C]/10 py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="w-8 h-px bg-[#C9A84C]" />
          <span className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.25em] uppercase">
            Nuestros valores
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[#C9A84C]/10 rounded-xl overflow-hidden">
          {valores.map((v) => (
            <div
              key={v.label}
              className="group bg-[#0C1D13] hover:bg-[#162B1E] transition-colors duration-300 p-6 flex flex-col gap-3"
            >
              <div className="w-6 h-px bg-[#C9A84C]/40 group-hover:bg-[#C9A84C] transition-colors duration-300" />
              <p className="font-[family-name:var(--font-playfair)] font-bold text-[#C9A84C] text-sm leading-tight">
                {v.label}
              </p>
              <p className="font-[family-name:var(--font-inter)] text-[11px] text-[#EDE5D4]/35 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
