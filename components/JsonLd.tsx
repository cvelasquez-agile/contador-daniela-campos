import { FAQS } from "@/lib/faqs";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": "https://www.danielacamposcontadora.com/#business",
        name: "Daniela Campos – Contadora Pública",
        description:
          "Estudio contable en Fusagasugá, Cundinamarca. Servicios de declaración de renta, contabilidad empresarial, nómina, seguridad social y revisoría fiscal para personas naturales y empresas.",
        url: "https://www.danielacamposcontadora.com",
        telephone: "+573028031478",
        priceRange: "$$",
        currenciesAccepted: "COP",
        paymentAccepted: "Efectivo, Transferencia bancaria",
        areaServed: [
          { "@type": "City", name: "Fusagasugá" },
          { "@type": "AdministrativeArea", name: "Cundinamarca" },
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fusagasugá",
          addressRegion: "Cundinamarca",
          addressCountry: "CO",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 4.3372,
          longitude: -74.3641,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Servicios Contables",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Declaración de Renta Personas Naturales" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Declaración de Renta Personas Jurídicas" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Contabilidad Empresarial" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Liquidación de Nómina y PILA" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Revisoría Fiscal" } },
          ],
        },
        sameAs: [],
      },
      {
        "@type": "Person",
        "@id": "https://www.danielacamposcontadora.com/#persona",
        name: "Daniela Campos",
        jobTitle: "Contadora Pública",
        worksFor: { "@id": "https://www.danielacamposcontadora.com/#business" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fusagasugá",
          addressRegion: "Cundinamarca",
          addressCountry: "CO",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.danielacamposcontadora.com/#website",
        url: "https://www.danielacamposcontadora.com",
        name: "Daniela Campos Contadora Pública",
        description: "Servicios contables y tributarios en Fusagasugá",
        inLanguage: "es-CO",
        publisher: { "@id": "https://www.danielacamposcontadora.com/#business" },
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
