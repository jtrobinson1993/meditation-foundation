const OPEN_CLASS = "is-open";

const menuButton = document.querySelector('#main-menu-toggle');
const menuButtonBars = document.querySelectorAll('#main-menu-toggle .page-header__toggle-bar');
const mainMenu = document.querySelector('#main-menu');
const menuButtonText = document.querySelectorAll('#main-menu-toggle .screen-reader-only')[0];

menuButton.addEventListener('click', () => {

  // Update menu button text to reflect action
  menuButtonText.textContent = mainMenu.classList.contains(OPEN_CLASS) ? 'Open Menu' : 'Close Menu';

  // open the menu
  mainMenu.classList.toggle(OPEN_CLASS);

  // add classes to menu button bars for animation purposes
  menuButtonBars.forEach(function(e) {
    e.classList.toggle(OPEN_CLASS);
  });

});