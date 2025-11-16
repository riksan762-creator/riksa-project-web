document.addEventListener("DOMContentLoaded", function() {

    // =======================================================
    // === INTERNATIONALIZATION DATA (GO INTERNASIONAL) ===
    // =======================================================
    const i18nData = {
        en: {
            pageTitle: "R-STORE GLOBAL - High-End Connection Panel",
            orderNowCta: "Order Now",
            exploreVpn: "Explore VPN",
            orderVps: "Order VPS",
            heroTitle: "Enterprise-Level <span class=\"highlight\">Connection</span>.",
            heroSubtitle: "Premium Panel with Leading Technology, Optimal Speed, and Maximum Security.",
            whyChoose: "Why Choose R-STORE?",
            
            // Features
            feat1Title: "Hyper Speed", feat1Desc: "Optimized network routing for unbeatable speed, ideal for gaming and 4K streaming.",
            feat2Title: "Absolute Privacy", feat2Desc: "Military encryption (AES-256) and strict no-log policy protect your digital identity.",
            feat3Title: "Dedicated Network", feat3Desc: "Premium servers in Indonesia and Singapore with large Bandwidth and 99.9% Uptime guarantee.",
            feat4Title: "Professional Support", feat4Desc: "Responsive and knowledgeable support team ready to serve you 24 hours a day.",
            
            // VPN Section
            vpnSectionTitle: "🌐 R-STORE Premium VPN",
            tabIndo: "🇮🇩 Indonesia Server", tabSG: "🇸🇬 Singapore Server", tabProtocols: "🛡️ Protocols & Pricing",
            statusOnline: "Online",
            
            // Server Specs
            pingLow: "Ping: <span class=\"speed-indicator green\">Extremely Low</span>", latency3ms: "Latency: <span class=\"speed-indicator green\">3-5 ms</span>",
            pingGood: "Ping: <span class=\"speed-indicator blue\">Very Good</span>", latency20ms: "Latency: <span class=\"speed-indicator blue\">20-30 ms</span>",
            bwUnlimited: "Bandwidth: Unlimited", bwHigh: "Bandwidth: High Capacity",
            
            orderIKD: "Order IKD Server", orderNeva: "Order Neva Server",
            orderMelbi: "Order Melbi Server", orderLasweb: "Order Lasweb Server",
            
            // Protocols & STB
            protocolTitle: "Advanced VPN Protocol Support",
            sshDesc: "Secure Shell - Simple & Fast.", vmessDesc: "VMess Protocol - Flexible & Anti-Censorship.", trojanDesc: "Trojan Protocol - Strong & Stealth.",
            stbTitle: "🛠️ STB (Set Top Box) Setting Service",
            stbFeat1: "<i class=\"fas fa-check-circle\"></i> Unlock Features", stbFeat2: "<i class=\"fas fa-check-circle\"></i> RAM Optimization",
            orderStbCta: "Order STB Service",
            
            // VPS Section
            vpsSectionTitle: "🖥️ Premium VPS & Stock Availability",
            vpsIndoTitle: "Indonesia VPS", vpsSgTitle: "Singapore VPS",
            specRam: "RAM: 1 GB - 2 GB", specBwUnl: "Bandwidth: Unlimited", specBw30Tb: "Bandwidth: 30 TB / Month", specStorage: "Storage: SSD High-Speed", specScript: "Script: Pre-Installed All Protocol",
            stockLabelIndo: "Stock Availability (Sold 85%)", stockLabelSG: "Stock Availability (Sold 92%)",
            priceStart: "Price Starts From ...",
            orderVpsIndo: "Order Indo VPS", orderVpsSg: "Order SG VPS",
            
            // Footer
            footerText: "&copy; 2025 R-STORE PREMIUM. Designed with High Technology.",
            joinWaGroup: "Join WA Group"
        },
        // Indonesian data is already in the HTML as default content (for speed/fallback)
        id: {
            // Only need to map Indonesian texts if they differ significantly from HTML defaults
            // We use the HTML content for 'id' to maintain minimal JS code.
            // Only map specific items if needed. Example:
            pageTitle: "R-STORE GLOBAL - Panel Koneksi High-End",
            heroTitle: "Koneksi <span class=\"highlight\">Level Enterprise</span>."
            // ... (rest will fallback to HTML content)
        }
    };
    
    let currentLang = localStorage.getItem('lang') || 'id';


    // -------------------------------------------------------
    // FUNCTION: Translate the entire page based on data-i18n
    // -------------------------------------------------------
    function applyTranslation(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = i18nData[lang][key];
            
            if (translation) {
                // Use innerHTML for titles that contain <span> (like heroTitle)
                el.innerHTML = translation; 
            } else if (lang === 'id' && !translation) {
                 // Fallback to original HTML content if ID translation is missing
                 // (since the HTML is written in ID by default)
                 const originalContent = el.innerHTML;
                 if(originalContent) el.innerHTML = originalContent;
            }
        });
        document.body.setAttribute('data-lang', lang);
        localStorage.setItem('lang', lang);
        document.querySelector('.current-lang').textContent = lang.toUpperCase();
    }
    
    // Apply initial language
    applyTranslation(currentLang);


    // =======================================================
    // === 1. Language Switch Logic (Pro International) ===
    // =======================================================
    document.getElementById('lang-switch').addEventListener('click', () => {
        const newLang = currentLang === 'id' ? 'en' : 'id';
        currentLang = newLang;
        applyTranslation(newLang);
    });
    
    // =======================================================
    // === 2. Theme Toggle (Dark/Light Mode) ===
    // =======================================================
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    const currentTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', currentTheme);
    themeSwitch.checked = (currentTheme === 'light');

    themeSwitch.addEventListener('change', function() {
        const newTheme = this.checked ? 'light' : 'dark';
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    });

    // =======================================================
    // === 3. Tabbed Interface & Hamburger Menu (Stabil) ===
    // =======================================================
    // Tab Logic (same as before, stable)
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Hamburger Menu (Clean Logic)
    const hamburger = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    
    hamburger.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // =======================================================
    // === 4. Progress Bar & Scroll Animation (Polish) ===
    // =======================================================
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progressValue = progressBar.getAttribute('data-progress');
                // Mengatur CSS variable yang mengontrol lebar progress bar (Sudah rapi)
                progressBar.style.setProperty('--progress-width', progressValue + '%'); 
                progressObserver.unobserve(entry.target); 
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
    
    // Card Scroll Animation (Fade In/Up)
    const animatedElements = document.querySelectorAll('.feature-item, .vps-plan-card, .tab-interface, .server-detail-card');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        scrollObserver.observe(el);
    });
});
