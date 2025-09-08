// Portfolio Contact Form with EmailJS - Clean Version
// No backend dependencies!

// Global translations object for the entire portfolio
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

// Complete translations function - MOVED TO TOP for availability
function applyBasicTranslations(language) {
    console.log('🔄 FUNKCIJA POZVANA! Applying basic translations for:', language);
    console.log('🔍 Function applyBasicTranslations STARTED!');
    
    // Complete translations object
    const translations = {
        en: {
            // Loading
            'loading.text': 'Loading portfolio...',
            
            // Navigation
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.portfolio': 'Portfolio', 
            'nav.cv': 'CV',
            'nav.contact': 'Contact',
            
            // Hero section
            'hero.title': 'Hi, I am <span class="highlight">Aleksandar Janković</span>',
            'hero.subtitle': 'Back End | DataBase',
            'hero.intro1': 'I am a final year student at the Higher School of Electrical Engineering and Computer Science, in the final phase of my studies (thesis defense remaining). I am currently employed at NCR Voyix as Level 1 Support – Point of Sale for Sainsbury\'s stores, where I gain practical experience working with POS systems and technical support.',
            'hero.intro2': 'I have a particular interest in back-end development and database work, with the goal of further professional advancement in this field. In the near future, I plan to expand my knowledge to front-end technologies as well, in order to build a complete full-stack profile.',
            'hero.viewWork': 'View my work',
            'hero.contact': 'Contact me',
            
            // About section
            'about.title': 'About me',
            'about.paragraph1': 'I was born and raised in Užice, where during high school through various jobs and internships I gained my first experiences. The internship was focused on working with economy-related programs, which largely relied on data storage, records and their functional application. It was there that I first encountered database logic and information processing processes, which awakened my interest and laid the foundation for further development in the field of programming.',
            'about.paragraph2': 'After graduating from high school, I moved to Belgrade, where I started studying electrical engineering and computer science and further directed my path towards IT. During my studies, I explored various programming methods, but I always focused most on the logic of creation and program functionality. My questions were "Why?" and "How?" – why does the system work exactly like that and how does it actually transmit a "message" through its data flow.',
            'about.paragraph3': 'This way of thinking naturally directed me towards backend development, primarily towards learning Spring Boot. Backend allows me to deal with what inspires me the most – understanding data logic, connecting processes and building a stable foundation on which every functional software relies.',
            'about.skillsTitle': 'Main skills:',
            
            // Portfolio section
            'portfolio.title': 'Portfolio projects',
            'portfolio.teamble.title': 'Teamble - Project Manager Application',
            'portfolio.teamble.description': 'An application designed for efficient organization and tracking of projects, tasks and team collaboration',
            'portfolio.teambuildstay.title': 'TeamBuildStay - House Reservations',
            'portfolio.teambuildstay.description': 'An application that enables easy search and reservation of private houses, especially intended for organizing team building events',
            'portfolio.video.title': 'Video Editing Projects',
            'portfolio.video.description': 'Professional video editing projects using Adobe Premiere Pro and CapCut',
            
            // CV section
            'cv.title': 'CV & Education',
            'cv.education.title': 'Education',
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
            'cv.skills.title': 'Additional skills',
            'cv.skills.languages.title': 'Languages and software',
            'cv.skills.languages.english': '<strong>English:</strong> Advanced level',
            'cv.skills.languages.office': '<strong>MS Office:</strong> Word, Excel, PowerPoint',
            'cv.skills.languages.video': '<strong>Video editing:</strong> Adobe Premiere Pro, CapCut',
            'cv.skills.languages.programming': '<strong>Programming:</strong> Java, Spring Boot, Docker, MySQL, Git, XAMPP, DBeaver',
            
            // Contact section
            'contact.title': 'Contact me',
            'contact.info.title': 'Information',
            'contact.info.location': 'Belgrade',
            'contact.info.linkedin': 'LinkedIn Profile',
            'contact.info.github': 'GitHub Profile',
            'contact.form.name': 'Your name',
            'contact.form.email': 'Your email',
            'contact.form.subject': 'Subject',
            'contact.form.message': 'Your message',
            'contact.form.submit': 'Send message',
            
            // Footer
            'footer.copyright': '&copy; 2025 Aleksandar Janković Portfolio. All rights reserved.',
            
            // Form messages
            'form.success': 'Message sent successfully! I will get back to you soon.',
            'form.error': 'Error sending message. Please try again.'
        },
        sr: {
            // Loading
            'loading.text': 'Učitavanje portfolija...',
            
            // Navigation
            'nav.home': 'Početna',
            'nav.about': 'O meni', 
            'nav.portfolio': 'Portfolio',
            'nav.cv': 'CV',
            'nav.contact': 'Kontakt',
            
            // Hero section
            'hero.title': 'Zdravo, ja sam <span class="highlight">Aleksandar Janković</span>',
            'hero.subtitle': 'Back End | DataBase',
            'hero.intro1': 'Završio sam studije na Visokoj školi elektrotehnike i računarstva, smer Računarska tehnika. Trenutno sam zaposlen u kompaniji NCR Voyix na poziciji Level 1 Support – Point of Sale za Sainsbury\'s prodavnice, gde stičem praktično iskustvo u radu sa POS sistemima i tehničkom podrškom.',
            'hero.intro2': 'Posebno interesovanje usmeravam ka back-end razvoju i radu sa bazama podataka, sa ciljem daljeg profesionalnog usavršavanja u ovoj oblasti. U skorijoj budućnosti planiram da proširim znanje i na front-end tehnologije, kako bih izgradio kompletan full-stack profil.',
            'hero.viewWork': 'Vidi moj rad',
            'hero.contact': 'Kontaktiraj me',
            
            // About section
            'about.title': 'O meni',
            'about.paragraph1': 'Rođen sam i odrastao u Užicu, gde sam tokom srednje škole kroz različite poslove i stručnu praksu stekao svoja prva iskustva. Praksa je bila usmerena na rad sa programima vezanim za ekonomiju, koji su se u velikoj meri oslanjali na skladištenje podataka, evidenciju i njihovu funkcionalnu primenu. Upravo tu sam se prvi put susreo sa logikom baza i procesima obrade informacija, što je probudilo moje interesovanje i postavilo temelje za dalji razvoj u oblasti programiranja.',
            'about.paragraph2': 'Nakon završetka srednje škole preselio sam se u Beograd, gde sam započeo studije elektrotehnike i računarstva i dodatno usmerio svoj put ka IT-u. Tokom studija istraživao sam različite metode programiranja, ali sam se uvek najviše zadržavao na logici kreiranja i funkcionalnosti programa. Moja pitanja su bila „Zašto?" i „Kako?" – zašto sistem funkcioniše baš tako i kako zapravo prenosi „poruku" kroz svoj tok podataka.',
            'about.paragraph3': 'Ovakav način razmišljanja prirodno me je usmerio ka backend razvoju, a prvenstveno ka učenju Spring Boot-a. Backend mi omogućava da se bavim onim što me najviše inspiriše – razumevanjem logike podataka, povezivanjem procesa i izgradnjom stabilne osnove na kojoj se oslanja svaki funkcionalan softver.',
            'about.skillsTitle': 'Glavne veštine:',
            
            // Portfolio section
            'portfolio.title': 'Portfolio projekti',
            'portfolio.teamble.title': 'Teamble - Project Manager Aplikacija',
            'portfolio.teamble.description': 'Aplikacija dizajnirana za efikasnu organizaciju i praćenje projekata, zadataka i timske saradnje',
            'portfolio.teambuildstay.title': 'TeamBuildStay - Rezervacije kuća',
            'portfolio.teambuildstay.description': 'Aplikacija koja omogućava jednostavno pretraživanje i rezervaciju privatnih kuća, posebno namenjenih za organizaciju team building događaja',
            'portfolio.video.title': 'Video Montaža Projekti',
            'portfolio.video.description': 'Profesionalni video montaža projekti koristeći Adobe Premiere Pro i CapCut',
            
            // CV section
            'cv.title': 'CV & Obrazovanje',
            'cv.education.title': 'Obrazovanje',
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
            'cv.skills.title': 'Dodatne veštine',
            'cv.skills.languages.title': 'Jezici i softver',
            'cv.skills.languages.english': '<strong>Engleski:</strong> Napredni nivo',
            'cv.skills.languages.office': '<strong>MS Office:</strong> Word, Excel, PowerPoint',
            'cv.skills.languages.video': '<strong>Video montaža:</strong> Adobe Premiere Pro, CapCut',
            'cv.skills.languages.programming': '<strong>Programiranje:</strong> Java, Spring Boot, Docker, MySQL, Git, XAMPP, DBeaver',
            
            // Contact section
            'contact.title': 'Kontaktiraj me',
            'contact.info.title': 'Informacije',
            'contact.info.location': 'Belgrade',
            'contact.info.linkedin': 'LinkedIn Profile',
            'contact.info.github': 'GitHub Profile',
            'contact.form.name': 'Vaše ime',
            'contact.form.email': 'Vaš email',
            'contact.form.subject': 'Naslov',
            'contact.form.message': 'Vaša poruka',
            'contact.form.submit': 'Pošalji poruku',
            
            // Footer
            'footer.copyright': '&copy; 2025 Aleksandar Janković Portfolio. Sva prava zadržana.',
            
            // Form messages
            'form.success': 'Poruka je uspešno poslata! Odgovoriću vam uskoro.',
            'form.error': 'Greška pri slanju poruke. Molim pokušajte ponovo.'
        }
    };
    
    const currentTranslations = translations[language];
    if (!currentTranslations) {
        console.warn('⚠️ No translations found for language:', language);
        return;
    }
    
    // Apply translations to elements with data-translate attribute
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    console.log('🔍 Found', elementsToTranslate.length, 'elements with data-translate');
    
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        console.log('🔍 Processing element with key:', key);
        if (currentTranslations[key]) {
            element.innerHTML = currentTranslations[key];
            console.log('✅ Translated:', key, '→', currentTranslations[key]);
        } else {
            console.log('❌ No translation found for:', key);
        }
    });
    
    // Apply translations to placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        if (currentTranslations[key]) {
            element.placeholder = currentTranslations[key];
            console.log('✅ Translated placeholder:', key, '→', currentTranslations[key]);
        }
    });
    
    // Update document title and meta description
    if (language === 'en') {
        document.title = 'Aleksandar Janković Portfolio | Full Stack Developer';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = 'Portfolio of Aleksandar Janković - Back End | DataBase developer with knowledge of Java, Spring Boot, Docker, MySQL. Final year student of computer engineering.';
        }
    } else {
        document.title = 'Aleksandar Janković Portfolio | Full Stack Developer';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = 'Portfolio Aleksandra Jankovića - Back End | DataBase developer sa znanjem Java, Spring Boot, Docker, MySQL. Student završne godine računarske tehnike.';
        }
    }
    
    console.log('🎯 Complete translations applied for', language);
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio EmailJS Script Loaded - NO BACKEND!');
    
    // ODMAH TESTIRAM TRANSLACIJE!
    console.log('🧪 TESTING TRANSLATIONS IMMEDIATELY...');
    
    // Test if function exists
    console.log('🔍 applyBasicTranslations function exists:', typeof applyBasicTranslations);
    
    // Apply translations IMMEDIATELY
    const testLanguage = localStorage.getItem('language') || 'sr';
    console.log('🌐 Applying translations for:', testLanguage);
    applyBasicTranslations(testLanguage);
    
    // Remove loading screen immediately
    removeLoadingScreen();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize basic features (simplified)
    console.log('🎯 Initializing basic portfolio features...');
    
    // Wait a bit for DOM to be fully ready
    setTimeout(() => {
        console.log('⏰ DOM should be ready now, initializing toggles...');
        
        // Manual check for elements
        console.log('🔍 Manual element check:');
        console.log('- languageToggle:', document.getElementById('languageToggle'));
        console.log('- languageText:', document.getElementById('languageText'));
        console.log('- themeToggle:', document.getElementById('themeToggle'));
        console.log('- themeIcon:', document.getElementById('themeIcon'));
        
        initLanguageToggle();
        initThemeToggle();
    }, 100);
});

