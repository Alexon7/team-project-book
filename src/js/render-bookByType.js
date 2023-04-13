// Iskra Matjuha
import { BookAPI } from './api-service';
import { showBookModal } from './show-modal-about-book';

const categoryBooksEl = document.querySelector('.books-of-category__list');
const bookApi = new BookAPI();
//запрос книг по выбранной категории - считываем категорию со списка категорий - и нужно прорисовать книги из нее
export async function handleRenderCategoryItem(category) {
  const response = await bookApi.getBooksByCategories(category);
  const categoryBooks = response.data;
  // console.log(response);
  console.log(categoryBooks);
  categoryBooksEl.innerHTML = `<h2>${category}</h2>
      ${categoryBooks
        .map(
          el => `<li class="category-books" > <a href= "" class ="book-card"> <img src = ${el.book_image} data-id= ${el._id}> <h3> ${el.title}</h3> <p>${el.author} </p></a>
   </li>`
        )
        .join('')}
      `;
}
// получаем данные по книге и открываем модалку
categoryBooksEl.addEventListener('click', handleDataBookById);
function handleDataBookById(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const bookId = event.target.dataset.id;
  console.log(bookId);

  showBookModal(bookId);
}
