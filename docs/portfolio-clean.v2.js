// Portfolio with EmailJS and Complete Translations
// Clean version - no duplicates

// Global translations object
const globalTranslations = {
    en: {
        'form.success': 'Message sent successfully! I will get back to you soon.',
        'form.error': 'Error sending message. Please try again.'
    },
    sr: {
        'form.success': 'Poruka je uspešno poslata! Odgovoriću vam uskoro.',
        'form.error': 'Greška pri slanju poruke. Molim pokušajte ponovo.'
    }
};

// Complete translations function
function applyTranslations(language) {
    console.log('🔄 Applying translations for:', language);
    
    const translations = {
        en: {
            'loading.text': 'Loading portfolio...',
            'nav.home': 'Home', 'nav.about': 'About', 'nav.portfolio': 'Portfolio', 'nav.cv': 'CV', 'nav.contact': 'Contact',
            'hero.title': 'Hi, I am <span class="highlight">Aleksandar Janković</span>',
            'hero.subtitle': 'Back End | DataBase',
            'hero.intro1': 'I am a final year student at the Higher School of Electrical Engineering and Computer Science, in the final phase of my studies (thesis defense remaining). I am currently employed at NCR Voyix as Level 1 Support – Point of Sale for Sainsbury\'s stores, where I gain practical experience working with POS systems and technical support.',
            'hero.intro2': 'I have a particular interest in back-end development and database work, with the goal of further professional advancement in this field. In the near future, I plan to expand my knowledge to front-end technologies as well, in order to build a complete full-stack profile.',
            'hero.viewWork': 'View my work', 'hero.contact': 'Contact me',
            'about.title': 'About me',
            'about.paragraph1': 'I was born and raised in Užice, where during high school through various jobs and internships I gained my first experiences. The internship was focused on working with economy-related programs, which largely relied on data storage, records and their functional application. It was there that I first encountered database logic and information processing processes, which awakened my interest and laid the foundation for further development in the field of programming.',
            'about.paragraph2': 'After graduating from high school, I moved to Belgrade, where I started studying electrical engineering and computer science and further directed my path towards IT. During my studies, I explored various programming methods, but I always focused most on the logic of creation and program functionality. My questions were "Why?" and "How?" – why does the system work exactly like that and how does it actually transmit a "message" through its data flow.',
            'about.paragraph3': 'This way of thinking naturally directed me towards backend development, primarily towards learning Spring Boot. Backend allows me to deal with what inspires me the most – understanding data logic, connecting processes and building a stable foundation on which every functional software relies.',
            'about.skillsTitle': 'Main skills:',
            'portfolio.title': 'Portfolio projects',
            'portfolio.teamble.title': 'Teamble - Project Manager Application',
            'portfolio.teamble.description': 'An application designed for efficient organization and tracking of projects, tasks and team collaboration',
            'portfolio.teambuildstay.title': 'TeamBuildStay - House Reservations',
            'portfolio.teambuildstay.description': 'An application that enables easy search and reservation of private houses, especially intended for organizing team building events',
            'portfolio.video.title': 'Video Editing Projects',
            'portfolio.video.description': 'Professional video editing projects using Adobe Premiere Pro and CapCut',
            'cv.title': 'CV & Education', 'cv.education.title': 'Education',
            'cv.education.college.date': '2020 - Present',
            'cv.education.college.school': 'Higher School of Electrical Engineering and Computer Science',
            'cv.education.college.field': 'Field: Computer Engineering',
            'cv.education.college.location': 'Location: Belgrade',
            'cv.education.college.status': 'Status: Final year (thesis defense remaining)',
            'cv.education.highschool.date': '2016 - 2020',
            'cv.education.highschool.school': 'Economic School Užice',
            'cv.education.highschool.field': 'Field: Financial Administrator',
            'cv.education.highschool.location': 'Location: Užice',
            'cv.experience.title': 'Work experience',
            'cv.experience.current.date': 'April 2025 - Present',
            'cv.experience.current.position': 'Level 1 Support Point of Sale - Sainsbury\'s',
            'cv.experience.current.company': 'NCR Voyix - Belgrade',
            'cv.experience.current.task1': 'Strong technical foundation: Skills in diagnostics, maintenance and optimization of POS and self-service checkouts',
            'cv.experience.current.task2': 'Analytical thinking and problem solving under time pressure',
            'cv.experience.current.task3': 'Working with IT infrastructure and corporate software tools',
            'cv.experience.previous.date': 'January 2024 - April 2025',
            'cv.experience.previous.position': 'Fleet Maintenance Support',
            'cv.experience.previous.company': 'SMJ-Freight - Remote',
            'cv.experience.previous.task1': 'Maintenance and control of regular vehicle inspections and repairs',
            'cv.experience.previous.task2': 'Efficient communication with drivers, mechanics and managers',
            'cv.experience.previous.task3': 'Professional communication with services across the USA',
            'cv.skills.title': 'Additional skills', 'cv.skills.languages.title': 'Languages and software',
            'cv.skills.languages.english': '<strong>English:</strong> Advanced level',
            'cv.skills.languages.office': '<strong>MS Office:</strong> Word, Excel, PowerPoint',
            'cv.skills.languages.video': '<strong>Video editing:</strong> Adobe Premiere Pro, CapCut',
            'cv.skills.languages.programming': '<strong>Programming:</strong> Java, Spring Boot, Docker, MySQL, Git, EmailJS, XAMPP, DBeaver',
            'contact.title': 'Contact me', 'contact.info.title': 'Information',
            'contact.info.location': 'Belgrade', 'contact.info.linkedin': 'LinkedIn Profile', 'contact.info.github': 'GitHub Profile',
            'contact.form.name': 'Your name', 'contact.form.email': 'Your email', 'contact.form.subject': 'Subject',
            'contact.form.message': 'Your message', 'contact.form.submit': 'Send message',
            'footer.copyright': '&copy; 2025 Aleksandar Janković Portfolio. All rights reserved.',
            
            // Form notifications
            'form.fillAllFields': 'Please fill in all fields.',
            'form.validEmail': 'Please enter a valid email.',
            'form.sending': 'Sending message...',
            'form.success': 'Message sent successfully!',
            'form.error': 'Error sending message. Please try again.'
        },
        sr: {
            'loading.text': 'Učitavanje portfolija...',
            'nav.home': 'Početna', 'nav.about': 'O meni', 'nav.portfolio': 'Portfolio', 'nav.cv': 'CV', 'nav.contact': 'Kontakt',
            'hero.title': 'Zdravo, ja sam <span class="highlight">Aleksandar Janković</span>',
            'hero.subtitle': 'Back End | DataBase',
            'hero.intro1': 'Završio sam studije na Visokoj školi elektrotehnike i računarstva, smer Računarska tehnika. Trenutno sam zaposlen u kompaniji NCR Voyix na poziciji Level 1 Support – Point of Sale za Sainsbury\'s prodavnice, gde stičem praktično iskustvo u radu sa POS sistemima i tehničkom podrškom.',
            'hero.intro2': 'Posebno interesovanje usmeravam ka back-end razvoju i radu sa bazama podataka, sa ciljem daljeg profesionalnog usavršavanja u ovoj oblasti. U skorijoj budućnosti planiram da proširim znanje i na front-end tehnologije, kako bih izgradio kompletan full-stack profil.',
            'hero.viewWork': 'Vidi moj rad', 'hero.contact': 'Kontaktiraj me',
            'about.title': 'O meni',
            'about.paragraph1': 'Rođen sam i odrastao u Užicu, gde sam tokom srednje škole kroz različite poslove i stručnu praksu stekao svoja prva iskustva. Praksa je bila usmerena na rad sa programima vezanim za ekonomiju, koji su se u velikoj meri oslanjali na skladištenje podataka, evidenciju i njihovu funkcionalnu primenu. Upravo tu sam se prvi put susreo sa logikom baza i procesima obrade informacija, što je probudilo moje interesovanje i postavilo temelje za dalji razvoj u oblasti programiranja.',
            'about.paragraph2': 'Nakon završetka srednje škole preselio sam se u Beograd, gde sam započeo studije elektrotehnike i računarstva i dodatno usmerio svoj put ka IT-u. Tokom studija istraživao sam različite metode programiranja, ali sam se uvek najviše zadržavao na logici kreiranja i funkcionalnosti programa. Moja pitanja su bila „Zašto?" i „Kako?" – zašto sistem funkcioniše baš tako i kako zapravo prenosi „poruku" kroz svoj tok podataka.',
            'about.paragraph3': 'Ovakav način razmišljanja prirodno me je usmerio ka backend razvoju, a prvenstveno ka učenju Spring Boot-a. Backend mi omogućava da se bavim onim što me najviše inspiriše – razumevanjem logike podataka, povezivanjem procesa i izgradnjom stabilne osnove na kojoj se oslanja svaki funkcionalan softver.',
            'about.skillsTitle': 'Glavne veštine:',
            'portfolio.title': 'Portfolio projekti',
            'portfolio.teamble.title': 'Teamble - Project Manager Aplikacija',
            'portfolio.teamble.description': 'Aplikacija dizajnirana za efikasnu organizaciju i praćenje projekata, zadataka i timske saradnje',
            'portfolio.teambuildstay.title': 'TeamBuildStay - Rezervacije kuća',
            'portfolio.teambuildstay.description': 'Aplikacija koja omogućava jednostavno pretraživanje i rezervaciju privatnih kuća, posebno namenjenih za organizaciju team building događaja',
            'portfolio.video.title': 'Video Montaža Projekti',
            'portfolio.video.description': 'Profesionalni video montaža projekti koristeći Adobe Premiere Pro i CapCut',
            'cv.title': 'CV & Obrazovanje', 'cv.education.title': 'Obrazovanje',
            'cv.education.college.date': '2020 - Trenutno',
            'cv.education.college.school': 'Visoka škola elektrotehnike i računarstva',
            'cv.education.college.field': 'Smer: Računarska tehnika',
            'cv.education.college.location': 'Mesto: Beograd',
            'cv.education.college.status': 'Status: Završna godina (preostala odbrana diplomskog rada)',
            'cv.education.highschool.date': '2016 - 2020',
            'cv.education.highschool.school': 'Ekonomska škola Užice',
            'cv.education.highschool.field': 'Smer: Finansijski administrator',
            'cv.education.highschool.location': 'Mesto: Užice',
            'cv.experience.title': 'Radno iskustvo',
            'cv.experience.current.date': 'April 2025 - Trenutno',
            'cv.experience.current.position': 'Level 1 Support Point of Sale - Sainsbury\'s',
            'cv.experience.current.company': 'NCR Voyix - Beograd',
            'cv.experience.current.task1': 'Snažna tehnička osnova: Veštine u dijagnostici, održavanju i optimizaciji POS i samouslužnih kasa',
            'cv.experience.current.task2': 'Analitičko razmišljanje i rešavanje problema pod pritiskom vremena',
            'cv.experience.current.task3': 'Rad sa IT infrastrukturom i korporativnim softverskim alatima',
            'cv.experience.previous.date': 'Januar 2024 - April 2025',
            'cv.experience.previous.position': 'Fleet Maintenance Support',
            'cv.experience.previous.company': 'SMJ-Freight - Remote',
            'cv.experience.previous.task1': 'Održavanje i kontrola redovnih inspekcija i popravki vozila',
            'cv.experience.previous.task2': 'Efikasna komunikacija sa vozačima, mehaničarima i menadžerima',
            'cv.experience.previous.task3': 'Profesionalna komunikacija sa servisima širom SAD-a',
            'cv.skills.title': 'Dodatne veštine', 'cv.skills.languages.title': 'Jezici i softver',
            'cv.skills.languages.english': '<strong>Engleski:</strong> Napredni nivo',
            'cv.skills.languages.office': '<strong>MS Office:</strong> Word, Excel, PowerPoint',
            'cv.skills.languages.video': '<strong>Video montaža:</strong> Adobe Premiere Pro, CapCut',
            'cv.skills.languages.programming': '<strong>Programiranje:</strong> Java, Spring Boot, Docker, MySQL, Git, EmailJS, XAMPP, DBeaver',
            'contact.title': 'Kontaktiraj me', 'contact.info.title': 'Informacije',
            'contact.info.location': 'Belgrade', 'contact.info.linkedin': 'LinkedIn Profile', 'contact.info.github': 'GitHub Profile',
            'contact.form.name': 'Vaše ime', 'contact.form.email': 'Vaš email', 'contact.form.subject': 'Naslov',
            'contact.form.message': 'Vaša poruka', 'contact.form.submit': 'Pošalji poruku',
            'footer.copyright': '&copy; 2025 Aleksandar Janković Portfolio. Sva prava zadržana.',
            
            // Form notifications
            'form.fillAllFields': 'Molimo popunite sva polja.',
            'form.validEmail': 'Molimo unesite validan email.',
            'form.sending': 'Poruka se šalje...',
            'form.success': 'Poruka je uspešno poslata!',
            'form.error': 'Greška pri slanju poruke. Pokušaj ponovo.'
        }
    };
    
    const currentTranslations = translations[language];
    if (!currentTranslations) return;
    
    // Apply translations
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    console.log('🔍 Found', elementsToTranslate.length, 'elements to translate');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentTranslations[key]) {
            element.innerHTML = currentTranslations[key];
            console.log('✅ Translated:', key);
        } else {
            console.log('❌ MISSING TRANSLATION for:', key);
        }
    });
    
    // Apply placeholders  
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (currentTranslations[key]) {
            element.placeholder = currentTranslations[key];
        }
    });
    
    console.log('🎯 Translations applied for', language);
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio Clean Script Loaded!');
    
    // Remove loading screen
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hide');
        document.body.classList.add('loaded');
    }
    
    // Initialize toggles
    setTimeout(() => {
        initLanguageToggle();
        initThemeToggle();
        initContactForm();
    }, 100);
});

