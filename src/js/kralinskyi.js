import { renderDescBook } from './render-description-book.js';
import { modal } from './modal.js';
import { BookAPI } from './api-service.js';
const bookApi = new BookAPI();

export async function showBookDescriptionModal(bookId) {
  try {
    const response = await bookApi.getBooksById(bookId);
    const bookData = await response.data;

    console.log('data - ', bookData);

    localStorage.setItem('openedBookData', JSON.stringify(bookData));
    const renderedInfoBook = renderDescBook(bookData);
    modal(renderedInfoBook);
  } catch (error) {
    console.log(error);
    return null;
  }
}

showBookDescriptionModal('643282b1e85766588626a086');
