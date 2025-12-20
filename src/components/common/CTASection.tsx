import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { CONTACT } from "@/config/contact";
import { trackClickCall } from "@/lib/tracking";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  showForm?: boolean;
}

export function CTASection({
  title = "Έτοιμοι να ξεκινήσετε;",
  subtitle = "Επικοινωνήστε μαζί μας σήμερα για δωρεάν εκτίμηση των αναγκών σας.",
}: CTASectionProps) {
  return (
    <section className="section-padding bg-hero-gradient text-primary-foreground">
      <div className="container-narrow text-center space-y-8">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button variant="hero" size="xl" asChild>
            <Link to="/epikoinonia">
              Ζήτα Δωρεάν Εκτίμηση
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href={`tel:${CONTACT.phone}`} onClick={trackClickCall}>
              <Phone className="h-5 w-5" />
              Κάλεσε στο {CONTACT.phoneFormatted}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
