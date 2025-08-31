// Translation data
const translations = {
    sr: {
        // Navigation
        'nav.home': 'Početna',
        'nav.about': 'O meni',
        'nav.portfolio': 'Portfolio',
        'nav.cv': 'CV',
        'nav.contact': 'Kontakt',
        
        // Loading
        'loading.text': 'Učitavanje portfolija...',
        
        // Hero section
        'hero.title': 'Zdravo, ja sam <span class="highlight">Aleksandar Janković</span>',
        'hero.subtitle': 'Level 1 Support Point of Sale - Sainsbury\'s',
        'hero.intro1': 'Student sam završne godine Visoke škole elektrotehnike i računarstva, u završnoj fazi studija (preostala odbrana diplomskog rada). Trenutno sam zaposlen u kompaniji NCR Voyix na poziciji Level 1 Support – Point of Sale za Sainsbury\'s prodavnice, gde stičem praktično iskustvo u radu sa POS sistemima i tehničkom podrškom.',
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
        'footer.copyright': '© 2024 Aleksandar Janković Portfolio. Sva prava zadržana.',
        
        // Form notifications
        'form.fillAllFields': 'Molimo popunite sva polja.',
        'form.validEmail': 'Molimo unesite validan email.',
        'form.sending': 'Poruka se šalje...',
        'form.success': 'Poruka je uspešno poslata!',
        'form.error': 'Greška pri slanju poruke. Pokušaj ponovo.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.portfolio': 'Portfolio',
        'nav.cv': 'CV',
        'nav.contact': 'Contact',
        
        // Loading
        'loading.text': 'Loading portfolio...',
        
        // Hero section
        'hero.title': 'Hello, I am <span class="highlight">Aleksandar Janković</span>',
        'hero.subtitle': 'Level 1 Support Point of Sale - Sainsbury\'s',
        'hero.intro1': 'I am a final year student at the Higher School of Electrical Engineering and Computer Science, in the final phase of my studies (thesis defense remaining). I am currently employed at NCR Voyix as Level 1 Support – Point of Sale for Sainsbury\'s stores, where I am gaining practical experience working with POS systems and technical support.',
        'hero.intro2': 'I focus my interest particularly on back-end development and working with databases, with the goal of further professional development in this field. In the near future, I plan to expand my knowledge to front-end technologies as well, in order to build a complete full-stack profile.',
        'hero.viewWork': 'View my work',
        'hero.contact': 'Contact me',
        
        // About section
        'about.title': 'About me',
        'about.paragraph1': 'I was born and raised in Užice, where during high school through various jobs and professional practice I gained my first experiences. The practice was focused on working with economics-related programs, which largely relied on data storage, record keeping and their functional application. It was there that I first encountered database logic and information processing processes, which awakened my interest and laid the foundation for further development in the field of programming.',
        'about.paragraph2': 'After finishing high school, I moved to Belgrade, where I started studying electrical engineering and computer science and further directed my path towards IT. During my studies, I explored different programming methods, but I always focused most on the logic of creation and functionality of programs. My questions were "Why?" and "How?" – why the system works exactly like that and how it actually transmits the "message" through its data flow.',
        'about.paragraph3': 'This way of thinking naturally directed me towards backend development, primarily towards learning Spring Boot. Backend allows me to deal with what inspires me most – understanding data logic, connecting processes and building a stable foundation on which every functional software relies.',
        'about.skillsTitle': 'Main skills:',
        
        // Portfolio section
        'portfolio.title': 'Portfolio projects',
        'portfolio.teamble.title': 'Teamble - Project Manager Application',
        'portfolio.teamble.description': 'Application designed for efficient organization and tracking of projects, tasks and team collaboration',
        'portfolio.teambuildstay.title': 'TeamBuildStay - House Reservations',
        'portfolio.teambuildstay.description': 'Application that enables easy search and reservation of private houses, specially designed for organizing team building events',
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
        'footer.copyright': '© 2024 Aleksandar Janković Portfolio. All rights reserved.',
        
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
    initLanguageToggle();
    initThemeToggle();
    initNavigation();
    initContactForm();
    initScrollEffects();
    initPortfolioItems();
});

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
    if (language === 'en') {
        document.title = 'Aleksandar Janković Portfolio | Full Stack Developer';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = 'Portfolio of Aleksandar Janković - Level 1 Support Point of Sale engineer with knowledge of Java, Spring Boot, Docker, MySQL. Final year student of computer engineering.';
        }
    } else {
        document.title = 'Aleksandar Janković Portfolio | Full Stack Developer';
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.content = 'Portfolio Aleksandra Jankovića - Level 1 Support Point of Sale engineer sa znanjem Java, Spring Boot, Docker, MySQL. Student završne godine računarske tehnike.';
        }
    }
}

// Theme Toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'light';
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
    const navLinks = document.querySelectorAll('.nav-link');

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
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }

            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
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
            
            // Send data to Spring Boot backend
            const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
            const sendingMessage = translations[currentLanguage]['form.sending'];
            showNotification(sendingMessage, 'info');
            
            // Prepare data for backend
            const contactData = {
                name: name,
                email: email,
                subject: subject,
                message: message
            };
            
            // Send POST request to backend
            fetch('http://localhost:8080/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            })
            .then(response => response.json())
            .then(data => {
                const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
                if (data.success) {
                    const successMessage = translations[currentLanguage]['form.success'];
                    showNotification(successMessage, 'success');
                    contactForm.reset();
                    console.log('Contact saved:', data.contact);
                } else {
                    const errorMessage = translations[currentLanguage]['form.error'];
                    showNotification(errorMessage, 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                const currentLanguage = document.documentElement.getAttribute('lang') || 'sr';
                const errorMessage = translations[currentLanguage]['form.error'];
                showNotification(errorMessage, 'error');
            });
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

// Scroll effects
function initScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });
    
    // Fade in elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Portfolio items functionality
function initPortfolioItems() {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    portfolioItems.forEach(item => {
        item.addEventListener('click', function() {
            // Add click effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
            
            // Here you could add modal or navigation to project details
            console.log('Portfolio item clicked:', this.querySelector('h3').textContent);
        });
        
        // Add hover effects
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
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

// Loading screen management
window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    
    // Hide loading screen after a brief delay
    setTimeout(() => {
        loadingScreen.classList.add('hide');
        document.body.classList.add('loaded');
        
        // Remove loading screen from DOM after transition
        setTimeout(() => {
            if (loadingScreen.parentNode) {
                loadingScreen.remove();
            }
        }, 500);
    }, 1500); // Show loading for 1.5 seconds
});
