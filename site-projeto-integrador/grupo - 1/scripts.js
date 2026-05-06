// Menu Mobile
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Scroll Suave
const menuItems = document.querySelectorAll('#menu a[href^="#"]');

menuItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const id = item.getAttribute('href');
    const target = document.querySelector(id);
    
    // Fecha o menu mobile ao clicar
    document.getElementById('nav').classList.remove('active');

    window.scroll({
      top: target.offsetTop - 70,
      behavior: 'smooth'
    });
  });
});

// Animação Simples de Fade-In ao scroll
const debounce = function(func, wait, immediate) {
  let timeout;
  return function(...args) {
    const context = this;
    const later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
  target.forEach(function(element) {
    if ((windowTop) > element.offsetTop) {
      element.classList.add(animationClass);
    }
  });
}

if (target.length) {
  window.addEventListener('scroll', debounce(function() {
    animeScroll();
  }, 200));
}