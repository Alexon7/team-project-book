// Iskra Matjuha
import { BookAPI } from './api-service';

const categoryBooksEl = document.querySelector('.book-category__list');
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
          el => `<li class="category-books" > <a href= "" class ="book"> <img src = ${el.book_image} data-id= ${el._id}> <h3> ${el.title}</h3> <p>${el.author} </p></a>
   </li>`
        )
        .join('')}
      `;
}