// Remove loading screen
function removeLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        console.log('🎯 Removing loading screen...');
        loadingScreen.classList.add('hide');
        document.body.classList.add('loaded');
        
        // Remove loading screen from DOM after transition
        setTimeout(() => {
            if (loadingScreen.parentNode) {
                loadingScreen.remove();
                console.log('✅ Loading screen removed!');
            }
        }, 500);
    }
}

function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            console.log('📝 Contact form submitted');
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            console.log('📋 Form data:', { name, email, subject, message });
            
            // Basic validation
            if (!name || !email || !subject || !message) {
                console.warn('❌ Validation failed: Missing fields');
                showNotification('Molimo popunite sva polja.', 'error');
                return;
            }
            
            if (!isValidEmail(email)) {
                console.warn('❌ Validation failed: Invalid email');
                showNotification('Molimo unesite validan email.', 'error');
                return;
            }
            
            console.log('✅ Validation passed, sending via EmailJS...');
            showNotification('Poruka se šalje...', 'info');
            
            // Send via EmailJS - NO LOCALHOST!
            sendEmailViaEmailJS(name, email, subject, message);
        });
    }
}

function sendEmailViaEmailJS(name, email, subject, message) {
    console.log('🔄 sendEmailViaEmailJS called');
    
    // Check if EmailJS is loaded
    if (typeof emailjs === 'undefined') {
        console.log('📦 Loading EmailJS library...');
        
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.onload = () => {
            console.log('✅ EmailJS library loaded!');
            emailjs.init('eZ1ToHn60D72IrUw-');
            actualSendEmail(name, email, subject, message);
        };
        script.onerror = () => {
            console.error('❌ Failed to load EmailJS library!');
            showNotification('Greška pri učitavanju email servisa.', 'error');
        };
        document.head.appendChild(script);
    } else {
        console.log('✅ EmailJS already loaded!');
        actualSendEmail(name, email, subject, message);
    }
}

