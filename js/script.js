// ===========================
// MOBILE MENU TOGGLE
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }
});

// ===========================
// FORM SUBMISSION HANDLING
// ===========================

const quoteForm = document.getElementById('quoteForm');
const contactForm = document.getElementById('contactForm');

if (quoteForm) {
    quoteForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(this, 'quote');
    });
}

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission(this, 'contact');
    });
}

function handleFormSubmission(form, formType) {
    // Get form data
    const formData = new FormData(form);
    const data = {
        type: formType,
        timestamp: new Date().toLocaleString(),
        data: {}
    };

    // Convert FormData to object
    for (let [key, value] of formData.entries()) {
        data.data[key] = value;
    }

    // Store data in localStorage (for demo purposes)
    const storedSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    storedSubmissions.push(data);
    localStorage.setItem('formSubmissions', JSON.stringify(storedSubmissions));

    // Get phone number for WhatsApp message
    const phoneNumber = formData.get('phone') || formData.get('contactPhone');
    const fullName = formData.get('fullName') || formData.get('name') || 'Valued Customer';
    const service = formData.get('service');

    // Create WhatsApp message
    createWhatsAppMessage(fullName, phoneNumber, service, formType);

    // Show success message
    showSuccessMessage(form, fullName);

    // Reset form
    setTimeout(() => {
        form.reset();
    }, 500);
}

// ===========================
// WHATSAPP MESSAGE CREATION
// ===========================

function createWhatsAppMessage(name, phone, service, formType) {
    let message = '';
    
    if (formType === 'quote') {
        message = `Hello! I am ${name}, I recently submitted an inquiry on Ram Enterprises website for ${service}. Please contact me at ${phone}.`;
    } else if (formType === 'contact') {
        message = `Hello! I am ${name}, I submitted a contact form on Ram Enterprises website regarding ${service}. Please get back to me at your earliest convenience.`;
    }

    // Create WhatsApp link
    const whatsappLink = `https://wa.me/919075043523?text=${encodeURIComponent(message)}`;
    
    // Log for debugging
    console.log('WhatsApp Link:', whatsappLink);
}

// ===========================
// SUCCESS MESSAGE DISPLAY
// ===========================

function showSuccessMessage(form, customerName) {
    // Create success message element
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.innerHTML = `
        <div style="background-color: #4caf50; color: white; padding: 20px; border-radius: 5px; margin-bottom: 20px; text-align: center;">
            <h3 style="margin: 0 0 10px 0;">✓ Thank You, ${customerName}!</h3>
            <p style="margin: 0;">Your inquiry has been received. We'll contact you shortly.</p>
            <p style="margin: 10px 0 0 0; font-size: 0.9rem;">Check your WhatsApp for automatic message to connect with us.</p>
        </div>
    `;
    
    // Insert message after form
    form.parentNode.insertBefore(successMessage, form.nextSibling);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
        successMessage.remove();
    }, 5000);

    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ===========================
// ACTIVE NAV LINK HANDLER
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.pathname;
    const menuItems = document.querySelectorAll('.nav-links a');

    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        // Check if the href matches the current page
        if (href === currentLocation || 
            (currentLocation === '/' && href === 'index.html') ||
            currentLocation.includes(href.replace('/', ''))) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// ===========================
// SMOOTH SCROLL ANCHOR LINKS
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// FORM VALIDATION
// ===========================

function validatePhoneNumber(phone) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
}

function validateEmail(email) {
    if (!email) return true; // Email is optional
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Add real-time validation
const phoneInputs = document.querySelectorAll('input[type="tel"]');
phoneInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validatePhoneNumber(this.value)) {
            this.style.borderColor = '#f44336';
            this.title = 'Please enter a valid 10-digit phone number';
        } else {
            this.style.borderColor = '';
            this.title = '';
        }
    });
});

const emailInputs = document.querySelectorAll('input[type="email"]');
emailInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value && !validateEmail(this.value)) {
            this.style.borderColor = '#f44336';
            this.title = 'Please enter a valid email address';
        } else {
            this.style.borderColor = '';
            this.title = '';
        }
    });
});

// ===========================
// SCROLL TO TOP BUTTON
// ===========================

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        // Show scroll to top button if exists
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        if (scrollTopBtn) {
            scrollTopBtn.style.display = 'block';
        }
    } else {
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        if (scrollTopBtn) {
            scrollTopBtn.style.display = 'none';
        }
    }
});

