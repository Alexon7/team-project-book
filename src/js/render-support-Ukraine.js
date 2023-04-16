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

// export const renderSupportList = items => {
//   const listItems = items
//     .map((item, index) => {
//       const { title, url, img1x, img2x } = item;
//       const number = (index + 1).toString().padStart(2, '0');
//       return `
//            <li class="support__item">

//               <a
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label="company icon"
//                 class="support__link"
//                 href="${url}"
//               >
//               <p class="support__number">${number}</p>
//                 <img
//                   src="/src/images/support-images/save@1x.png"
//                   alt="${title}"
//                   class="support__img"
//                   srcset="
//                   ${img1x} 1x,
//                   ${img2x} 2x
//                   "
//                 />
//               </a>
//               `;
//     })
//     .join('');
//   supportListEl.innerHTML = `${listItems}`;
// };

// renderSupportList(arrayFunds);
