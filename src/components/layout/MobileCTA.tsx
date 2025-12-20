import { Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { trackClickCall } from "@/lib/tracking";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-card border-t border-border shadow-elegant">
      <div className="flex">
        <a
          href={`tel:${CONTACT.phone}`}
          onClick={trackClickCall}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-success text-success-foreground font-semibold hover:bg-success/90 transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span>Κάλεσε</span>
        </a>
        <Link
          to="/epikoinonia"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-accent text-accent-foreground font-semibold hover:bg-accent-dark transition-colors"
        >
          <MessageSquare className="h-5 w-5" />
          <span>Ζήτα Προσφορά</span>
        </Link>
      </div>
    </div>
  );
}
