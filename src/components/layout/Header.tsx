import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/config/contact";
import { trackClickCall, trackClickEmail } from "@/lib/tracking";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Αρχική", href: "/" },
  { name: "ΙΚΕ", href: "/ike" },
  { name: "ΑΕ", href: "/ae" },
  { name: "ΕΠΕ", href: "/epe" },
  { name: "Οικοδομές", href: "/oikodomes" },
  { name: "Επικοινωνία", href: "/epikoinonia" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar - desktop only */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-wide flex justify-between items-center text-sm">
          <p>{CONTACT.hours}</p>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${CONTACT.phone}`}
              onClick={trackClickCall}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="h-4 w-4" />
              {CONTACT.phoneFormatted}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              onClick={trackClickEmail}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="h-4 w-4" />
              {CONTACT.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container-wide flex items-center justify-between py-4">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="HoldMyBooks" className="h-14 md:h-16 w-auto" />
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
        <div className="hidden lg:flex items-center gap-3">
          <Button variant="cta" asChild>
            <Link to="/epikoinonia">Μίλα μαζί μας</Link>
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
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-wide py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 text-base font-medium ${
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
                  Μίλα μαζί μας
                </Link>
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <a href={`tel:${CONTACT.phone}`} onClick={trackClickCall}>
                  <Phone className="h-4 w-4" />
                  Κάλεσέ μας
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
