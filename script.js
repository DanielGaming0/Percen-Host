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

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const lightModeToggle = document.getElementById('light-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', function () {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
});

lightModeToggle.addEventListener('click', function () {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    localStorage.setItem('theme', 'light');
});

// Check saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
} else if (savedTheme === 'light') {
    body.classList.add('light-mode');
}

// Language Toggle
const languageEn = document.getElementById('language-en');
const languagePt = document.getElementById('language-pt');
const elementsToTranslate = document.querySelectorAll('[data-en], [data-pt]');

languageEn.addEventListener('click', function () {
    elementsToTranslate.forEach(element => {
        element.textContent = element.getAttribute('data-en');
    });
    languageEn.classList.add('active');
    languagePt.classList.remove('active');
});

languagePt.addEventListener('click', function () {
    elementsToTranslate.forEach(element => {
        element.textContent = element.getAttribute('data-pt');
    });
    languagePt.classList.add('active');
    languageEn.classList.remove('active');
});

// Set default language to English
languageEn.click();