function actualSendEmail(name, email, subject, message) {
    console.log('📧 Sending email with EmailJS...');
    
    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        to_email: 'aleksandarjankovic159@gmail.com'
    };
    
    console.log('📊 Template params:', templateParams);
    
    emailjs.send(
        'service_7eklp8j',    // Service ID
        'template_6q8y275',   // Template ID
        templateParams
    )
    .then(function(response) {
        console.log('✅ SUCCESS! Email sent:', response.status, response.text);
        const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
        const successMessage = globalTranslations[currentLanguage]['form.success'];
        showNotification(successMessage, 'success');
        document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
        console.error('❌ ERROR sending email:', error);
        const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
        const errorMessage = globalTranslations[currentLanguage]['form.error'];
        showNotification(errorMessage, 'error');
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showNotification(message, type = 'info') {
    console.log(`📢 Notification (${type}): ${message}`);
    
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

// Language Toggle functionality
function initLanguageToggle() {
    console.log('🌐 Initializing language toggle...');
    const languageToggle = document.getElementById('languageToggle');
    const languageText = document.getElementById('languageText');
    
    console.log('🔍 Debug - languageToggle element:', languageToggle);
    console.log('🔍 Debug - languageText element:', languageText);
    
    if (languageToggle && languageText) {
        console.log('✅ Both elements found, adding event listener...');
        
        // Set initial language button text only
        const savedLanguage = localStorage.getItem('language') || 'sr';
        console.log('📋 Initial language:', savedLanguage);
        if (savedLanguage === 'en') {
            languageText.textContent = 'SRB';
            document.documentElement.setAttribute('lang', 'en');
        } else {
            languageText.textContent = 'ENG';
            document.documentElement.setAttribute('lang', 'sr');
        }
        languageToggle.addEventListener('click', function(e) {
            console.log('🔥 Language button clicked!');
            e.preventDefault();
            const currentText = languageText.textContent.trim();
            console.log('📋 Current text:', currentText);
            
            if (currentText === 'ENG') {
                languageText.textContent = 'SRB';
                document.documentElement.setAttribute('lang', 'en');
                localStorage.setItem('language', 'en');
                applyBasicTranslations('en');
                console.log('🌐 Language switched to English');
            } else {
                languageText.textContent = 'ENG';
                document.documentElement.setAttribute('lang', 'sr');
                localStorage.setItem('language', 'sr');
                applyBasicTranslations('sr');
                console.log('🌐 Language switched to Serbian');
            }
        });
        console.log('✅ Language toggle initialized');
    } else {
        console.error('❌ Language toggle elements not found!');
        console.log('languageToggle:', languageToggle);
        console.log('languageText:', languageText);
    }
}

// Theme Toggle functionality
function initThemeToggle() {
    console.log('🌙 Initializing theme toggle...');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    
    console.log('🔍 Debug - themeToggle element:', themeToggle);
    console.log('🔍 Debug - themeIcon element:', themeIcon);
    
    if (themeToggle && themeIcon) {
        console.log('✅ Both theme elements found, setting up...');
        
        // Set default theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        
        themeToggle.addEventListener('click', function(e) {
            console.log('🔥 Theme button clicked!');
            e.preventDefault();
            const currentTheme = body.getAttribute('data-theme');
            console.log('📋 Current theme:', currentTheme);
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
        
        function setTheme(theme) {
            console.log('🎨 Setting theme to:', theme);
            body.setAttribute('data-theme', theme);
            localStorage.setItem('theme', theme);
            
            if (theme === 'dark') {
                themeIcon.className = 'fas fa-sun';
                console.log('🌙 Theme switched to dark mode');
            } else {
                themeIcon.className = 'fas fa-moon';
                console.log('☀️ Theme switched to light mode');
            }
        }
        
        console.log('✅ Theme toggle initialized');
    } else {
        console.error('❌ Theme toggle elements not found!');
        console.log('themeToggle:', themeToggle);
        console.log('themeIcon:', themeIcon);
    }
}

// END OF FILE
