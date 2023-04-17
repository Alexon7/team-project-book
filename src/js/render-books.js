export function renderBooksByType(categoryBooks) {
  return `
      ${categoryBooks
        .map(
          el =>
            `
     <li class="book-card__item" >
      <a class="book-card__link" href="#" >
          <div class="book-card__wrapper"   data-type="${el.list_name}">
              <img
              class="book-card__image"
              src="${el.book_image ? el.book_image : ``}"
              alt="${el.title}"
              data-id="${el._id}"
              loading="lazy"
                            />
              <div class="book-card__overlay" data-id="${el._id}">
              <p class="book-card__quick-view-text">quick view</p>
          </div>
          </div>
      </a>
           <div class="book-card__wrap">
            <h3 class="book-card__name">${
              el.title.length > 14 ? el.title.slice(0, 14) + '...' : el.title
            }</h3>
            <p class="book-card__author">${
              el.author.length > 28 ? el.author.slice(0, 28) + '...' : el.author
            } </p>
          </div>

     </li>`
        )
        .join('')}
      `;
}
