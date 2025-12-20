import { Shield, Clock, Building2, FileCheck } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Ασφάλεια δεδομένων",
    description: "GDPR compliant",
  },
  {
    icon: Clock,
    title: "Γρήγορη απάντηση",
    description: "Εντός 24 ωρών",
  },
  {
    icon: Building2,
    title: "Εταιρείες",
    description: "ΙΚΕ, ΑΕ, ΕΠΕ",
  },
  {
    icon: FileCheck,
    title: "Ξεκάθαρη τιμολόγηση",
    description: "Χωρίς κρυφές χρεώσεις",
  },
];

export function TrustBadges() {
  return (
    <section className="py-10 bg-muted/50">
      <div className="container-wide">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                <badge.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-medium text-sm mb-0.5">{badge.title}</h3>
              <p className="text-xs text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
