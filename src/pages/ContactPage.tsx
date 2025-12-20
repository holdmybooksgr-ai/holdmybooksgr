import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { LeadForm } from "@/components/common/LeadForm";
import { CONTACT } from "@/config/contact";
import { trackClickCall, trackClickEmail } from "@/lib/tracking";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      <Helmet>
        <title>Επικοινωνία | HoldMyBooks</title>
        <meta
          name="description"
          content="Επικοινωνήστε με το HoldMyBooks για δωρεάν εκτίμηση λογιστικών υπηρεσιών. Τηλέφωνο, email ή φόρμα επικοινωνίας."
        />
        <link rel="canonical" href="https://holdmybooks.gr/epikoinonia" />
      </Helmet>

      {/* Hero */}
      <section className="bg-hero-gradient text-primary-foreground py-16 md:py-24">
        <div className="container-wide">
          <div className="max-w-2xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Επικοινωνία
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Είμαστε εδώ για να σας βοηθήσουμε. Επικοινωνήστε μαζί μας για δωρεάν εκτίμηση.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-semibold mb-6">
                  Στοιχεία Επικοινωνίας
                </h2>

                <div className="space-y-6">
                  <a
                    href={`tel:${CONTACT.phone}`}
                    onClick={trackClickCall}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-card transition-all group"
                  >
                    <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-success/20 transition-colors">
                      <Phone className="h-6 w-6 text-success" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">{CONTACT.phoneFormatted}</p>
                      <p className="text-sm text-muted-foreground">
                        Κάντε κλικ για κλήση
                      </p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${CONTACT.email}`}
                    onClick={trackClickEmail}
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-card transition-all group"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">{CONTACT.email}</p>
                      <p className="text-sm text-muted-foreground">
                        Κάντε κλικ για email
                      </p>
                    </div>
                  </a>

                  <a
                    href={CONTACT.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent/50 hover:shadow-card transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">{CONTACT.address}</p>
                      <p className="text-sm text-muted-foreground">
                        Δείτε στο χάρτη
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                    <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-lg">Ωράριο</p>
                      <p className="text-muted-foreground">{CONTACT.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-border h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.5!2d23.75!3d37.87!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a1bd3f7b9e5c7b%3A0x0!2sMistra%2061%2C%20Glyfada!5e0!3m2!1sel!2sgr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="HoldMyBooks Location"
                ></iframe>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-card">
              <h2 className="font-display text-2xl font-semibold mb-2">
                Στείλτε μας μήνυμα
              </h2>
              <p className="text-muted-foreground mb-6">
                Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας εντός 24 ωρών.
              </p>
              <LeadForm source="contact_page" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
