"use strict";var OPEN_CLASS="is-open",menuButton=document.querySelector("#main-menu-toggle"),menuButtonBars=document.querySelectorAll("#main-menu-toggle .page-header__toggle-bar"),mainMenu=document.querySelector("#main-menu"),menuButtonText=document.querySelectorAll("#main-menu-toggle .screen-reader-only")[0];menuButton.addEventListener("click",function(){mainMenu.classList.toggle(OPEN_CLASS),menuButtonBars.forEach(function(e){e.classList.toggle(OPEN_CLASS)}),mainMenu.classList.contains(OPEN_CLASS)?menuButtonText.textContent="Open Menu":menuButtonText.textContent="Close Menu"});