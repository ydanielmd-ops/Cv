// JavaScript to handle navigation highlighting and smooth scroll behavior

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links li a');

  // Observe which section is in view and highlight nav accordingly
  const options = {
    root: null,
    rootMargin: '0px 0px -60% 0px',
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove('active');
          if (link.getAttribute('href').substring(1) === entry.target.id) {
            link.classList.add('active');
          }
        });
      }
    });
  }, options);

  sections.forEach((section) => {
    if (section.id) {
      observer.observe(section);
    }
  });
});