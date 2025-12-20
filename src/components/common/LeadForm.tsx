import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { trackFormSubmit } from "@/lib/tracking";
import { toast } from "sonner";

const leadSchema = z.object({
  name: z.string().min(2, "Το όνομα είναι υποχρεωτικό").max(100),
  email: z.string().email("Μη έγκυρο email").max(255),
  phone: z.string().min(10, "Το τηλέφωνο είναι υποχρεωτικό").max(15),
  company: z.string().max(200).optional(),
  message: z.string().max(1000).optional(),
  // Honeypot field
  website: z.string().max(0).optional(),
});

type LeadFormData = z.infer<typeof leadSchema>;

interface LeadFormProps {
  source?: string;
  compact?: boolean;
}

export function LeadForm({ source = "website", compact = false }: LeadFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    // Honeypot check
    if (data.website) {
      console.log("Bot detected");
      return;
    }

    setIsSubmitting(true);

    try {
      // For now, we'll store in localStorage and show success
      // In production, this would call an edge function
      const leads = JSON.parse(localStorage.getItem("hmb_leads") || "[]");
      leads.push({
        ...data,
        source,
        timestamp: new Date().toISOString(),
      });
      localStorage.setItem("hmb_leads", JSON.stringify(leads));

      // Track the conversion
      trackFormSubmit();

      // Show success toast
      toast.success("Η αίτησή σας υποβλήθηκε επιτυχώς!", {
        description: "Θα επικοινωνήσουμε σύντομα μαζί σας.",
      });

      // Redirect to thank you page
      navigate("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Κάτι πήγε στραβά", {
        description: "Παρακαλώ δοκιμάστε ξανά ή καλέστε μας.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Honeypot field - hidden from users */}
      <div className="hidden" aria-hidden="true">
        <Input type="text" {...register("website")} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Όνομα *
          </Label>
          <Input
            id="name"
            placeholder="Το όνομά σας"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Τηλέφωνο *
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="69xxxxxxxx"
            {...register("phone")}
            className={errors.phone ? "border-destructive" : ""}
          />
          {errors.phone && (
            <p className="text-xs text-destructive">{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email *
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="email@example.com"
          {...register("email")}
          className={errors.email ? "border-destructive" : ""}
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company" className="text-sm font-medium">
          Εταιρεία
        </Label>
        <Input
          id="company"
          placeholder="Επωνυμία εταιρείας (προαιρετικό)"
          {...register("company")}
        />
      </div>

      {!compact && (
        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm font-medium">
            Μήνυμα
          </Label>
          <Textarea
            id="message"
            placeholder="Πείτε μας τι χρειάζεστε... (προαιρετικό)"
            rows={4}
            {...register("message")}
          />
        </div>
      )}

      <Button
        type="submit"
        variant="cta"
        size="lg"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Αποστολή...
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Ζήτα Δωρεάν Εκτίμηση
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Με την υποβολή της φόρμας συμφωνείτε με την{" "}
        <a href="/privacy" className="underline hover:text-foreground">
          Πολιτική Απορρήτου
        </a>
      </p>
    </form>
  );
}
