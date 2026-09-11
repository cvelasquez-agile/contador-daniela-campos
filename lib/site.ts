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
