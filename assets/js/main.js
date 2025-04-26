// Dark mode functionality
const darkModeToggle = document.getElementById('darkModeToggle');
const darkModeToggleMobile = document.getElementById('darkModeToggleMobile'); // Mobil buton
const html = document.documentElement;

function setDarkMode(isDark) {
    if (isDark) {
        html.classList.add('dark');
        localStorage.setItem('darkMode', 'true');
    } else {
        html.classList.remove('dark');
        localStorage.setItem('darkMode', 'false');
    }
    // Update mobile button icon state if needed (optional)
    // Example: Update icons based on html class
    // const moonIconMobile = darkModeToggleMobile?.querySelector('.fa-moon');
    // const sunIconMobile = darkModeToggleMobile?.querySelector('.fa-sun');
    // if (moonIconMobile && sunIconMobile) {
    //     moonIconMobile.classList.toggle('dark:hidden', isDark);
    //     sunIconMobile.classList.toggle('hidden', !isDark);
    //     sunIconMobile.classList.toggle('dark:inline', isDark);
    // }
}


function toggleDarkMode() {
    setDarkMode(!html.classList.contains('dark'));
}

// Check for saved dark mode preference
function initDarkMode() {
    setDarkMode(localStorage.getItem('darkMode') === 'true' ||
               (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('darkMode') === null));
}


// Mobile menu functionality
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMobileMenu() {
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        // mobileMenu.classList.toggle('active'); // 'active' class'ı kullanılıyorsa
    }
}

// Smooth scroll for anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '' || href.startsWith('#/') ) return; // Temel # veya boş href'leri veya hatalı formatları yoksay

            try {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();

                    const headerOffset = document.querySelector('nav')?.offsetHeight || 70;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });

                    // Close mobile menu if open and link is clicked
                    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                         mobileMenu.classList.add('hidden');
                         // mobileMenu.classList.remove('active');
                    }
                }
            } catch (error) {
                 // Geçersiz selector için hata yönetimi (örn. href="#[1]")
                 console.error("Smooth scroll target error for href:", href, error);
            }
        });
    });
}


// Intersection Observer for animations
function initScrollAnimations() {
    const elementsToAnimate = document.querySelectorAll('section[id], .card');
    if (typeof IntersectionObserver === 'undefined' || !elementsToAnimate.length) return;

    const observer = new IntersectionObserver((entries, observerInstance) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observerInstance.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
}

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const navHeight = document.querySelector('nav')?.offsetHeight || 70;

    if (!sections.length || !navLinks.length) return;

    let activeSectionId = '';

    const onScroll = () => {
        // Sayfanın en altına yakın olup olmadığını kontrol et
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.offsetHeight;
        const nearBottom = (windowHeight + scrollPosition) >= (bodyHeight - 50); // 50px tolerans

        let currentSectionFound = false;
        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 50; // Adjusted offset
             const sectionBottom = sectionTop + section.offsetHeight;

             // Eğer scroll pozisyonu bölümün içindeyse ve henüz bir bölüm bulmadıysak
             // VEYA sayfanın en altındaysak ve bu son bölümse
            if ((scrollPosition >= sectionTop && scrollPosition < sectionBottom) || (nearBottom && section === sections[sections.length-1])) {
                  activeSectionId = section.getAttribute('id');
                  currentSectionFound = true; // İşaretle
             }
        });

        // Eğer scroll en üstteyse veya hiçbir bölüm bulunamadıysa (boşlukta olma durumu)
        if (scrollPosition < sections[0].offsetTop - navHeight - 50 || !currentSectionFound && !nearBottom) {
             activeSectionId = '';
        }

        navLinks.forEach(link => {
            const linkHref = link.getAttribute('href');
            link.classList.remove('text-blue-600', 'dark:text-blue-400', 'font-bold');
            link.classList.add('hover:text-blue-600', 'dark:hover:text-blue-400');

            if (linkHref === `#${activeSectionId}`) {
                link.classList.add('text-blue-600', 'dark:text-blue-400', 'font-bold');
                link.classList.remove('hover:text-blue-600', 'dark:hover:text-blue-400');
            }
        });
    };

    window.addEventListener('scroll', onScroll, { passive: true }); // Performans için passive eklendi
    onScroll(); // Initial check
}


