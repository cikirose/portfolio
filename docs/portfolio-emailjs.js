// Portfolio Contact Form with EmailJS - Clean Version
// No backend dependencies!

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Portfolio EmailJS Script Loaded - NO BACKEND!');
    
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
        showNotification('Poruka je uspešno poslata!', 'success');
        document.getElementById('contactForm').reset();
    })
    .catch(function(error) {
        console.error('❌ ERROR sending email:', error);
        showNotification('Greška pri slanju poruke. Pokušaj ponovo.', 'error');
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
        
        // Set initial language
        const savedLanguage = localStorage.getItem('language') || 'sr';
        console.log('📋 Initial language:', savedLanguage);
        if (savedLanguage === 'en') {
            languageText.textContent = 'SRB';
            document.documentElement.setAttribute('lang', 'en');
        } else {
            languageText.textContent = 'ENG';
            document.documentElement.setAttribute('lang', 'sr');
        }
        applyBasicTranslations(savedLanguage);
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

// Basic translations - simplified version
function applyBasicTranslations(language) {
    console.log('🔄 Applying basic translations for:', language);
    
    // Basic translations object
    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.portfolio': 'Portfolio', 
            'nav.cv': 'CV',
            'nav.contact': 'Contact',
            'contact.title': 'Contact me',
            'contact.form.name': 'Your name',
            'contact.form.email': 'Your email',
            'contact.form.subject': 'Subject',
            'contact.form.message': 'Your message',
            'contact.form.submit': 'Send message'
        },
        sr: {
            'nav.home': 'Početna',
            'nav.about': 'O meni', 
            'nav.portfolio': 'Portfolio',
            'nav.cv': 'CV',
            'nav.contact': 'Kontakt',
            'contact.title': 'Kontaktiraj me',
            'contact.form.name': 'Vaše ime',
            'contact.form.email': 'Vaš email',
            'contact.form.subject': 'Naslov',
            'contact.form.message': 'Vaša poruka',
            'contact.form.submit': 'Pošalji poruku'
        }
    };
    
    const currentTranslations = translations[language];
    if (!currentTranslations) {
        console.warn('⚠️ No translations found for language:', language);
        return;
    }
    
    // Apply translations to elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (currentTranslations[key]) {
            element.innerHTML = currentTranslations[key];
            console.log('✅ Translated:', key, '→', currentTranslations[key]);
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
    
    console.log('🎯 Basic translations applied for', language);
}
