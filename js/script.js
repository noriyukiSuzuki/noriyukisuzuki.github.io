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
