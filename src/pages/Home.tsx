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
    description: "Πλήρης λογιστική υποστήριξη για Ιδιωτικές Κεφαλαιουχικές Εταιρείες και ΕΠΕ.",
  },
  {
    icon: TrendingUp,
    title: "Ανώνυμες Εταιρείες",
    description: "Εξειδικευμένες υπηρεσίες για ΑΕ με ισολογισμούς και οικονομικές καταστάσεις.",
  },
  {
    icon: HardHat,
    title: "Οικοδομές & Έργα",
    description: "Λογιστική παρακολούθηση τεχνικών εταιρειών, εργολάβων και οικοδομικών έργων.",
  },
  {
    icon: FileSpreadsheet,
    title: "Φορολογικές Δηλώσεις",
    description: "ΦΠΑ, φορολογία εισοδήματος και όλες οι εταιρικές υποχρεώσεις.",
  },
  {
    icon: Users,
    title: "Μισθοδοσία",
    description: "Διαχείριση μισθοδοσίας, ασφαλιστικές εισφορές και εργατικά θέματα.",
  },
  {
    icon: Calculator,
    title: "Συμβουλευτική",
    description: "Εταιρική συμβουλευτική για αποφάσεις και φορολογικό σχεδιασμό.",
  },
];

const whyUs = [
  "Εξειδίκευση σε ΙΚΕ, ΑΕ, ΕΠΕ",
  "Εμπειρία σε οικοδομές & τεχνικά έργα",
  "Σαφής τιμολόγηση χωρίς εκπλήξεις",
  "Άμεση επικοινωνία με υπεύθυνο λογιστή",
  "Πλήρης συμμόρφωση με νομοθεσία",
  "Ψηφιακή διαχείριση παραστατικών",
];

const companyTypes = [
  { name: "ΙΚΕ", href: "/ike", description: "Ιδιωτική Κεφαλαιουχική Εταιρεία" },
  { name: "ΑΕ", href: "/ae", description: "Ανώνυμη Εταιρεία" },
  { name: "ΕΠΕ", href: "/epe", description: "Εταιρεία Περιορισμένης Ευθύνης" },
  { name: "Οικοδομές", href: "/oikodomes", description: "Τεχνικές Εταιρείες & Εργολάβοι" },
];

const faqs = [
  {
    question: "Ποιες μορφές εταιρειών εξυπηρετείτε;",
    answer: "Εξειδικευόμαστε σε ΙΚΕ, ΑΕ, ΕΠΕ καθώς και σε οικοδομικές & τεχνικές εταιρείες. Παρέχουμε ολοκληρωμένη λογιστική υποστήριξη προσαρμοσμένη στις ανάγκες κάθε εταιρικής μορφής.",
  },
  {
    question: "Πώς λειτουργεί η συνεργασία μας;",
    answer: "Αρχικά αναλύουμε τις ανάγκες σας και σας δίνουμε σαφή εικόνα του κόστους. Αναλαμβάνουμε όλες τις λογιστικές και φορολογικές υποχρεώσεις της εταιρείας σας με διαφάνεια και συνέπεια.",
  },
  {
    question: "Τι περιλαμβάνει η λογιστική παρακολούθηση;",
    answer: "Τήρηση βιβλίων, ΦΠΑ, φορολογικές δηλώσεις, μισθοδοσία (όπου απαιτείται), ισολογισμοί, οικονομικές καταστάσεις και συμβουλευτική υποστήριξη.",
  },
  {
    question: "Εξυπηρετείτε εταιρείες σε όλη την Ελλάδα;",
    answer: "Ναι, εξυπηρετούμε εταιρείες σε όλη την Ελλάδα με έμφαση στην Αττική. Η ψηφιακή διαχείριση μας επιτρέπει αποτελεσματική συνεργασία ανεξαρτήτως τοποθεσίας.",
  },
];

