// Alenka Alexon

const body = document.querySelector('body');
const checkBoxEl = document.querySelector(
  '.theme-switch .theme-switch__toggle'
);

const checkBoxElMob = document.querySelector('#theme-switch-toggle-mob');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkTheme = localStorage.getItem('theme');

body.classList.add(Theme.LIGHT);

if (checkTheme === Theme.DARK) {
  body.classList.replace(Theme.LIGHT, Theme.DARK);
  checkBoxEl.setAttribute('checked', 'checked');
}

function repleceCheckTheme() {
  if (body.classList.contains(Theme.LIGHT)) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('theme', body.getAttribute('class'));
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', body.getAttribute('class'));
  }
}
checkBoxEl.addEventListener('click', repleceCheckTheme);
checkBoxElMob.addEventListener('click', repleceCheckTheme);
