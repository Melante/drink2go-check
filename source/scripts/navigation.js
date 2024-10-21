/* navigation */

const burger = document.querySelector('.account__toggle');
const nav = document.querySelector('.navigation__list');


burger.onclick = function() {
  burger.classList.toggle('account__toggle--close');
  nav.classList.toggle('account__list--open');
};
