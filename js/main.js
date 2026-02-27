/* ============================================
   BRANDBYUV — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Page Loader
    const loader = document.querySelector('.page-loader');
    if (loader) {
        window.addEventListener('load', () => {
            setTimeout(() => loader.classList.add('hidden'), 400);
        });
        // Fallback: hide after 2s
        setTimeout(() => loader.classList.add('hidden'), 2000);
    }

    // ---- Navbar Scroll ----
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ---- Mobile Navigation ----
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
            document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
        });

        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ---- Active Page Link ----
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });

    // ---- Scroll Animations ----
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });

    // ---- FAQ Accordion ----
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(faq => {
                faq.classList.remove('active');
                faq.querySelector('.faq-answer').style.maxHeight = null;
            });

            // Open clicked (if it wasn't active)
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });

    // ---- Morphing FAB (WhatsApp ↔ Back to Top) ----
    const fab = document.getElementById('fabMorph');
    let fabLastY = window.scrollY;
    let fabTimer = null;

    if (fab) {
        window.addEventListener('scroll', () => {
            const y = window.scrollY;

            if (y < fabLastY && y > 200) {
                // Scrolling up — morph to back-to-top
                fab.classList.add('scrollup');
                fab.title = 'Back to top';
                clearTimeout(fabTimer);
                fabTimer = setTimeout(() => {
                    fab.classList.remove('scrollup');
                    fab.title = 'Chat on WhatsApp';
                }, 2500);
            } else if (y > fabLastY) {
                // Scrolling down — revert to WhatsApp
                fab.classList.remove('scrollup');
                fab.title = 'Chat on WhatsApp';
                clearTimeout(fabTimer);
            }

            fabLastY = y;
        }, { passive: true });

        fab.addEventListener('click', (e) => {
            if (fab.classList.contains('scrollup')) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                window.open('https://wa.me/919544464144', '_blank');
            }
        });
    }

    // ---- Portfolio Filters ----
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 350);
                }
            });
        });
    });

    // ---- Counter Animation ----
    const counters = document.querySelectorAll('.stat-number');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const end = parseInt(target.dataset.count) || parseInt(target.textContent);
                const suffix = target.dataset.suffix || '';
                let current = 0;
                const duration = 2000;
                const step = end / (duration / 16);

                const updateCounter = () => {
                    current += step;
                    if (current < end) {
                        target.textContent = Math.floor(current) + suffix;
                        requestAnimationFrame(updateCounter);
                    } else {
                        target.textContent = end + suffix;
                    }
                };
                updateCounter();
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // ---- Contact Form → WhatsApp ----
    const contactForm = document.getElementById('projectForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const business = document.getElementById('business').value;
            const service = document.getElementById('service').value;
            const budget = document.getElementById('budget').value;
            const details = document.getElementById('details').value;
            const timeline = document.getElementById('timeline').value;

            const message = `*New Project Inquiry — BrandByUV*%0A%0A` +
                `*Name:* ${name}%0A` +
                `*Business:* ${business}%0A` +
                `*Service:* ${service}%0A` +
                `*Budget:* ${budget}%0A` +
                `*Timeline:* ${timeline}%0A` +
                `*Details:* ${details}`;

            const phoneNumber = '919544464144';
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

            window.open(whatsappURL, '_blank');
        });
    }

    // ---- Smooth scroll for anchor links ----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ---- Typing effect for hero (optional enhancement) ----
    const heroTitle = document.querySelector('.hero-typing');
    if (heroTitle) {
        const text = heroTitle.dataset.text;
        heroTitle.textContent = '';
        let i = 0;
        const typeInterval = setInterval(() => {
            heroTitle.textContent += text.charAt(i);
            i++;
            if (i >= text.length) clearInterval(typeInterval);
        }, 40);
    }
});
