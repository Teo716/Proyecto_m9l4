const mainNav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }
});

const sections = document.querySelectorAll('section, header#inicio');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

const highlightNav = () => {
  let currentId = '';
  sections.forEach((section) => {
    const top = section.offsetTop - 100;
    if (window.scrollY >= top) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', highlightNav);
highlightNav();

const navMenu = document.getElementById('navMenu');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
      bsCollapse.hide();
    }
  });
});

const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (contactForm.checkValidity()) {
    formSuccess.classList.remove('d-none');
    contactForm.reset();
    contactForm.classList.remove('was-validated');
    setTimeout(() => formSuccess.classList.add('d-none'), 4000);
  } else {
    contactForm.classList.add('was-validated');
  }
});

const newsletterForm = document.getElementById('newsletterForm');
const newsletterSuccess = document.getElementById('newsletterSuccess');

newsletterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  newsletterSuccess.classList.remove('d-none');
  newsletterForm.reset();
  setTimeout(() => newsletterSuccess.classList.add('d-none'), 4000);
});