// Language toggle
function initLanguageToggle() {
    const languageToggle = document.getElementById('languageToggle');
    const languageText = document.getElementById('languageText');
    
    if (!languageToggle || !languageText) return;
    
    // Set initial language
    const savedLanguage = localStorage.getItem('language') || 'sr';
    languageText.textContent = savedLanguage === 'en' ? 'SRB' : 'ENG';
    document.documentElement.setAttribute('lang', savedLanguage);
    applyTranslations(savedLanguage);
    
    languageToggle.addEventListener('click', function(e) {
        e.preventDefault();
        const currentText = languageText.textContent.trim();
        
        if (currentText === 'ENG') {
            languageText.textContent = 'SRB';
            document.documentElement.setAttribute('lang', 'en');
            localStorage.setItem('language', 'en');
            applyTranslations('en');
        } else {
            languageText.textContent = 'ENG';
            document.documentElement.setAttribute('lang', 'sr');
            localStorage.setItem('language', 'sr');
            applyTranslations('sr');
        }
    });
}

// Theme toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    
    if (!themeToggle || !themeIcon) return;
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
    
    function setTheme(theme) {
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Contact form
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const templateParams = {
            from_name: formData.get('name'),
            from_email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            to_email: 'aleksandarjankovic159@gmail.com'
        };
        
        emailjs.send('service_7eklp8j', 'template_6q8y275', templateParams)
        .then(function(response) {
            const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
            const successMessage = globalTranslations[currentLanguage]['form.success'];
            showNotification(successMessage, 'success');
            contactForm.reset();
        })
        .catch(function(error) {
            const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
            const errorMessage = globalTranslations[currentLanguage]['form.error'];
            showNotification(errorMessage, 'error');
        });
    });
}

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}



