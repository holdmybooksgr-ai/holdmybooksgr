import { Shield, Clock, Users, Award } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "GDPR Compliant",
    description: "Πλήρης συμμόρφωση με τον Κανονισμό Προστασίας Δεδομένων",
  },
  {
    icon: Clock,
    title: "Άμεση Ανταπόκριση",
    description: "Επικοινωνία εντός 24 ωρών",
  },
  {
    icon: Users,
    title: "Εταιρικοί Πελάτες",
    description: "Εξειδίκευση σε ΙΚΕ, ΑΕ, ΕΠΕ",
  },
  {
    icon: Award,
    title: "Εμπειρία",
    description: "Χρόνια εμπειρίας στον κλάδο",
  },
];

export function TrustBadges() {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
