// Translation data
const translations = {
    sr: {
        'nav.about': 'O meni',
        'nav.work': 'Projekti',
        'nav.experience': 'Iskustvo',
        'nav.skills': 'Veštine',
        'nav.contact': 'Kontakt',

        'intro.skip': 'Preskoči',
        'intro.sender': 'Fleet Dispatch',
        'intro.now': 'sad',
        'intro.message': 'Kamion 214 čeka na terenu, treba nam pomoć — hitno.',
        'intro.reply': 'Tu sam. Rešavamo odmah.',
        'intro.tap': 'Dodirni da otvoriš portfolio',
        'intro.choice.heading': 'Šta te zanima?',
        'intro.choice.trucking': 'Trucking / Customer Service',
        'intro.choice.tech': 'IT / Programiranje',

        'hero.badge': 'Zaposlen · Otvoren za customer service uloge',
        'hero.title': 'Zdravo, ja sam <span class="highlight">Aleksandar Janković</span>',
        'hero.subtitle': 'Customer service & operativna podrška · Java & podaci · pouzdana komunikacija na engleskom',
        'hero.intro': 'Diplomirani inženjer računarske tehnike sa višegodišnjim iskustvom u korisničkoj podršci, remote timovima i radu sa klijentima. Trenutno radim remote za kompaniju iz SAD-a; otvoren sam za sve vrste customer service poslova — uz paralelni razvoj u back-endu.',
        'hero.viewProfile': 'Moj profil',
        'hero.contact': 'Kontaktiraj me',

        'about.label': 'Profil',
        'about.title': 'O meni',
        'about.lead': 'Fokusiram se na customer service i tehničku podršku, često sa klijentima iz inostranstva na engleskom. Tražim remote, hibrid ili office ulogu gde mogu odmah da doprinesem timu.',
        'about.p1': 'Godinama radim u okruženjima gde su tačnost, brzina odgovora i jasna komunikacija ključni: od fleet operacija i koordinacije sa vozačima i servisima u SAD-u, preko Level 1 POS podrške za Sainsbury\'s, do današnjeg posla u Spotter.ai gde vodim evidencije, obučavam nove kolege i držim osnovnu obuku za Level 1 Fleet Maintenance u američkoj truck industriji.',
        'about.p2': 'Klijenti i timovi na mene se oslanjaju zbog strpljenja, strukturisanog pristupa i naprednog engleskog. U isto vreme razvijam back-end veštine (Java, MySQL) kroz lične projekte — spreman sam da te oblasti gradim dalje, ali customer service ostaje moja snažna strana i svesno tražim te prilike.',
        'about.tag1': 'Customer service',
        'about.tag2': 'Remote · EN',
        'about.tag3': 'Tehnička podrška',
        'about.tag4': 'Java · MySQL',
        'about.card.status': 'Status',
        'about.card.statusValue': 'Zaposlen · Remote (USA)',
        'about.card.focus': 'Fokus',
        'about.card.focusValue': 'CS, podrška, operacije',
        'about.card.education': 'Obrazovanje',
        'about.card.educationValue': 'Dipl. inž. računarske tehnike',
        'about.video': 'Povremeno radim i video montažu (Premiere Pro, CapCut) — po potrebi mogu poslati reference.',

        'work.label': 'Razvoj',
        'work.title': 'Projekti',
        'work.subtitle': 'Uz fleet i customer service, ovde i dalje gradim softver — dva primera.',
        'portfolio.teambuildstay.role': 'Diplomski rad · Rezervacije',
        'portfolio.teambuildstay.title': 'TeamBuildStay',
        'portfolio.teambuildstay.description': 'Desktop aplikacija za pretragu i rezervaciju smeštaja za team building događaje — JavaFX, MySQL baza, DBeaver za rad sa podacima.',
        'portfolio.thissite.role': 'Lični projekat',
        'portfolio.thissite.title': 'Portfolio koji upravo gledaš',
        'portfolio.thissite.description': 'Vanilla HTML, CSS i JavaScript, bez frameworka — dark/light tema, dvojezični sadržaj i intro ekran koji si upravo prošao/la.',
        'portfolio.viewGithub': 'GitHub',

        'services.label': 'Usluge',
        'services.title': 'Šta nudim',
        'services.cs.title': 'Customer service',
        'services.cs.description': 'Podrška korisnicima, rešavanje pritužbi, praćenje zahteva i profesionalna komunikacija — remote ili na licu mesta.',
        'services.support.title': 'Tehnička podrška',
        'services.support.description': 'POS sistemi, incidenti pod pritiskom, dijagnostika i rad sa korporativnim alatima.',
        'services.data.title': 'Podaci i operacije',
        'services.data.description': 'Evidencije, tačan unos podataka, analiza i optimizacija procesa u digitalnim sistemima.',
        'services.dev.title': 'Back-end razvoj',
        'services.dev.description': 'Java aplikacije i MySQL — za timove koji traže junior profil sa realnim projektima.',

        'experience.label': 'Karijera',
        'experience.title': 'Iskustvo',
        'cv.experience.current.date': 'Oktobar 2025 — Trenutno',
        'cv.experience.current.position': 'Spotter.ai — Fleet Maintenance Representative',
        'cv.experience.current.company': 'Remote, USA',
        'cv.experience.current.task1': 'Korisnička i operativna podrška: strukturisani podaci, evidencije, komunikacija sa timom',
        'cv.experience.current.task2': 'Obuka novih zaposlenih i konzistentnost u radu sa sistemima',
        'cv.experience.current.task3': 'Analiza podataka radi smanjenja zastoja i boljih procesa',
        'cv.experience.previous.date': 'April — Oktobar 2025',
        'cv.experience.previous.position': 'Level 1 POS Support — Sainsbury\'s',
        'cv.experience.previous.company': 'NCR Voyix · Beograd',
        'cv.experience.previous.task1': 'Front-line tehnička podrška za POS i samouslužne kase',
        'cv.experience.previous.task2': 'Rešavanje problema pod vremenskim pritiskom',
        'cv.experience.previous.task3': 'Rad sa IT infrastrukturom i korporativnim alatima',
        'cv.experience.previous2.date': 'Januar 2024 — April 2025',
        'cv.experience.previous2.position': 'Fleet Maintenance Support',
        'cv.experience.previous2.company': 'SMJ-Freight · Remote',
        'cv.experience.previous2.task1': 'Koordinacija sa vozačima, servisima i menadžmentom (EN)',
        'cv.experience.previous2.task2': 'Evidencija inspekcija, popravki i operativnih podataka',
        'cv.education.college.date': '2020 — 2025',
        'cv.education.college.school': 'Visoka škola elektrotehnike i računarstva',
        'cv.education.college.field': 'Dipl. inž. računarske tehnike · Beograd',

        'skills.label': 'Kompetencije',
        'skills.title': 'Veštine',
        'skills.cs.label': 'Customer service',
        'skills.cs.1': 'Korisnička podrška',
        'skills.cs.2': 'Reklamacije',
        'skills.cs.3': 'Remote komunikacija',
        'skills.tech.label': 'Tech',
        'skills.tech.1': 'Java',
        'skills.tech.2': 'JavaFX',
        'skills.tech.3': 'MySQL',
        'skills.tech.4': 'DBeaver',
        'skills.soft.label': 'Lične veštine',
        'skills.soft.english': 'Engleski (napredno)',
        'skills.soft.patience': 'Strpljenje',
        'skills.soft.analytical': 'Analitika',
        'skills.soft.multitask': 'Multitasking',

        'contact.label': 'Kontakt',
        'contact.subtitle': 'Za customer service, podršku ili saradnju.',
        'contact.info.location': 'Beograd, Srbija',
        'contact.info.linkedin': 'LinkedIn',
        'contact.info.github': 'GitHub',
        'contact.form.name': 'Ime',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Naslov',
        'contact.form.message': 'Poruka',
        'contact.form.submit': 'Pošalji poruku',

        'footer.copyright': '© 2026 Aleksandar Janković',
        'footer.top': 'Na vrh',
        
        // Form notifications
        'form.fillAllFields': 'Molimo popunite sva polja.',
        'form.validEmail': 'Molimo unesite validan email.',
        'form.sending': 'Poruka se šalje...',
        'form.success': 'Poruka je uspešno poslata!',
        'form.error': 'Greška pri slanju poruke. Pokušaj ponovo.'
    },
    en: {
        'nav.about': 'About',
        'nav.work': 'Projects',
        'nav.experience': 'Experience',
        'nav.skills': 'Skills',
        'nav.contact': 'Contact',

        'intro.skip': 'Skip',
        'intro.sender': 'Fleet Dispatch',
        'intro.now': 'now',
        'intro.message': 'Truck 214 is stuck in the field, needs help — urgent.',
        'intro.reply': "I'm here. Handling it now.",
        'intro.tap': 'Tap to open the portfolio',
        'intro.choice.heading': 'What are you here for?',
        'intro.choice.trucking': 'Trucking / Customer Service',
        'intro.choice.tech': 'IT / Programming',

        'hero.badge': 'Employed · Open to customer service roles',
        'hero.title': 'Hello, I am <span class="highlight">Aleksandar Janković</span>',
        'hero.subtitle': 'Customer service & operations support · Java & data · reliable communication in English',
        'hero.intro': 'Computer engineering graduate with years of experience in customer support, remote teams, and client-facing work. I currently work remotely for a US company; I am open to all types of customer service roles — while continuing to grow in back-end development.',
        'hero.viewProfile': 'My profile',
        'hero.contact': 'Contact me',

        'about.label': 'Profile',
        'about.title': 'About me',
        'about.lead': 'I focus on customer service and technical support, often with international clients in English. Looking for remote, hybrid, or on-site roles where I can contribute from day one.',
        'about.p1': 'For years I\'ve worked where accuracy, fast responses, and clear communication matter: from fleet operations and coordinating with drivers and vendors across the US, through Level 1 POS support for Sainsbury\'s, to my current role at Spotter.ai where I manage records, onboard new colleagues, and run basic training for Level 1 Fleet Maintenance in the American trucking industry.',
        'about.p2': 'Clients and teams rely on me for patience, a structured approach, and advanced English. At the same time I\'m building back-end skills (Java, MySQL) through personal projects — ready to grow further in those areas, but customer service remains my strong suit and I\'m actively looking for those opportunities.',
        'about.tag1': 'Customer service',
        'about.tag2': 'Remote · EN',
        'about.tag3': 'Technical support',
        'about.tag4': 'Java · MySQL',
        'about.card.status': 'Status',
        'about.card.statusValue': 'Employed · Remote (USA)',
        'about.card.focus': 'Focus',
        'about.card.focusValue': 'CS, support, operations',
        'about.card.education': 'Education',
        'about.card.educationValue': 'BSc Computer Engineering',
        'about.video': 'I also do occasional video editing (Premiere Pro, CapCut) — references available on request.',

        'work.label': 'Development',
        'work.title': 'Projects',
        'work.subtitle': 'Alongside fleet and customer service, I still build software — two examples.',
        'portfolio.teambuildstay.role': 'Thesis · Bookings',
        'portfolio.teambuildstay.title': 'TeamBuildStay',
        'portfolio.teambuildstay.description': 'Desktop app for finding and booking team-building accommodation — JavaFX, a MySQL database, and DBeaver for data management.',
        'portfolio.thissite.role': 'Personal project',
        'portfolio.thissite.title': 'The portfolio you\'re looking at',
        'portfolio.thissite.description': 'Vanilla HTML, CSS, and JavaScript, no framework — dark/light theme, bilingual content, and the intro screen you just came through.',
        'portfolio.viewGithub': 'GitHub',

        'services.label': 'Services',
        'services.title': 'What I offer',
        'services.cs.title': 'Customer service',
        'services.cs.description': 'User support, complaint handling, request tracking, and professional communication — remote or on-site.',
        'services.support.title': 'Technical support',
        'services.support.description': 'POS systems, incidents under pressure, diagnostics, and corporate tools.',
        'services.data.title': 'Data & operations',
        'services.data.description': 'Records, accurate data entry, analysis, and process optimization in digital systems.',
        'services.dev.title': 'Back-end development',
        'services.dev.description': 'Java and MySQL — for teams looking for a junior profile with real projects.',

        'experience.label': 'Career',
        'experience.title': 'Experience',
        'cv.experience.current.date': 'October 2025 — Present',
        'cv.experience.current.position': 'Spotter.ai — Fleet Maintenance Representative',
        'cv.experience.current.company': 'Remote, USA',
        'cv.experience.current.task1': 'Customer and operations support: structured data, records, team communication',
        'cv.experience.current.task2': 'Onboarding new staff and consistency in system usage',
        'cv.experience.current.task3': 'Data analysis to reduce downtime and improve processes',
        'cv.experience.previous.date': 'April — October 2025',
        'cv.experience.previous.position': 'Level 1 POS Support — Sainsbury\'s',
        'cv.experience.previous.company': 'NCR Voyix · Belgrade',
        'cv.experience.previous.task1': 'Front-line technical support for POS and self-checkout',
        'cv.experience.previous.task2': 'Problem solving under time pressure',
        'cv.experience.previous.task3': 'IT infrastructure and corporate software tools',
        'cv.experience.previous2.date': 'January 2024 — April 2025',
        'cv.experience.previous2.position': 'Fleet Maintenance Support',
        'cv.experience.previous2.company': 'SMJ-Freight · Remote',
        'cv.experience.previous2.task1': 'Coordination with drivers, vendors, and management (EN)',
        'cv.experience.previous2.task2': 'Inspection, repair, and operational records',
        'cv.education.college.date': '2020 — 2025',
        'cv.education.college.school': 'Higher School of Electrical Engineering and Computer Science',
        'cv.education.college.field': 'BSc Computer Engineering · Belgrade',

        'skills.label': 'Competencies',
        'skills.title': 'Skills',
        'skills.cs.label': 'Customer service',
        'skills.cs.1': 'User support',
        'skills.cs.2': 'Complaints',
        'skills.cs.3': 'Remote communication',
        'skills.tech.label': 'Tech',
        'skills.tech.1': 'Java',
        'skills.tech.2': 'JavaFX',
        'skills.tech.3': 'MySQL',
        'skills.tech.4': 'DBeaver',
        'skills.soft.label': 'Soft skills',
        'skills.soft.english': 'English (advanced)',
        'skills.soft.patience': 'Patience',
        'skills.soft.analytical': 'Analytics',
        'skills.soft.multitask': 'Multitasking',

        'contact.label': 'Contact',
        'contact.subtitle': 'For customer service, support, or collaboration.',
        'contact.info.location': 'Belgrade, Serbia',
        'contact.info.linkedin': 'LinkedIn',
        'contact.info.github': 'GitHub',
        'contact.form.name': 'Name',
        'contact.form.email': 'Email',
        'contact.form.subject': 'Subject',
        'contact.form.message': 'Message',
        'contact.form.submit': 'Send message',

        'footer.copyright': '© 2026 Aleksandar Janković',
        'footer.top': 'Back to top',
        
        // Form notifications
        'form.fillAllFields': 'Please fill in all fields.',
        'form.validEmail': 'Please enter a valid email.',
        'form.sending': 'Sending message...',
        'form.success': 'Message sent successfully!',
        'form.error': 'Error sending message. Please try again.'
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initIntroOverlay();
    initLanguageToggle();
    initThemeToggle();
    initNavigation();
    initContactForm();
    initScrollEffects();
});

