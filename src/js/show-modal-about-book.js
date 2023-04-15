import { renderDescBook } from './render-description-book.js';
import { modal } from './modal.js';
import { BookAPI } from './api-service.js';
const bookApi = new BookAPI();

// const categoryBooksEl = document.querySelector('.books-of-category__list');
// categoryBooksEl.addEventListener('click', handleDataBookById);

// єтот кусок не надо - id книги получаем по клику книги:
// const booksId = async bookId => {
//   try {
//     const response = await bookApi.getBooksById(bookId);
//     const data = response.data;
//     // console.log(data);
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const showBookModal = async bookId => {
  const infoBook = await bookApi.getBooksById(bookId);
  // const infoBook = response.data;
  console.log(infoBook);
  localStorage.setItem('openInfoBook', JSON.stringify(infoBook));
  const renderedInfoBook = renderDescBook(infoBook);
  modal(renderedInfoBook);

  const showAdd = () => {
    btnRemoveBookFromShoppingList.classList.remove('active');
    btnAddBookToShoppingList.classList.add('active');
  };
  const showRemove = () => {
    btnAddBookToShoppingList.classList.remove('active');
    btnRemoveBookFromShoppingList.classList.add('active');
  };
  const isAddShoppingList = shoppingBooks.find(
    book => book._id === openBook._id
  );
  isAddShoppingList ? showRemove() : showAdd();

  btnAddBookToShoppingList.addEventListener('click', event => {
    const openBook = JSON.parse(localStorage.getItem('openInfoBook'));
    const shoppingBooks = JSON.parse(localStorage.getItem('shoppingList'));

    const newShoppingBooks = shoppingBooks
      ? [...shoppingBooks, openBook]
      : [openBook];
    localStorage.setItem('shoppingList', JSON.stringify(newShoppingBooks));
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

// export function show(event) {
//   const books = document.querySelectorAll('.category-books');

//   books.forEach(book => {
//     book.addEventListener('click', event => {
//       if (event.target.parentNode.nodeName === 'LI')
//         showBookModal(event.target.parentNode.dataset.id);
//     });
//   });
// }
