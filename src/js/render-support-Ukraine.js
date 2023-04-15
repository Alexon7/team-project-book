
 import { arrayFunds } from "./support-list";

const supportListEl = document.querySelector('.js_support_list');


export const renderSupportList = items => {
  const listItems = items
    .map((item, index) => {
      const { title, url, img1x, img2x } = item;
      const number = (index + 1).toString().padStart(2, '0');
      return `
           <li class="support__item">
              
              <a
                target="_blank"
                rel="noopener noreferrer"
                aria-label="company icon"
                class="support__link"
                href="${url}"
              >
              <p class="support__number">${number}</p>
                <img
                  src="/src/images/support-images/save@1x.png"
                  alt="${title}"
                  class="support__img"
                  srcset="
                  ${img1x} 1x,
                  ${img2x} 2x
                  "
                />
              </a>
              `;
    })
    .join('');
  supportListEl.innerHTML = `${listItems}`;
};

renderSupportList(arrayFunds);