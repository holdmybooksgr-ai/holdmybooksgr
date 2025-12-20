import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { CONTACT } from "@/config/contact";

export default function PrivacyPage() {
  return (
    <Layout>
      <Helmet>
        <title>Πολιτική Απορρήτου | HoldMyBooks</title>
        <meta
          name="description"
          content="Πολιτική απορρήτου και προστασίας προσωπικών δεδομένων του HoldMyBooks. Συμμόρφωση με GDPR."
        />
        <link rel="canonical" href="https://holdmybooks.gr/privacy" />
      </Helmet>

      <section className="section-padding">
        <div className="container-narrow">
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Πολιτική Απορρήτου
          </h1>

          <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground">
            <p>
              Τελευταία ενημέρωση: Δεκέμβριος 2024
            </p>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                1. Εισαγωγή
              </h2>
              <p>
                Το {CONTACT.companyName} δεσμεύεται να προστατεύει τα προσωπικά σας δεδομένα. 
                Η παρούσα πολιτική εξηγεί πώς συλλέγουμε, χρησιμοποιούμε και προστατεύουμε τις 
                πληροφορίες σας σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR).
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                2. Υπεύθυνος Επεξεργασίας
              </h2>
              <p>
                Υπεύθυνος επεξεργασίας είναι το {CONTACT.companyName} με έδρα: {CONTACT.address}. 
                Για ερωτήσεις σχετικά με την επεξεργασία των δεδομένων σας, επικοινωνήστε στο: {CONTACT.email}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                3. Δεδομένα που Συλλέγουμε
              </h2>
              <p>Συλλέγουμε τα εξής δεδομένα:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Στοιχεία επικοινωνίας (όνομα, email, τηλέφωνο)</li>
                <li>Στοιχεία εταιρείας (επωνυμία, αν παρασχεθεί)</li>
                <li>Περιεχόμενο μηνυμάτων που στέλνετε μέσω της φόρμας επικοινωνίας</li>
                <li>Τεχνικά δεδομένα (διεύθυνση IP, τύπος browser) για λόγους ασφαλείας</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                4. Σκοπός Επεξεργασίας
              </h2>
              <p>Τα δεδομένα σας χρησιμοποιούνται για:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Να απαντήσουμε στα αιτήματά σας</li>
                <li>Να σας παρέχουμε τις υπηρεσίες μας</li>
                <li>Να βελτιώσουμε την ιστοσελίδα μας</li>
                <li>Να συμμορφωθούμε με νομικές υποχρεώσεις</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                5. Νομική Βάση
              </h2>
              <p>
                Η επεξεργασία βασίζεται στη συγκατάθεσή σας (υποβολή φόρμας) ή/και στο έννομο 
                συμφέρον μας να απαντάμε σε αιτήματα επικοινωνίας.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                6. Cookies
              </h2>
              <p>
                Χρησιμοποιούμε cookies για τη λειτουργία της ιστοσελίδας και, με τη συγκατάθεσή σας, 
                για αναλυτικά και διαφημιστικά cookies. Μπορείτε να διαχειριστείτε τις προτιμήσεις σας 
                μέσω του banner cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                7. Τα Δικαιώματά Σας
              </h2>
              <p>Έχετε δικαίωμα:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Πρόσβασης στα δεδομένα σας</li>
                <li>Διόρθωσης ανακριβών δεδομένων</li>
                <li>Διαγραφής (δικαίωμα στη λήθη)</li>
                <li>Περιορισμού της επεξεργασίας</li>
                <li>Φορητότητας των δεδομένων</li>
                <li>Ανάκλησης της συγκατάθεσής σας</li>
              </ul>
              <p>
                Για να ασκήσετε τα δικαιώματά σας, επικοινωνήστε στο: {CONTACT.email}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                8. Διατήρηση Δεδομένων
              </h2>
              <p>
                Διατηρούμε τα δεδομένα σας για όσο διάστημα είναι απαραίτητο για τους σκοπούς που συλλέχθηκαν 
                ή όσο απαιτείται από τη νομοθεσία.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                9. Ασφάλεια
              </h2>
              <p>
                Λαμβάνουμε τεχνικά και οργανωτικά μέτρα για την προστασία των δεδομένων σας από μη 
                εξουσιοδοτημένη πρόσβαση, απώλεια ή καταστροφή.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="font-display text-2xl font-semibold text-foreground">
                10. Επικοινωνία
              </h2>
              <p>
                Για οποιαδήποτε ερώτηση σχετικά με την παρούσα πολιτική ή τα δεδομένα σας:
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
