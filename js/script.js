
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.header-bar nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('open');
  });
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}
