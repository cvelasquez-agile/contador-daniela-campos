"use client";
import { useState, FormEvent } from "react";

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", telefono: "", servicio: "", mensaje: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const texto = encodeURIComponent(
      `Hola Daniela, le escribo desde su sitio web.\n\n` +
      `*Nombre:* ${form.nombre}\n` +
      `*Empresa:* ${form.empresa || "N/A"}\n` +
      `*Teléfono:* ${form.telefono}\n` +
      `*Servicio de interés:* ${form.servicio}\n` +
      `*Mensaje:* ${form.mensaje}`
    );
    window.open(`https://wa.me/573028031478?text=${texto}`, "_blank");
    setEnviado(true);
    setTimeout(() => setEnviado(false), 5000);
  };

  const servicios = [
    "Declaración de renta",
    "Contabilidad empresarial",
    "Nómina y seguridad social",
    "Revisoría fiscal",
    "Otro / Consulta general",
  ];

  return (
    <section id="contacto" className="py-24 bg-[#0F2016]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: info */}
          <div>
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.3em] uppercase mb-4">
              Hablemos
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-[#F5F0E8] mb-6 leading-tight">
              Solicite su consulta
              <br />
              <span className="text-[#C9A84C]">sin costo</span>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-[#EDE5D4]/60 leading-relaxed text-sm mb-10">
              Cuéntenos sobre su empresa o situación tributaria. La primera sesión
              de orientación es completamente gratuita y sin compromiso.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "+57 302 8031478",
                  href: "https://wa.me/573028031478",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Correo",
                  value: "daniela@contadorafusagasuga.com",
                  href: "mailto:daniela@contadorafusagasuga.com",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Ubicación",
                  value: "Fusagasugá, Cundinamarca",
                  href: "https://maps.google.com/?q=Fusagasuga+Cundinamarca",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] group-hover:bg-[#C9A84C]/10 transition-colors flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/40 mb-0.5">{item.label}</p>
                    <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[#162B1E] border border-[#C9A84C]/20 rounded-lg p-5 sm:p-8">
            {enviado ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/40 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#F5F0E8] mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#EDE5D4]/60">
                  Le redirigimos a WhatsApp. Daniela le responderá pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50 mb-1.5 tracking-wider">
                      NOMBRE *
                    </label>
                    <input
                      required
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className="w-full bg-[#081510] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#EDE5D4]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors font-[family-name:var(--font-inter)]"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label className="block font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50 mb-1.5 tracking-wider">
                      EMPRESA
                    </label>
                    <input
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      className="w-full bg-[#081510] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#EDE5D4]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors font-[family-name:var(--font-inter)]"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50 mb-1.5 tracking-wider">
                    TELÉFONO / WHATSAPP *
                  </label>
                  <input
                    required
                    type="tel"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    className="w-full bg-[#081510] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#EDE5D4]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors font-[family-name:var(--font-inter)]"
                    placeholder="+57 300 000 0000"
                  />
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50 mb-1.5 tracking-wider">
                    SERVICIO DE INTERÉS *
                  </label>
                  <select
                    required
                    value={form.servicio}
                    onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                    className="w-full bg-[#081510] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C]/60 transition-colors font-[family-name:var(--font-inter)]"
                  >
                    <option value="" disabled>Seleccione un servicio</option>
                    {servicios.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50 mb-1.5 tracking-wider">
                    MENSAJE
                  </label>
                  <textarea
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full bg-[#081510] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#EDE5D4]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors font-[family-name:var(--font-inter)] resize-none"
                    placeholder="Cuéntenos brevemente sobre su necesidad..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C9A84C] text-[#081510] font-semibold rounded hover:bg-[#E2C97E] transition-colors text-sm font-[family-name:var(--font-inter)] tracking-wider flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar por WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
