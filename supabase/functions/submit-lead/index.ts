import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadRequest {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
  sourcePage?: string;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const lead: LeadRequest = await req.json();
    console.log("Received lead submission:", { ...lead, email: "***" });

    // Validate required fields
    if (!lead.name || !lead.email || !lead.phone) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Συμπλήρωσε όλα τα υποχρεωτικά πεδία" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Save lead to database
    const { error: dbError } = await supabase.from("leads").insert({
      name: lead.name,
      email: lead.email,
      phone: lead.phone,
      company: lead.company || null,
      message: lead.message || null,
      source_page: lead.sourcePage || null,
    });

    if (dbError) {
      console.error("Database error:", dbError);
      return new Response(
        JSON.stringify({ error: "Σφάλμα αποθήκευσης. Δοκίμασε ξανά." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Lead saved to database");

    // Send notification email to HoldMyBooks
    try {
      await resend.emails.send({
        from: "HoldMyBooks <onboarding@resend.dev>",
        to: ["holdmybooks@gmail.com"],
        subject: `Νέο Lead: ${lead.name}`,
        html: `
          <h2>Νέο αίτημα επικοινωνίας</h2>
          <p><strong>Όνομα:</strong> ${lead.name}</p>
          <p><strong>Email:</strong> ${lead.email}</p>
          <p><strong>Τηλέφωνο:</strong> ${lead.phone}</p>
          ${lead.company ? `<p><strong>Εταιρεία:</strong> ${lead.company}</p>` : ""}
          ${lead.message ? `<p><strong>Μήνυμα:</strong> ${lead.message}</p>` : ""}
          <p><strong>Σελίδα:</strong> ${lead.sourcePage || "Άγνωστη"}</p>
          <p><small>Ημερομηνία: ${new Date().toLocaleString("el-GR")}</small></p>
        `,
      });
      console.log("Notification email sent");
    } catch (emailError) {
      console.error("Notification email error:", emailError);
    }

    // Send auto-reply to admin email (since domain not verified, can only send to own email)
    // TODO: Once domain is verified at resend.com/domains, change this back to lead.email
    try {
      await resend.emails.send({
        from: "HoldMyBooks <onboarding@resend.dev>",
        to: ["holdmybooks@gmail.com"],
        subject: "Λάβαμε το μήνυμά σου | HoldMyBooks",
        html: `
          <h2>Γεια σου ${lead.name}!</h2>
          <p>Λάβαμε το αίτημά σου και θα επικοινωνήσουμε μαζί σου σύντομα.</p>
          <p>Συνήθως απαντάμε εντός 24 ωρών (εργάσιμες ημέρες).</p>
          <br/>
          <p>Με εκτίμηση,<br/>Η ομάδα του HoldMyBooks</p>
          <hr/>
          <p><small>
            HoldMyBooks - Λογιστικές Υπηρεσίες<br/>
            Μύστρα 61, Γλυφάδα<br/>
            Τηλ: 6973519478<br/>
            Email: holdmybooksgr@gmail.com
          </small></p>
        `,
      });
      console.log("Auto-reply email sent");
    } catch (emailError) {
      console.error("Auto-reply email error:", emailError);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Lead submitted successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("Unexpected error:", error);
    return new Response(
      JSON.stringify({ error: "Κάτι πήγε στραβά. Δοκίμασε ξανά." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
