import { renderDescBook } from './render-description-book.js';
import { modal } from './modal.js';
import { BookAPI } from './api-service.js';
const bookApi = new BookAPI();

const categoryBooksEl = document.querySelector('.book-category__list');
categoryBooksEl.addEventListener('click', handleDataBookById);

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
  const response = await bookApi.getBooksById(bookId);
  const infoBook = response.data;
  console.log(infoBook);
  localStorage.setItem('openInfoBook', JSON.stringify(infoBook));
  const renderedInfoBook = renderDescBook(infoBook);
  modal(renderedInfoBook);
};

export function show(event) {
  const books = document.querySelectorAll('.category-books');
  books.forEach(book => {
    book.addEventListener('click', event => {
      if (event.target.parentNode.nodeName === 'LI')
        showBookModal(event.target.parentNode.dataset.id);
    });
  });
}

// при клике на книгу считываем id и рендерим модалку - потом с ней работаем. наверное надо разенсти по разным файлам
function handleDataBookById(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const bookId = event.target.dataset.id;
  console.log(bookId);

  showBookModal(bookId);
}
