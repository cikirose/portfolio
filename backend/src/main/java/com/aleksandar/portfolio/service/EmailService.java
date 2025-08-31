package com.aleksandar.portfolio.service;

import com.aleksandar.portfolio.entity.Contact;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.time.format.DateTimeFormatter;

/**
 * Service klasa za slanje email notifikacija
 * 
 * @author Aleksandar Janković
 * @version 1.0
 */
@Service
public class EmailService {

    private final JavaMailSender mailSender;

    @Value("${app.admin.email:aleksandar.jankovic@example.com}")
    private String adminEmail;

    @Value("${app.admin.name:Aleksandar Janković}")
    private String adminName;

    @Autowired
    public EmailService(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    /**
     * Šalje email notifikaciju administratoru kada stigne nova poruka
     */
    public void sendNewContactNotification(Contact contact) {
        try {
            System.out.println("🔄 Pokušavam slanje email notifikacije...");
            System.out.println("📧 Admin email: " + adminEmail);
            System.out.println("👤 Admin name: " + adminName);
            
            // Proveri da li su email postavke konfigurisane
            if (adminEmail == null || adminEmail.contains("example.com")) {
                System.err.println("❌ ADMIN_EMAIL nije ispravno podešen! Trenutno: " + adminEmail);
                throw new RuntimeException("Email konfiguracija nije ispravno podešena");
            }

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            // Postavke email-a
            helper.setTo(adminEmail);
            helper.setFrom("noreply@aleksandarjankovic.com");
            helper.setSubject("🔔 Nova poruka sa portfolio sajta: " + contact.getSubject());

            // HTML sadržaj email-a
            String htmlContent = buildEmailContent(contact);
            helper.setText(htmlContent, true);

            // Slanje email-a
            System.out.println("📤 Slanjem email-a na " + adminEmail + "...");
            mailSender.send(message);
            
            System.out.println("✅ Email notifikacija je uspešno poslana na: " + adminEmail);
            
        } catch (Exception e) {
            System.err.println("❌ DETALJINA GREŠKA pri slanju email notifikacije:");
            System.err.println("   Tip greške: " + e.getClass().getSimpleName());
            System.err.println("   Poruka: " + e.getMessage());
            System.err.println("   Admin email: " + adminEmail);
            
            // Proveri osnovnu konfiguraciju
            System.err.println("🔍 Email konfiguracija debug:");
            System.err.println("   EMAIL_USERNAME env var: " + System.getenv("EMAIL_USERNAME"));
            System.err.println("   ADMIN_EMAIL env var: " + System.getenv("ADMIN_EMAIL"));
            
            if (e.getCause() != null) {
                System.err.println("   Uzrok: " + e.getCause().getMessage());
            }
            e.printStackTrace();
            
            // Bacamo grešku dalje da se prikaže u frontend-u
            throw new RuntimeException("Email slanje neuspešno: " + e.getMessage(), e);
        }
    }

    /**
     * Kreira HTML sadržaj za email notifikaciju
     */
    private String buildEmailContent(Contact contact) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd.MM.yyyy HH:mm");
        String formattedDate = contact.getCreatedAt().format(formatter);

        return """
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                             color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
                    .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
                    .field { margin-bottom: 20px; }
                    .label { font-weight: bold; color: #555; display: block; margin-bottom: 5px; }
                    .value { background: white; padding: 12px; border-radius: 4px; border-left: 4px solid #667eea; }
                    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
                    .badge { background: #28a745; color: white; padding: 4px 8px; 
                            border-radius: 12px; font-size: 12px; display: inline-block; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>🔔 Nova poruka sa portfolio sajta</h2>
                        <span class="badge">NOVA PORUKA</span>
                    </div>
                    
                    <div class="content">
                        <div class="field">
                            <span class="label">👤 Ime pošaljoca:</span>
                            <div class="value">%s</div>
                        </div>
                        
                        <div class="field">
                            <span class="label">📧 Email adresa:</span>
                            <div class="value">
                                <a href="mailto:%s">%s</a>
                            </div>
                        </div>
                        
                        <div class="field">
                            <span class="label">📋 Naslov poruke:</span>
                            <div class="value">%s</div>
                        </div>
                        
                        <div class="field">
                            <span class="label">💬 Sadržaj poruke:</span>
                            <div class="value">%s</div>
                        </div>
                        
                        <div class="field">
                            <span class="label">🕒 Vreme slanja:</span>
                            <div class="value">%s</div>
                        </div>
                    </div>
                    
                    <div class="footer">
                        <p>Ova poruka je automatski generisana sa <strong>%s Portfolio</strong> sajta.</p>
                        <p>Za odgovor na poruku, koristite email adresu pošaljoca navedenu iznad.</p>
                    </div>
                </div>
            </body>
            </html>
            """.formatted(
                contact.getName(),
                contact.getEmail(), contact.getEmail(),
                contact.getSubject(),
                contact.getMessage().replace("\n", "<br>"),
                formattedDate,
                adminName
            );
    }

