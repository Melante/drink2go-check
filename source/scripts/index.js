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


