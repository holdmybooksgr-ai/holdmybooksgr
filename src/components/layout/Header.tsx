import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/config/contact";
import { trackClickCall, trackClickEmail } from "@/lib/tracking";

const navigation = [
  { name: "Αρχική", href: "/" },
  { name: "ΙΚΕ", href: "/ike" },
  { name: "ΑΕ", href: "/ae" },
  { name: "ΕΠΕ", href: "/epe" },
  { name: "Οικοδομές", href: "/oikodomes" },
  { name: "Ποιοι Είμαστε", href: "/about" },
  { name: "Επικοινωνία", href: "/epikoinonia" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleCallClick = () => {
    trackClickCall();
  };

  const handleEmailClick = () => {
    trackClickEmail();
  };

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-subtle">
      {/* Top bar with contact info */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-wide flex justify-between items-center text-sm">
          <p className="flex items-center gap-2">
            <span>{CONTACT.hours}</span>
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${CONTACT.phone}`}
              onClick={handleCallClick}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phoneFormatted}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              onClick={handleEmailClick}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-4 w-4" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-wide flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-xl">H</span>
          </div>
          <span className="font-display text-xl font-semibold text-foreground">
            {CONTACT.companyName}
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="cta" asChild>
            <Link to="/epikoinonia">Ζήτα Προσφορά</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-muted-foreground hover:text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border">
          <div className="container-wide py-4 space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 text-base font-medium transition-colors ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-border space-y-3">
              <Button variant="cta" className="w-full" asChild>
                <Link to="/epikoinonia" onClick={() => setMobileMenuOpen(false)}>
                  Ζήτα Προσφορά
                </Link>
              </Button>
              <Button variant="call" className="w-full" asChild>
                <a href={`tel:${CONTACT.phone}`} onClick={handleCallClick}>
                  <Phone className="h-4 w-4 mr-2" />
                  Κάλεσε Τώρα
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
