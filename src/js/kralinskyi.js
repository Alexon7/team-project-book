import { renderShoppingListBooks } from './render-shopping-list.js';

const emptyShoppingList = document.querySelector('.shopping-list__empty');
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

const removeBookFromShoppingListBtn = document.querySelector('.delete-btn');
const shoppingListEl = document.querySelector('.shopping-book');

console.log(shoppingListEl);

console.log(removeBookFromShoppingListBtn);

shoppingListEl.addEventListener('click', onRemoveBookBtnClick);

function onRemoveBookBtnClick(e) {
  e.preventDefault();

  console.log(e.target.elements);
}

// !+++++++++++++++++++++++++++++++++++
