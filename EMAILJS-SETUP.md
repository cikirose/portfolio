# EmailJS Setup za GitHub Pages

## 🎯 Pregled
EmailJS omogućava slanje email-ova direktno iz browser-a **bez backend servera**! 
Idealno za GitHub Pages.

## 📧 Setup Koraci

### Korak 1: Kreiraj EmailJS nalog
1. Idi na [EmailJS.com](https://www.emailjs.com/)
2. Klikni **"Sign Up"** 
3. Registruj se sa Gmail nalogom

### Korak 2: Dodaj Gmail servis
1. U EmailJS dashboard-u, idi na **"Email Services"**
2. Klikni **"Add New Service"**
3. Izaberi **"Gmail"**
4. Conectuj sa `aleksandarjankovic159@gmail.com`
5. Zapamti **Service ID** (npr. `service_12345`)

### Korak 3: Kreiraj Email Template
1. Idi na **"Email Templates"**
2. Klikni **"Create New Template"**
3. Podesi template:

```html
Subject: 🔔 Nova poruka sa portfolio sajta: {{subject}}

Pozdrav Aleksandar!

Stigla ti je nova poruka sa portfolio sajta:

👤 Ime: {{from_name}}
📧 Email: {{from_email}}
📋 Naslov: {{subject}}
💬 Poruka:
{{message}}

Odgovori direktno na email pošaljioca.

Pozdrav,
Portfolio System
```

4. Zapamti **Template ID** (npr. `template_12345`)

### Korak 4: Uzmi Public Key
1. Idi na **"Account"** → **"General"**
2. Kopiraj **Public Key** (npr. `user_12345`)

### Korak 5: Ažuriraj JavaScript kod

Otvori `docs/frontend/script.js` i zameni:

```javascript
emailjs.init('YOUR_PUBLIC_KEY');        // → emailjs.init('user_12345');
'YOUR_SERVICE_ID',                      // → 'service_12345'
'YOUR_TEMPLATE_ID',                     // → 'template_12345'
```

### Korak 6: Test
1. Otvori `docs/frontend/index.html` u browser-u
2. Popuni contact formu
3. Klikni "Pošalji poruku"
4. Proveri email na `aleksandarjankovic159@gmail.com`

## ✅ Prednosti EmailJS + GitHub Pages

- **✅ BESPLATNO** - 200 email-ova mesečno
- **✅ NEMA BACKEND** - radi direktno iz browser-a  
- **✅ GITHUB PAGES KOMPATIBILNO** - samo statički fajlovi
- **✅ INSTANT DEPLOY** - push na GitHub = live sajt
- **✅ UVEK DOSTUPNO** - nema server maintenance

## 🚀 Deploy na GitHub Pages

1. Push izmene na GitHub
2. Idi na repo **Settings** → **Pages**
3. Source: **Deploy from branch** → **main** → **docs/**
4. Sajt će biti dostupan na: `https://USERNAME.github.io/REPO-NAME/`

## 🔧 Troubleshooting

**Problem:** "EmailJS is not defined"
**Rešenje:** Proveri da li se EmailJS script učitava. Kod automatski učitava script ako nije dostupan.

**Problem:** Email se ne šalje
**Rešenje:** Proveri Service ID, Template ID i Public Key u console-u.

**Problem:** Gmail blokira slanje
**Rešenje:** EmailJS koristi svoje servere, nema blokade kao sa SMTP.

## 📱 Mobilna verzija
EmailJS radi i na mobilnim uređajima bez dodatnog setup-a!
