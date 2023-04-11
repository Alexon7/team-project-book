import { BookAPI } from './api-service';
const categoriesEl = document.querySelector('.categories-list');
const categoriesBooksEl = document.querySelector('.categories-books');

const bookApi = new BookAPI();
onRenderCategories(); //список категорий рендерится при запуске страниці
// handleRenderTopBooks(); // списки топ книг по категориям - пока віводится список категорий, книги  только в консоле
categoriesEl.addEventListener('click', handleRenderCategoryItem);

// Рендерим список категорий, без async - надо разобраться как с ним
function onRenderCategories() {
  bookApi.getCategories().then(response => {
    const categoriesList = [...response.data].sort((a, b) => {
      return a.list_name.localeCompare(b.list_name);
    });

    categoriesList.forEach(el =>
      categoriesEl.insertAdjacentHTML(
        'beforeend',
        `<li class= categories-item><a class="categories-link" href="" > ${el.list_name}</a></li>`
      )
    );
  });
}

// список топ книг по категориям, загружаются сразу по умолчанию. надо подумать как прорисовать
function handleRenderTopBooks() {
  bookApi.getBooksTop().then(response => {
    const categoriesBooksList = [...response.data];
    // console.log(categoriesBooksList);
    categoriesBooksList.forEach(el => {
      //   console.log(el.books);
      categoriesBooksEl.insertAdjacentHTML(
        'beforeend',
        `<ul class="category-books data-${el.list_name}">${el.list_name}</ul>`
      );
      //   const categoryBooksEl =
      //     categoriesBooksEl.querySelector('.category-books');
      //   console.log(categoryBooksEl);
      //   el.books.forEach(e =>
      //     categoryBooksEl.insertAdjacentHTML(
      //       'beforeend',
      //       `<li class= categories-item><img class="book-link" src="${e.book_image}" > </img></li>`
      //     )
      //   );
    });
  });
}

//запрос кние по выбранной категории - считываем категорию со списка категорий - и нужно прорисовать книги из нее
async function handleRenderCategoryItem(event) {
  //   if (event.target.nodeName !== 'UL') {
  //     return;
  //   }
  event.preventDefault();

  try {
    const category = event.target.textContent.trim();
    console.log('Категория: ', category);
    const response = await bookApi.getBooksByCategories(category);
    // const id = '643282b2e85766588626a100';
    // const id = '643282b2e85766588626a118';
    // const response = await bookApi.getBooksById(id); - проверка запроса книги по id

    console.log(response);
  } catch (err) {
    console.log(err);
  }
}
