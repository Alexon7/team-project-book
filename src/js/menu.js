(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

let activePage = document.querySelectorAll(
  '.mobile-nav__link, .desktop-nav__link'
);
activePage.forEach(el => {
  if (el.getAttribute('href') == window.location.pathname) {
    el.classList.add('current');
  } else {
    el.classList.remove('current');
  }
});

const authModalOpen = document.querySelector('.auth');
const authModalWindow = document.querySelector('.auth__backdrop');
authModalOpen.addEventListener('click', () => {
  authModalWindow.classList.remove('is-hidden');
});
