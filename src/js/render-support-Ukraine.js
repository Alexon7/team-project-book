import { arrayFunds } from './support-list';
import Swiper from 'swiper';

const supportListEl = document.querySelector('.support__list-js');
const btnSwiperEl = document.querySelector('.swiper-button-next');

let position = 0;
const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const markupCardFund = (
  { title, url, img1x, img2x },
  position
) => `<li class="support__list-item swiper-slide">
  <p class="support__number">${position}</p>
  <a class="support__link" href="${url}" target="_blank" rel="noopener noreferrer nofollow">
    <img
      srcset="${img1x} 1x, ${img2x} 2x"
      src="${img1x}"
      alt="${title}"
      width="149"
      loading="lazy"
    />
  </a>
</li>`;

const markupSetFunds = arrayFunds
  .map((el, i) => {
    position = addLeadingZero(i + 1);

    return markupCardFund(el, position);
  })
  .join('');

supportListEl.innerHTML = markupSetFunds;

const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  spaceBetween: 20,
  slidesPerView: 'auto',
  rewind: true,

  navigation: {
    nextEl: '.swiper-button-next',
  },

  plugins: {
    scrollContainer: true,
  },
});

swiper.update();

btnSwiperEl.addEventListener('click', () => {
  swiper.slideNext();
});


