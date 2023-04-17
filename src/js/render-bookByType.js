// Iskra Matjuha
import { BookAPI } from './api-service';
import { showBookModal } from './show-modal-about-book';
import { refs } from './refs';
import { loaderRender } from './preloader';
import { renderBooksByType } from './render-books';
const bookApi = new BookAPI();

//запрос книг по выбранной категории - считываем категорию со списка категорий и рендерим книги из нее
export async function handleRenderCategoryItem(category) {
  loaderRender();
  try {
    const categoryBooks = await bookApi.getBooksByCategories(category);
    window.scrollTo({ top: 0, behavior: 'smooth' }); //возвращаемся вверх

    if (categoryBooks.length > 0) {
      refs.galleryContainer.innerHTML = renderBooksByType(categoryBooks);
      // если книги в категории есть то прорисовываем
    } else {
      refs.galleryContainer.innerHTML = `<p>Not found</p>`;
    }
  } catch (error) {
    console.log(error);
  }
}

// получаем данные по книге и открываем модалку

refs.galleryContainer.addEventListener('click', handleDataBookById);
export function handleDataBookById(event) {
  event.preventDefault();
  try {
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
  } catch (error) {
    console.log(error);
  }
}
