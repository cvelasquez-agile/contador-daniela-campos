const diferenciadores = [
  {
    numero: "01",
    titulo: "Local y accesible",
    descripcion:
      "Estamos en Fusagasugá. Conocemos el tejido empresarial de la región, los pequeños negocios y las necesidades particulares del municipio y Cundinamarca.",
  },
  {
    numero: "02",
    titulo: "Comunicación directa",
    descripcion:
      "Trato personalizado, sin intermediarios. Usted siempre habla con la contadora. Respuestas claras, sin tecnicismos innecesarios.",
  },
  {
    numero: "03",
    titulo: "Cumplimiento puntual",
    descripcion:
      "Nunca perdemos una fecha de vencimiento. Nuestro sistema de alertas garantiza que su empresa cumpla cada obligación a tiempo y evite sanciones.",
  },
  {
    numero: "04",
    titulo: "Ética y confidencialidad",
    descripcion:
      "Su información financiera es reservada. Trabajamos bajo los más altos estándares éticos del Consejo Técnico de la Contaduría Pública.",
  },
  {
    numero: "05",
    titulo: "Adaptamos a su tamaño",
    descripcion:
      "Desde el emprendedor que inicia hasta la mediana empresa consolidada. Nuestros planes se ajustan al volumen y complejidad de su negocio.",
  },
  {
    numero: "06",
    titulo: "Actualización permanente",
    descripcion:
      "El marco tributario colombiano cambia constantemente. Nos actualizamos en normativa DIAN, NIIF y legislación laboral para proteger su patrimonio.",
  },
];

export default function PorQue() {
  return (
    <section id="por-que" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: heading */}
          <div className="lg:sticky lg:top-24">
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.3em] uppercase mb-4">
              Propuesta de valor
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#F5F0E8] leading-tight mb-6">
              ¿Por qué elegir
              <br />
              <span className="text-[#C9A84C]">Daniela Campos?</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#EDE5D4]/60 leading-relaxed text-sm mb-8">
              En Fusagasugá existen muchas opciones, pero pocas ofrecen la combinación
              de expertise técnico, trato humano y compromiso real con el crecimiento
              de su empresa.
            </p>
            <a
              href="https://wa.me/573000000000?text=Quiero%20trabajar%20con%20Daniela%20Campos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#C9A84C] text-[#0A0A0A] font-semibold rounded hover:bg-[#E2C97E] transition-colors text-sm font-[family-name:var(--font-inter)] tracking-wider"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Hablemos hoy
            </a>
          </div>

          {/* Right: grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {diferenciadores.map((d) => (
              <div
                key={d.numero}
                className="group p-6 border border-[#C9A84C]/15 rounded-lg bg-[#1A1A1A] hover:border-[#C9A84C]/40 transition-all"
              >
                <span className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C9A84C]/20 group-hover:text-[#C9A84C]/40 transition-colors block mb-3">
                  {d.numero}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-base font-bold text-[#F5F0E8] mb-2">
                  {d.titulo}
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50 leading-relaxed">
                  {d.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
