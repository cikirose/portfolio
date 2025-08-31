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
        try {
            // Email notifikacija administratoru
            emailService.sendNewContactNotification(savedContact);
            
            // Auto-reply email pošaljiocu
            emailService.sendAutoReplyEmail(savedContact);
            
            System.out.println("✅ Email notifikacije su pokrenute za kontakt ID: " + savedContact.getId());
        } catch (Exception e) {
            System.err.println("❌ Greška pri slanju email notifikacija: " + e.getMessage());
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
