// Iskra Matjuha
import { BookAPI } from './api-service';
import { showBookModal } from './show-modal-about-book';
import { refs } from './refs';
import { loaderRender } from './preloader';
const bookApi = new BookAPI();

//запрос книг по выбранной категории - считываем категорию со списка категорий - и нужно прорисовать книги из нее
export async function handleRenderCategoryItem(category) {
  loaderRender();
  const categoryBooks = await bookApi.getBooksByCategories(category);
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (categoryBooks.length > 0) {
    console.log('refs.galleryContainer', refs.galleryContainer);
    refs.galleryContainer.innerHTML = `
      ${categoryBooks
        .map(
          el =>
            `
     <li class="book-card__item" >
      <a class="book-card__link" href="#" >
          <div class="book-card__wrapper"   data-type="${el.list_name}">
              <img
              class="book-card__image"
              src="${el.book_image ? el.book_image : ``}"
              alt="${el.title}"
              data-id="${el._id}"
              loading="lazy"
                            />
              <div class="book-card__overlay" data-id="${el._id}">
              <p class="book-card__quick-view-text">quick view</p>
          </div>
          </div>
      </a>
           <div class="book-card__wrap">
            <h3 class="book-card__name">${
              el.title.length > 14 ? el.title.slice(0, 14) + '...' : el.title
            }</h3>
            <p class="book-card__author">${
              el.author.length > 28 ? el.author.slice(0, 28) + '...' : el.author
            } </p>
          </div>

     </li>`
        )
        .join('')}
      `;
  } else {
    refs.galleryContainer.innerHTML = `<p>Not found</p>`;
  }
}
// получаем данные по книге и открываем модалку

refs.galleryContainer.addEventListener('click', handleDataBookById);
export function handleDataBookById(event) {
  event.preventDefault();

  if (event.target.nodeName === 'IMG') {
    const bookId = event.target.dataset.id;
    showBookModal(bookId);
    return;
  }
  if (event.target.nodeName === 'DIV') {
    const bookId = event.target.dataset.id;
    showBookModal(bookId);
    return;
  }
  if (event.target.nodeName === 'P') {
    const bookId = event.target.parentNode.dataset.id;
    showBookModal(bookId);
    return;
  }
}
