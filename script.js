document.addEventListener("DOMContentLoaded", function() {

    // 1. Efek 'scrolled' pada Navbar (Untuk kedalaman visual)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Memberi bayangan lebih kuat saat di-scroll
            navbar.style.boxShadow = '0 5px 30px rgba(0,0,0,0.8)';
        } else {
            navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
        }
    });

    // 2. Logika Dark/Light Mode (Fitur Canggih)
    const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;
    
    // Cek preferensi user atau local storage
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';
    
    if (currentTheme === 'light') {
        body.setAttribute('data-theme', 'light');
        themeSwitch.checked = true;
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

    // 3. Logika Tabbed Interface (Fitur Canggih)
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Hapus kelas 'active' dari semua tombol dan konten
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Tambahkan kelas 'active' ke tombol dan konten yang diklik
            button.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // 4. Efek 'Fade In' saat scroll
    const cards = document.querySelectorAll('.card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 
    });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(card);
    });
});
