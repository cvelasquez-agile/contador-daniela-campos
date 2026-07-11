const servicios = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
      </svg>
    ),
    titulo: "Declaración de Renta",
    descripcion: "Presentación ante la DIAN para personas naturales y jurídicas, optimizando su carga tributaria.",
    detalle: ["Personas naturales obligadas y no obligadas", "Sociedades y SAS", "Asesoría en deducciones y beneficios", "Corrección de declaraciones"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    titulo: "Contabilidad Integral",
    descripcion: "Registro de operaciones, estados financieros y libros oficiales al día.",
    detalle: ["Estados financieros mensuales", "Libros contables NIIF", "Conciliaciones bancarias", "Informes gerenciales"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    titulo: "Impuestos Nacionales",
    descripcion: "IVA, retención en la fuente e industria y comercio, al día y sin multas.",
    detalle: ["Declaraciones de IVA bimestrales", "Retención en la fuente", "Industria y comercio", "Asesoría en beneficios tributarios"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    titulo: "Nómina y Seguridad Social",
    descripcion: "Nómina, prestaciones sociales y aportes PILA sin errores ni retrasos.",
    detalle: ["Liquidación mensual de nómina", "Aportes seguridad social (PILA)", "Prestaciones y liquidaciones laborales", "Certificados de ingresos"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    titulo: "Certificaciones Contables",
    descripcion: "Certificados para trámites bancarios, visas, licitaciones y contratos.",
    detalle: ["Certificado de ingresos y retenciones", "Certificado de declarante de renta", "Estados financieros certificados", "Cartas de referencia contable"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    titulo: "Facturación Electrónica",
    descripcion: "Habilitación y gestión del sistema de facturación electrónica ante la DIAN.",
    detalle: ["Habilitación ante la DIAN", "Configuración del sistema", "Capacitación al equipo", "Soporte y contingencias"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    titulo: "Constitución Empresarial",
    descripcion: "Constitución de empresa, RUT y registro mercantil. Todo en un solo proceso.",
    detalle: ["Constitución SAS y otros tipos societarios", "Registro mercantil y RUT", "Actualización y corrección de RUT", "Asesoría en régimen tributario"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    titulo: "Revisoría Fiscal",
    descripcion: "Dictámenes, informes a asamblea y control interno con criterio independiente.",
    detalle: ["Dictamen de estados financieros", "Informe a la Asamblea", "Evaluación de control interno", "Revisión de libros y actas"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    titulo: "Devolución de Saldos a Favor",
    descripcion: "Recuperamos ante la DIAN los saldos a favor por retenciones o pagos en exceso.",
    detalle: ["Análisis de viabilidad", "Preparación del expediente DIAN", "Seguimiento del proceso", "Respuesta a requerimientos"],
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 bg-[#081510]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.3em] uppercase mb-4">
            Portafolio de servicios
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-4">
            Todo lo que necesita,<br className="hidden md:block" /> en un solo lugar
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent mx-auto mb-4" />
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#EDE5D4]/45 max-w-xl mx-auto">
            Gestión contable y tributaria cercana, precisa y a tiempo.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {servicios.map((s, i) => (
            <div
              key={i}
              className="group relative p-7 border border-[#C9A84C]/20 rounded-lg bg-[#162B1E] hover:border-[#C9A84C]/60 transition-all duration-300 hover:bg-[#1A3325]"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="text-[#C9A84C] mb-4">{s.icon}</div>

              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-[#F5F0E8] mb-2">
                {s.titulo}
              </h3>
              <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/55 leading-relaxed mb-4">
                {s.descripcion}
              </p>

              <ul className="space-y-1.5">
                {s.detalle.map((d) => (
                  <li key={d} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C9A84C] flex-shrink-0" />
                    <span className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/55">
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
