import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { CONTACT } from "@/config/contact";
import { trackClickCall } from "@/lib/tracking";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export function CTASection({
  title = "Ας μιλήσουμε",
  subtitle = "Πες μας τι χρειάζεσαι. Χωρίς δεσμεύσεις.",
}: CTASectionProps) {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold">
          {title}
        </h2>
        <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <Button variant="hero" size="lg" asChild>
            <Link to="/epikoinonia">
              Ζήτα προσφορά
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href={`tel:${CONTACT.phone}`} onClick={trackClickCall}>
              <Phone className="h-5 w-5" />
              {CONTACT.phoneFormatted}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
