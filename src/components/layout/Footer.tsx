import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { CONTACT } from "@/config/contact";
import { trackClickCall, trackClickEmail } from "@/lib/tracking";
import logo from "@/assets/logo.png";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logo} alt="HoldMyBooks" className="h-10 w-auto brightness-0 invert" />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Αναλαμβάνουμε τα λογιστικά της εταιρείας σου. Απλά και ξεκάθαρα.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold">Υπηρεσίες</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/ike" className="hover:text-primary-foreground transition-colors">
                  Λογιστικά για ΙΚΕ
                </Link>
              </li>
              <li>
                <Link to="/ae" className="hover:text-primary-foreground transition-colors">
                  Λογιστικά για ΑΕ
                </Link>
              </li>
              <li>
                <Link to="/epe" className="hover:text-primary-foreground transition-colors">
                  Λογιστικά για ΕΠΕ
                </Link>
              </li>
              <li>
                <Link to="/oikodomes" className="hover:text-primary-foreground transition-colors">
                  Οικοδομές & Τεχνικές Εταιρείες
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Επικοινωνία</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  onClick={trackClickCall}
                  className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  {CONTACT.phoneFormatted}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  onClick={trackClickEmail}
                  className="flex items-center gap-2 hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <a
                  href={CONTACT.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-foreground transition-colors"
                >
                  {CONTACT.address}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0" />
                {CONTACT.hours}
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Πληροφορίες</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link to="/about" className="hover:text-primary-foreground transition-colors">
                  Ποιοι Είμαστε
                </Link>
              </li>
              <li>
                <Link to="/epikoinonia" className="hover:text-primary-foreground transition-colors">
                  Επικοινωνία
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-primary-foreground transition-colors">
                  Πολιτική Απορρήτου
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary-foreground transition-colors">
                  Όροι Χρήσης
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {currentYear} {CONTACT.companyName}</p>
          <p>Εξυπηρετούμε όλη την Ελλάδα</p>
        </div>
      </div>
    </footer>
  );
}
