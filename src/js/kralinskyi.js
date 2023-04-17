import { renderDescBook } from './render-description-book.js';
import { renderShoppingListBooks } from './render-shopping-list.js';
import { modal } from './modal.js';
import { BookAPI } from './api-service.js';
const bookApi = new BookAPI();

const renderBookDescriptionEl = document.querySelector('.shopping-list__list');
const emptyShoppingList = document.querySelector('.shopping-list__empty');

// ! render-description-book.js
// function renderBookDescription(bookData) {
//   const { book_image, title, author, description } = bookData;
//   return `
//   <div class="book-modal">
//      <svg class="close-icon" width="24" height="24">
//              <use href="../images/sprite.svg#close-btn"></use>
//       </svg>
//     <div class="book-modal__content">
//      <div class="book-modal__book">
//       <img
//       src=${book_image}
//         class="book-modal__img"
//         alt="${title}"
//         loading="lazy"
//       />
//       <div>
//         <div class="book-modal__text">
//           <h4 class="book-modal__title">${title}</h4>
//           <h4 class="book-modal__author">${author}</h4>
//           <p class="book-modal__description">${description}</p>
//         </div>
//         <div class="book-modal__links">
//           <a class="book-modal__link" href="">
//             <img
//               class="book-modal__link-image amazon"
//               src="../images/Amazon.png"
//               alt="Amazon logo"
//             />
//           </a>
//           <a class="book-modal__link" href="">
//             <img
//               class="book-modal__link-image bookshop"
//               src="../images/Bookshop.png"
//               alt="Bookshop logo"
//             />
//           </a>
//           <a class="book-modal__link" href="">
//             <img
//               class="book-modal__link-image apple-books"
//               src="../images/Apple Books.png"
//               alt="Apple Books logo"
//             />
//           </a>
//         </div>
//       </div>
//      </div>
//      <button class="book-modal__button btn-add active" type="button">Add to shopping list</button>
//      <div class="btn-remove-wrapper">
//      <button class="book-modal__button btn-remove" type="button">Remove from shopping list</button>
//      <p class="button-text">Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>
//      </div>
//      </div>
//      </div>
//      `;
// }

// ! Список книжок.
let dataBooks = localStorage.getItem('shoppingList');
dataBooks = JSON.parse(dataBooks);

console.log(dataBooks);

// Якщо масив книжок є  ----
dataBooks && emptyShoppingList.classList.add('is-hidden');

const renderedList = renderShoppingListBooks(dataBooks);

renderBookDescriptionEl.innerHTML = renderedList;
