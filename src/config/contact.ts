// Centralized contact information - edit here to update everywhere
export const CONTACT = {
  companyName: "HoldMyBooks",
  address: "Μύστρα 61, Γλυφάδα",
  phone: "6973519478",
  phoneFormatted: "697 351 9478",
  email: "holdmybooksgr@gmail.com",
  serviceArea: "Ελλάδα (έμφαση Αττική)",
  hours: "Δευτέρα – Παρασκευή, 09:00 – 17:00",
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.5!2d23.75!3d37.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDUyJzEyLjAiTiAyM8KwNDUnMDAuMCJF!5e0!3m2!1sen!2sgr!4v1234567890",
  googleMapsLink: "https://www.google.com/maps/search/Μύστρα+61+Γλυφάδα",
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
