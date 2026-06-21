import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Daniela Campos | Contadora Pública - Fusagasugá",
  description:
    "Estudio contable en Fusagasugá. Declaración de renta, contabilidad empresarial, nómina y revisoría fiscal. Confianza y precisión para su negocio.",
  keywords: ["contadora Fusagasugá", "declaración de renta Fusagasugá", "contabilidad empresarial Cundinamarca", "nómina Fusagasugá"],
  openGraph: {
    title: "Daniela Campos | Contadora Pública",
    description: "Soluciones contables y tributarias en Fusagasugá, Cundinamarca.",
    locale: "es_CO",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[#0A0A0A] text-[#F5F0E8] antialiased">
        {children}
      </body>
    </html>
  );
}
