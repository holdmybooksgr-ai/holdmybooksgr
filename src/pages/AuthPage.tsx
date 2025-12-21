import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import logo from "@/assets/logo.png";

const authSchema = z.object({
  email: z.string().email("Μη έγκυρο email"),
  password: z.string().min(6, "Ο κωδικός πρέπει να έχει τουλάχιστον 6 χαρακτήρες"),
});

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, signUp, user } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/admin");
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate input
    const result = authSchema.safeParse({ email, password });
    if (!result.success) {
      toast({
        title: "Σφάλμα",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      setIsLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          let message = "Σφάλμα σύνδεσης. Δοκιμάστε ξανά.";
          if (error.message.includes("Invalid login credentials")) {
            message = "Λάθος email ή κωδικός";
          }
          toast({
            title: "Σφάλμα",
            description: message,
            variant: "destructive",
          });
        }
      } else {
        const { error } = await signUp(email, password);
        if (error) {
          let message = "Σφάλμα εγγραφής. Δοκιμάστε ξανά.";
          if (error.message.includes("already registered")) {
            message = "Το email είναι ήδη εγγεγραμμένο";
          }
          toast({
            title: "Σφάλμα",
            description: message,
            variant: "destructive",
          });
        } else {
          toast({
            title: "Επιτυχία",
            description: "Ο λογαριασμός δημιουργήθηκε!",
          });
        }
      }
    } catch (error) {
      toast({
        title: "Σφάλμα",
        description: "Κάτι πήγε στραβά. Δοκιμάστε ξανά.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <img src={logo} alt="HoldMyBooks" className="h-16 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-foreground">
            {isLogin ? "Σύνδεση" : "Εγγραφή"}
          </h1>
          <p className="text-muted-foreground mt-2">
            {isLogin ? "Συνδεθείτε στο admin panel" : "Δημιουργήστε λογαριασμό"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-lg border border-border">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@example.com"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Κωδικός</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Παρακαλώ περιμένετε..." : isLogin ? "Σύνδεση" : "Εγγραφή"}
          </Button>

          <div className="text-center">
            <button
              type="button"
              className="text-sm text-primary hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Δεν έχεις λογαριασμό; Εγγραφή" : "Έχεις ήδη λογαριασμό; Σύνδεση"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
