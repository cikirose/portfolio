# 🎯 Aleksandar Janković Portfolio

Profesionalni portfolio sajt sa Spring Boot backend-om i modernim frontend-om.

## 📋 Sadržaj
- [Brzo pokretanje](#-brzo-pokretanje)
- [Prezentovanje poslodavcu](#-prezentovanje-poslodavcu)
- [Detaljan setup](#-detaljan-setup)
- [Funkcionalnosti](#-funkcionalnosti)
- [Tehnička specifikacija](#-tehnička-specifikacija)

---

## ⚡ Brzo pokretanje

### Windows korisnici:
```bash
# Dvoklick na fajl:
start-portfolio.bat
```

### Linux/Mac korisnici:
```bash
# Iz terminala:
./start-portfolio.sh
```

### Manuelno pokretanje:
```bash
# 1. Pokretanje backend-a
cd backend
mvn spring-boot:run

# 2. Otvaranje frontend-a (u novom terminalu)
cd frontend
# Otvorite index.html u browser-u ili koristite live server
```

---

## 👔 Prezentovanje poslodavcu

### OPCIJA 1: Live demonstracija
1. **Na vašem laptop-u:**
   - Pokrenite `start-portfolio.bat`
   - Otvorite browser na `http://localhost:8080`
   - Pokažite funkcionalnosti uživo

2. **GitHub prezentacija:**
   - Repository: `https://github.com/[your-username]/portfolio`
   - Pokažite kod i commit history
   - Objasnite arhitekturu i tehnologije

### OPCIJA 2: Remote pristup
```bash
# Za pristup sa druge mašine u istoj mreži:
http://[vaša-ip-adresa]:8080
```

### OPCIJA 3: Shared screen
- Zoom/Teams screen sharing
- Pokretanje portfolio-a uzivo
- Interaktivna demonstracija

---

## 🔧 Detaljan setup

### Potrebni softveri:
- **Java 17+** (obavezno)
- **Maven 3.6+** (obavezno)
- **Git** (preporučeno)
- **Browser** (Chrome/Firefox)

### Provera instalacije:
```bash
java -version    # Treba biti 17+
mvn -version     # Treba biti 3.6+
```

### Instalacija dependency-ja:
```bash
cd backend
mvn clean install
```

---

## 🚀 Funkcionalnosti

### ✅ Implementirane funkcionalnosti:
- **Responsive design** - optimizovano za sve uređaje
- **Contact forma** - funkciona sa Spring Boot backend-om
- **Portfolio sekcija** - prikaz projekata [[memory:2591820]]
- **CV sekcija** - detaljno radno iskustvo
- **Smooth animacije** - moderni UI/UX
- **REST API** - kompletni CRUD za kontakt poruke

### 🎨 UI/UX:
- Moderni gradient design
- Smooth scroll animacije
- Mobile-first responsive design
- Intuitivna navigacija
- Profesionalna tipografija

### 🔧 Backend funkcionalnosti:
- **Spring Boot 3.2** - najnovija verzija
- **H2 Database** - perzistentno čuvanje podataka
- **Validation** - server-side validacija
- **CORS** - omogućena komunikacija sa frontend-om
- **Error handling** - graceful error responses

---

## 💻 Tehnička specifikacija

### Backend:
```yaml
Framework: Spring Boot 3.2.0
Language: Java 17
Database: H2 (development), ready for MySQL/PostgreSQL
Port: 8080
Endpoints:
  - GET/POST /contacts
  - GET /contacts/stats
  - GET /contacts/health
```

### Frontend:
```yaml
Languages: HTML5, CSS3, JavaScript ES6+
Features:
  - Responsive Grid Layout
  - CSS Custom Properties
  - Intersection Observer API
  - Fetch API
  - Local Storage (preferences)
```

### Arhitektura:
```
Frontend (Port: Browser)
    ↓ HTTP Requests
Backend (Port: 8080)
    ↓ JPA/Hibernate
H2 Database (File-based)
```

---

## 📊 API Dokumentacija

### Contacts API:
```http
POST /contacts
Content-Type: application/json

{
  "name": "Ime Prezime",
  "email": "email@example.com", 
  "subject": "Naslov poruke",
  "message": "Sadržaj poruke..."
}
```

### Response:
```json
{
  "success": true,
  "message": "Kontakt poruka je uspešno poslata!",
  "contact": {
    "id": 1,
    "name": "Ime Prezime",
    "email": "email@example.com",
    "subject": "Naslov poruke", 
    "message": "Sadržaj poruke...",
    "createdAt": "2024-01-15T10:30:00",
    "isRead": false
  }
}
```

---

## 🛠️ Razvoj i troubleshooting

### Česti problemi:

1. **Port 8080 zauzet:**
   ```bash
   # Promenite port u application.properties
   server.port=8081
   ```

2. **Java verzija:**
   ```bash
   # Proverite verziju
   java -version
   # Treba biti 17 ili noviji
   ```

3. **Maven build greške:**
   ```bash
   mvn clean install -U
   ```

### Development mode:
```bash
# Backend sa auto-reload
cd backend
mvn spring-boot:run -Dspring-boot.run.profiles=dev

# Frontend sa live server (VS Code)
# Instalirajte Live Server extension
```

---

## 📈 Buduća poboljšanja

- **Admin panel** za pregled kontakt poruka
- **Dark mode** funkcionalnost  
- **Blog sekcija** za deljenje iskustava
- **Portfolio modali** sa detaljnijim prikazom projekata
- **Email notifikacije** za nove kontakt poruke
- **Analytics** za praćenje poseta

---

## 📞 Kontakt

**Aleksandar Janković**
- Email: aleksandarjankovic159@gmail.com
- Phone: +381603118999
- Location: Belgrade, Serbia

---

## 📄 Licenca

© 2024 Aleksandar Janković. Sva prava zadržana.

---

**🎯 Portfolio spreman za prezentovanje!**

*Projekat demonstrira praktično znanje Spring Boot frameworka, REST API dizajna, moderne frontend tehnologije i profesionalnu organizaciju koda.*