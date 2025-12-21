import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, Send } from "lucide-react";
import { trackFormSubmit } from "@/lib/tracking";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const leadSchema = z.object({
  name: z.string().min(2, "Το όνομα είναι υποχρεωτικό").max(100),
  email: z.string().email("Μη έγκυρο email").max(255),
  phone: z.string().min(10, "Το τηλέφωνο είναι υποχρεωτικό").max(15),
  company: z.string().max(200).optional(),
  message: z.string().max(1000).optional(),
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
  const location = useLocation();

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
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("submit-lead", {
        body: {
          name: data.name,
          email: data.email,
          phone: data.phone,
          company: data.company || undefined,
          message: data.message || undefined,
          sourcePage: source || location.pathname,
        },
      });

      if (error) {
        throw error;
      }

      trackFormSubmit();

      toast.success("Ευχαριστούμε!", {
        description: "Θα επικοινωνήσουμε μαζί σου σύντομα.",
      });

      navigate("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Κάτι πήγε στραβά", {
        description: "Δοκίμασε ξανά ή κάλεσέ μας.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="hidden" aria-hidden="true">
        <Input type="text" {...register("website")} tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-sm">
            Όνομα *
          </Label>
          <Input
            id="name"
            placeholder="Το όνομά σου"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && (
            <p className="text-xs text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone" className="text-sm">
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

      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-sm">
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

      <div className="space-y-1.5">
        <Label htmlFor="company" className="text-sm">
          Εταιρεία
        </Label>
        <Input
          id="company"
          placeholder="Επωνυμία εταιρείας (προαιρετικό)"
          {...register("company")}
        />
      </div>

      {!compact && (
        <div className="space-y-1.5">
          <Label htmlFor="message" className="text-sm">
            Μήνυμα
          </Label>
          <Textarea
            id="message"
            placeholder="Πες μας τι χρειάζεσαι..."
            rows={3}
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
            Ζήτα προσφορά
          </>
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        Με την υποβολή συμφωνείς με την{" "}
        <a href="/privacy" className="underline hover:text-foreground">
          Πολιτική Απορρήτου
        </a>
      </p>
    </form>
  );
}
