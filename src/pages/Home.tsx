import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { TrustBadges } from "@/components/common/TrustBadges";
import { CTASection } from "@/components/common/CTASection";
import { FAQ } from "@/components/common/FAQ";
import { ServiceCard } from "@/components/common/ServiceCard";
import { CONTACT } from "@/config/contact";
import { trackClickCall } from "@/lib/tracking";
import {
  ArrowRight,
  Phone,
  Building2,
  FileSpreadsheet,
  Calculator,
  Users,
  HardHat,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "ΙΚΕ & ΕΠΕ",
    description: "Λογιστική υποστήριξη για Ιδιωτικές Κεφαλαιουχικές και ΕΠΕ.",
  },
  {
    icon: TrendingUp,
    title: "Ανώνυμες Εταιρείες",
    description: "Ισολογισμοί, οικονομικές καταστάσεις, τακτικός έλεγχος.",
  },
  {
    icon: HardHat,
    title: "Οικοδομές & Έργα",
    description: "Τεχνικές εταιρείες, εργολάβοι, κατασκευαστικά.",
  },
  {
    icon: FileSpreadsheet,
    title: "Φορολογικά",
    description: "ΦΠΑ, φόρος εισοδήματος, δηλώσεις, myDATA.",
  },
  {
    icon: Users,
    title: "Μισθοδοσία",
    description: "ΕΡΓΑΝΗ, ασφαλιστικά, εργατικά θέματα.",
  },
  {
    icon: Calculator,
    title: "Συμβουλευτική",
    description: "Σχεδιασμός, αποφάσεις, φορολογική στρατηγική.",
  },
];

const whyUs = [
  "Εξειδίκευση σε εταιρείες (ΙΚΕ, ΑΕ, ΕΠΕ)",
  "Εμπειρία σε τεχνικά έργα & οικοδομές",
  "Ξεκάθαρη τιμολόγηση από την αρχή",
  "Άμεση επικοινωνία με τον λογιστή σου",
  "Ψηφιακή διαχείριση παραστατικών",
];

const companyTypes = [
  { name: "ΙΚΕ", href: "/ike", description: "Ιδιωτική Κεφαλαιουχική" },
  { name: "ΑΕ", href: "/ae", description: "Ανώνυμη Εταιρεία" },
  { name: "ΕΠΕ", href: "/epe", description: "Περιορισμένης Ευθύνης" },
  { name: "Οικοδομές", href: "/oikodomes", description: "Τεχνικές & Κατασκευές" },
];

const faqs = [
  {
    question: "Ποιες εταιρείες εξυπηρετείτε;",
    answer: "Εξειδικευόμαστε σε ΙΚΕ, ΑΕ, ΕΠΕ και τεχνικές εταιρείες. Γνωρίζουμε τις ανάγκες κάθε μορφής και προσαρμοζόμαστε.",
  },
  {
    question: "Πώς ξεκινάμε;",
    answer: "Συζητάμε τι χρειάζεσαι, σου δίνουμε καθαρή τιμή και αναλαμβάνουμε. Χωρίς γραφειοκρατία.",
  },
  {
    question: "Τι περιλαμβάνει η υπηρεσία;",
    answer: "Τήρηση βιβλίων, ΦΠΑ, δηλώσεις, μισθοδοσία αν χρειάζεται, ισολογισμούς και συμβουλευτική.",
  },
  {
    question: "Εξυπηρετείτε όλη την Ελλάδα;",
    answer: "Ναι. Δουλεύουμε ψηφιακά, οπότε η τοποθεσία δεν είναι εμπόδιο. Έμφαση στην Αττική.",
  },
];

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    name: CONTACT.companyName,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Μύστρα 61",
      addressLocality: "Γλυφάδα",
      addressRegion: "Αττική",
      addressCountry: "GR",
    },
    telephone: CONTACT.phone,
    email: CONTACT.email,
    openingHours: "Mo-Fr 09:00-17:00",
    areaServed: "Ελλάδα",
    description: "Λογιστικές υπηρεσίες για ΙΚΕ, ΑΕ, ΕΠΕ και τεχνικές εταιρείες.",
  };

  return (
    <Layout>
      <Helmet>
        <title>Λογιστικό Γραφείο για Εταιρείες | HoldMyBooks</title>
        <meta
          name="description"
          content="Λογιστικές υπηρεσίες για ΙΚΕ, ΑΕ, ΕΠΕ και τεχνικές εταιρείες. Απλά, ξεκάθαρα, χωρίς εκπλήξεις. Ζήτα δωρεάν εκτίμηση."
        />
        <link rel="canonical" href="https://holdmybooks.gr/" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide section-padding">
          <div className="max-w-2xl space-y-6 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Αναλαμβάνουμε τα λογιστικά της εταιρείας σου
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-xl">
              Απλά και ξεκάθαρα. Ξέρεις πάντα πού βρίσκεσαι. Χωρίς εκπλήξεις.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
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
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Company Types */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Διάλεξε τον τύπο της εταιρείας σου
            </h2>
            <p className="text-muted-foreground">
              Κάθε μορφή έχει τις δικές της ανάγκες. Εμείς τις ξέρουμε.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {companyTypes.map((type) => (
              <Link
                key={type.name}
                to={type.href}
                className="group p-5 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors text-center"
              >
                <h3 className="text-xl font-bold text-primary mb-1">
                  {type.name}
                </h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Τι αναλαμβάνουμε
            </h2>
            <p className="text-muted-foreground">
              Όλα όσα χρειάζεται η εταιρεία σου, σε ένα μέρος.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Γιατί HoldMyBooks
              </h2>
              <p className="text-muted-foreground">
                Δεν είμαστε για όλους. Είμαστε για εταιρείες που θέλουν αξιόπιστη δουλειά, χωρίς περιττά λόγια.
              </p>

              <ul className="space-y-3">
                {whyUs.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="cta" size="lg" asChild>
                <Link to="/epikoinonia">
                  Μίλα μαζί μας
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="bg-muted/50 rounded-xl p-6 border border-border">
              <h3 className="font-semibold mb-4">
                Λάθη που βλέπουμε συχνά
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">✗</span>
                  <span>Καθυστερήσεις που φέρνουν πρόστιμα</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">✗</span>
                  <span>Λάθη σε ΦΠΑ που θέλουν διορθώσεις</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">✗</span>
                  <span>Ελλιπής τεκμηρίωση σε έργα</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive font-bold">✗</span>
                  <span>Χαμένες ευκαιρίες για εκπτώσεις</span>
                </li>
              </ul>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Με σωστή οργάνωση, αυτά αποφεύγονται.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ items={faqs} />

      {/* Final CTA */}
      <CTASection />
    </Layout>
  );
}
