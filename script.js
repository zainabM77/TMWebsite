const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

// Mobile menu toggle
menu.addEventListener('click', function () {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
});

// Fade-in animation
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, {
  threshold: 0.4
});

faders.forEach((el) => observer.observe(el));