export default function Home() {
  // Schema for LocalBusiness
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
    description: "Λογιστικές και φοροτεχνικές υπηρεσίες για ΙΚΕ, ΑΕ, ΕΠΕ και οικοδομικές εταιρείες.",
  };

  return (
    <Layout>
      <Helmet>
        <title>Λογιστικό Γραφείο για Εταιρείες | HoldMyBooks</title>
        <meta
          name="description"
          content="Αξιόπιστες λογιστικές υπηρεσίες για ΙΚΕ, ΑΕ, ΕΠΕ και τεχνικές εταιρείες. Εξειδίκευση σε οικοδομές. Ζητήστε δωρεάν εκτίμηση."
        />
        <link rel="canonical" href="https://holdmybooks.gr/" />
        <script type="application/ld+json">{JSON.stringify(businessSchema)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container-wide section-padding relative">
          <div className="max-w-3xl space-y-6 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <CheckCircle className="h-4 w-4 text-accent" />
              <span>Εξειδίκευση σε ΙΚΕ · ΑΕ · ΕΠΕ · Οικοδομές</span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Λογιστικές Υπηρεσίες για{" "}
              <span className="text-accent">Εταιρείες</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl">
              Αξιόπιστη λογιστική υποστήριξη για εταιρείες, με διαφάνεια και πλήρη φορολογική συμμόρφωση. 
              Εστιάζουμε σε αυτό που ξέρουμε καλά.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/epikoinonia">
                  Ζήτα Δωρεάν Εκτίμηση
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Εξυπηρετούμε κάθε τύπο εταιρείας
            </h2>
            <p className="text-muted-foreground text-lg">
              Επιλέξτε τον τύπο της εταιρείας σας για εξειδικευμένες πληροφορίες
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {companyTypes.map((type) => (
              <Link
                key={type.name}
                to={type.href}
                className="group p-6 bg-card rounded-xl border border-border shadow-subtle hover:shadow-elegant hover:border-accent/50 transition-all duration-300 text-center"
              >
                <h3 className="font-display text-2xl font-bold text-primary group-hover:text-accent transition-colors mb-2">
                  {type.name}
                </h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Τι αναλαμβάνουμε
            </h2>
            <p className="text-muted-foreground text-lg">
              Ολοκληρωμένες λογιστικές & φοροτεχνικές υπηρεσίες για την εταιρεία σας
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                Γιατί <span className="text-accent">HoldMyBooks</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Εστιάζουμε στις ανάγκες των εταιρειών με επαγγελματισμό και συνέπεια. 
                Γνωρίζουμε τις ιδιαιτερότητες κάθε εταιρικής μορφής.
              </p>

              <ul className="grid gap-4">
                {whyUs.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-success shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="cta" size="lg" asChild>
                <Link to="/epikoinonia">
                  Μάθε Περισσότερα
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 border border-border">
                <div className="space-y-6">
                  <div className="bg-card rounded-xl p-6 shadow-card">
                    <h3 className="font-display text-xl font-semibold mb-2">
                      Συνηθισμένα λάθη που κοστίζουν
                    </h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive font-bold">✗</span>
                        <span>Καθυστερημένες δηλώσεις που φέρνουν πρόστιμα</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive font-bold">✗</span>
                        <span>Λάθη σε ΦΠΑ που απαιτούν τροποποιητικές</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive font-bold">✗</span>
                        <span>Ελλιπής τεκμηρίωση σε τεχνικά έργα</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive font-bold">✗</span>
                        <span>Χαμένες φορολογικές ελαφρύνσεις</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-primary text-primary-foreground rounded-xl p-6">
                    <p className="text-sm font-medium">
                      "Λογιστική υποστήριξη με επαγγελματισμό & συνέπεια"
                    </p>
                    <p className="text-xs text-primary-foreground/70 mt-2">
                      — Η δέσμευσή μας
                    </p>
                  </div>
                </div>
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