// ===========================
// CLICK TO CALL INTEGRATION
// ===========================

// This is handled natively by the href="tel:" links
// Browsers automatically handle tel: protocol

// ===========================
// ANALYTICS HELPER
// ===========================

function trackEvent(eventName, eventData) {
    // This can be integrated with Google Analytics or other tools
    console.log('Event Tracked:', eventName, eventData);
    
    // Example: Send to analytics service
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

// Track form submissions
document.addEventListener('submit', function(e) {
    const form = e.target;
    if (form.id === 'quoteForm') {
        trackEvent('quote_form_submitted', {
            service: form.querySelector('#service').value
        });
    } else if (form.id === 'contactForm') {
        trackEvent('contact_form_submitted', {
            service: form.querySelector('#contactService').value
        });
    }
}, true);

// ===========================
// WHATSAPP BUTTON TRACKING
// ===========================

document.querySelectorAll('.btn-whatsapp').forEach(btn => {
    btn.addEventListener('click', function(e) {
        trackEvent('whatsapp_click', {
            page: window.location.pathname
        });
    });
});

// ===========================
// CALL BUTTON TRACKING
// ===========================

document.querySelectorAll('a[href^="tel:"]').forEach(btn => {
    btn.addEventListener('click', function(e) {
        trackEvent('call_click', {
            phone: this.getAttribute('href'),
            page: window.location.pathname
        });
    });
});

// ===========================
// PAGE LOAD ANIMATION
// ===========================

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 10);
});

// ===========================
// LAZY LOADING FOR IMAGES
// ===========================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===========================
// NAVBAR HIDE ON SCROLL DOWN
// ===========================

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 80) {
            // Scroll down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scroll up - show navbar
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    navbar.style.transition = 'transform 0.3s ease';
}

// ===========================
// SCROLL-TRIGGERED ANIMATIONS
// ===========================

if ('IntersectionObserver' in window) {
    // Animation configurations
    const animationConfig = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // Scroll animation observer
    const scrollAnimationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Determine animation type based on data attribute or element class
                let animationClass = element.dataset.animation || 'fade-in-active';
                
                element.classList.add(animationClass);
                element.style.opacity = '1';
                
                // Optional: Stop observing after animation to improve performance
                scrollAnimationObserver.unobserve(element);
            }
        });
    }, animationConfig);

    // Observe all elements with data-animation attribute
    document.querySelectorAll('[data-animation]').forEach(element => {
        element.style.opacity = '0';
        scrollAnimationObserver.observe(element);
    });

    // Auto-animate common elements if not already animated
    const elementsToAnimate = [
        { selector: '.service-card', animation: 'fade-in-active', skip: true }, // Already has animation
        { selector: '.feature', animation: 'fade-in-active', skip: true }, // Already has animation
        { selector: '.testimonial-card', animation: 'fade-in-active', skip: true }, // Already has animation
        { selector: '.value-card', animation: 'fade-in-active', skip: true }, // Already has animation
        { selector: '.step', animation: 'fade-in-active', skip: true }, // Already has animation
        { selector: '.contact-info-card', animation: 'fade-in-active', skip: true }, // Already has animation
        { selector: '.mv-card', animation: 'fade-in-active', skip: true }, // Already has animation
        { selector: '.stat-card', animation: 'scale-in-active', skip: true }, // Already has animation
    ];

    // Apply animations to elements that need them
    elementsToAnimate.forEach(config => {
        // Skip if already has animations - these are handled in CSS
        if (config.skip) return;
        
        document.querySelectorAll(config.selector).forEach(element => {
            if (!element.dataset.animation) {
                element.dataset.animation = config.animation;
                element.style.opacity = '0';
                scrollAnimationObserver.observe(element);
            }
        });
    });
}

// ===========================
// BUTTON HOVER ANIMATIONS
// ===========================

document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        // Trigger reflow to restart animation
        void this.offsetWidth;
        // Optional: Add ripple effect on hover
        if (!this.querySelector('.ripple')) {
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
        }
    });
});

// ===========================
// CARD HOVER ANIMATIONS
// ===========================

document.querySelectorAll('.service-card, .feature, .testimonial-card, .step').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animationPlayState = 'paused';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.animationPlayState = 'running';
    });
});

