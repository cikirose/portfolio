# Email Konfiguracija - Instrukcije za Setup

## Pregled

Aplikacija sada automatski šalje email notifikacije kada neko pošalje poruku kroz contact formu:

1. **Administratoru** - stiže notifikacija o novoj poruci
2. **Pošaljiocu** - stiže auto-reply potvrda da je poruka primljena

## Konfiguracija Gmail SMTP-a

### Korak 1: Priprema Gmail naloga

1. Idi na [Gmail](https://gmail.com) i uloguj se
2. Idi na **Google Account settings** → **Security**
3. Uključi **2-Step Verification** (obavezno!)
4. Generiši **App Password**:
   - Idi na **Security** → **App passwords**
   - Izaberi **Mail** i **Windows Computer** (ili Other)
   - Kopiraj generisanu šifru (16 karaktera bez razmaka)

### Korak 2: Konfiguracija Environment Varijabli

Kreirati fajl `.env` u `backend/` direktorijumu sa sledećim sadržajem:

```properties
# Email konfiguracija
EMAIL_USERNAME=tvoj-email@gmail.com
EMAIL_PASSWORD=tvoja-app-password-16-karaktera
ADMIN_EMAIL=tvoj-email@gmail.com
ADMIN_NAME=Tvoje Ime
```

**VAŽNO**: 
- Nikad ne komituj `.env` fajl u git!
- Koristi App Password, ne svoju običnu Gmail šifru
- App Password nema razmake između karaktera

### Korak 3: Pokretanje sa Environment Varijablama

#### Windows (PowerShell):
```powershell
# Postavi environment varijable
$env:EMAIL_USERNAME="tvoj-email@gmail.com"
$env:EMAIL_PASSWORD="tvoja-app-password"
$env:ADMIN_EMAIL="tvoj-email@gmail.com"
$env:ADMIN_NAME="Tvoje Ime"

# Pokreni aplikaciju
cd backend
mvn spring-boot:run
```

#### Windows (Command Prompt):
```cmd
set EMAIL_USERNAME=tvoj-email@gmail.com
set EMAIL_PASSWORD=tvoja-app-password
set ADMIN_EMAIL=tvoj-email@gmail.com
set ADMIN_NAME=Tvoje Ime

cd backend
mvn spring-boot:run
```

### Korak 4: Testiranje

1. Pokreni aplikaciju sa environment varijablama
2. Otvori frontend (http://localhost:8080)
3. Popuni contact formu i pošalji poruku
4. Proveri da li su stigli email-ovi:
   - Admin email - nova poruka notifikacija
   - Pošaljiocu - auto-reply potvrda

## Troubleshooting

### Problem: "Authentication failed"
- Proveri da li si uključio 2-Step Verification
- Proveri da li si koristio App Password umesto obične šifre
- Proveri da li je EMAIL_USERNAME ispravno podešen

### Problem: "Connection timeout"
- Proveri internet konekciju
- Možda je firewall blokirao port 587
- Pokušaj sa port 465 i ssl=true

### Problem: Email se ne šalje
- Proveri logs u konzoli za greške
- Proveri da li su environment varijable ispravno podešene
- Proveri da li Gmail omogućava "Less secure app access" (treba da bude isključeno)

## Alternativni Email Provideri

### Outlook/Hotmail
```properties
spring.mail.host=smtp-mail.outlook.com
spring.mail.port=587
```

### Yahoo Mail
```properties
spring.mail.host=smtp.mail.yahoo.com
spring.mail.port=587
```

### Custom SMTP
Možeš koristiti bilo koji SMTP server promenivši `spring.mail.host` i `spring.mail.port`.

## Bezbednost

- **Nikad** ne stavljaj email credentials u kod
- Koristi environment varijable ili vanjski konfiguracijski sistem
- Za produkciju, koristi secret management servise (Azure Key Vault, AWS Secrets Manager, itd.)
- Redovno menjaj App Password-e

## Napredne Funkcionalnosti

Za dodatne mogućnosti možeš proširiti `EmailService`:

- HTML templating sa Thymeleaf
- Prilaganje fajlova
- Email queuing za velike volume
- Rate limiting
- Email tracking
