import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { LeadForm } from "@/components/common/LeadForm";
import { FAQ, FAQItem } from "@/components/common/FAQ";
import { CTASection } from "@/components/common/CTASection";
import { TrustBadges } from "@/components/common/TrustBadges";
import { CONTACT } from "@/config/contact";
import { trackClickCall } from "@/lib/tracking";
import { ArrowRight, Phone, CheckCircle, LucideIcon } from "lucide-react";

interface LandingPageProps {
  // SEO
  title: string;
  metaDescription: string;
  canonicalPath: string;
  
  // Hero
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroBadge: string;
  
  // Services
  services: string[];
  
  // Why us - specific to this company type
  whyUsTitle: string;
  whyUsItems: string[];
  
  // Common mistakes section
  mistakes?: string[];
  
  // FAQ
  faqs: FAQItem[];
  
  // Form source
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
      <section className="relative bg-hero-gradient text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="container-wide section-padding relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
                <CheckCircle className="h-4 w-4 text-accent" />
                <span>{heroBadge}</span>
              </div>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {heroTitle}{" "}
                <span className="text-accent">{heroHighlight}</span>
              </h1>

              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl">
                {heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="#form">
                    Ζήτα Δωρεάν Εκτίμηση
                    <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="hero-outline" size="xl" asChild>
                  <a href={`tel:${CONTACT.phone}`} onClick={trackClickCall}>
                    <Phone className="h-5 w-5" />
                    {CONTACT.phoneFormatted}
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-elegant animate-fade-in" id="form">
              <h2 className="font-display text-xl font-semibold text-card-foreground mb-6">
                Ζητήστε Δωρεάν Εκτίμηση
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
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Τι αναλαμβάνουμε
            </h2>
            <p className="text-muted-foreground text-lg">
              Ολοκληρωμένη λογιστική υποστήριξη προσαρμοσμένη στις ανάγκες σας
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border shadow-subtle"
              >
                <CheckCircle className="h-5 w-5 text-success shrink-0" />
                <span className="font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-semibold">
                {whyUsTitle}
              </h2>

              <ul className="grid gap-4">
                {whyUsItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Button variant="cta" size="lg" asChild>
                <a href="#form">
                  Ζήτα Προσφορά
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            {mistakes && mistakes.length > 0 && (
              <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
                <h3 className="font-display text-xl font-semibold mb-6">
                  Συνηθισμένα λάθη που κοστίζουν
                </h3>
                <ul className="space-y-4">
                  {mistakes.map((mistake, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-destructive font-bold text-lg">✗</span>
                      <span className="text-muted-foreground">{mistake}</span>
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
