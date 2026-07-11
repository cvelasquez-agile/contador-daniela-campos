import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

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

const signature = Caveat({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const BASE_URL = "https://www.danielacamposcontadora.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Daniela Campos | Contadora Pública en Fusagasugá",
    template: "%s | Daniela Campos Contadora",
  },
  description:
    "Contadora pública en Fusagasugá, Cundinamarca. Declaración de renta 2026, contabilidad empresarial, nómina y revisoría fiscal. Consulta gratuita. ¿Cuándo vence tu renta? Calcúlalo aquí.",
  keywords: [
    "contadora Fusagasugá",
    "declaración de renta Fusagasugá",
    "declaración de renta 2026 Colombia",
    "contabilidad empresarial Cundinamarca",
    "contador público Fusagasugá",
    "nómina Fusagasugá",
    "revisoría fiscal Cundinamarca",
    "fecha límite renta 2026",
    "DIAN renta 2026",
    "servicios contables Fusagasugá",
  ],
  authors: [{ name: "Daniela Campos", url: BASE_URL }],
  creator: "Daniela Campos",
  publisher: "Daniela Campos",
  alternates: {
    canonical: BASE_URL,
    languages: { "es-CO": BASE_URL },
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: BASE_URL,
    siteName: "Daniela Campos – Contadora Pública",
    title: "Daniela Campos | Contadora Pública en Fusagasugá",
    description:
      "Declaración de renta 2026, contabilidad, nómina y revisoría fiscal en Fusagasugá. Calcula tu fecha límite DIAN y agenda consulta gratuita.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daniela Campos – Contadora Pública en Fusagasugá, Cundinamarca",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniela Campos | Contadora Pública en Fusagasugá",
    description:
      "Declaración de renta 2026, contabilidad, nómina y revisoría fiscal en Fusagasugá. Calcula tu fecha límite DIAN.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  verification: {
    // google: "TU_CÓDIGO_GOOGLE_SEARCH_CONSOLE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CO" className={`${playfair.variable} ${inter.variable} ${signature.variable}`}>
      <head>
        <JsonLd />
      </head>
      <body className="min-h-screen bg-[#081510] text-[#F5F0E8] antialiased">
        {children}
      </body>
    </html>
  );
}
