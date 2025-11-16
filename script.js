document.addEventListener("DOMContentLoaded", function() {

    // =======================================================
    // === INTERNATIONALIZATION DATA (STABIL) ===
    // =======================================================
    // SEMUA teks (ID dan EN) disimpan di sini.
    // Ini adalah cara paling anti-gagal (bulletproof).
    const i18nData = {
        en: {
            pageTitle: "R-STORE GLOBAL - High-End Connection Panel",
            navVpn: "VPN Premium", navVps: "VPS Global", navFeatures: "Features",
            orderNowCta: "Order Now",
            exploreVpn: "Explore VPN", orderVps: "Order VPS",
            heroTitle: "Enterprise-Level <span class=\"highlight\">Connection</span>.",
            heroSubtitle: "Premium Panel with Leading Technology, Optimal Speed, and Maximum Security.",
            whyChoose: "Why Choose R-STORE?",
            feat1Title: "Hyper Speed", feat1Desc: "Optimized network routing for unbeatable speed, ideal for gaming and 4K streaming.",
            feat2Title: "Absolute Privacy", feat2Desc: "Military encryption (AES-256) and strict no-log policy protect your digital identity.",
            feat3Title: "Dedicated Network", feat3Desc: "Premium servers in Indonesia and Singapore with large Bandwidth and 99.9% Uptime guarantee.",
            feat4Title: "Professional Support", feat4Desc: "Responsive and knowledgeable support team ready to serve you 24 hours a day.",
            vpnSectionTitle: "🌐 R-STORE Premium VPN",
            tabIndo: "🇮🇩 Indonesia Server", tabSG: "🇸🇬 Singapore Server", tabProtocols: "🛡️ Protocols & Pricing",
            statusOnline: "Online",
            pingLow: "Ping: <span class=\"speed-indicator green\">Extremely Low</span>", latency3ms: "Latency: <span class=\"speed-indicator green\">3-5 ms</span>",
            pingGood: "Ping: <span class=\"speed-indicator blue\">Very Good</span>", latency20ms: "Latency: <span class=\"speed-indicator blue\">20-30 ms</span>",
            bwUnlimited: "Bandwidth: Unlimited", bwHigh: "Bandwidth: High Capacity",
            priceVpn: "Price: **Rp 5.000 - Rp 15.000**",
            orderIKD: "Order IKD Server", orderNeva: "Order Neva Server",
            orderMelbi: "Order Melbi Server", orderLasweb: "Order Lasweb Server",
            protocolTitle: "Advanced VPN Protocol Support",
            sshDesc: "Secure Shell - Simple & Fast.", vmessDesc: "VMess Protocol - Flexible & Anti-Censorship.", trojanDesc: "Trojan Protocol - Strong & Stealth.",
            stbTitle: "🛠️ STB (Set Top Box) Setting Service",
            stbFeat1: "<i class=\"fas fa-check-circle\"></i> Unlock Features", stbFeat2: "<i class=\"fas fa-check-circle\"></i> RAM Optimization",
            orderStbCta: "Order STB Service",
            vpsSectionTitle: "🖥️ Premium VPS & Stock Availability",
            vpsIndoTitle: "Indonesia VPS", vpsSgTitle: "Singapore VPS",
            specRam: "RAM: 1 GB - 2 GB", specBwUnl: "Bandwidth: Unlimited", specBw30Tb: "Bandwidth: 30 TB / Month", specStorage: "Storage: SSD High-Speed", specScript: "Script: Pre-Installed All Protocol",
            stockLabelIndo: "Stock Availability (Sold 85%)", stockLabelSG: "Stock Availability (Sold 92%)",
            priceStart: "Price Starts From ...",
            orderVpsIndo: "Order Indo VPS", orderVpsSg: "Order SG VPS",
            footerText: "&copy; 2025 R-STORE PREMIUM. Designed with High Technology.",
            joinWaGroup: "Join WA Group"
        },
        id: {
            pageTitle: "R-STORE GLOBAL - Panel Koneksi High-End",
            navVpn: "VPN Premium", navVps: "VPS Global", navFeatures: "Fitur",
            orderNowCta: "Order Sekarang",
            exploreVpn: "Jelajahi VPN", orderVps: "Pesan VPS",
            heroTitle: "Koneksi <span class=\"highlight\">Level Enterprise</span>.",
            heroSubtitle: "Panel Premium dengan Teknologi Terdepan, Kecepatan Optimal, dan Keamanan Maksimal.",
            whyChoose: "Mengapa Memilih R-STORE?",
            feat1Title: "Kecepatan Hyper", feat1Desc: "Optimasi routing jaringan untuk kecepatan tanpa tandingan, ideal untuk gaming dan 4K streaming.",
            feat2Title: "Privasi Absolut", feat2Desc: "Enkripsi militer (AES-256) dan kebijakan *no-log* yang ketat melindungi identitas digital Anda.",
            feat3Title: "Jaringan Dedicated", feat3Desc: "Server premium di Indonesia dan Singapore dengan Bandwidth besar dan jaminan Uptime 99.9%.",
            feat4Title: "Dukungan Profesional", feat4Desc: "Tim support yang responsif dan berpengetahuan luas siap melayani Anda 24 jam sehari.",
            vpnSectionTitle: "🌐 VPN Premium R-STORE",
            tabIndo: "🇮🇩 Server Indonesia", tabSG: "🇸🇬 Server Singapore", tabProtocols: "🛡️ Protokol & Harga",
            statusOnline: "Online",
            pingLow: "Ping: <span class=\"speed-indicator green\">Extremely Low</span>", latency3ms: "Latency: <span class=\"speed-indicator green\">3-5 ms</span>",
            pingGood: "Ping: <span class=\"speed-indicator blue\">Very Good</span>", latency20ms: "Latency: <span class=\"speed-indicator blue\">20-30 ms</span>",
            bwUnlimited: "Bandwidth: Unlimited", bwHigh: "Bandwidth: High Capacity",
            priceVpn: "Harga: **Rp 5.000 - Rp 15.000**",
            orderIKD: "Pesan Server IKD", orderNeva: "Pesan Server Neva",
            orderMelbi: "Pesan Server Melbi", orderLasweb: "Pesan Server Lasweb",
            protocolTitle: "Dukungan Protokol VPN Canggih",
            sshDesc: "Secure Shell - Simpel & Cepat.", vmessDesc: "VMess Protocol - Fleksibel & Anti-Sensor.", trojanDesc: "Trojan Protocol - Kuat & Stealth.",
            stbTitle: "🛠️ Jasa Setting STB (Set Top Box)",
            stbFeat1: "<i class=\"fas fa-check-circle\"></i> Unlock Fitur", stbFeat2: "<i class=\"fas fa-check-circle\"></i> Optimasi RAM",
            orderStbCta: "Order Jasa STB",
            vpsSectionTitle: "🖥️ VPS Premium & Ketersediaan Stok",
            vpsIndoTitle: "VPS Indonesia", vpsSgTitle: "VPS Singapore",
            specRam: "RAM: 1 GB - 2 GB", specBwUnl: "Bandwidth: Unlimited", specBw30Tb: "Bandwidth: 30 TB / Bulan", specStorage: "Storage: SSD High-Speed", specScript: "Script: Pre-Installed All Protocol",
            stockLabelIndo: "Ketersediaan Stok (Terjual 85%)", stockLabelSG: "Ketersediaan Stok (Terjual 92%)",
            priceStart: "Harga Mulai Dari ...",
            orderVpsIndo: "Order VPS Indo", orderVpsSg: "Order VPS SG",
            footerText: "&copy; 2025 R-STORE PREMIUM. Didesain dengan Teknologi Tinggi.",
            joinWaGroup: "Gabung Grup WA"
        }
    };
    
    // =======================================================
    // === FUNCTION: Apply Translation (Logika Baru Stabil) ===
    // =======================================================
    let currentLang = localStorage.getItem('lang') || 'id';

    function applyTranslation(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            
            // Logika BARU: Langsung ambil dari data, tidak ada fallback rumit.
            // Ini menjamin teks ID akan muncul jika EN gagal, dan sebaliknya.
            const translation = i18nData[lang][key]; 
            
            if (translation) {
                el.innerHTML = translation;
            }
            // Jika tidak ada key (sangat jarang), biarkan teks HTML asli.
        });
        document.body.setAttribute('data-lang', lang);
        localStorage.setItem('lang', lang);
        document.querySelector('.current-lang').textContent = lang.toUpperCase();
    }

    // =======================================================
    // === FUNCTION: Inisialisasi Event Listeners ===
    // =======================================================
    function initializeApp() {
        
        // 1. Terapkan Bahasa saat awal load
        applyTranslation(currentLang);

        // 2. Language Switch Logic
        document.getElementById('lang-switch').addEventListener('click', () => {
            currentLang = (currentLang === 'id') ? 'en' : 'id';
            applyTranslation(currentLang);
        });
        
        // 3. Theme Toggle (Dark/Light Mode)
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

        // 4. Tabbed Interface Logic
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

        // 5. Hamburger Menu Toggle (Logika BARU & STABIL)
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

        // 6. Progress Bar Animation (Hanya saat terlihat)
        const progressObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const progressBar = entry.target;
                    const progressValue = progressBar.getAttribute('data-progress');
                    progressBar.style.setProperty('--progress-width', progressValue + '%'); 
                    progressObserver.unobserve(entry.target); 
                }
            });
        }, { threshold: 0.5 });
        document.querySelectorAll('.progress-bar').forEach(bar => {
            progressObserver.observe(bar);
        });
        
        // 7. Card Scroll Animation (Fade In/Up)
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.card, .server-detail-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(25px)';
            el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            scrollObserver.observe(el);
        });
    }

    // Jalankan aplikasi setelah DOM siap
    initializeApp();
});
