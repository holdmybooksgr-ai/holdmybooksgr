import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CONTACT } from "@/config/contact";

export default function TermsPage() {
  return (
    <Layout>
      <Helmet>
        <title>Όροι Χρήσης | HoldMyBooks</title>
        <meta
          name="description"
          content="Όροι χρήσης της ιστοσελίδας του HoldMyBooks. Διαβάστε τους όρους και προϋποθέσεις."
        />
        <link rel="canonical" href="https://holdmybooks.gr/terms" />
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Όροι Χρήσης
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <p>
              Τελευταία ενημέρωση: Δεκέμβριος 2024
            </p>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                1. Γενικοί Όροι
              </h2>
              <p>
                Η χρήση της ιστοσελίδας του {CONTACT.companyName} υπόκειται στους παρόντες όρους. 
                Η πλοήγηση και χρήση της ιστοσελίδας συνεπάγεται αποδοχή αυτών των όρων.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                2. Πνευματική Ιδιοκτησία
              </h2>
              <p>
                Το σύνολο του περιεχομένου της ιστοσελίδας (κείμενα, εικόνες, λογότυπα, γραφικά) 
                αποτελεί πνευματική ιδιοκτησία του {CONTACT.companyName} ή τρίτων που έχουν 
                παραχωρήσει σχετικά δικαιώματα. Απαγορεύεται η αντιγραφή, αναπαραγωγή ή διανομή 
                χωρίς γραπτή άδεια.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                3. Ευθύνη
              </h2>
              <p>
                Το {CONTACT.companyName} καταβάλλει κάθε δυνατή προσπάθεια ώστε οι πληροφορίες 
                στην ιστοσελίδα να είναι ακριβείς και ενημερωμένες. Ωστόσο, δεν φέρει ευθύνη για 
                τυχόν ανακρίβειες ή παραλείψεις.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                4. Σύνδεσμοι σε Τρίτους
              </h2>
              <p>
                Η ιστοσελίδα μπορεί να περιέχει συνδέσμους προς ιστοσελίδες τρίτων. Το {CONTACT.companyName} 
                δεν ευθύνεται για το περιεχόμενο ή τις πρακτικές αυτών των ιστοσελίδων.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                5. Φόρμα Επικοινωνίας
              </h2>
              <p>
                Με την υποβολή της φόρμας επικοινωνίας, συμφωνείτε ότι τα στοιχεία που παρέχετε 
                είναι αληθή και ακριβή. Η χρήση της φόρμας για αποστολή ανεπιθύμητων μηνυμάτων 
                ή κακόβουλου περιεχομένου απαγορεύεται.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                6. Τροποποιήσεις
              </h2>
              <p>
                Το {CONTACT.companyName} διατηρεί το δικαίωμα να τροποποιεί τους παρόντες όρους 
                χωρίς προηγούμενη ειδοποίηση. Η συνέχιση της χρήσης της ιστοσελίδας μετά από 
                τροποποιήσεις συνιστά αποδοχή των νέων όρων.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                7. Εφαρμοστέο Δίκαιο
              </h2>
              <p>
                Οι παρόντες όροι διέπονται από το Ελληνικό Δίκαιο. Για οποιαδήποτε διαφορά, 
                αρμόδια είναι τα δικαστήρια της Αθήνας.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                8. Επικοινωνία
              </h2>
              <p>
                Για οποιαδήποτε ερώτηση σχετικά με τους παρόντες όρους:
              </p>
              <p className="font-medium text-foreground">
                Email: {CONTACT.email}<br />
                Τηλέφωνο: {CONTACT.phoneFormatted}<br />
                Διεύθυνση: {CONTACT.address}
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
}
