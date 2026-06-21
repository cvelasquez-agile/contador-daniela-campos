"use client";
import { useState, useEffect } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#vencimientos", label: "Vencimientos" },
  { href: "#por-que", label: "¿Por qué elegirnos?" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0A0A0A]/95 backdrop-blur border-b border-[#C9A84C]/20 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="font-[family-name:var(--font-playfair)] text-xl font-bold text-[#C9A84C] tracking-wide">
          DC <span className="text-[#F5F0E8] font-normal text-sm tracking-widest ml-1">CONTADORA</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-[family-name:var(--font-inter)] text-[#EDE5D4]/80 hover:text-[#C9A84C] transition-colors tracking-wider uppercase"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/573000000000?text=Hola%20Daniela,%20me%20gustar%C3%ADa%20más%20información%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 text-sm border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all rounded font-semibold tracking-wider"
            >
              Consulta Gratis
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#C9A84C] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#1A1A1A] border-t border-[#C9A84C]/20 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#EDE5D4]/80 hover:text-[#C9A84C] tracking-wider uppercase text-sm"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/573000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-center py-2 border border-[#C9A84C] text-[#C9A84C] rounded text-sm font-semibold"
          >
            Consulta Gratis
          </a>
        </div>
      )}
    </header>
  );
}
