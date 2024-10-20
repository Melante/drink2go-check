/* navigation */

const burger = document.querySelector('.account__toggle');
const nav = document.querySelector('.navigation__list');


burger.onclick = function() {
  burger.classList.toggle('account__toggle--close');
  nav.classList.toggle('account__list--open');
};

/* noui */


const rangeSlider = document.querySelector('.rang__slider');

if(rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [0, 900],
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [1000]
    },
    cssPrefix: 'noui-'
  });

  const inputLeft = document.querySelector('.min-input');
  const inputRight = document.querySelector('.max-input');
  const inputs = [inputLeft, inputRight];

  rangeSlider.noUiSlider.on('update', (values, handle) =>{
    inputs[handle].value = Math.round(values[handle]);
  });
}

/* select */

const selectClose = document.querySelector('.sorting__select');
const selectOpen = document.querySelector('.sorting__select--open');

selectClose.onclick = function() {
  selectClose.classList.toggle('sorting__select--open');
  selectOpen.classList.toggle('sorting__select');
};


