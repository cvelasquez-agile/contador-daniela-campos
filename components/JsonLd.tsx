import { FAQS } from "@/lib/faqs";
import { SITE_URL, WHATSAPP_NUMBER, BUSINESS_ADDRESS, MAPS_LINK_URL } from "@/lib/site";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AccountingService",
        "@id": `${SITE_URL}/#business`,
        name: "Daniela Campos – Contadora Pública",
        description:
          "Estudio contable en Fusagasugá y la región (Silvania, Granada, Arbeláez, San Bernardo) y en Bogotá. Servicios de declaración de renta, contabilidad empresarial, nómina, seguridad social y revisoría fiscal para personas naturales y empresas.",
        url: SITE_URL,
        telephone: `+${WHATSAPP_NUMBER}`,
        priceRange: "$$",
        currenciesAccepted: "COP",
        paymentAccepted: "Efectivo, Transferencia bancaria",
        areaServed: [
          { "@type": "City", name: "Fusagasugá" },
          { "@type": "City", name: "Silvania" },
          {
            "@type": "City",
            name: "Granada",
            containedInPlace: { "@type": "AdministrativeArea", name: "Cundinamarca" },
          },
          { "@type": "City", name: "Arbeláez" },
          {
            "@type": "City",
            name: "San Bernardo",
            containedInPlace: { "@type": "AdministrativeArea", name: "Cundinamarca" },
          },
          { "@type": "City", name: "Bogotá" },
          { "@type": "AdministrativeArea", name: "Cundinamarca" },
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: `${BUSINESS_ADDRESS.street}, ${BUSINESS_ADDRESS.neighborhood}`,
          addressLocality: BUSINESS_ADDRESS.locality,
          addressRegion: BUSINESS_ADDRESS.region,
          addressCountry: BUSINESS_ADDRESS.country,
        },
        geo: {
          // Coordenadas exactas del pin verificado en su Google Business
          // Profile (no una aproximación del centro de la ciudad).
          "@type": "GeoCoordinates",
          latitude: 4.3417771,
          longitude: -74.362469,
        },
        hasMap: MAPS_LINK_URL,
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
        sameAs: [
          "https://www.instagram.com/contadoradanielacampos/",
          "https://www.facebook.com/share/1Emm5Po1Vp/",
        ],
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#persona`,
        name: "Daniela Campos",
        jobTitle: "Contadora Pública",
        worksFor: { "@id": `${SITE_URL}/#business` },
        address: {
          "@type": "PostalAddress",
          streetAddress: `${BUSINESS_ADDRESS.street}, ${BUSINESS_ADDRESS.neighborhood}`,
          addressLocality: BUSINESS_ADDRESS.locality,
          addressRegion: BUSINESS_ADDRESS.region,
          addressCountry: BUSINESS_ADDRESS.country,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Daniela Campos Contadora Pública",
        description: "Servicios contables y tributarios en Fusagasugá, la región y Bogotá",
        inLanguage: "es-CO",
        publisher: { "@id": `${SITE_URL}/#business` },
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
