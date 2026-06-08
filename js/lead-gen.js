/* ============================================
   BRANDBYUV — Lead Generation & CRO
   Exit-intent popup, scroll CTA, sticky bar
   ============================================ */

(function () {
    'use strict';

    var WHATSAPP_URL = 'https://wa.me/919544464144?text=Hi!%20I%27m%20interested%20in%20BrandByUV%20branding%20services.';
    var CONTACT_URL = 'contact.html';

    // ─── EXIT-INTENT POPUP (Desktop only) ───
    function initExitIntent() {
        if (window.innerWidth < 1024) return;
        if (sessionStorage.getItem('buv_exit_shown')) return;

        var overlay = document.createElement('div');
        overlay.id = 'buv-exit-overlay';
        overlay.className = 'buv-exit-overlay';
        overlay.innerHTML = [
            '<div class="buv-exit-modal">',
            '  <button class="buv-exit-close" aria-label="Close popup">&times;</button>',
            '  <div class="buv-exit-icon">',
            '    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
            '      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
            '    </svg>',
            '  </div>',
            '  <h3>Wait! Get a Free Brand Consultation</h3>',
            '  <p>Before you go — chat with us on WhatsApp and get personalized branding advice for your business. No commitment needed.</p>',
            '  <div class="buv-exit-btns">',
            '    <a href="' + WHATSAPP_URL + '" target="_blank" rel="noopener noreferrer" class="buv-exit-btn-primary">',
            '      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
            '      Chat on WhatsApp',
            '    </a>',
            '    <a href="' + CONTACT_URL + '" class="buv-exit-btn-secondary">Fill Out Inquiry Form</a>',
            '  </div>',
            '  <p class="buv-exit-note">✦ Trusted by 50+ brands across India</p>',
            '</div>'
        ].join('');

        document.body.appendChild(overlay);

        function showPopup() {
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            sessionStorage.setItem('buv_exit_shown', '1');
            // Track event
            if (window.dataLayer) window.dataLayer.push({ event: 'exit_intent_shown' });
        }

        function closePopup() {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Close handlers
        overlay.querySelector('.buv-exit-close').addEventListener('click', closePopup);
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) closePopup();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closePopup();
        });

        // Trigger on mouse leaving viewport (only top edge)
        var triggered = false;
        document.addEventListener('mouseout', function (e) {
            if (triggered) return;
            if (e.clientY <= 0 && e.relatedTarget === null) {
                triggered = true;
                // Delay slightly for natural feel
                setTimeout(showPopup, 200);
            }
        });
    }

    // ─── SCROLL-TRIGGERED CTA SECTION ───
    function initScrollCTA() {
        var ctaBar = document.createElement('div');
        ctaBar.id = 'buv-scroll-cta';
        ctaBar.className = 'buv-scroll-cta';
        ctaBar.innerHTML = [
            '<div class="buv-scroll-cta-inner">',
            '  <span class="buv-scroll-cta-text">Ready to build your brand?</span>',
            '  <div class="buv-scroll-cta-btns">',
            '    <a href="' + CONTACT_URL + '" class="buv-scroll-btn-primary">Start Your Brand →</a>',
            '    <a href="' + WHATSAPP_URL + '" target="_blank" rel="noopener noreferrer" class="buv-scroll-btn-wa" aria-label="Chat on WhatsApp">',
            '      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
            '    </a>',
            '  </div>',
            '</div>'
        ].join('');

        document.body.appendChild(ctaBar);

        var shown = false;
        var dismissed = false;

        window.addEventListener('scroll', function () {
            if (dismissed) return;
            var scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

            if (scrollPercent >= 55 && !shown) {
                ctaBar.classList.add('visible');
                shown = true;
            } else if (scrollPercent < 20 && shown) {
                ctaBar.classList.remove('visible');
                shown = false;
            }
        }, { passive: true });
    }

    // ─── WHATSAPP FAB TOOLTIP ───
    function initFabTooltip() {
        // Wait for FAB to be injected by components.js
        var checkFab = setInterval(function () {
            var fab = document.getElementById('fabMorph');
            if (fab) {
                clearInterval(checkFab);

                // First-visit pulse
                if (!sessionStorage.getItem('buv_fab_seen')) {
                    fab.classList.add('buv-fab-pulse');
                    sessionStorage.setItem('buv_fab_seen', '1');
                    setTimeout(function () {
                        fab.classList.remove('buv-fab-pulse');
                    }, 6000);
                }
            }
        }, 500);
    }

    // ─── INIT ───
    document.addEventListener('DOMContentLoaded', function () {
        // Don't show lead gen on contact page (they're already converting)
        var path = window.location.pathname;
        var isContactPage = path.includes('contact');

        if (!isContactPage) {
            initExitIntent();
            initScrollCTA();
        }
        initFabTooltip();
    });

})();
