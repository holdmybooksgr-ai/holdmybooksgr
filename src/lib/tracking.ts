// Google Ads & GTM tracking utilities
// Events fire ONLY after user consent

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  ads: boolean;
};

const CONSENT_KEY = "hmb_cookie_consent";

export const getConsent = (): ConsentState | null => {
  const stored = localStorage.getItem(CONSENT_KEY);
  if (!stored) return null;
  try {
    return JSON.parse(stored);
  } catch {
    return null;
  }
};

export const setConsent = (consent: ConsentState): void => {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
  
  // Update GTM consent state
  if (window.dataLayer) {
    window.dataLayer.push({
      event: "consent_update",
      consent_analytics: consent.analytics ? "granted" : "denied",
      consent_ads: consent.ads ? "granted" : "denied",
    });
  }
};

export const hasAdsConsent = (): boolean => {
  const consent = getConsent();
  return consent?.ads ?? false;
};

export const hasAnalyticsConsent = (): boolean => {
  const consent = getConsent();
  return consent?.analytics ?? false;
};

// Track events - only fires if user has given appropriate consent
export const trackEvent = (
  eventName: string,
  params?: Record<string, unknown>
): void => {
  if (!hasAdsConsent()) {
    console.log(`[Tracking] Event blocked (no consent): ${eventName}`);
    return;
  }

  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    });
    console.log(`[Tracking] Event sent: ${eventName}`, params);
  }
};

// Specific conversion events
export const trackFormSubmit = (): void => {
  trackEvent("form_submit_success", {
    conversion_type: "lead_form",
  });
};

export const trackClickCall = (): void => {
  trackEvent("click_call", {
    phone_number: "6973519478",
  });
};

export const trackClickEmail = (): void => {
  trackEvent("click_email", {
    email: "holdmybooksgr@gmail.com",
  });
};

// Extend Window interface
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}
