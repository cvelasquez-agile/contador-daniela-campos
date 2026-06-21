const servicios = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    titulo: "Declaración de Renta",
    descripcion:
      "Elaboración y presentación de declaraciones de renta para personas naturales y jurídicas ante la DIAN. Optimizamos su carga tributaria dentro del marco legal.",
    detalle: ["Personas naturales obligadas y no obligadas", "Sociedades y SAS", "Asesoría en deducciones y beneficios", "Corrección de declaraciones"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    titulo: "Contabilidad Empresarial",
    descripcion:
      "Llevamos su contabilidad al día: registro de operaciones, estados financieros, libros oficiales y reportes gerenciales para la toma de decisiones.",
    detalle: ["Estados financieros mensuales", "Libros contables NIIF", "Conciliaciones bancarias", "Informes gerenciales"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titulo: "Nómina y Seguridad Social",
    descripcion:
      "Liquidación precisa de nómina, prestaciones sociales, aportes PILA y gestión de novedades. Cumplimos cada obligación laboral con exactitud.",
    detalle: ["Liquidación mensual de nómina", "Aportes seguridad social (PILA)", "Prestaciones y liquidaciones", "Certificados de ingresos"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    titulo: "Revisoría Fiscal",
    descripcion:
      "Ejercemos la revisoría fiscal con independencia y criterio profesional: dictámenes, informes a asamblea y control interno para empresas obligadas.",
    detalle: ["Dictamen de estados financieros", "Informe a la Asamblea", "Evaluación de control interno", "Revisión de libros y actas"],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.3em] uppercase mb-4">
            Lo que ofrecemos
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Nuestros Servicios
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 border border-[#C9A84C]/20 rounded-lg bg-[#1A1A1A] hover:border-[#C9A84C]/60 transition-all duration-300 hover:bg-[#1f1f1f]"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-[#C9A84C] mb-5">{s.icon}</div>

              <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#F5F0E8] mb-3">
                {s.titulo}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-sm text-[#EDE5D4]/60 leading-relaxed mb-5">
                {s.descripcion}
              </p>

              <ul className="space-y-2">
                {s.detalle.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C9A84C] flex-shrink-0" />
                    <span className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50">
                      {d}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
