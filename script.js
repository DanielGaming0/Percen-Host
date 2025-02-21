// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: true
});

// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navItems = document.querySelector('.nav-items');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navItems.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !navItems.contains(e.target)) {
        menuBtn.classList.remove('open');
        navItems.classList.remove('active');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-items a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Typing Effect (Using Typed.js)
document.addEventListener('DOMContentLoaded', function () {
    const typed = new Typed('.typing-effect', {
        strings: ["Minecraft Server", "Gaming Experience", "Community"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });
});

// Animated Counter
document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // Animation speed

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});

// Color Picker Functionality
document.addEventListener('DOMContentLoaded', function () {
    const colorPicker = document.getElementById('color-picker');
    const applyColorButton = document.getElementById('apply-color');
    const body = document.body;

    applyColorButton.addEventListener('click', function () {
        const color = colorPicker.value.trim().toLowerCase();
        if (color === 'dark') {
            body.classList.add('dark-mode');
        } else if (color === 'white') {
            body.classList.remove('dark-mode');
            body.style.backgroundColor = '#ffffff';
            body.style.color = '#000000';
        } else {
            body.style.backgroundColor = color;
            body.style.color = '#ffffff'; // Default text color for other backgrounds
        }
    });
});

// Dark Mode Toggle (Integrated into Color Picker)
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;

    // Check saved state
    if (localStorage.getItem('dark-mode') === 'true') {
        body.classList.add('dark-mode');
    }
});