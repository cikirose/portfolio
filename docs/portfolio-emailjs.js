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
    initLanguageToggle();
    initThemeToggle();
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
    
    if (languageToggle && languageText) {
        languageToggle.addEventListener('click', function() {
            const currentText = languageText.textContent;
            if (currentText === 'ENG') {
                languageText.textContent = 'SRB';
                document.documentElement.setAttribute('lang', 'en');
                console.log('🌐 Language switched to English');
            } else {
                languageText.textContent = 'ENG';
                document.documentElement.setAttribute('lang', 'sr');
                console.log('🌐 Language switched to Serbian');
            }
        });
        console.log('✅ Language toggle initialized');
    } else {
        console.warn('⚠️ Language toggle elements not found');
    }
}

// Theme Toggle functionality
function initThemeToggle() {
    console.log('🌙 Initializing theme toggle...');
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const body = document.body;
    
    if (themeToggle && themeIcon) {
        // Set default theme
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
        
        themeToggle.addEventListener('click', function() {
            const currentTheme = body.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            setTheme(newTheme);
        });
        
        function setTheme(theme) {
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
        console.warn('⚠️ Theme toggle elements not found');
    }
}
