/* ============================================
   BRANDBYUV — Structured Data (JSON-LD Schema)
   Injects page-specific schema markup.
   Include on every page.
   ============================================ */

(function () {
    'use strict';

    const SITE_URL = 'https://brandbyuv.mopgen.in';
    const SITE_NAME = 'BrandByUV';
    const LOGO_URL = SITE_URL + '/images/iconlogo_dark.svg';
    const OG_IMAGE = SITE_URL + '/images/og-image.jpg';
    const PHONE = '+919544464144';
    const EMAIL = 'hello@brandbyuv.com';
    const INSTAGRAM = 'https://instagram.com/brandbyuv.in';
    const WHATSAPP = 'https://wa.me/919544464144';

    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
    const currentURL = SITE_URL + (currentPath === '/' ? '/' : currentPath);

    // Helper: inject a JSON-LD script tag
    function injectSchema(data) {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
    }

    // ─── GLOBAL: Organization Schema ───
    injectSchema({
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": SITE_URL + "/#organization",
        "name": SITE_NAME,
        "alternateName": "Brand By UV",
        "url": SITE_URL,
        "logo": {
            "@type": "ImageObject",
            "url": LOGO_URL,
            "width": 512,
            "height": 512
        },
        "image": OG_IMAGE,
        "description": "BrandByUV is a premium branding agency helping startups and businesses build powerful brands through logo design, brand identity, websites, social media kits, and strategic branding solutions across India.",
        "foundingDate": "2024",
        "founder": {
            "@type": "Person",
            "name": "Ihsan MK",
            "jobTitle": "Founder & Brand Strategist",
            "url": SITE_URL + "/card"
        },
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "telephone": PHONE,
                "contactType": "customer service",
                "areaServed": ["IN"],
                "availableLanguage": ["English", "Hindi", "Malayalam"]
            }
        ],
        "sameAs": [
            INSTAGRAM,
            WHATSAPP
        ],
        "areaServed": [
            { "@type": "Country", "name": "India" },
            { "@type": "State", "name": "Kerala" },
            { "@type": "City", "name": "Malappuram" },
            { "@type": "City", "name": "Kochi" },
            { "@type": "City", "name": "Kozhikode" },
            { "@type": "City", "name": "Thrissur" },
            { "@type": "City", "name": "Trivandrum" },
            { "@type": "City", "name": "Bangalore" },
            { "@type": "City", "name": "Chennai" },
            { "@type": "City", "name": "Mumbai" }
        ],
        "knowsAbout": [
            "Logo Design", "Brand Identity", "Brand Strategy",
            "Packaging Design", "Social Media Kit", "Website Design",
            "Business Branding", "Startup Branding", "UI/UX Design"
        ]
    });

    // ─── GLOBAL: WebSite Schema with SearchAction ───
    injectSchema({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": SITE_URL + "/#website",
        "name": SITE_NAME,
        "url": SITE_URL,
        "publisher": { "@id": SITE_URL + "/#organization" },
        "inLanguage": "en-IN"
    });

    // ─── GLOBAL: LocalBusiness Schema ───
    injectSchema({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "@id": SITE_URL + "/#localbusiness",
        "name": SITE_NAME,
        "image": OG_IMAGE,
        "url": SITE_URL,
        "telephone": PHONE,
        "email": EMAIL,
        "priceRange": "₹₹",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Malappuram",
            "addressRegion": "Kerala",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 11.0510,
            "longitude": 76.0711
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "10:00",
                "closes": "19:00"
            }
        ],
        "sameAs": [INSTAGRAM, WHATSAPP],
        "areaServed": [
            { "@type": "State", "name": "Kerala" },
            { "@type": "Country", "name": "India" }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Branding Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Essential Logo Design",
                        "description": "3 initial logo concepts, 2 revision rounds, final files in JPG, PNG, SVG",
                        "provider": { "@id": SITE_URL + "/#organization" }
                    },
                    "price": "2999",
                    "priceCurrency": "INR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Comprehensive Brand Identity",
                        "description": "3 logo concepts, 3 revision rounds, color palette, typography, brand guidelines",
                        "provider": { "@id": SITE_URL + "/#organization" }
                    },
                    "price": "6999",
                    "priceCurrency": "INR"
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Ultimate Branding Solution",
                        "description": "3 premium logo concepts, unlimited refinements, full brand identity guide, 3 months support",
                        "provider": { "@id": SITE_URL + "/#organization" }
                    },
                    "price": "14999",
                    "priceCurrency": "INR"
                }
            ]
        }
    });

    // ─── PAGE-SPECIFIC SCHEMAS ───

    // --- Breadcrumb Schema (all inner pages) ---
    const breadcrumbMap = {
        '/about': [
            { name: 'Home', url: SITE_URL + '/' },
            { name: 'About', url: SITE_URL + '/about' }
        ],
        '/services': [
            { name: 'Home', url: SITE_URL + '/' },
            { name: 'Services', url: SITE_URL + '/services' }
        ],
        '/addons': [
            { name: 'Home', url: SITE_URL + '/' },
            { name: 'Services', url: SITE_URL + '/services' },
            { name: 'Add-Ons', url: SITE_URL + '/addons' }
        ],
        '/portfolio': [
            { name: 'Home', url: SITE_URL + '/' },
            { name: 'Portfolio', url: SITE_URL + '/portfolio' }
        ],
        '/contact': [
            { name: 'Home', url: SITE_URL + '/' },
            { name: 'Contact', url: SITE_URL + '/contact' }
        ],
        '/partner': [
            { name: 'Home', url: SITE_URL + '/' },
            { name: 'Partner Program', url: SITE_URL + '/partner' }
        ],
        '/card': [
            { name: 'Home', url: SITE_URL + '/' },
            { name: 'About', url: SITE_URL + '/about' },
            { name: 'Ihsan MK', url: SITE_URL + '/card' }
        ]
    };

    // Normalize path for matching (strip .html and trailing slash)
    const normalizedPath = currentPath.replace(/\.html$/, '').replace(/\/$/, '') || '/';

    if (breadcrumbMap[normalizedPath]) {
        const items = breadcrumbMap[normalizedPath];
        injectSchema({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, idx) => ({
                "@type": "ListItem",
                "position": idx + 1,
                "name": item.name,
                "item": item.url
            }))
        });
    }

    // Also handle service and location subpages
    if (normalizedPath.startsWith('/services/')) {
        const pageName = normalizedPath.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        injectSchema({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL + '/' },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": SITE_URL + '/services' },
                { "@type": "ListItem", "position": 3, "name": pageName, "item": currentURL }
            ]
        });
    }

    if (normalizedPath.startsWith('/locations/')) {
        const pageName = normalizedPath.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        injectSchema({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL + '/' },
                { "@type": "ListItem", "position": 2, "name": "Locations", "item": SITE_URL + '/' },
                { "@type": "ListItem", "position": 3, "name": pageName, "item": currentURL }
            ]
        });
    }

    if (normalizedPath.startsWith('/blog/') && normalizedPath !== '/blog') {
        const pageName = normalizedPath.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        injectSchema({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL + '/' },
                { "@type": "ListItem", "position": 2, "name": "Blog", "item": SITE_URL + '/blog/' },
                { "@type": "ListItem", "position": 3, "name": pageName, "item": currentURL }
            ]
        });
    }

    // --- WebPage Schema for every page ---
    const pageNames = {
        '/': 'BrandByUV | Strategic Branding Agency for Startups & Growing Businesses',
        '/about': 'About BrandByUV — Our Story, Process & Vision',
        '/services': 'Branding Services & Pricing — BrandByUV',
        '/addons': 'Branding Add-Ons & Extras — BrandByUV',
        '/portfolio': 'Portfolio & Craft — BrandByUV Case Studies',
        '/contact': 'Contact BrandByUV — Start Your Branding Journey',
        '/partner': 'BrandByUV Partner Program — Refer & Earn',
        '/card': 'Ihsan MK — Founder & Brand Strategist | BrandByUV'
    };

    const pageDescriptions = {
        '/': 'BrandByUV helps startups and businesses build powerful brands through logo design, brand identity, websites, social media kits, and strategic branding solutions across India.',
        '/about': 'Meet the team behind BrandByUV. Learn about our strategy-first approach to brand design, our process, and the values that drive premium branding solutions.',
        '/services': 'Explore transparent branding packages from ₹4,999. Logo design, brand identity, and complete branding solutions for startups and growing businesses.',
        '/addons': 'Enhance your brand with professional add-ons: pitch decks, packaging, social media kits, website design, and brand guidelines.',
        '/portfolio': 'See our branding work across industries. Confidential NDA-friendly portfolio showcasing logo design, brand identity, and digital design projects.',
        '/contact': 'Start your branding project with BrandByUV. Get in touch via WhatsApp, email, or our project inquiry form for a free consultation.',
        '/partner': 'Join the BrandByUV partner program. Earn 15-25% commissions referring branding projects. Structured tiers, transparent payouts.',
        '/card': 'Digital business card of Ihsan MK, Founder and Brand Strategist at BrandByUV — India\'s premium branding agency.'
    };

    const pageName = pageNames[normalizedPath] || document.title;
    const pageDesc = pageDescriptions[normalizedPath] || '';

    injectSchema({
        "@context": "https://schema.org",
        "@type": normalizedPath === '/contact' ? "ContactPage" : "WebPage",
        "@id": currentURL + "#webpage",
        "url": currentURL,
        "name": pageName,
        "description": pageDesc,
        "isPartOf": { "@id": SITE_URL + "/#website" },
        "about": { "@id": SITE_URL + "/#organization" },
        "inLanguage": "en-IN"
    });

    // --- Homepage: FAQ Schema ---
    if (normalizedPath === '/' || normalizedPath === '/index') {
        injectSchema({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How long does branding take?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Essential: 3–5 days. Comprehensive: 5–7 days. Ultimate: 7–10 days."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What file formats will I receive?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "JPG, PNG, SVG for all plans. Ultimate includes PDF. All files are print-ready."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I request revisions?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes! 2 rounds (Essential), 3 (Comprehensive), unlimited (Ultimate)."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How do I get started?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Click 'Start Your Brand' or WhatsApp us at +91 95444 64144."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer post-delivery support?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Ultimate plan includes 3 months of brand support."
                    }
                }
            ]
        });

        // Homepage: Review/Testimonial Schema
        injectSchema({
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": SITE_URL + "/#org-reviews",
            "name": SITE_NAME,
            "review": [
                {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Rahul Kumar" },
                    "reviewBody": "BrandByUV transformed our identity. We look 10x more professional now.",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                },
                {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Priya Sharma" },
                    "reviewBody": "Fast, professional, and creative. Our brand truly stands out now.",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                },
                {
                    "@type": "Review",
                    "author": { "@type": "Person", "name": "Neha Kapoor" },
                    "reviewBody": "Strategy-first approach made all the difference. Spot-on messaging.",
                    "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
                }
            ],
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "3",
                "bestRating": "5"
            }
        });
    }

    // --- Contact Page: FAQ Schema ---
    if (normalizedPath === '/contact') {
        injectSchema({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "How quickly will you respond to my inquiry?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We typically respond within 2–4 hours during business hours. For WhatsApp inquiries, you can expect even faster responses."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can I combine multiple services?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely! We encourage combining services for the best results. We also offer bundle discounts."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you offer refunds?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we offer a satisfaction guarantee. If you're not happy with the initial concepts and we can't reach a resolution through revisions, we'll work out a fair refund."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What information do you need to get started?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We'll need to know about your business, target audience, industry, any design preferences, competitor examples you like, and your brand values. We'll guide you through our discovery process."
                    }
                }
            ]
        });
    }

    // --- Card Page: Person Schema ---
    if (normalizedPath === '/card') {
        injectSchema({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Ihsan MK",
            "jobTitle": "Founder & Brand Strategist",
            "worksFor": { "@id": SITE_URL + "/#organization" },
            "url": SITE_URL + "/card",
            "telephone": PHONE,
            "email": EMAIL,
            "sameAs": [INSTAGRAM]
        });
    }

    // --- Services Page: Service Schema ---
    if (normalizedPath === '/services') {
        const services = [
            {
                name: "Essential Logo Design",
                description: "Professional logo design with 3 initial concepts, 2 revision rounds, and final files in JPG, PNG, SVG.",
                price: "2999"
            },
            {
                name: "Comprehensive Brand Identity",
                description: "Complete brand identity including logo, color palette, typography, brand guidelines, and all file formats.",
                price: "6999"
            },
            {
                name: "Ultimate Branding Solution",
                description: "Premium branding with unlimited refinements, full brand identity guide, all formats, and 3 months brand support.",
                price: "14999"
            }
        ];

        services.forEach(svc => {
            injectSchema({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": svc.name,
                "description": svc.description,
                "provider": { "@id": SITE_URL + "/#organization" },
                "areaServed": { "@type": "Country", "name": "India" },
                "offers": {
                    "@type": "Offer",
                    "price": svc.price,
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                }
            });
        });
    }

})();
