import { renderDescBook } from './render-description-book.js';
import { modal } from './modal.js';
import { BookAPI } from './api-service.js';
const bookApi = new BookAPI();

export const showBookModal = async bookId => {
  const newBook = await bookApi.getBooksById(bookId);
  const renderedInfoBook = renderDescBook(newBook);
  const allBooks = JSON.parse(localStorage.getItem('shoppingList')) || [];

  modal(renderedInfoBook); // render book

  // находим кнопки после рендера
  const btnAddBookToShoppingList = document.querySelector('.btnAdd');
  const btnRemoveBookFromShoppingList = document.querySelector('.btnRemove');
  const divRemove = document.querySelector('.btnRemove-wrapper');

  //показываю кнопку добавить
  const showAdd = () => {
    btnRemoveBookFromShoppingList.classList.remove('active');
    divRemove.classList.remove('active');
    btnAddBookToShoppingList.classList.add('active');
  };

  // показываю кнопку удалить
  const showRemove = () => {
    btnAddBookToShoppingList.classList.remove('active');
    divRemove.classList.add('active');
    btnRemoveBookFromShoppingList.classList.add('active');
  };

  const isAddShoppingList = allBooks.find(book => book._id === newBook._id);
  isAddShoppingList ? showRemove() : showAdd();

  // добавляем в LS книгу
  btnAddBookToShoppingList.addEventListener('click', event => {
    allBooks.push(newBook);
    console.log('добавленные книги', allBooks);
    localStorage.setItem('shoppingList', JSON.stringify(allBooks));
    showRemove();
  });

  btnRemoveBookFromShoppingList.addEventListener('click', event => {
    const allBooks = JSON.parse(localStorage.getItem('shoppingList')) || [];
    const filteredBooks = allBooks.filter(book => book._id !== newBook._id);

    localStorage.setItem('shoppingList', JSON.stringify(filteredBooks));
    showAdd();
  });
};
