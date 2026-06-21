export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/40 to-transparent" />
      </div>

      {/* Glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#C9A84C]/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C9A84C]/40 rounded-full text-xs text-[#C9A84C] tracking-widest uppercase mb-8 font-[family-name:var(--font-inter)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
          Fusagasugá, Cundinamarca
        </div>

        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-7xl font-bold leading-tight mb-6">
          <span className="text-[#F5F0E8]">Daniela</span>{" "}
          <span className="text-[#C9A84C]">Campos</span>
        </h1>

        <p className="font-[family-name:var(--font-playfair)] text-xl md:text-2xl text-[#EDE5D4]/70 italic mb-4">
          Contadora Pública Certificada
        </p>

        <p className="font-[family-name:var(--font-inter)] text-base md:text-lg text-[#EDE5D4]/60 max-w-2xl mx-auto leading-relaxed mb-12">
          Más de 10 años acompañando a empresas y personas naturales en Fusagasugá.
          Tributación, contabilidad y nómina con precisión, ética y confianza.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/573000000000?text=Hola%20Daniela,%20quiero%20una%20consulta%20gratuita"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] font-semibold rounded hover:bg-[#E2C97E] transition-colors text-sm tracking-wider font-[family-name:var(--font-inter)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consulta Gratuita
          </a>

          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#C9A84C]/40 text-[#EDE5D4]/80 hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors text-sm tracking-wider rounded font-[family-name:var(--font-inter)]"
          >
            Ver Servicios
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto border-t border-[#C9A84C]/20 pt-10">
          {[
            { value: "+10", label: "Años de experiencia" },
            { value: "+200", label: "Clientes activos" },
            { value: "100%", label: "Compromiso" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C9A84C]">
                {s.value}
              </p>
              <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50 mt-1 leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
