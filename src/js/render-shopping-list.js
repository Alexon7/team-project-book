import sprite from '../images/sprite.svg';
// import '../images/Apple.png';
// import '../images/Bookshop.png';

import amazon from '../images/Amazon2x.png';
import apple from '../images/Apple2x.png';
import bookshop from '../images/Bookshop2x.png';

export function renderShoppingListBooks(savedBooks) {
  const bookItemTemplate = book => `
    <li class="shopping-book" data-id=${book._id}>
      <button class="delete-btn" data-action="delete" type="button">
        <svg class="delete-icon" width="28" height="28">
          <use href="${sprite}#delete-book"></use>
        </svg>
      </button>
      <div class="content">
      
        <div class="book">
        <div class="book__img">  
        <img
            class="cover"
            src="${book.book_image ? book.book_image : ``}"
            alt="${book.title}"
            loading="lazy"
            width="98"
            height="139"
          />
          </div>
          <div class="book__text">
            <h4 class="book__text-title">${book.title}</h4>
            <h4 class="book__text-type">${book.list_name}</h4>
             <div class="book__links">
                      <a class="modal-book__link" href="${
                        book.buy_links[0].url
                      }" target="_blank">
                          <img class="book__link" src=${amazon} alt="Shop logo" width="48"/>
                      </a>
                      <a class="modal-book__link" href="${
                        book.buy_links[1].url
                      }" target="_blank">
                          <img class="book__link" src=${apple} alt="Shop logo" width="28"/>
                      </a>
                      <a class="modal-book__link" href="${
                        book.buy_links[4].url
                      }" target="_blank">
                          <img class="book__link" src=${bookshop} alt="Shop logo" width="32">
                      </a>
                  </div>
          </div>
        </div>
        <div class="book__desc">
        <h4 class="book__author">${book.author}</h4>
        <p class="description">${book.description}</p>
        </div>
      </div>
    </li>`;
  return savedBooks.map(bookItemTemplate).join('');
}
