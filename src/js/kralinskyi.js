import { renderShoppingListBooks } from './render-shopping-list.js';

const emptyShoppingList = document.querySelector('.shopping-list__empty');
const removeBookFromShoppingListBtn = document.querySelector('.delete-btn');
const renderBookDescriptionEl = document.querySelector('.shopping-list__list');

(function loadList() {
  let dataBooks = localStorage.getItem('shoppingList');
  dataBooks = JSON.parse(dataBooks);

  console.log(dataBooks);

  // Якщо масив книжок є  ----
  dataBooks && emptyShoppingList.classList.add('is-hidden');

  const renderedList = renderShoppingListBooks(dataBooks);

  renderBookDescriptionEl.innerHTML = renderedList;
})();

renderBookDescriptionEl.addEventListener('click', onRemoveBookBtnClick);

function onRemoveBookBtnClick(e) {
  e.preventDefault();

  console.log('click!');
}

// !+++++++++++++++++++++++++++++++++++

console.log(renderBookDescriptionEl);
