package com.aleksandar.portfolio.config;

import com.aleksandar.portfolio.entity.Contact;
import com.aleksandar.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * Inicijalizuje test podatke u bazi podataka
 * 
 * @author Aleksandar Janković
 * @version 1.0
 */
@Component
public class DataInitializer implements CommandLineRunner {

    private final ContactRepository contactRepository;

    @Autowired
    public DataInitializer(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        // Inicijalizuj test kontakt poruke
        initializeTestContacts();
    }

    private void initializeTestContacts() {
        // Proveri da li već postoje kontakt poruke
        if (contactRepository.count() == 0) {
            // Kreiraj test kontakt poruke
            Contact contact1 = new Contact(
                "Marko Petrović",
                "marko.petrovic@email.com",
                "Ponuda za saradnju",
                "Zdravo Aleksandar! Vidim tvoj portfolio i impresioniran sam tvojim radom. " +
                "Interesuje me da li bi bio zainteresovan za saradnju na jednom projektu. " +
                "Možemo li se dogovoriti za sastanak?"
            );

            Contact contact2 = new Contact(
                "Ana Jovanović",
                "ana.jovanovic@company.com",
                "Pozicija Java Developer",
                "Pozdrav! Tražimo Java developera sa Spring Boot iskustvom. " +
                "Tvoj portfolio pokazuje da imaš odlične veštine. " +
                "Da li bi bio zainteresovan za razgovor o poziciji?"
            );

            Contact contact3 = new Contact(
                "Petar Nikolić",
                "petar.nikolic@freelance.com",
                "Freelance projekat",
                "Ćao! Imam jedan freelance projekat koji bi ti odgovarao. " +
                "Radi se o web aplikaciji sa Spring Boot backend-om. " +
                "Da li si dostupan za razgovor o detaljima?"
            );

            // Sačuvaj test kontakt poruke
            contactRepository.save(contact1);
            contactRepository.save(contact2);
            contactRepository.save(contact3);

            System.out.println("✅ Test kontakt poruke su inicijalizovane!");
            System.out.println("📧 Ukupno kontakt poruka: " + contactRepository.count());
        } else {
            System.out.println("ℹ️ Baza podataka već sadrži podatke. Preskačem inicijalizaciju.");
        }
    }
}
