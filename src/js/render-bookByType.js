// Iskra Matjuha
import { BookAPI } from './api-service';
import { showBookModal } from './show-modal-about-book';
import { refs } from './refs';
import { renderBestsellersBook } from './render-bestseller-book';
import './swiper';
// import loaderRender from './preloader';

// const categoryBooksEl = document.querySelector('.books-of-category__list');
const bookApi = new BookAPI();

//запрос книг по выбранной категории - считываем категорию со списка категорий - и нужно прорисовать книги из нее
export async function handleRenderCategoryItem(category) {
  const categoryBooks = await bookApi.getBooksByCategories(category);
  // console.log(response);
  console.log(categoryBooks);
  refs.book_card__title.innerHTML = `<h1 class="book-card__title">${category.substring(
    0,
    category.lastIndexOf(' ')
  )}<span class="book-card__filter"> ${category.split(' ').pop()}</span></h1>`;

  if (categoryBooks.length > 0) {
    // renderBestsellersBook(categoryBooks, category);
    refs.galleryContainer.innerHTML = `
      ${categoryBooks
        .map(
          el =>
            //         `
            //         <li class="category-books book-card__item" > <a href= "" class ="book-card"> <img class = "book-card__image" src = ${el.book_image} data-id= ${el._id}> <h3 class = "book-card__name"> ${el.title}</h3> <p class= "book-card__author">${el.author} </p></a>
            //  </li>`
            `
     <li class="book-card__item" >
      <a class="book-card__link" href="#">
          <div class="book-card__wrapper"   data-type="${el.list_name}">
              <img
              class="book-card__image"
              src="${el.book_image ? el.book_image : ``}"
              alt="${el.title}"
              loading="lazy"
              data-id="${el._id}"
              />
              <div class="book-card__overlay">
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
// const categoryBooksEl = document.querySelector('.book-card__list');
console.log('galleryContainer', refs.galleryContainer);
refs.galleryContainer.addEventListener('click', handleDataBookById);
export function handleDataBookById(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const bookId = event.target.dataset.id;

  showBookModal(bookId);
}
