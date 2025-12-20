import { Phone, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
import { CONTACT } from "@/config/contact";
import { trackClickCall } from "@/lib/tracking";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-background border-t border-border shadow-elegant">
      <div className="flex">
        <a
          href={`tel:${CONTACT.phone}`}
          onClick={trackClickCall}
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-primary text-primary-foreground font-medium hover:bg-primary-light transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span>Κάλεσέ μας</span>
        </a>
        <Link
          to="/epikoinonia"
          className="flex-1 flex items-center justify-center gap-2 py-4 bg-muted text-foreground font-medium hover:bg-border transition-colors"
        >
          <MessageSquare className="h-5 w-5" />
          <span>Ζήτα προσφορά</span>
        </Link>
      </div>
    </div>
  );
}
