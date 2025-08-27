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

    @Autowired
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    /**
     * Čuva novu kontakt poruku
     */
    public Contact saveContact(Contact contact) {
        return contactRepository.save(contact);
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
