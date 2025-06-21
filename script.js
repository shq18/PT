document.addEventListener("DOMContentLoaded", function () {
  // === Показ/скрытие модального окна проекта ===
  const cards = document.querySelectorAll('.project-card');
  const popup = document.querySelector('.popup');
  const popupImg = document.getElementById('popup-img');
  const popupTitle = document.getElementById('popup-title');
  const popupDesc = document.getElementById('popup-desc');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-title');
      const desc = card.getAttribute('data-desc');
      const imgSrc = card.querySelector('img').src;

      popupImg.src = imgSrc;
      popupTitle.textContent = title;
      popupDesc.textContent = desc;

      popup.classList.add('active');
    });
  });

  // Закрытие по крестику
  document.querySelector('.popup-close')?.addEventListener('click', () => {
    popup.classList.remove('active');
  });

  // Закрытие по клику вне окна
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('active');
    }
  });

  // === Плавное появление меню при скролле ===
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    if (scrollTop > lastScrollTop) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }
    lastScrollTop = scrollTop;
  });

  // === Простая форма с уведомлением об успешной отправке ===
  document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Спасибо за сообщение!');
    this.reset();
  });
});
// === Настройка анимированного фона с помощью Particle.js ===
document.addEventListener("DOMContentLoaded", function () {
  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('Particles.js loaded');
  });
});
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
// === Бургер-меню для мобильных ===
const menuToggle = document.createElement('div');
menuToggle.classList.add('menu-toggle');
menuToggle.innerHTML = '☰';
document.querySelector('.navbar').appendChild(menuToggle);

const navLinks = document.querySelector('.navbar nav ul');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