// Phone lock-screen intro overlay
function initIntroOverlay() {
    const overlay = document.getElementById('introOverlay');
    if (!overlay) return;

    // Already seen this session — leave it hidden (default CSS: display none)
    if (sessionStorage.getItem('introSeen') === '1') {
        overlay.remove();
        return;
    }

    const phone = document.getElementById('introPhone');
    const skipBtn = document.getElementById('introSkip');
    const timeEl = document.getElementById('introTime');
    const clockTimeEl = document.getElementById('introClockTime');
    const clockDateEl = document.getElementById('introClockDate');

    function updateClock() {
        const now = new Date();
        const hh = String(now.getHours()).padStart(2, '0');
        const mm = String(now.getMinutes()).padStart(2, '0');
        const timeStr = `${hh}:${mm}`;
        if (timeEl) timeEl.textContent = timeStr;
        if (clockTimeEl) clockTimeEl.textContent = timeStr;
        if (clockDateEl) {
            const lang = document.documentElement.getAttribute('lang') || 'sr';
            const locale = lang === 'en' ? 'en-US' : 'sr-Latn-RS';
            clockDateEl.textContent = now.toLocaleDateString(locale, { weekday: 'long', day: 'numeric', month: 'long' });
        }
    }
    updateClock();
    const clockInterval = setInterval(updateClock, 1000 * 30);

    document.documentElement.classList.add('intro-lock');
    overlay.classList.add('is-active');

    function closeOverlay(target) {
        clearInterval(clockInterval);
        overlay.classList.add('is-exiting');
        sessionStorage.setItem('introSeen', '1');
        document.documentElement.classList.remove('intro-lock');
        setTimeout(() => {
            overlay.remove();
            if (target) {
                const el = document.querySelector(target);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    el.classList.add('section-highlight');
                    setTimeout(() => el.classList.remove('section-highlight'), 1800);
                }
            }
        }, 500);
    }

    function revealChoices() {
        if (phone) {
            phone.classList.add('is-unlocked');
            phone.removeEventListener('click', handlePhoneActivate);
            phone.removeEventListener('keydown', handlePhoneActivate);
            phone.setAttribute('tabindex', '-1');
        }
        const firstChoice = overlay.querySelector('.intro-choice-btn');
        if (firstChoice) firstChoice.focus();
    }

    function handlePhoneActivate(e) {
        if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
        if (e.type === 'keydown') e.preventDefault();
        revealChoices();
    }

    if (phone) {
        phone.addEventListener('click', handlePhoneActivate);
        phone.addEventListener('keydown', handlePhoneActivate);
    }

    overlay.querySelectorAll('.intro-choice-btn').forEach(function(btn) {
        btn.addEventListener('click', function() {
            closeOverlay(btn.getAttribute('data-target'));
        });
    });

    if (skipBtn) {
        skipBtn.addEventListener('click', function() { closeOverlay(); });
    }

    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeOverlay();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// Language Toggle functionality
function initLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    const languageText = document.getElementById('languageText');
    
    // Check for saved language preference or default to Serbian
    const savedLanguage = localStorage.getItem('language') || 'sr';
    setLanguage(savedLanguage);
    
    // Language toggle event listener
    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            const currentLanguage = document.documentElement.getAttribute('lang');
            const newLanguage = currentLanguage === 'sr' ? 'en' : 'sr';
            setLanguage(newLanguage);
        });
    }
    
    function setLanguage(language) {
        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', language);
        localStorage.setItem('language', language);
        
        // Update language toggle button text
        if (languageText) {
            languageText.textContent = language === 'sr' ? 'ENG' : 'SRB';
        }
        
        // Apply translations
        applyTranslations(language);
        
        // Add smooth transition for language change
        document.body.style.transition = 'opacity 0.2s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 200);
    }
}

// Apply translations to the page
function applyTranslations(language) {
    const currentTranslations = translations[language];
    
    if (!currentTranslations) {
        console.error('Translations not found for language:', language);
        return;
    }
    
    // Translate elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentTranslations[key]) {
            element.innerHTML = currentTranslations[key];
        }
    });
    
    // Translate placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (currentTranslations[key]) {
            element.placeholder = currentTranslations[key];
        }
    });
    
    // Update document title and meta tags based on language
    const metaDescription = document.querySelector('meta[name="description"]');
    if (language === 'en') {
        document.title = 'Aleksandar Janković — Customer Service & Technology';
        if (metaDescription) {
            metaDescription.content = 'Customer service professional with remote US experience, technical support background, and Java projects.';
        }
    } else {
        document.title = 'Aleksandar Janković — Customer Service & Tehnologija';
        if (metaDescription) {
            metaDescription.content = 'Iskustvo u customer service i remote podršci, uz Java projekte. Portfolio Aleksandra Jankovića.';
        }
    }
}

