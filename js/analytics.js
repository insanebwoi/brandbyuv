/* ============================================
   BRANDBYUV — Analytics & Tracking
   GA4, GTM, Microsoft Clarity, Meta Pixel,
   LinkedIn Insight Tag, Event Tracking
   ============================================ */

(function () {
    'use strict';

    // ─── TRACKING IDS (Replace with actual IDs) ───
    const GA4_ID = 'G-8QQRTZQRF5';           // Google Analytics 4
    const GTM_ID = 'GTM-TV7RN2RG';            // Google Tag Manager
    const CLARITY_ID = 'x3yge5gili';          // Microsoft Clarity

    // ─── GOOGLE ANALYTICS 4 ───
    if (GA4_ID && GA4_ID !== 'G-XXXXXXXXXX') {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA4_ID;
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', GA4_ID, {
            page_title: document.title,
            page_location: window.location.href
        });
    }

    // ─── GOOGLE TAG MANAGER ───
    if (GTM_ID && GTM_ID !== 'GTM-XXXXXXX') {
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', GTM_ID);

        // Inject noscript fallback
        document.addEventListener('DOMContentLoaded', function () {
            var noscript = document.createElement('noscript');
            var iframe = document.createElement('iframe');
            iframe.src = 'https://www.googletagmanager.com/ns.html?id=' + GTM_ID;
            iframe.height = '0';
            iframe.width = '0';
            iframe.style.display = 'none';
            iframe.style.visibility = 'hidden';
            noscript.appendChild(iframe);
            document.body.insertBefore(noscript, document.body.firstChild);
        });
    }

    // ─── MICROSOFT CLARITY ───
    if (CLARITY_ID && CLARITY_ID !== 'XXXXXXXXXX') {
        (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", CLARITY_ID);
    }

    // ─── EVENT TRACKING ───

    // Track helper
    function trackEvent(eventName, params) {
        params = params || {};
        // GA4
        if (window.gtag) {
            gtag('event', eventName, params);
        }
        // GTM dataLayer
        if (window.dataLayer) {
            dataLayer.push({ event: eventName, ...params });
        }
    }

    document.addEventListener('DOMContentLoaded', function () {

        // --- WhatsApp Click Tracking ---
        document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(function (el) {
            el.addEventListener('click', function () {
                trackEvent('whatsapp_click', {
                    link_url: el.href,
                    link_text: el.textContent.trim().substring(0, 50),
                    page: window.location.pathname
                });
            });
        });

        // --- Phone Click Tracking ---
        document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
            el.addEventListener('click', function () {
                trackEvent('phone_click', {
                    phone_number: el.href.replace('tel:', ''),
                    page: window.location.pathname
                });
            });
        });

        // --- Email Click Tracking ---
        document.querySelectorAll('a[href^="mailto:"]').forEach(function (el) {
            el.addEventListener('click', function () {
                trackEvent('email_click', {
                    email: el.href.replace('mailto:', ''),
                    page: window.location.pathname
                });
            });
        });

        // --- CTA Button Tracking ---
        document.querySelectorAll('.btn-primary, .btn-secondary, .btn-white').forEach(function (el) {
            el.addEventListener('click', function () {
                trackEvent('cta_click', {
                    cta_text: el.textContent.trim().substring(0, 50),
                    cta_class: el.className,
                    page: window.location.pathname
                });
            });
        });

        // --- Form Submission Tracking ---
        var projectForm = document.getElementById('projectForm');
        if (projectForm) {
            projectForm.addEventListener('submit', function () {
                trackEvent('form_submit', {
                    form_id: 'projectForm',
                    form_type: 'project_inquiry',
                    page: window.location.pathname
                });
            });
        }

        // --- Partner Form Tracking ---
        var partnerForm = document.getElementById('partnerForm');
        if (partnerForm) {
            partnerForm.addEventListener('submit', function () {
                trackEvent('partner_apply', {
                    form_id: 'partnerForm',
                    form_type: 'partner_application',
                    page: window.location.pathname
                });
            });
        }

        // --- Scroll Depth Tracking ---
        var scrollMilestones = { 25: false, 50: false, 75: false, 100: false };
        var scrollTicking = false;

        window.addEventListener('scroll', function () {
            if (!scrollTicking) {
                requestAnimationFrame(function () {
                    var scrollPercent = Math.round(
                        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
                    );
                    [25, 50, 75, 100].forEach(function (milestone) {
                        if (scrollPercent >= milestone && !scrollMilestones[milestone]) {
                            scrollMilestones[milestone] = true;
                            trackEvent('scroll_depth', {
                                percent: milestone,
                                page: window.location.pathname
                            });
                        }
                    });
                    scrollTicking = false;
                });
                scrollTicking = true;
            }
        }, { passive: true });
    });

})();
