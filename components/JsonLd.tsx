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
        mainEntity: [
          {
            "@type": "Question",
            name: "¿Cuándo vence mi declaración de renta 2026 en Colombia?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La fecha límite para declarar renta 2026 (año gravable 2025) depende de los dos últimos dígitos de su cédula o NIT. Los plazos van desde agosto hasta diciembre de 2026. Ingrese sus dígitos en nuestra calculadora para conocer su fecha exacta.",
            },
          },
          {
            "@type": "Question",
            name: "¿Cuánto cuesta la declaración de renta en Fusagasugá?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "El valor varía según la complejidad de su situación tributaria (empleado, independiente, con activos, con inversiones, etc.). Ofrecemos consulta inicial gratuita para evaluar su caso sin compromiso.",
            },
          },
          {
            "@type": "Question",
            name: "¿Qué pasa si no declaro renta a tiempo?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "La DIAN impone sanciones de extemporaneidad que para 2026 inician en $470.000 COP y aumentan con el tiempo. También genera intereses de mora. Es fundamental presentar la declaración antes de su fecha límite.",
            },
          },
        ],
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
