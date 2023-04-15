// import { renderDescBook } from './render-description-book.js';
// import { modal } from './modal.js';
// import { BookAPI } from './api-service.js';
// const bookApi = new BookAPI();

// export async function showBookDescriptionModal(bookId) {
//   try {
//     const response = await bookApi.getBooksById(bookId);
//     const bookData = await response.data;

//     console.log('data - ', bookData);

//     localStorage.setItem('openedBookData', JSON.stringify(bookData));
//     const renderedInfoBook = renderDescBook(bookData);
//     modal(renderedInfoBook);
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

// showBookDescriptionModal('643282b1e85766588626a086');

//
//
// !=================================перейменувати renderDescBook
// !перевірити де викликається
/*

import { renderBookDescription } from './render-description-book.js';
import { modal } from './modal.js';
import { BookAPI } from './api-service.js';

const bookAPI = new BookAPI();
const addedBooks = JSON.parse(localStorage.getItem('addedBooks')) || [];

export async function showBookDescriptionModal(bookId) {
  try {
    const response = await bookAPI.getBookById(bookId);
    const bookData = response.data;
    localStorage.setItem('openedBookData', JSON.stringify(bookData));
    const renderedBookDescription = renderBookDescription(bookData);
    modal(renderedBookDescription, onAddBook);
  } catch (error) {
    console.log(error);
  }
}

function onAddBook() {
  const openedBookData = JSON.parse(localStorage.getItem('openedBookData'));
  addedBooks.push(openedBookData);
  localStorage.setItem('addedBooks', JSON.stringify(addedBooks));
}
*/

/**
 * 
// !========================ПОТУГИ==================================

// import { BookAPI } from './api-service';
// const bookApi = new BookAPI();

// const refs = {
//   emptyShoppingListEl: document.querySelector('.shopping-list__empty'),
//   notEmptyShoppingListEl: document.querySelector('.shopping-list__list'),
// };

// ! Показуємо добавлені в list книжки, якщо є. Якщо нема - пустий масив.
// const bookAddedToShopList = JSON.parse(localStorage.getItem('addedBooks'));
// if (!bookAddedToShopList)
//   localStorage.setItem('addedBooks', JSON.stringify([]));

// console.log('REFS', refs.emptyShoppingListEl);

// async function renderShopppingList() {
//   const savedBookData = JSON.parse(localStorage.getItem('openInfoBook'));

//   if (!savedBookData) {
//     return;
//   }

//   refs.notEmptyShoppingListEl.hasChildNodes &&
//     refs.emptyShoppingListEl.classList.toggle('is-hidden');

// ! refs.notEmptyShoppingListEl.classList.toggle('is-hidden');

//   const { data } = await bookApi.getBooksById(savedBookData._id);

//   console.log('BookInfo: ', data);
// }

// renderShopppingList();
 */