    /**
     * Šalje auto-reply email pošaljiocu poruke
     */
    public void sendAutoReplyEmail(Contact contact) {
        try {
            System.out.println("🔄 Pokušavam slanje auto-reply email-a...");
            System.out.println("📧 Pošaljiocu: " + contact.getEmail());

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true, "UTF-8");

            // Postavke email-a
            helper.setTo(contact.getEmail());
            helper.setFrom("noreply@aleksandarjankovic.com");
            helper.setSubject("✅ Potvrda: Vaša poruka je uspešno poslata - " + contact.getSubject());

            // HTML sadržaj za auto-reply
            String htmlContent = buildAutoReplyContent(contact);
            helper.setText(htmlContent, true);

            // Slanje email-a
            System.out.println("📤 Slanjem auto-reply email-a na " + contact.getEmail() + "...");
            mailSender.send(message);
            
            System.out.println("✅ Auto-reply email je uspešno poslan na: " + contact.getEmail());
            
        } catch (Exception e) {
            System.err.println("❌ DETALJINA GREŠKA pri slanju auto-reply email-a:");
            System.err.println("   Tip greške: " + e.getClass().getSimpleName());
            System.err.println("   Poruka: " + e.getMessage());
            System.err.println("   Email pošaljiocu: " + contact.getEmail());
            
            if (e.getCause() != null) {
                System.err.println("   Uzrok: " + e.getCause().getMessage());
            }
            e.printStackTrace();
            
            // Ne bacamo grešku dalje jer ne želimo da prekidamo čuvanje kontakta
        }
    }

    /**
     * Kreira HTML sadržaj za auto-reply email
     */
    private String buildAutoReplyContent(Contact contact) {
        return """
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); 
                             color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
                    .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
                    .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
                    .highlight { color: #28a745; font-weight: bold; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>✅ Potvrda slanja poruke</h2>
                    </div>
                    
                    <div class="content">
                        <p>Poštovani/a <strong>%s</strong>,</p>
                        
                        <p>Hvala Vam što ste me kontaktirali putem mog portfolio sajta!</p>
                        
                        <p>Vaša poruka sa naslovom "<span class="highlight">%s</span>" je uspešno primljena 
                           i odgovoriću Vam u najkraćem mogućem roku.</p>
                        
                        <p>Ukoliko je potrebna hitna komunikacija, možete me kontaktirati direktno putem:</p>
                        <ul>
                            <li>📧 Email: aleksandar.jankovic@example.com</li>
                            <li>💼 LinkedIn: linkedin.com/in/aleksandar-jankovic</li>
                        </ul>
                        
                        <p>Srdačan pozdrav,<br>
                        <strong>%s</strong></p>
                    </div>
                    
                    <div class="footer">
                        <p>Ova poruka je automatski generisana. Molim Vas da ne odgovarate na ovaj email.</p>
                    </div>
                </div>
            </body>
            </html>
            """.formatted(
                contact.getName(),
                contact.getSubject(),
                adminName
            );
    }
}
