package com.aleksandar.portfolio.controller;

import com.aleksandar.portfolio.entity.Contact;
import com.aleksandar.portfolio.service.ContactService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * REST Controller za upravljanje kontakt porukama
 * 
 * @author Aleksandar Janković
 * @version 1.0
 */
@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = "*") // Dozvoljava CORS za development
public class ContactController {

    private final ContactService contactService;

    @Autowired
    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    /**
     * POST - Kreira novu kontakt poruku
     */
    @PostMapping
    public ResponseEntity<Map<String, Object>> createContact(@Valid @RequestBody Contact contact) {
        try {
            Contact savedContact = contactService.saveContact(contact);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Kontakt poruka je uspešno poslata!");
            response.put("contact", savedContact);
            
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Greška pri slanju poruke: " + e.getMessage());
            
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * GET - Vraća sve kontakt poruke
     */
    @GetMapping
    public ResponseEntity<List<Contact>> getAllContacts() {
        List<Contact> contacts = contactService.getAllContacts();
        return ResponseEntity.ok(contacts);
    }

    /**
     * GET - Vraća kontakt poruku po ID-u
     */
    @GetMapping("/{id}")
    public ResponseEntity<Contact> getContactById(@PathVariable Long id) {
        return contactService.getContactById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    /**
     * GET - Vraća sve nepročitane kontakt poruke
     */
    @GetMapping("/unread")
    public ResponseEntity<List<Contact>> getUnreadContacts() {
        List<Contact> unreadContacts = contactService.getUnreadContacts();
        return ResponseEntity.ok(unreadContacts);
    }

    /**
     * GET - Vraća kontakt poruke po email adresi
     */
    @GetMapping("/email/{email}")
    public ResponseEntity<List<Contact>> getContactsByEmail(@PathVariable String email) {
        List<Contact> contacts = contactService.getContactsByEmail(email);
        return ResponseEntity.ok(contacts);
    }

    /**
     * PUT - Označava kontakt poruku kao pročitanu
     */
    @PutMapping("/{id}/read")
    public ResponseEntity<Contact> markAsRead(@PathVariable Long id) {
        try {
            Contact updatedContact = contactService.markAsRead(id);
            return ResponseEntity.ok(updatedContact);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * PUT - Označava kontakt poruku kao nepročitanu
     */
    @PutMapping("/{id}/unread")
    public ResponseEntity<Contact> markAsUnread(@PathVariable Long id) {
        try {
            Contact updatedContact = contactService.markAsUnread(id);
            return ResponseEntity.ok(updatedContact);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    /**
     * DELETE - Briše kontakt poruku
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Object>> deleteContact(@PathVariable Long id) {
        try {
            contactService.deleteContact(id);
            
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("message", "Kontakt poruka je uspešno obrisana!");
            
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Greška pri brisanju poruke: " + e.getMessage());
            
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * GET - Vraća statistiku kontakt poruka
     */
    @GetMapping("/stats")
    public ResponseEntity<Map<String, Object>> getContactStats() {
        long totalCount = contactService.getTotalCount();
        long unreadCount = contactService.getUnreadCount();
        long readCount = totalCount - unreadCount;
        
        Map<String, Object> stats = new HashMap<>();
        stats.put("total", totalCount);
        stats.put("unread", unreadCount);
        stats.put("read", readCount);
        
        return ResponseEntity.ok(stats);
    }

    /**
     * GET - Health check endpoint
     */
    @GetMapping("/health")
    public ResponseEntity<Map<String, Object>> healthCheck() {
        Map<String, Object> health = new HashMap<>();
        health.put("status", "UP");
        health.put("service", "Portfolio Contact API");
        health.put("timestamp", System.currentTimeMillis());
        
        return ResponseEntity.ok(health);
    }
}
