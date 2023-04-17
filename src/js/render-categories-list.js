// Iskra Matjuha

import { BookAPI } from './api-service';
import { refs } from './refs';
import { handleRenderCategoryItem } from './render-bookByType';
import { renderBestsellersBooks } from './render-bestseller-book';

const bookApi = new BookAPI();

// Рендерим список категорий
const renderCategories = async () => {
  try {
    //получаем список
    const categories = await bookApi.getCategories();
    //сортируем по алфавиту
    const categoriesList = [...categories].sort((a, b) => {
      return a.list_name.localeCompare(b.list_name);
    });
    refs.categoriesEl.innerHTML = `<li class="category is-active" data-id="all-categories">
  All categories
 </li>
    ${categoriesList
      .map(
        el => `<li class="category" data-id= "${el.list_name}" >
  ${el.list_name}
 </li>`
      )
      .join('')}
    `;

    const allCategoryLink = document.querySelectorAll('.category');
    allCategoryLink.forEach(categoryLink => {
      categoryLink.addEventListener('click', event => {
        const activeCategory = document.querySelector('.category.is-active');

        if (activeCategory) {
          activeCategory.classList.remove('is-active');
        }
        event.target.classList.add('is-active');
        const category = event.target.dataset.id.trim();

        if (event.target.dataset.id === 'all-categories') {
          // console.log('рендерим по всем категориям ', event.target.dataset.id);

          refs.book_card__title.innerHTML = `
         Best Sellers <span class="book-card__filter">Books</span>
        `;
          renderBestsellersBooks();
        } else {
          refs.book_card__title.innerHTML = `${category.slice(
            0,
            category.lastIndexOf(' ')
          )}<span class="book-card__filter"> ${category
            .split(' ')
            .pop()}</span>`;
          handleRenderCategoryItem(category);

          // console.log(
          //   'рендерим только категорию  refs.galleryContainer',
          //   category,
          //   refs.galleryContainer
          // );
        }
      });
    });
  } catch (error) {
    console.log(error);
  }
};

renderCategories();
