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

document.addEventListener('DOMContentLoaded', function() {
  //show/hide
  document.querySelectorAll('.faq-question').forEach(function(q) {
    q.addEventListener('click', function() {
      const item = q.closest('.faq-item');
      if (item.classList.contains('open')) {
        item.classList.remove('open');
      } else {
        // Fecha outros abertos
        document.querySelectorAll('.faq-item.open').forEach(function(openItem) {
          openItem.classList.remove('open');
        });
        item.classList.add('open');
      }
    });
  });

  var newsletterForm = document.querySelector('.newsletter-form');
  var newsletterSuccess = document.querySelector('.newsletter-success');
  if (newsletterForm && newsletterSuccess) {
    newsletterForm.addEventListener('submit', function(e) {
      e.preventDefault();
      newsletterSuccess.style.display = 'block';
      newsletterForm.reset();
      setTimeout(function() {
        newsletterSuccess.style.display = 'none';
      }, 3500);
    });
  }
});
