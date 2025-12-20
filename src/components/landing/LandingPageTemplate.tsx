import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { LeadForm } from "@/components/common/LeadForm";
import { FAQ, FAQItem } from "@/components/common/FAQ";
import { CTASection } from "@/components/common/CTASection";
import { TrustBadges } from "@/components/common/TrustBadges";
import { CONTACT } from "@/config/contact";
import { trackClickCall } from "@/lib/tracking";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

interface LandingPageProps {
  title: string;
  metaDescription: string;
  canonicalPath: string;
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroBadge: string;
  services: string[];
  whyUsTitle: string;
  whyUsItems: string[];
  mistakes?: string[];
  faqs: FAQItem[];
  formSource: string;
}

export function LandingPageTemplate({
  title,
  metaDescription,
  canonicalPath,
  heroTitle,
  heroHighlight,
  heroSubtitle,
  heroBadge,
  services,
  whyUsTitle,
  whyUsItems,
  mistakes,
  faqs,
  formSource,
}: LandingPageProps) {
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://holdmybooks.gr${canonicalPath}`} />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-wide section-padding">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5 animate-slide-up">
              <span className="inline-flex items-center gap-2 bg-primary-foreground/10 rounded-full px-3 py-1.5 text-sm">
                <CheckCircle className="h-4 w-4" />
                {heroBadge}
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                {heroTitle} <span className="text-primary-foreground/80">{heroHighlight}</span>
              </h1>

              <p className="text-lg text-primary-foreground/70 max-w-lg">
                {heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <Button variant="hero" size="lg" asChild>
                  <a href="#form">
                    Ζήτα προσφορά
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href={`tel:${CONTACT.phone}`} onClick={trackClickCall}>
                    <Phone className="h-5 w-5" />
                    {CONTACT.phoneFormatted}
                  </a>
                </Button>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-xl p-6 shadow-elegant animate-fade-in" id="form">
              <h2 className="font-semibold text-card-foreground mb-5">
                Ζήτα δωρεάν εκτίμηση
              </h2>
              <LeadForm source={formSource} />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Services */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-3">
              Τι αναλαμβάνουμε
            </h2>
            <p className="text-muted-foreground">
              Όλα όσα χρειάζεται η εταιρεία σου.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg"
              >
                <CheckCircle className="h-5 w-5 text-success shrink-0" />
                <span>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-muted/50">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {whyUsTitle}
              </h2>

              <ul className="space-y-3">
                {whyUsItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="cta" size="lg" asChild>
                <a href="#form">
                  Ζήτα προσφορά
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {mistakes && mistakes.length > 0 && (
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold mb-4">
                  Λάθη που βλέπουμε συχνά
                </h3>
                <ul className="space-y-3">
                  {mistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-destructive font-bold">✗</span>
                      <span>{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
