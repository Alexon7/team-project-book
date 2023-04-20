export function renderBooksByType(categoryBooks) {
  return `
      ${categoryBooks
        .map(
          book =>
            `
     <li class="book-card__item by-category" >
      <a class="book-card__link" href="#" >
          <div class="book-card__wrapper"   data-type="${book.list_name}">
              <img
              class="book-card__image"
              src="${book.book_image ? book.book_image : ``}"
              alt="${book.title}"
              data-id="${book._id}"
              loading="lazy"
                            />
              <div class="book-card__overlay" data-id="${book._id}">
              <p class="book-card__quick-view-text">quick view</p>
          </div>
          </div>
      </a>
           <div class="book-card__wrap">
            <h3 class="book-card__name">${
              book.title.length > 14
                ? book.title.slice(0, 14) + '...'
                : book.title
            }</h3>
            <p class="book-card__author">${
              book.author.length > 28
                ? book.author.slice(0, 28) + '...'
                : book.author
            } </p>
          </div>

     </li>`
        )
        .join('')}
      `;
}
