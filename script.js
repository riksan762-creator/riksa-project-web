document.addEventListener("DOMContentLoaded", function() {

    // 1. Theme Toggle (Dark/Light Mode)
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

    // 2. Tabbed Interface Logic
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Reset all
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate target
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 3. Hamburger Menu Toggle (Mobile)
    const hamburger = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('.main-nav');
    
    hamburger.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        const icon = hamburger.querySelector('i');
        
        // Ganti ikon untuk tampilan profesional
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 4. Progress Bar Animation (Hanya saat terlihat/intersecting)
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progressValue = progressBar.getAttribute('data-progress');
                // Mengatur CSS variable --progress-width untuk animasi
                progressBar.style.setProperty('--progress-width', progressValue + '%'); 
                progressObserver.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5 
    });

    progressBars.forEach(bar => {
        progressObserver.observe(bar);
    });
    
    // 5. Card Scroll Animation (Fade In/Up)
    const animatedElements = document.querySelectorAll('.feature-item, .vps-plan-card, .tab-interface, .server-detail-card');
    
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
        el.style.transform = 'translateY(25px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        scrollObserver.observe(el);
    });
});
