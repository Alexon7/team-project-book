// import amazon from '../images/Amazon2x.png';
import amazon from '../images/Amazon_dark2x.png';
import apple from '../images/Apple2x.png';
import bookshop from '../images/Bookshop2x.png';

export function renderDescBook(aboutBook) {
  // const { book_image, title, author, description } = aboutBook;
  return `
  <div class="book-modal">
      <button class="book-modal__close-button" type="button">
          <svg class=" close-icon " version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
              viewBox="0 0 32 32">
              <path
                  d="M7.626 6.245c-0.291 0.085-0.749 0.427-1.029 0.774-0.432 0.533-0.509 1.054-0.24 1.616 0.088 0.184 1.011 1.143 3.665 3.806l3.547 3.56-3.551 3.56c-3.907 3.918-3.806 3.799-3.805 4.44 0 0.449 0.157 0.77 0.586 1.199 0.429 0.43 0.75 0.586 1.199 0.586 0.634 0 0.526 0.093 4.44-3.808l3.56-3.547 3.56 3.547c3.914 3.901 3.806 3.808 4.44 3.808 0.449 0 0.77-0.157 1.199-0.586 0.43-0.429 0.586-0.75 0.586-1.199 0-0.634 0.093-0.526-3.808-4.44l-3.547-3.56 3.547-3.56c3.901-3.914 3.808-3.806 3.808-4.44 0-0.449-0.157-0.77-0.586-1.199-0.429-0.43-0.75-0.586-1.199-0.586-0.634 0-0.526-0.093-4.44 3.808l-3.56 3.547-3.56-3.547c-2.721-2.712-3.619-3.576-3.814-3.67-0.29-0.138-0.728-0.186-1-0.109z">
              </path>
          </svg>
      </button>
      <div class="book-modal__content">
          <div class="book-modal__book">
              <img src=${aboutBook.book_image} class="book-modal__img" alt="о книге" loading="lazy" />
              <div>
                  <div class="book-modal__text">
                      <h4 class="book-modal__title">${aboutBook.title}</h4>
                      <h4 class="book-modal__author">${aboutBook.author}</h4>
                      <p class="book-modal__description">${aboutBook.description}</p>
                  </div>
                  <div class="book-modal__links">
                      <a class="modal-book__link" href="${aboutBook.buy_links[0].url}" target="_blank">
                          <img class="book-modal__link amazon" src=${amazon} alt="Shop logo" />
                      </a>
                      <a class="modal-book__link" href="${aboutBook.buy_links[1].url}" target="_blank">
                          <img class="book-modal__link applebooks" src=${apple} alt="Shop logo" />
                      </a>
                      <a class="modal-book__link" href="${aboutBook.buy_links[4].url}" target="_blank">
                          <img class="book-modal__link bookshop" src=${bookshop} alt="Shop logo" />
                      </a>
                  </div>
              </div>
          </div>
          <button class="modal-book__button btnAdd active" type="button">Add to shopping list</button>
          <div class="btnRemove-wrapper">
              <button class="modal-book__button btnRemove" type="button">Remove from shopping list</button>
              <p class="button-text">Сongratulations! You have added the book to the shopping list. To delete, press the
                  button “Remove from the shopping list”.</p>
          </div>

      </div>
  </div>
  `;
}
