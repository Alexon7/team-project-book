(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const toggler = document.querySelector(
      '#mobile-menu .theme-switch__toggle'
    );
    const checkBoxEl = document.querySelector(
      '.theme-switch .theme-switch__toggle'
    );

    const Theme = {
      LIGHT: 'light-theme',
      DARK: 'dark-theme',
    };

    const checkTheme = localStorage.getItem('theme');

    if (checkTheme === Theme.DARK) {
      toggler.checked = true;
      checkBoxEl.checked = true;
    } else {
      toggler.checked = false;
      checkBoxEl.checked = false;
    }

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

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

let currentPage = document.querySelector('.desktop-nav__link');
let currentPageMob = document.querySelector('.mobile-nav__link');
if (
  window.location.pathname == '/' ||
  window.location.pathname == '/team-project-book/'
) {
  currentPage.classList.add('current');
  currentPageMob.classList.add('current');
}

let activePage = document.querySelectorAll(
  '.mobile-nav__link, .desktop-nav__link'
);
activePage.forEach(el => {
  if (el.getAttribute('href') == window.location.pathname) {
    el.classList.add('current');
  }
});

const authModalOpen = document.querySelector('.auth');
const authModalWindow = document.querySelector('.auth__backdrop');
authModalOpen.addEventListener('click', () => {
  authModalWindow.classList.remove('is-hidden');
});
