addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMenu = document.getElementById('close-menu');
    hamburger.addEventListener('click', () => {
    mobileMenu.style.display = 'flex';
    });
    closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    });
});