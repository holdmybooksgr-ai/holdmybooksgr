import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CTASection } from "@/components/common/CTASection";
import { CONTACT } from "@/config/contact";
import { CheckCircle, Users, Award, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Εστίαση",
    description: "Εξειδικευόμαστε σε συγκεκριμένους τύπους εταιρειών για να προσφέρουμε την καλύτερη δυνατή εξυπηρέτηση.",
  },
  {
    icon: Users,
    title: "Σχέση",
    description: "Χτίζουμε μακροχρόνιες σχέσεις με τους πελάτες μας. Δεν είστε απλά ένας αριθμός.",
  },
  {
    icon: Award,
    title: "Ποιότητα",
    description: "Η ακρίβεια και η συνέπεια είναι μη διαπραγματεύσιμες στη δουλειά μας.",
  },
];

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>Ποιοι Είμαστε | HoldMyBooks</title>
        <meta
          name="description"
          content="Το HoldMyBooks είναι ένα λογιστικό γραφείο εξειδικευμένο σε εταιρείες. Μάθετε περισσότερα για την ομάδα μας και τη φιλοσοφία μας."
        />
        <link rel="canonical" href="https://holdmybooks.gr/about" />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Ποιοι Είμαστε
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Ένα λογιστικό γραφείο που εστιάζει στις πραγματικές ανάγκες των εταιρειών.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                Η ιστορία μας
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Το <strong className="text-foreground">HoldMyBooks</strong> δημιουργήθηκε με έναν ξεκάθαρο στόχο: 
                  να προσφέρει εξειδικευμένη λογιστική υποστήριξη σε εταιρείες, χωρίς περιττές πολυπλοκότητες.
                </p>
                <p>
                  Γνωρίζουμε ότι κάθε τύπος εταιρείας έχει τις δικές του ιδιαιτερότητες. Γι' αυτό επιλέξαμε να 
                  εξειδικευτούμε σε ΙΚΕ, ΑΕ, ΕΠΕ και τεχνικές εταιρείες, αντί να προσφέρουμε γενικές υπηρεσίες σε όλους.
                </p>
                <p>
                  Η εξειδίκευσή μας σημαίνει ότι γνωρίζουμε τις νομοθετικές λεπτομέρειες, τα συνηθισμένα προβλήματα 
                  και τις βέλτιστες πρακτικές για κάθε περίπτωση.
                </p>
              </div>
            </div>

            <div className="bg-muted rounded-2xl p-8">
              <h3 className="font-display text-xl font-semibold mb-6">
                Τι μας ξεχωρίζει
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span>Εξειδίκευση σε συγκεκριμένους τύπους εταιρειών</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span>Διαφάνεια στην τιμολόγηση - χωρίς κρυφές χρεώσεις</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span>Άμεση επικοινωνία με τον υπεύθυνο λογιστή</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span>Ψηφιακή διαχείριση για ευκολία και ασφάλεια</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                  <span>Προληπτικός έλεγχος για αποφυγή προστίμων</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Οι αξίες μας
            </h2>
            <p className="text-muted-foreground text-lg">
              Αυτά τα τρία στοιχεία καθοδηγούν κάθε πτυχή της δουλειάς μας.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card rounded-xl p-8 text-center shadow-subtle">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Πού βρισκόμαστε
            </h2>
            <p className="text-muted-foreground text-lg">
              Εξυπηρετούμε εταιρείες σε όλη την Ελλάδα, με έμφαση στην Αττική.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 border border-border max-w-2xl mx-auto text-center">
            <p className="font-display text-xl font-semibold mb-2">{CONTACT.companyName}</p>
            <p className="text-muted-foreground mb-1">{CONTACT.address}</p>
            <p className="text-muted-foreground mb-1">{CONTACT.hours}</p>
            <p className="text-muted-foreground">{CONTACT.serviceArea}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Έτοιμοι να συνεργαστούμε;"
        subtitle="Επικοινωνήστε μαζί μας για μια δωρεάν συζήτηση των αναγκών σας."
      />
    </Layout>
  );
}
