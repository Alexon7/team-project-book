// import Swiper, { Navigation, Pagination } from 'swiper';



// const buildSwiperSliderSupport = sliderElm => {
//   const sliderIdentifier = sliderElm.dataset.id;
//   const swiper = new Swiper([data-id="${sliderIdentifier}"], {
//     spaceBetween: 20,
//     direction: 'vertical',
//     slidesPerView: 'auto',
//     loop: true,
//     navigation: {
//       nextEl: .swiper-button-next-${sliderIdentifier},
//       prevEl: .swiper-button-prev-${sliderIdentifier},
//     },
//   });
//   return swiper;
// };


import { renderSupportList } from './render-support-Ukraine';
const imgSlides = document.querySelectorAll('.support__item');
const sliderBtn = document.querySelector('.support__btn');

let counter = 0;
let moveDown = false;

const verticalSlider = function () {
  imgSlides.forEach(function (slide) {
    slide.style.transform = translateY(-${counter * 100}%);
  });
};

sliderBtn.addEventListener('click', function () {
  if (moveDown) {
    counter -= 2;
    if (counter < 0) {
      counter = 0;
      moveDown = false;
      sliderBtn.querySelector('.support__icon').style.transform = '';
    }
  } else {
    counter += 2;
    if (counter >= imgSlides.length) {
      counter = imgSlides.length - 1;
      moveDown = true;
      sliderBtn.querySelector('.support__icon').style.transform = 'rotate(180deg)';
    }
  }
  verticalSlider(renderSupportList);
});