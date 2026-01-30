document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    mobileBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Animate hamburger to X (optional, simple toggle for now)
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
        });
    });

    // Smooth Scroll for Anchor Links (Polyfill-like behavior if needed, but CSS scroll-behavior usually handles it)
    // Adding active state to nav links on scroll could be a nice addition
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.desktop-nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                // You can add an active class in CSS if you want to highlight the current section
                // link.classList.add('active'); 
            }
        });
    });
});
