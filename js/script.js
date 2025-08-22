let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // scrolling down → hide navbar
    navbar.style.transform = 'translateY(-100%)';
  } else {
    // scrolling up → show navbar
    navbar.style.transform = 'translateY(0)';
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative values
});


document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".free-image, .works-lapper img, .index-images");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // trigger only once
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeElements.forEach(el => {
    observer.observe(el);
  });
});