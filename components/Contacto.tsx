"use client";
import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { WHATSAPP_NUMBER, BUSINESS_ADDRESS_LINE, MAPS_EMBED_URL, MAPS_LINK_URL } from "@/lib/site";
import Reveal from "./Reveal";

const OFICINA_FOTOS = [
  { src: "/oficina-fachada.webp", alt: "Fachada de la oficina de Daniela Campos, Contadora Pública, en Fusagasugá" },
  { src: "/oficina-recepcion.webp", alt: "Área de atención con el logo de Daniela Campos en la pared de la oficina" },
  { src: "/oficina-interior.webp", alt: "Puestos de trabajo dentro de la oficina de Daniela Campos, Contadora Pública" },
];

export default function Contacto() {
  const [enviado, setEnviado] = useState(false);
  const [form, setForm] = useState({ nombre: "", empresa: "", telefono: "", servicio: "", mensaje: "" });

  // Ciclo automático de las fotos de la oficina — una a la vez, vertical, al
  // lado del mapa, en vez de las tres ocupando todo el ancho. Se detiene si
  // el visitante prefiere menos movimiento en pantalla.
  const [fotoActiva, setFotoActiva] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setFotoActiva((i) => (i + 1) % OFICINA_FOTOS.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

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
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, "_blank");
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
    <section id="contacto" className="py-16 md:py-24 bg-[#0F2016]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left: info */}
          <Reveal className="flex flex-col justify-center">
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.3em] uppercase mb-4">
              Hablemos
            </p>
            <h2
              className="font-[family-name:var(--font-playfair)] font-bold text-[#F5F0E8] mb-6 leading-tight"
              style={{ fontSize: "clamp(2rem,4vw,3rem)" }}
            >
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
                  href: `https://wa.me/${WHATSAPP_NUMBER}`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Ubicación",
                  value: BUSINESS_ADDRESS_LINE,
                  href: MAPS_LINK_URL,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  ),
                  label: "Zonas que atendemos",
                  value: "Fusagasugá, Silvania, Subía, Granada, Arbeláez, San Bernardo y Bogotá",
                  href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hola Daniela, le escribo desde fuera de Fusagasugá, ¿atienden mi zona?")}`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  ),
                  label: "Instagram",
                  value: "@contadoradanielacampos",
                  href: "https://www.instagram.com/contadoradanielacampos/",
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  ),
                  label: "Facebook",
                  value: "Síguenos en Facebook",
                  href: "https://www.facebook.com/share/1Emm5Po1Vp/",
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
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 mb-0.5">{item.label}</p>
                    <p className="font-[family-name:var(--font-inter)] text-sm text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={120} className="bg-[#162B1E] border border-[#C9A84C]/20 rounded-lg p-5 sm:p-8">
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
                    <label htmlFor="nombre" className="block font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 mb-1.5 tracking-wider">
                      NOMBRE *
                    </label>
                    <input
                      id="nombre"
                      required
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      className="w-full bg-[#081510] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#EDE5D4]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors font-[family-name:var(--font-inter)]"
                      placeholder="Su nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="empresa" className="block font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 mb-1.5 tracking-wider">
                      EMPRESA
                    </label>
                    <input
                      id="empresa"
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      className="w-full bg-[#081510] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#EDE5D4]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors font-[family-name:var(--font-inter)]"
                      placeholder="Nombre de su empresa"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="telefono" className="block font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 mb-1.5 tracking-wider">
                    TELÉFONO / WHATSAPP *
                  </label>
                  <input
                    id="telefono"
                    required
                    type="tel"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    className="w-full bg-[#081510] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#EDE5D4]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors font-[family-name:var(--font-inter)]"
                    placeholder="+57 300 000 0000"
                  />
                </div>

                <div>
                  <label htmlFor="servicio" className="block font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 mb-1.5 tracking-wider">
                    SERVICIO DE INTERÉS *
                  </label>
                  <select
                    id="servicio"
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
                  <label htmlFor="mensaje" className="block font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/60 mb-1.5 tracking-wider">
                    MENSAJE
                  </label>
                  <textarea
                    id="mensaje"
                    rows={4}
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    className="w-full bg-[#081510] border border-[#C9A84C]/20 rounded px-4 py-2.5 text-sm text-[#F5F0E8] placeholder-[#EDE5D4]/20 focus:outline-none focus:border-[#C9A84C]/60 transition-colors font-[family-name:var(--font-inter)] resize-none"
                    placeholder="Cuéntenos brevemente sobre su necesidad..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#C9A84C] text-[#081510] font-semibold rounded-lg hover:bg-[#E2C97E] transition-colors text-sm font-[family-name:var(--font-inter)] tracking-wider flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar por WhatsApp
                </button>
              </form>
            )}
          </Reveal>
        </div>

        {/* Oficina + mapa, lado a lado: una foto vertical que va rotando sola
            (más chica, no le roba el protagonismo al mapa) y el mapa
            ocupando el resto del ancho — más ordenado que las 3 fotos
            grandes de antes. */}
        <Reveal delay={180} className="mt-12 md:mt-16">
          <p className="font-[family-name:var(--font-inter)] text-xs text-[#C9A84C] tracking-[0.3em] uppercase mb-4">
            Nuestra oficina
          </p>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,240px)_1fr] gap-4">
            {/* Foto vertical rotativa */}
            <div className="relative h-[220px] md:h-[380px] rounded-lg overflow-hidden border border-[#C9A84C]/20">
              {OFICINA_FOTOS.map((foto, i) => (
                <Image
                  key={foto.src}
                  src={foto.src}
                  alt={foto.alt}
                  fill
                  sizes="240px"
                  priority={i === 0}
                  className={`object-cover transition-opacity duration-1000 ease-in-out ${
                    i === fotoActiva ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                {OFICINA_FOTOS.map((foto, i) => (
                  <span
                    key={foto.src}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${
                      i === fotoActiva ? "bg-[#C9A84C]" : "bg-white/40"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Mapa interactivo — ayuda al posicionamiento en búsquedas locales
                ("contador público cerca de mí") al mostrar la ubicación exacta,
                no solo el nombre de la ciudad. El iframe queda totalmente
                interactivo (pan/zoom); el enlace "Cómo llegar" va aparte para
                no taparlo con una capa que bloquee el mapa. */}
            <div className="rounded-lg overflow-hidden border border-[#C9A84C]/20 h-[300px] md:h-[380px]">
              <iframe
                src={MAPS_EMBED_URL}
                className="w-full h-full grayscale-[25%] contrast-[1.05]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de la oficina de Daniela Campos, Contadora Pública"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 mt-4">
            <p className="font-[family-name:var(--font-inter)] text-xs text-[#EDE5D4]/50">
              {BUSINESS_ADDRESS_LINE}
            </p>
            <a
              href={MAPS_LINK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-[family-name:var(--font-inter)] text-[#C9A84C] hover:text-[#E2C97E] transition-colors tracking-wide"
            >
              Cómo llegar
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
