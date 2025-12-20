import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getConsent, setConsent } from "@/lib/tracking";
import { X, Cookie } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    ads: false,
  });

  useEffect(() => {
    const consent = getConsent();
    if (!consent) {
      // Small delay to prevent flash
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    const consent = { necessary: true, analytics: true, ads: true };
    setConsent(consent);
    setShowBanner(false);
  };

  const acceptNecessary = () => {
    const consent = { necessary: true, analytics: false, ads: false };
    setConsent(consent);
    setShowBanner(false);
  };

  const savePreferences = () => {
    setConsent(preferences);
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-2xl bg-card border border-border rounded-xl shadow-elegant animate-slide-up">
        {showDetails ? (
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-semibold">Ρυθμίσεις Cookies</h3>
              <button
                onClick={() => setShowDetails(false)}
                className="p-1 hover:bg-muted rounded-md transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                <input
                  type="checkbox"
                  checked={true}
                  disabled
                  className="mt-1"
                />
                <div>
                  <p className="font-medium">Απαραίτητα</p>
                  <p className="text-sm text-muted-foreground">
                    Απαραίτητα για τη λειτουργία του site.
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors">
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={(e) =>
                    setPreferences((p) => ({ ...p, analytics: e.target.checked }))
                  }
                  className="mt-1"
                />
                <div>
                  <p className="font-medium">Αναλυτικά</p>
                  <p className="text-sm text-muted-foreground">
                    Μας βοηθούν να κατανοήσουμε πώς χρησιμοποιείτε το site.
                  </p>
                </div>
              </label>

              <label className="flex items-start gap-3 p-3 bg-muted rounded-lg cursor-pointer hover:bg-muted/80 transition-colors">
                <input
                  type="checkbox"
                  checked={preferences.ads}
                  onChange={(e) =>
                    setPreferences((p) => ({ ...p, ads: e.target.checked }))
                  }
                  className="mt-1"
                />
                <div>
                  <p className="font-medium">Διαφήμισης</p>
                  <p className="text-sm text-muted-foreground">
                    Για εξατομικευμένες διαφημίσεις και μετρήσεις.
                  </p>
                </div>
              </label>
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1" onClick={acceptNecessary}>
                Μόνο Απαραίτητα
              </Button>
              <Button variant="cta" className="flex-1" onClick={savePreferences}>
                Αποθήκευση
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center">
              Διαβάστε την{" "}
              <Link to="/privacy" className="underline hover:text-foreground">
                Πολιτική Απορρήτου
              </Link>
            </p>
          </div>
        ) : (
          <div className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-accent/20 rounded-lg shrink-0">
                <Cookie className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1 space-y-3">
                <p className="text-sm text-muted-foreground">
                  Χρησιμοποιούμε cookies για να βελτιώσουμε την εμπειρία σας και να μετρήσουμε την αποτελεσματικότητα του site μας.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm" onClick={() => setShowDetails(true)}>
                    Ρυθμίσεις
                  </Button>
                  <Button variant="secondary" size="sm" onClick={acceptNecessary}>
                    Μόνο Απαραίτητα
                  </Button>
                  <Button variant="cta" size="sm" onClick={acceptAll}>
                    Αποδοχή Όλων
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
