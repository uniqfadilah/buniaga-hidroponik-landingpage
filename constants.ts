// central constants used across the app

// local number provided by the user. update here whenever the sales/WA
// number changes. the helper below will automatically convert it to the
// correct international format for WhatsApp links.
export const PHONE_LOCAL = '087794220999';

// convert a leading 0 to the country code 62 (Indonesia). if the provided
// value already contains a country code the function will just return it
// unchanged so the constant above may be either form.
export const PHONE_INTERNATIONAL = PHONE_LOCAL.startsWith('0')
  ? '62' + PHONE_LOCAL.slice(1)
  : PHONE_LOCAL;

// human‑friendly formatting for display in the UI (you can adjust the
// grouping/dashes however you like).
export const PHONE_DISPLAY = `+62 ${PHONE_LOCAL.slice(1).replace(/(\d{3})(\d{4})(\d+)/, '$1-$2-$3')}`;

// base whatsapp url and helper for generating urls with pre‑filled messages
export const WHATSAPP_BASE_URL = `https://wa.me/${PHONE_INTERNATIONAL}`;

export function whatsappUrl(message: string) {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

// link for scheduling meetings via Calendly. edit here when your
// meeting URL changes.
export const CALENDLY_URL = 'https://calendly.com/uniqfadilah/new-meeting';