// Contact Form Handling (Formspree with Static English Text)
function initContactForm() {
    const form = document.getElementById('contactForm');
    const submitButton = form?.querySelector('button[type="submit"]');
    const submitButtonText = document.getElementById('submitButtonText');
    const submitSpinner = form?.querySelector('#submitSpinner');
    const formMessage = document.getElementById('formMessage');
    const formAction = "https://formspree.io/f/mjkwkwqj"; // Your Formspree endpoint

    if (!form || !submitButton || !submitButtonText || !submitSpinner || !formMessage) {
        return; // Exit if elements are missing
    }

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        formMessage.classList.add('hidden');
        formMessage.textContent = '';
        submitButton.disabled = true;
        submitSpinner.classList.remove('hidden');
        submitButtonText.textContent = 'Sending...'; // Static English text

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch(formAction, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                formMessage.textContent = 'Message sent successfully!'; // Static English text
                formMessage.className = 'text-center mt-4 text-green-600 dark:text-green-400';
                formMessage.classList.remove('hidden');
                form.reset();
                 setTimeout(() => { formMessage.classList.add('hidden'); }, 5000);
            } else {
                const responseData = await response.json().catch(() => ({}));
                let errorMessage = 'Failed to send message. Please try again.'; // Default static English
                 if (responseData?.errors?.length > 0) {
                     errorMessage = responseData.errors.map(err => err.message).join(', ');
                 } else if (response.status === 422) {
                      errorMessage = 'Please check your input and try again.'; // Static English validation error
                 }
                formMessage.textContent = errorMessage;
                formMessage.className = 'text-center mt-4 text-red-600 dark:text-red-400';
                formMessage.classList.remove('hidden');
            }

        } catch (error) {
            console.error('Contact form submission error:', error);
            formMessage.textContent = 'A network error occurred. Please try again later.'; // Static English network error
            formMessage.className = 'text-center mt-4 text-red-600 dark:text-red-400';
            formMessage.classList.remove('hidden');
        } finally {
            submitButton.disabled = false;
            submitSpinner.classList.add('hidden');
            submitButtonText.textContent = 'Send Message'; // Static English text
        }
    });
}


// Scroll to Top Button
function initScrollToTop() {
    const scrollButton = document.getElementById('scrollToTop');
    if (scrollButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                 scrollButton.classList.remove('opacity-0', 'invisible');
                 scrollButton.classList.add('opacity-100', 'visible');
            } else {
                scrollButton.classList.add('opacity-0', 'invisible');
                scrollButton.classList.remove('opacity-100', 'visible');
            }
        }, { passive: true }); // Performance için passive eklendi

        scrollButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Set HTML lang attribute to English
    document.documentElement.lang = 'en';

    initDarkMode();
    initSmoothScroll();
    initScrollAnimations();
    updateActiveNavLink();
    initContactForm();
    initScrollToTop();

    // Event listeners
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
    if (darkModeToggleMobile) {
        darkModeToggleMobile.addEventListener('click', toggleDarkMode);
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking outside
     document.addEventListener('click', (e) => {
         if (mobileMenu && !mobileMenu.classList.contains('hidden') && !mobileMenu.contains(e.target) && mobileMenuBtn && !mobileMenuBtn.contains(e.target)) {
              mobileMenu.classList.add('hidden');
              // mobileMenu.classList.remove('active');
         }
     });


    // Handle window resize - Close mobile menu on larger screens
    window.addEventListener('resize', () => {
        if (mobileMenu && window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) { // md breakpoint (768px)
            mobileMenu.classList.add('hidden');
             // mobileMenu.classList.remove('active');
        }
    });
});