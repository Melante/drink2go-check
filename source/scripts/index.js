import './navigation.js';

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

/* hero-slider */
const prevArrow = document.querySelector('.hero__arrow--left');
const nextArrow = document.querySelector('.hero__arrow--right');
const imageSlides = document.querySelectorAll('.slider-list__item');
const imageNavigation = document.querySelector('.slider-pagination');

let slideIndex = 0;
const paginationImage = [];

document.addEventListener('DOMContentLoaded', initializeSlider);

function initializeSlider() {
  if (imageSlides.length > 0) {
    showSlide(slideIndex);
    createPaginationImage();
  }
}

function showSlide(index) {
  if (index >= imageSlides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = imageSlides.length - 1;
  } else {
    slideIndex = index;
  }

  imageSlides.forEach((slide) => {
    slide.classList.remove('slider-list__item--current');
  });
  imageSlides[slideIndex].classList.add('slider-list__item--current');

  updateNavigationButtons();
  updatePagination(); // Обновляем пагинацию
}

function updateNavigationButtons() {
  if (slideIndex === 0) {
    prevArrow.classList.add('slider-pagination__button--disabled');
  } else {
    prevArrow.classList.remove('slider-pagination__button--disabled');
  }

  if (slideIndex === imageSlides.length - 1) {
    nextArrow.classList.add('slider-pagination__button--disabled');
  } else {
    nextArrow.classList.remove('slider-pagination__button--disabled');
  }
}

prevArrow.addEventListener('click', () => {
  if (slideIndex > 0) {
    showSlide(slideIndex - 1);
  }
});

nextArrow.addEventListener('click', () => {
  if (slideIndex < imageSlides.length - 1) {
    showSlide(slideIndex + 1);
  }
});

function createPaginationImage() {
  imageSlides.forEach((_, index) => {
    const div = document.createElement('div');
    div.className = 'slider-pagination__button';
    div.addEventListener('click', () => showSlide(index));
    imageNavigation.appendChild(div);
    paginationImage.push(div);
  });
}

function updatePagination() {
  paginationImage.forEach((button, index) => {
    if (index === slideIndex) {
      button.classList.add('slider-pagination__button--active'); // Добавляем активный класс
    } else {
      button.classList.remove('slider-pagination__button--active'); // Убираем активный класс
    }
  });
}

