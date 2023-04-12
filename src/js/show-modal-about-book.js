import { renderDescBook } from './render-description-book.js';
import { modal } from './modal.js';
import axios from 'axios';

const booksId = async bookId => {
  try {
    const { data } = await axios.get(`/books/${bookId}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const showBookModal = async bookId => {
  const infoBook = await booksId(bookId);
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
