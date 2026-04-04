document.addEventListener('DOMContentLoaded', () => {

    /* =========================================
       WhatsApp Integration
       ========================================= */
    const waButton = document.getElementById('wa-btn');
    if (waButton) {
        waButton.addEventListener('click', (e) => {
            e.preventDefault();
            const phoneNumber = '393495698345';
            const message = "Ciao Davide, ho bisogno di un intervento idraulico. Mi trovo in [inserire zona]. Potresti ricontattarmi per favore?";
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    /* =========================================
       Mobile Hamburger Menu
       ========================================= */
    const hamburgerBtn = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            // Toggle hamburger icon
            const icon = hamburgerBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.replace('ph-list', 'ph-x');
            } else {
                icon.classList.replace('ph-x', 'ph-list');
            }
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = hamburgerBtn.querySelector('i');
                icon.classList.replace('ph-x', 'ph-list');
            });
        });
    }

    /* =========================================
       Sticky Header Resize on Scroll
       ========================================= */
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    /* =========================================
       Scroll Animations (Intersection Observer)
       ========================================= */
    const animElements = document.querySelectorAll('.animate-on-scroll');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15 // Trigger when 15% is visible
        };

        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Stop observing once animated
                    obs.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animElements.forEach(el => {
            observer.observe(el);
        });
    } else {
        // Fallback for older browsers
        animElements.forEach(el => el.classList.add('visible'));
    }
});
