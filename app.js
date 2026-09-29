const mobileMenu = document.querySelector('.mobile-nav');

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.open = false;
  });
});
