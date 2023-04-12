import { BookAPI } from './api-service';

const categoriesEl = document.querySelector('.book-categories__list');
console.log(categoriesEl);
const bookApi = new BookAPI();
// categoriesEl.addEventListener('click', handleRenderCategoryItem);

// Рендерим список категорий
const renderCategories = async () => {
  try {
    const response = await bookApi.getCategories();

    const categoriesList = [...response.data].sort((a, b) => {
      return a.list_name.localeCompare(b.list_name);
    });
    categoriesEl.innerHTML = `<li class="category is-active" data-id="all-categories">
  All categories
 </li>
    ${categoriesList
      .map(
        el => `<li class="category data-id= ${el.list_name}" >
  ${el.list_name}
 </li>`
      )
      .join('')}
    `;
    console.log(categoriesList);
    const allCategoryLink = document.querySelectorAll('.category');
    allCategoryLink.forEach(categoryLink => {
      categoryLink.addEventListener('click', event => {
        const activeCategory = document.querySelector('.category.is-active');
        if (activeCategory) {
          activeCategory.classList.remove('is-active');
        }
        event.target.classList.add('is-active');
        if (event.target.dataset.id === 'all-categories') {
          console.log(event.target.dataset.id);
        } else {
          console.log(event.target.dataset.id);
        }
      });
    });
  } catch (error) {
    console.log(error.message);
  }
};
renderCategories();
