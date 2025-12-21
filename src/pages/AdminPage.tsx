import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogOut, RefreshCw, Mail, Phone, Building, MessageSquare } from "lucide-react";
import logo from "@/assets/logo.png";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  message: string | null;
  source_page: string | null;
  created_at: string;
}

export default function AdminPage() {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(true);

  useEffect(() => {
    if (!loading && !user) {
      navigate("/auth");
    }
  }, [user, loading, navigate]);

  useEffect(() => {
    if (user && isAdmin) {
      fetchLeads();
    }
  }, [user, isAdmin]);

  const fetchLeads = async () => {
    setLoadingLeads(true);
    try {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching leads:", error);
      } else {
        setLeads(data || []);
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoadingLeads(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
        <img src={logo} alt="HoldMyBooks" className="h-16 mb-6" />
        <h1 className="text-2xl font-bold text-foreground mb-2">Δεν έχετε πρόσβαση</h1>
        <p className="text-muted-foreground mb-6">
          Χρειάζεστε δικαιώματα διαχειριστή για να δείτε αυτή τη σελίδα.
        </p>
        <Button onClick={handleSignOut} variant="outline">
          <LogOut className="h-4 w-4 mr-2" />
          Αποσύνδεση
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={logo} alt="HoldMyBooks" className="h-12" />
            <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <Button onClick={fetchLeads} variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-2" />
              Ανανέωση
            </Button>
            <Button onClick={handleSignOut} variant="ghost" size="sm">
              <LogOut className="h-4 w-4 mr-2" />
              Αποσύνδεση
            </Button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-card rounded-lg border border-border">
          <div className="p-6 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Leads ({leads.length})</h2>
            <p className="text-sm text-muted-foreground">Όλα τα αιτήματα επικοινωνίας</p>
          </div>

          {loadingLeads ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : leads.length === 0 ? (
            <div className="p-8 text-center text-muted-foreground">
              Δεν υπάρχουν leads ακόμα.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Ημερομηνία</TableHead>
                    <TableHead>Όνομα</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Τηλέφωνο</TableHead>
                    <TableHead>Εταιρεία</TableHead>
                    <TableHead>Σελίδα</TableHead>
                    <TableHead>Μήνυμα</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {leads.map((lead) => (
                    <TableRow key={lead.id}>
                      <TableCell className="whitespace-nowrap">
                        {new Date(lead.created_at).toLocaleDateString("el-GR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </TableCell>
                      <TableCell className="font-medium">{lead.name}</TableCell>
                      <TableCell>
                        <a
                          href={`mailto:${lead.email}`}
                          className="flex items-center gap-1 text-primary hover:underline"
                        >
                          <Mail className="h-3 w-3" />
                          {lead.email}
                        </a>
                      </TableCell>
                      <TableCell>
                        <a
                          href={`tel:${lead.phone}`}
                          className="flex items-center gap-1 text-primary hover:underline"
                        >
                          <Phone className="h-3 w-3" />
                          {lead.phone}
                        </a>
                      </TableCell>
                      <TableCell>
                        {lead.company ? (
                          <span className="flex items-center gap-1">
                            <Building className="h-3 w-3 text-muted-foreground" />
                            {lead.company}
                          </span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {lead.source_page || "-"}
                      </TableCell>
                      <TableCell className="max-w-[200px]">
                        {lead.message ? (
                          <span className="flex items-start gap-1">
                            <MessageSquare className="h-3 w-3 text-muted-foreground mt-1 flex-shrink-0" />
                            <span className="truncate" title={lead.message}>
                              {lead.message}
                            </span>
                          </span>
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
