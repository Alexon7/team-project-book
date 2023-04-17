// import { renderDescBook } from './render-description-book.js';
import { renderShoppingListBooks } from './render-shopping-list.js';
// import { modal } from './modal.js';
import { BookAPI } from './api-service.js';
const bookApi = new BookAPI();

const renderBookDescriptionEl = document.querySelector('.shopping-list__list');
const emptyShoppingList = document.querySelector('.shopping-list__empty');

// ! Список книжок.

function loadList() {
  let dataBooks = localStorage.getItem('shoppingList');
  dataBooks = JSON.parse(dataBooks);

  console.log(dataBooks);

  // Якщо масив книжок є  ----
  dataBooks && emptyShoppingList.classList.add('is-hidden');

  const renderedList = renderShoppingListBooks(dataBooks);

  renderBookDescriptionEl.innerHTML = renderedList;
}

loadList();
