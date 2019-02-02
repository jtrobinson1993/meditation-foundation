const OPEN_CLASS = "is-open";

const menuButton = document.querySelector('#main-menu-toggle');
const menuButtonBars = document.querySelectorAll('#main-menu-toggle .page-header__toggle-bar');
const mainMenu = document.querySelector('#main-menu');
const menuButtonText = document.querySelectorAll('#main-menu-toggle .screen-reader-only')[0];

menuButton.addEventListener('click', () => {
  mainMenu.classList.toggle(OPEN_CLASS);
  menuButtonBars.forEach(function(e) {
    e.classList.toggle(OPEN_CLASS);
  });
  mainMenu.classList.contains(OPEN_CLASS) ? menuButtonText.textContent = 'Open Menu' : menuButtonText.textContent = 'Close Menu';
});