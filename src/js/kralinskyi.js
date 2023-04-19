import { renderShoppingListBooks } from './render-shopping-list.js';

const emptyShoppingList = document.querySelector('.shopping-list__empty');
const renderBookDescriptionEl = document.querySelector('.shopping-list__list');
const paginationEl = document.querySelector('.tui-pagination');
function loadList() {
  let dataBooks = localStorage.getItem('shoppingList');
  dataBooks = JSON.parse(dataBooks);

  // console.log(dataBooks);

  // Якщо масив книжок є  ----
  // dataBooks && emptyShoppingList.classList.add('is-hidden');
  console.log(dataBooks.length);
  if (dataBooks.length !== 0) {
    emptyShoppingList.classList.add('is-hidden');
    renderBookDescriptionEl.classList.remove('is-hidden');
    paginationEl.classList.remove('is-hidden');
  } else {
    emptyShoppingList.classList.remove('is-hidden');
    renderBookDescriptionEl.classList.add('is-hidden');
    paginationEl.classList.add('is-hidden');
  }
  if (dataBooks.length < 4) {
    paginationEl.classList.add('is-hidden');
  }

  const renderedList = renderShoppingListBooks(dataBooks);

  renderBookDescriptionEl.innerHTML = renderedList;
}
loadList();

renderBookDescriptionEl.addEventListener('click', onRemoveBookBtnClick);

function onRemoveBookBtnClick(e) {
  if (e.target.dataset.action !== 'delete') {
    return;
  }
  renderBookDescriptionEl.innerHTML = ``;
  const parentNode = e.target.closest('.shopping-book');
  const bookToRemoveId = parentNode.dataset.id;

  console.log(bookToRemoveId);

  let dataBooks = localStorage.getItem('shoppingList');
  dataBooks = JSON.parse(dataBooks);
  dataBooks = dataBooks.filter(book => book._id !== bookToRemoveId);

  // !-------------------

  const filteredBooks = dataBooks.filter(book => book._id !== bookToRemoveId);

  localStorage.setItem('shoppingList', JSON.stringify(filteredBooks));

  renderBookDescriptionEl.innerHTML = renderShoppingListBooks(filteredBooks);

  saveToLocalStorage();
  parentNode.remove();

  // if (!dataBooks || dataBooks.length === 0) {
  //   emptyShoppingList.classList.remove('is-hidden');
  // }
  if (dataBooks.length < 4) {
    paginationEl.classList.add('is-hidden');
  }
  loadList();
  function saveToLocalStorage() {
    localStorage.setItem('books-data', JSON.stringify(dataBooks));
  }
}
