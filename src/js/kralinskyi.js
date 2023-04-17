import { renderShoppingListBooks } from './render-shopping-list.js';

const removeBookFromShoppingListBtn = document.querySelector('.delete-btn');
const renderShoppingList = document.querySelector('.shopping-list__list');

let dataBooks = localStorage.getItem('shoppingList');
dataBooks = JSON.parse(dataBooks);

const dataBooksArr = [];
dataBooksArr.push(dataBooks);
// console.log(dataBooksArr);
(function loadList() {
  // Якщо масив книжок є  ----
  //   dataBooks && emptyShoppingList.classList.add('is-hidden');

  const renderedList = renderShoppingListBooks(dataBooksArr);

  renderShoppingList.insertAdjacentHTML('beforeend', renderedList);
})();

renderShoppingList.addEventListener('click', onShoppingListClick);

function onShoppingListClick(e) {
  e.preventDefault();

  console.log('click!');
}
