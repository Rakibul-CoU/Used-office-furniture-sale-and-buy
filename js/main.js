// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var hamburger = document.querySelector('.hamburger');
  var mobileNav = document.querySelector('.mobile-nav');
  var closeBtn = document.querySelector('.mobile-nav-close');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      mobileNav.classList.add('open');
    });
  }
  if (closeBtn && mobileNav) {
    closeBtn.addEventListener('click', function () {
      mobileNav.classList.remove('open');
    });
  }
  document.querySelectorAll('.mobile-nav a').forEach(function (a) {
    a.addEventListener('click', function () {
      mobileNav.classList.remove('open');
    });
  });

  // Product filter (products.html)
  var filterButtons = document.querySelectorAll('.filter-bar button');
  var productCards = document.querySelectorAll('[data-category]');
  if (filterButtons.length && productCards.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var cat = btn.getAttribute('data-filter');
        productCards.forEach(function (card) {
          if (cat === 'all' || card.getAttribute('data-category') === cat) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // Contact form (static demo — wires up to mailto as a fallback)
  var form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var phone = form.phone.value.trim();
      var message = form.message.value.trim();
      var subject = encodeURIComponent('Website enquiry from ' + name);
      var body = encodeURIComponent(message + '\n\nPhone: ' + phone);
      window.location.href = 'mailto:info@usedofficefurnitureqatar.com?subject=' + subject + '&body=' + body;
    });
  }

  // Footer year
  var yearEl = document.querySelector('#year');
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
});
