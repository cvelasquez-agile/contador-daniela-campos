import Link from "next/link";
import Logo from "@/components/Logo";
import { WHATSAPP_NUMBER } from "@/lib/site";

export const metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#081510] text-center">
      <Link href="/" className="mb-12">
        <Logo variant="full" size={40} />
      </Link>

      <span
        className="font-[family-name:var(--font-playfair)] font-bold text-[#C9A84C]/20 leading-none select-none"
        style={{ fontSize: "clamp(5rem,15vw,9rem)" }}
      >
        404
      </span>

      <h1
        className="font-[family-name:var(--font-playfair)] font-bold text-[#F5F0E8] -mt-4 mb-4"
        style={{ fontSize: "clamp(1.5rem,3vw,2.25rem)" }}
      >
        Esta página no existe
      </h1>
      <p className="font-[family-name:var(--font-inter)] text-sm text-[#EDE5D4]/60 max-w-md mb-10 leading-relaxed">
        Puede que el enlace esté roto o que la página se haya movido.
        Volvamos al inicio, o escríbanos directo por WhatsApp.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A84C] text-[#081510] font-semibold rounded-lg hover:bg-[#E2C97E] transition-colors text-sm font-[family-name:var(--font-inter)] tracking-wider"
        >
          Volver al inicio
        </Link>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#C9A84C]/30 text-[#EDE5D4]/60 hover:text-[#C9A84C] hover:border-[#C9A84C]/60 transition-colors text-sm rounded-lg font-[family-name:var(--font-inter)] tracking-wider"
        >
          Escribir por WhatsApp
        </a>
      </div>
    </main>
  );
}
