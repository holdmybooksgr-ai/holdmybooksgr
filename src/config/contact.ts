// Centralized contact information - edit here to update everywhere
export const CONTACT = {
  companyName: "HoldMyBooks",
  address: "Corfu, Greece",
  phone: "6987992362",
  phoneFormatted: "698 799 2362",
  email: "holdmybooksgr@gmail.com",
  serviceArea: "Ελλάδα (έμφαση Αττική)",
  hours: "Δευτέρα – Παρασκευή, 09:00 – 17:00",
  googleMapsEmbed: "https://www.google.com/maps?q=Corfu%2C%20Greece&output=embed",
  googleMapsLink: "https://www.google.com/maps/search/Corfu%2C%20Greece",
} as const;

export const SOCIAL = {
  facebook: "",
  linkedin: "",
  instagram: "",
} as const;

// GTM Configuration - set via environment or here
export const TRACKING = {
  gtmId: import.meta.env.VITE_GTM_ID || "",
} as const;