// Theme Toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
    }
    
    function setTheme(theme) {
        body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update icon
        if (themeIcon) {
            if (theme === 'dark') {
                themeIcon.className = 'fas fa-sun';
            } else {
                themeIcon.className = 'fas fa-moon';
            }
        }
        
        // Add smooth transition for theme change
        body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            body.style.transition = '';
        }, 300);
    }
}

// Navigation functionality
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link, .nav-logo');

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (!targetId || !targetId.startsWith('#')) return;

            e.preventDefault();
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    const navbar = document.getElementById('navbar');
    const scrollTargets = document.querySelectorAll('header[id], section[id]');

    window.addEventListener('scroll', function() {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 8);
        }

        let current = 'home';
        scrollTargets.forEach(target => {
            if (window.scrollY >= target.offsetTop - 120) {
                current = target.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
        });
    }, { passive: true });
}

// Contact form functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
                const errorMessage = translations[currentLanguage]['form.fillAllFields'];
                showNotification(errorMessage, 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
                const errorMessage = translations[currentLanguage]['form.validEmail'];
                showNotification(errorMessage, 'error');
                return;
            }
            
            // Send email using EmailJS - No backend needed!
            const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
            const sendingMessage = translations[currentLanguage]['form.sending'];
            showNotification(sendingMessage, 'info');
            
            // Send email using EmailJS (GitHub Pages compatible!)
            console.log('🚀 Koristim EmailJS za slanje email-a...');
            
            // Check if EmailJS is loaded
            if (typeof emailjs === 'undefined') {
                console.log('📦 Učitavam EmailJS biblioteku...');
                
                // Load EmailJS dynamically
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
                script.onload = () => {
                    console.log('✅ EmailJS biblioteka učitana!');
                    emailjs.init('eZ1ToHn60D72IrUw-'); // Public Key
                    sendEmailViaEmailJS();
                };
                script.onerror = () => {
                    console.error('❌ Greška pri učitavanju EmailJS biblioteke!');
                    const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
                    const errorMessage = translations[currentLanguage]['form.error'];
                    showNotification(errorMessage, 'error');
                };
                document.head.appendChild(script);
            } else {
                console.log('✅ EmailJS već je učitan!');
                sendEmailViaEmailJS();
            }
            
            function sendEmailViaEmailJS() {
                // EmailJS template parametri
                const templateParams = {
                    from_name: name,
                    from_email: email,
                    subject: subject,
                    message: message,
                    to_email: 'aleksandarjankovic159@gmail.com' // Tvoj email
                };
                
                console.log('📧 Šaljem email sa parametrima:', templateParams);
                
                // Pošalji email preko EmailJS
                emailjs.send(
                    'service_7eklp8j',    // Gmail service ID
                    'template_6q8y275',   // Email template ID
                    templateParams
                )
                .then(function(response) {
                    console.log('✅ Email poslat uspešno!', response.status, response.text);
                    console.log('📊 Response details:', response);
                    const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
                    const successMessage = translations[currentLanguage]['form.success'];
                    showNotification(successMessage, 'success');
                    contactForm.reset();
                }, function(error) {
                    console.error('❌ GREŠKA pri slanju email-a:', error);
                    console.error('📋 Error details:', error.text || error.message || error);
                    const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
                    const errorMessage = translations[currentLanguage]['form.error'];
                    showNotification(errorMessage, 'error');
                });
            }
        });
    }
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem;
        border-radius: 8px;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        z-index: 10000;
        max-width: 400px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to page
    document.body.appendChild(notification);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.remove();
    });
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

function initScrollEffects() {
    const observer = new IntersectionObserver(
        entries => entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
        }),
        { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('section, .hero').forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Window resize handler
window.addEventListener('resize', debounce(function() {
    // Handle responsive adjustments
    const navMenu = document.querySelector('.nav-menu');
    const hamburger = document.querySelector('.hamburger');
    
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
}, 250));

