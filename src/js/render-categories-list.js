// Iskra Matjuha

import { BookAPI } from './api-service';
import { refs } from './refs';
import { handleRenderCategoryItem } from './render-bookByType';
import { getBooksRender } from './render-bestseller-book';
import { loaderRender } from './preloader';
// import { renderBestsellersBooksList } from './render-bestseller-book';

// console.log(categoriesEl);
const bookApi = new BookAPI();

// Рендерим список категорий
const renderCategories = async () => {
  const categories = await bookApi.getCategories();

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
  console.log(categoriesList);
  console.dir(refs.allCategoryLink);
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
        console.log('рендерим по всем категориям ', event.target.dataset.id);
        getBooksRender();
      } else {
        handleRenderCategoryItem(category);

        console.log('рендерим только категорию ', category);
      }
    });
  });
};

renderCategories();
