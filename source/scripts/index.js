/* в этот файл добавляет скрипты*/
const burger = document.querySelector('.navigation__toggle--open');
const nav = document.querySelector('.navigation__list');
const block = document.querySelector('.navigation-nojs');
const cross = document.querySelector('.navigation__toggle--bg');
const list = document.querySelector('.navigation-nojs-list');


list.classList.remove('navigation-nojs-list');
block.classList.remove('navigation-nojs');
cross.classList.remove('navigation__toggle--bg');

burger.onclick = function() {
  burger.classList.toggle('navigation__toggle--close');
  nav.classList.toggle('navigation__list--open');
};
