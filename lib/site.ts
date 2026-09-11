/**
 * Canonical origin for the site. Every URL emitted in metadata, robots,
 * sitemap and JSON-LD derives from here, so changing the domain is a
 * one-line edit (or a NEXT_PUBLIC_SITE_URL override per environment).
 *
 * No trailing slash.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://contadoradanielacampos.com";

/** Bare host, for display in the OG image and similar copy. */
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, "");

/**
 * WhatsApp number for every "wa.me" link and click-to-chat button on the
 * site, in international format with no "+" or spaces. Single source of
 * truth so it never drifts between components.
 */
export const WHATSAPP_NUMBER = "573028031478";

/**
 * Physical office address, as given by Daniela. Feeds the Contacto section,
 * the embedded map and the LocalBusiness JSON-LD — having a real
 * streetAddress (not just the city) is what lets Google match "contador
 * público cerca de mí" searches to this exact location instead of just
 * the city in general.
 */
export const BUSINESS_ADDRESS = {
  street: "Calle 9 # 7-27",
  neighborhood: "Centro",
  locality: "Fusagasugá",
  region: "Cundinamarca",
  country: "CO",
};

/** One-line address for display. */
export const BUSINESS_ADDRESS_LINE = `${BUSINESS_ADDRESS.street}, ${BUSINESS_ADDRESS.neighborhood}, ${BUSINESS_ADDRESS.locality}, ${BUSINESS_ADDRESS.region}`;

/**
 * Google's numeric id (CID) for Daniela's actual Google Business Profile
 * listing ("Daniela Campos - Contadora Publica Fusagasugá - Declaración de
 * Renta Fusagasugá"), decoded from the hex feature id in the place's Maps
 * URL (…!1s0x8e3f053c451b3cf7:0xc8407d4f4e875e4f…, the part after the
 * colon). Pinning to the CID — instead of a text address search — is what
 * makes the embed resolve to the exact verified listing (with her reviews
 * and business hours) rather than an approximate street match.
 */
const BUSINESS_CID = "14429670985668451919";

/** No-API-key Google Maps embed URL (iframe src) for the office location. */
export const MAPS_EMBED_URL = `https://www.google.com/maps/embed?origin=mfe&pb=!1m3!3m2!1m1!4s${BUSINESS_CID}`;

/** Opens the same verified listing in Google Maps — used for "get directions". */
export const MAPS_LINK_URL = `https://www.google.com/maps?cid=${BUSINESS_CID}`;
