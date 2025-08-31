package com.aleksandar.portfolio.service;

import com.aleksandar.portfolio.entity.Contact;
import com.aleksandar.portfolio.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service klasa za upravljanje kontakt porukama
 * 
 * @author Aleksandar Janković
 * @version 1.0
 */
@Service
public class ContactService {

    private final ContactRepository contactRepository;
    private final EmailService emailService;

    @Autowired
    public ContactService(ContactRepository contactRepository, EmailService emailService) {
        this.contactRepository = contactRepository;
        this.emailService = emailService;
    }

    /**
     * Čuva novu kontakt poruku i šalje email notifikacije
     */
    public Contact saveContact(Contact contact) {
        // Čuvamo kontakt u bazi podataka
        Contact savedContact = contactRepository.save(contact);
        
        // Šaljemo email notifikacije asinhrono (u background-u)
        // PRIVREMENO ISKLJUČENO - može se uključiti kada se podesi email
        try {
            // Proveri da li je email konfiguracija podešena
            String emailUsername = System.getenv("EMAIL_USERNAME");
            String adminEmail = System.getenv("ADMIN_EMAIL");
            
            if (emailUsername != null && !emailUsername.isEmpty() && 
                adminEmail != null && !adminEmail.isEmpty() && !adminEmail.contains("example.com")) {
                
                // Email konfiguracija je OK, šaljemo email-ove
                emailService.sendNewContactNotification(savedContact);
                emailService.sendAutoReplyEmail(savedContact);
                System.out.println("✅ Email notifikacije su pokrenute za kontakt ID: " + savedContact.getId());
                
            } else {
                // Email nije konfigurisan, samo logujemo
                System.out.println("ℹ️ Email konfiguracija nije podešena. Kontakt je sačuvan bez slanja email-a.");
                System.out.println("ℹ️ Za uključivanje email funkcionalnosti, podesi EMAIL_USERNAME i ADMIN_EMAIL environment varijable.");
            }
            
        } catch (Exception e) {
            System.err.println("❌ Greška pri slanju email notifikacija: " + e.getMessage());
            System.out.println("ℹ️ Kontakt je ipak uspešno sačuvan u bazi podataka.");
            // Ne prekidamo proces jer je kontakt već sačuvan
        }
        
        return savedContact;
    }

    /**
     * Pronalazi sve kontakt poruke sortirane po datumu
     */
    public List<Contact> getAllContacts() {
        return contactRepository.findAllByOrderByCreatedAtDesc();
    }

    /**
     * Pronalazi kontakt poruku po ID-u
     */
    public Optional<Contact> getContactById(Long id) {
        return contactRepository.findById(id);
    }

    /**
     * Pronalazi sve nepročitane kontakt poruke
     */
    public List<Contact> getUnreadContacts() {
        return contactRepository.findByIsReadFalse();
    }

    /**
     * Pronalazi kontakt poruke po email adresi
     */
    public List<Contact> getContactsByEmail(String email) {
        return contactRepository.findByEmailOrderByCreatedAtDesc(email);
    }

    /**
     * Označava kontakt poruku kao pročitanu
     */
    public Contact markAsRead(Long id) {
        Optional<Contact> contactOpt = contactRepository.findById(id);
        if (contactOpt.isPresent()) {
            Contact contact = contactOpt.get();
            contact.setIsRead(true);
            return contactRepository.save(contact);
        }
        throw new RuntimeException("Kontakt poruka sa ID " + id + " nije pronađena");
    }

    /**
     * Označava kontakt poruku kao nepročitanu
     */
    public Contact markAsUnread(Long id) {
        Optional<Contact> contactOpt = contactRepository.findById(id);
        if (contactOpt.isPresent()) {
            Contact contact = contactOpt.get();
            contact.setIsRead(false);
            return contactRepository.save(contact);
        }
        throw new RuntimeException("Kontakt poruka sa ID " + id + " nije pronađena");
    }

    /**
     * Briše kontakt poruku
     */
    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }

    /**
     * Broji nepročitane kontakt poruke
     */
    public long getUnreadCount() {
        return contactRepository.countByIsReadFalse();
    }

    /**
     * Broji ukupno kontakt poruka
     */
    public long getTotalCount() {
        return contactRepository.count();
    }
}
