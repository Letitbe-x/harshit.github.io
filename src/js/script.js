// JavaScript to toggle menu open/close
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

menuToggle.addEventListener('click', function() {
    this.classList.toggle('open');
    mobileMenu.classList.toggle('open');
});
