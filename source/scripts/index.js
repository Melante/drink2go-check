/* в этот файл добавляет скрипты*/
const burger = document.querySelector('.account__toggle--open');
const nav = document.querySelector('.navigation__list');
const block = document.querySelector('.account-nojs');
const cross = document.querySelector('.account__toggle--bg');
const list = document.querySelector('.account-nojs-list');


list.classList.remove('account-nojs-list');
block.classList.remove('account-nojs');
cross.classList.remove('account__toggle--bg');

burger.onclick = function() {
  burger.classList.toggle('account__toggle--close');
  nav.classList.toggle('account__list--open');
};


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


