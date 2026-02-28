/* ============================================
   BRANDBYUV — Shared Components
   Footer + Morphing FAB (WhatsApp / Back to Top)
   Include this file on every page.
   ============================================ */

function injectFooter() {
    const footerPlaceholder = document.getElementById('shared-footer');
    if (!footerPlaceholder) return;

    footerPlaceholder.outerHTML = `
    <!-- FOOTER -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <img src="images/iconlogo_white.svg" alt="BrandByUV Logo" class="nav-brand-icon" style="height:32px; width:auto;">
                        <span class="footer-logo-text">BrandByUV</span>
                    </div>
                    <p>Strategic branding for startups & growing businesses.</p>
                    <div class="footer-social">
                        <a href="https://instagram.com/brandbyuv.in" target="_blank" title="Instagram"><svg width="16"
                                height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg></a>
                        <a href="https://wa.me/919544464144" target="_blank" title="WhatsApp"><svg width="16"
                                height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg></a>
                        <a href="mailto:hello@brandbyuv.com" title="Email"><svg width="16" height="16"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg></a>
                    </div>
                </div>
                <div class="footer-links-row">
                    <div class="footer-col">
                        <h4>Quick Links</h4><a href="index.html">Home</a><a href="about.html">About Us</a><a
                            href="services.html">Services</a><a href="portfolio.html">Portfolio</a><a
                            href="contact.html">Contact</a><a href="partner.html">Partner Program</a>
                    </div>
                    <div class="footer-col">
                        <h4>Services</h4><a href="services.html#essential">Essential Logo</a><a
                            href="services.html#comprehensive">Brand Identity</a><a href="services.html#ultimate">Ultimate
                            Branding</a><a href="addons.html">Add-On Packages</a>
                    </div>
                </div>
                <div class="footer-col footer-touch">
                    <h4><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg> Get in Touch</h4><a href="tel:+919544464144"><svg width="14" height="14"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px">
                            <path
                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>+91 95444 64144</a><a href="mailto:hello@brandbyuv.com"><svg width="14" height="14"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-2px;margin-right:4px">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                        </svg>hello@brandbyuv.com</a><a href="https://instagram.com/brandbyuv.in" target="_blank"><svg
                            width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            style="vertical-align:-2px;margin-right:4px">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>@brandbyuv.in</a>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2026 BrandByUV. All Rights Reserved.</p>
                <p class="crafted">Crafted by <a href="index.html">BrandByUV</a></p>
            </div>
        </div>
    </footer>
    `;
}

function injectFab() {
    const fabPlaceholder = document.getElementById('shared-fab');
    if (!fabPlaceholder) return;

    fabPlaceholder.outerHTML = `
    <div class="fab-morph" id="fabMorph" title="Chat on WhatsApp">
        <span class="fab-icon fab-wa"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg></span>
        <span class="fab-icon fab-up"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="18 15 12 9 6 15" />
            </svg></span>
    </div>
    `;
}

// Auto-inject on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    injectFooter();
    injectFab();
});
