import { renderDescBook } from './render-description-book.js';
import { modal } from './modal.js';
import { BookAPI } from './api-service.js';
const bookApi = new BookAPI();

export const showBookModal = async bookId => {
  const newBook = await bookApi.getBooksById(bookId);
  const renderedInfoBook = renderDescBook(newBook);

  modal(renderedInfoBook); // render book

  // находим кнопки после рендера
  const btnAddBookToShoppingList = document.querySelector('.btnAdd');
  const btnRemoveBookFromShoppingList = document.querySelector('.btnRemove');

  const showAdd = () => {
    btnRemoveBookFromShoppingList.classList.remove('active');
    btnAddBookToShoppingList.classList.add('active');
  };
  const showRemove = () => {
    btnAddBookToShoppingList.classList.remove('active');
    btnRemoveBookFromShoppingList.classList.add('active');
  };
  // const isAddShoppingList = shoppingBooks.find(
  //   book => book._id === openBook._id
  // );
  // isAddShoppingList ? showRemove() : showAdd();

  // добавляем в LS книгу
  btnAddBookToShoppingList.addEventListener('click', event => {
    const allBooks = JSON.parse(localStorage.getItem('shoppingList')) || [];

    allBooks.push(newBook);
    console.log('добавленные книги', allBooks);
    localStorage.setItem('shoppingList', JSON.stringify(allBooks));
    showRemove();
  });

  btnRemoveBookFromShoppingList.addEventListener('click', event => {
    const openBook = JSON.parse(localStorage.getItem('openInfoBook'));
    const shoppingBooks = JSON.parse(localStorage.getItem('shoppingList'));
    const newShoppingBooks = shoppingBooks.filter(
      book => book._id !== openBook._id
    );
    localStorage.setItem('shoppingList', JSON.stringify(newShoppingBooks));
    showAdd();
    renderDescBooks();
  });
};