// ===========================
// SCROLL PROGRESS BAR
// ===========================

function createScrollProgressBar() {
    const existingBar = document.getElementById('scrollProgressBar');
    if (existingBar) return;

    const progressBar = document.createElement('div');
    progressBar.id = 'scrollProgressBar';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #d4af37, #22C55E);
        width: 0%;
        z-index: 10001;
        transition: width 0.3s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

// Initialize scroll progress bar on DOM ready
document.addEventListener('DOMContentLoaded', createScrollProgressBar);

// ===========================
// PARALLAX EFFECT (Optional)
// ===========================

function initParallaxEffect() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            element.style.transform = `translateY(${scrollY * speed}px)`;
        });
    });
}

document.addEventListener('DOMContentLoaded', initParallaxEffect);

// ===========================
// MOUSE TRACKING EFFECT
// ===========================

document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.service-card, .feature, .testimonial-card, .value-card');
    
    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Add subtle glow effect
        const xPercent = (x / rect.width) * 100;
        const yPercent = (y / rect.height) * 100;
        
        card.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(212, 175, 55, 0.15) 0%, transparent 50%), var(--white)`;
    });
});

// ===========================
// ENHANCED BUTTON RIPPLE EFFECT
// ===========================

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        // Remove previous ripples
        const oldRipple = this.querySelector('.ripple');
        if (oldRipple) oldRipple.remove();
        
        this.appendChild(ripple);
    });
});

// ===========================
// TEXT TYPING EFFECT
// ===========================

function typeEffect(element, text, speed = 50) {
    if (!element) return;
    
    element.textContent = '';
    let index = 0;
    
    const type = () => {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    };
    
    type();
}

// Apply typing effect to hero title on page load
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && window.location.pathname.includes('index')) {
        const titleText = heroTitle.textContent;
        typeEffect(heroTitle, titleText, 30);
    }
});

// ===========================
// COUNTER ANIMATION
// ===========================

function animateCounter(element, target, duration = 2000) {
    if (!element) return;
    
    const start = parseInt(element.textContent) || 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };
    
    updateCounter();
}

// In viewport counter trigger
if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('[data-counter]');
                counters.forEach(counter => {
                    const target = parseInt(counter.dataset.counter);
                    animateCounter(counter, target);
                });
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    document.querySelectorAll('[data-counter-group]').forEach(group => {
        counterObserver.observe(group);
    });
}

// ===========================
// ELEMENT VISIBILITY ON SCROLL
// ===========================

function addScrollRevealEffect() {
    const reveals = document.querySelectorAll('[data-reveal]');
    
    if ('IntersectionObserver' in window) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        
        reveals.forEach(reveal => {
            revealObserver.observe(reveal);
        });
    }
}

document.addEventListener('DOMContentLoaded', addScrollRevealEffect);

// ===========================
// TEXTURE/PATTERN OVERLAY
// ===========================

function addBackgroundPatterns() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach((section, index) => {
        if (index % 2 === 0) {
            section.style.position = 'relative';
            const pattern = document.createElement('div');
            pattern.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.02;
                background-image: 
                    repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(212, 175, 55, 0.5) 2px, rgba(212, 175, 55, 0.5) 4px);
                pointer-events: none;
                z-index: 0;
            `;
            section.appendChild(pattern);
            
            const children = section.querySelectorAll('*');
            children.forEach(child => {
                if (!child.style.position || child.style.position === 'static') {
                    child.style.position = 'relative';
                }
                child.style.zIndex = '1';
            });
        }
    });
}

document.addEventListener('DOMContentLoaded', addBackgroundPatterns);

// ===========================
// FLOATING ANIMATION FOR IMAGES
// ===========================

document.querySelectorAll('.service-image img, .about-image img').forEach(img => {
    img.style.animation = 'float 3s ease-in-out infinite';
});

// Add float animation to stylesheet
if (!document.querySelector('style[data-float]')) {
    const style = document.createElement('style');
    style.setAttribute('data-float', 'true');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
        }
    `;
    document.head.appendChild(style);
}

// ===========================
// CONSOLE LOG FOR DEBUG
// ===========================

console.log('Ram Enterprises Website Loaded Successfully');
console.log('Phone: 9075043523');
console.log('Email: ramdeshmuk30@gmail.com');
console.log('✨ Advanced Visual Effects Enabled - Enjoy the animations!');
