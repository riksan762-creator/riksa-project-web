document.addEventListener("DOMContentLoaded", function() {

    // 1. Logika Dark/Light Mode 
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        themeSwitch.checked = true;
    } else {
         body.setAttribute('data-theme', 'dark');
         themeSwitch.checked = false;
    }

    themeSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        } else {
            body.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // 2. Logika Tabbed Interface
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

    // 3. Hamburger Menu Toggle (untuk Mobile)
    const hamburger = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.main-nav');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Mengganti ikon hamburger menjadi X saat aktif (membutuhkan CSS tambahan)
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // 4. Inisialisasi Progress Bar VPS (Fitur Canggih)
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progressValue = progressBar.getAttribute('data-progress');
                // Menggunakan pseudo-element ::before, sehingga kita harus mengatur properti CSS
                progressBar.style.setProperty('--progress-width', progressValue + '%'); 
                
                // Set CSS style untuk animasi width
                const style = document.createElement('style');
                style.innerHTML = `
                    .progress-bar[data-progress="${progressValue}"]::before {
                        width: ${progressValue}%;
                    }
                `;
                document.head.appendChild(style);
                
                progressObserver.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5 
    });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
    
    // 5. Animasi Scroll (Card Fade In/Up)
    const animatedElements = document.querySelectorAll('.feature-item, .vps-plan-card, .tab-interface');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                scrollObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        scrollObserver.observe(el);
    });
    
    // Tambahkan CSS custom property untuk progress bar di style.css agar animasi berfungsi
    // Perlu menambahkan kode CSS: .progress-bar::before { width: var(--progress-width); }
    // Karena JS tidak bisa langsung memodifikasi pseudo-element
    
});
