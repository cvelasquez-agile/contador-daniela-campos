const WA = "573028031478";

const manifesto = [
  {
    num: "01",
    statement: "No somos una firma grande. Somos su contadora.",
    body: "Cada cliente habla directamente con Daniela � sin asistentes, sin call centers. Su situaci�n no es un ticket en una cola.",
  },
  {
    num: "02",
    statement: "Conocemos Fusagasug� como nadie.",
    body: "El tejido empresarial local, los ciclos del agro, los negocios que crecen en la Autopista Sur. Eso no se aprende en un manual tributario.",
  },
  {
    num: "03",
    statement: "Ning�n vencimiento se nos ha pasado. Ninguno.",
    body: "Sistema de alertas propio, recordatorios proactivos y preparaci�n anticipada. Las sanciones DIAN existen para quienes no tienen a Daniela.",
  },
];

const proceso = [
  {
    paso: "1",
    titulo: "Diagn�stico gratuito",
    desc: "Revisamos su situaci�n tributaria y contable sin costo. 30 minutos que pueden ahorrarle millones.",
  },
  {
    paso: "2",
    titulo: "Propuesta a su medida",
    desc: "Sin paquetes gen�ricos. El plan se adapta al tama�o, sector y necesidades reales de su negocio.",
  },
  {
    paso: "3",
    titulo: "Ejecuci�n y tranquilidad",
    desc: "Usted se dedica a su negocio. Daniela se encarga de que todo est� al d�a, siempre.",
  },
];

export default function PorQue() {
  return (
    <section id="por-que" className="bg-[#081510] overflow-hidden">

      {/* -- MANIFESTO -- */}
      <div className="max-w-6xl mx-auto px-6 pt-24 pb-8">
        <div className="flex items-center gap-4 mb-16">
          <span className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.3em] uppercase">
            Por qu� Daniela
          </span>
          <span className="flex-1 h-px bg-[#C9A84C]/20" />
        </div>

        <div className="space-y-0">
          {manifesto.map((m, i) => (
            <div
              key={m.num}
              className="group grid grid-cols-1 md:grid-cols-[72px_1fr_1fr] gap-6 md:gap-10 py-10 border-b border-[#C9A84C]/10 hover:border-[#C9A84C]/30 transition-colors"
            >
              {/* Number */}
              <span
                className="font-[family-name:var(--font-playfair)] font-bold text-[#C9A84C]/15 group-hover:text-[#C9A84C]/30 transition-colors leading-none select-none"
                style={{ fontSize: "3.5rem" }}
              >
                {m.num}
              </span>

              {/* Statement */}
              <h3
                className="font-[family-name:var(--font-playfair)] font-bold text-[#F5F0E8] leading-tight self-center"
                style={{ fontSize: "clamp(1.25rem,2.2vw,1.75rem)" }}
              >
                {m.statement}
              </h3>

              {/* Body */}
              <p className="font-[family-name:var(--font-inter)] text-sm text-[#EDE5D4]/50 leading-relaxed self-center">
                {m.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* -- PROCESO � full-width dark band -- */}
      <div className="relative mt-16 bg-[#0F2016] border-t border-b border-[#C9A84C]/15 overflow-hidden">
        {/* Ghost number */}
        <span
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 font-[family-name:var(--font-playfair)] font-bold pointer-events-none select-none leading-none"
          style={{ fontSize: "22vw", color: "rgba(201,168,76,0.03)", lineHeight: 1 }}
        >
          DC
        </span>

        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.3em] uppercase mb-12">
            As� trabajamos
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0">
            {proceso.map((p, i) => (
              <div key={p.paso} className="relative flex flex-col md:pr-12">
                {/* Connector line (not last) */}
                {i < proceso.length - 1 && (
                  <div className="hidden md:block absolute right-0 top-8 w-px h-full bg-gradient-to-b from-[#C9A84C]/30 to-transparent" />
                )}

                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="font-[family-name:var(--font-playfair)] font-bold text-[#C9A84C]"
                    style={{ fontSize: "3rem", lineHeight: 1 }}
                  >
                    {p.paso}
                  </span>
                  <span className="flex-1 h-px bg-[#C9A84C]/20 md:hidden" />
                </div>

                <h4 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#F5F0E8] mb-3">
                  {p.titulo}
                </h4>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#EDE5D4]/45 leading-relaxed">
                  {p.desc}
                </p>

                {i < proceso.length - 1 && (
                  <div className="md:hidden my-8 h-px bg-[#C9A84C]/10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* -- QUOTE / CTA BAND -- */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="relative rounded-2xl border border-[#C9A84C]/20 bg-[#0F2016] p-10 md:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#C9A84C]/4 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#C9A84C]/3 blur-2xl pointer-events-none" />

          {/* Quote mark */}
          <span
            aria-hidden="true"
            className="font-[family-name:var(--font-playfair)] text-[#C9A84C]/15 font-bold leading-none select-none block mb-4"
            style={{ fontSize: "6rem", lineHeight: 0.8 }}
          >
            "
          </span>

          <blockquote className="relative">
            <p
              className="font-[family-name:var(--font-playfair)] font-bold italic text-[#F5F0E8] leading-snug mb-8"
              style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)" }}
            >
              Mi compromiso no termina cuando entrego la declaraci�n.
              Termina cuando usted entiende exactamente qu� pag� y por qu�.
            </p>
            <footer className="flex items-center gap-4">
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-[#C9A84C] font-bold text-base">
                  Daniela Campos
                </p>
                <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/40 tracking-wider">
                  Contadora P�blica � Fusagasug�
                </p>
              </div>
              <span className="flex-1 h-px bg-[#C9A84C]/15" />
              <a
                href={`https://wa.me/${WA}?text=${encodeURIComponent("Hola Daniela, quiero trabajar con usted.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#C9A84C] text-[#081510] font-semibold rounded-lg hover:bg-[#E2C97E] transition-colors text-sm font-[family-name:var(--font-inter)] tracking-wider whitespace-nowrap"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablemos hoy
              </a>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
