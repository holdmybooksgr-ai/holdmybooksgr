import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { CONTACT } from "@/config/contact";
import { trackClickCall } from "@/lib/tracking";

export default function ThankYouPage() {
  return (
    <Layout>
      <Helmet>
        <title>Ευχαριστούμε | HoldMyBooks</title>
        <meta name="description" content="Η αίτησή σας υποβλήθηκε επιτυχώς. Θα επικοινωνήσουμε σύντομα μαζί σας." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-success/10 rounded-full mb-6 animate-fade-in">
            <CheckCircle className="h-10 w-10 text-success" />
          </div>

          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-slide-up">
            Ευχαριστούμε για την επικοινωνία!
          </h1>

          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Λάβαμε το αίτημά σας και θα επικοινωνήσουμε μαζί σας το συντομότερο δυνατό, 
            συνήθως εντός 24 ωρών τις εργάσιμες ημέρες.
          </p>

          <div className="bg-muted rounded-xl p-6 md:p-8 max-w-md mx-auto mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <p className="font-medium mb-2">Χρειάζεστε άμεση απάντηση;</p>
            <p className="text-muted-foreground text-sm mb-4">
              Καλέστε μας στο:
            </p>
            <Button variant="call" size="lg" asChild className="w-full">
              <a href={`tel:${CONTACT.phone}`} onClick={trackClickCall}>
                <Phone className="h-5 w-5" />
                {CONTACT.phoneFormatted}
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="outline" asChild>
              <Link to="/">
                Επιστροφή στην Αρχική
              </Link>
            </Button>
            <Button variant="default" asChild>
              <Link to="/about">
                Μάθετε για εμάς
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
