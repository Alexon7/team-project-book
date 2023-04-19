import Pagination from 'tui-pagination'; //Import TUI
import 'tui-pagination/dist/tui-pagination.css'; //Import TUI CSS
import { renderShoppingListBooks } from './render-shopping-list';

//контейнер пагинации
const container = document.getElementById('tui-pagination-container');
//контейнер рендера книг пустой и отдельно с книгами
const emptyShoppingList = document.querySelector('.shopping-list__empty');
const renderBookDescriptionEl = document.querySelector('.shopping-list__list');
const itemsPerPage = 3;

function createOptions() {
  const shoppingBooks = JSON.parse(localStorage.getItem('shoppingList')) || [];

  const options = {
    totalItems: shoppingBooks.length,
    itemsPerPage: 3,
    visiblePages: 3,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}">{{type}}</span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
  return options;
}

const pagination = new Pagination(container, createOptions());

// console.log(container);
// async function onRenderPage(page) {
//   try {
//     const allShoppingListBooks = JSON.parse(
//       localStorage.getItem('shoppingList')
//     );
//     const booksPerPage = allShoppingListBooks.slice(
//       itemsPerPage * currentPage - itemsPerPage,
//       itemsPerPage * currentPage
//     );
//     console.log('booksPerPage', booksPerPage);
//     let dataBooks = localStorage.getItem('shoppingList');
//     dataBooks = JSON.parse(dataBooks);
//     // Перевірка, якщо нічого не повернулось приховуємо пагінацію
//     if (dataBooks.length === 0 || !dataBooks) {
//       console.log(dataBooks);
//       renderBookDescriptionEl.classList.add('is-hidden');
//       container.classList.add('is-hidden');
//       return;
//     }
//     console.log(dataBooks);
//     const renderedList = renderShoppingListBooks(dataBooks);

//     emptyShoppingList.classList.add('is-hidden');

//     renderBookDescriptionEl.innerHTML = renderedList;

//     // Якщо все добре, додаємо пагінацію
//     if (dataBooks.length > 3) {
//       container.classList.remove('is-hidden');
//       pagination.reset(dataBooks.length);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// }
let currentPage = pagination.getCurrentPage();

async function renderListBooks(currentPage) {
  const allShoppingListBooks = JSON.parse(localStorage.getItem('shoppingList'));
  console.log(allShoppingListBooks);

  const booksPerPage = allShoppingListBooks.slice(
    itemsPerPage * currentPage - itemsPerPage,
    itemsPerPage * currentPage
  );

  try {
    if (allShoppingListBooks.length === 0 || !allShoppingListBooks) {
      renderBookDescriptionEl.classList.add('is-hidden');
      container.classList.add('is-hidden');
      return;
    }

    const renderedList = renderShoppingListBooks(booksPerPage);

    emptyShoppingList.classList.add('is-hidden');

    renderBookDescriptionEl.innerHTML = renderedList;
    // pagination.reset(allShoppingListBooks.length);
    // Якщо все добре, додаємо пагінацію
    if (allShoppingListBooks.length > 3) {
      container.classList.remove('is-hidden');
      pagination.reset(allShoppingListBooks.length);
    }
  } catch (err) {
    console.log(err);
  }
}

renderListBooks(currentPage);
pagination.on('beforeMove', e => {
  console.log('e.page', e.page);
  const currentPage = e.page;
  renderListBooks(currentPage);
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

renderBookDescriptionEl.addEventListener('click', onRemoveBookBtnClick);

function onRemoveBookBtnClick(e) {
  if (e.target.dataset.action !== 'delete') {
    return;
  }
  currentPage = pagination.getCurrentPage();
  console.log(currentPage);
  //   renderBookDescriptionEl.innerHTML = ``;
  const parentNode = e.target.closest('.shopping-book');
  const bookToRemoveId = parentNode.dataset.id;

  console.log(bookToRemoveId);

  let dataBooks = localStorage.getItem('shoppingList');
  dataBooks = JSON.parse(dataBooks);
  dataBooks = dataBooks.filter(book => book._id !== bookToRemoveId);
  localStorage.setItem('shoppingList', JSON.stringify(dataBooks));

  if (dataBooks.length === 0 || !dataBooks) {
    renderBookDescriptionEl.innerHTML = '';
    renderBookDescriptionEl.classList.add('is-hidden');
    container.classList.add('is-hidden');
    emptyShoppingList.classList.remove('is-hidden');
    return;
  }
  if (dataBooks.length < 4) {
    renderBookDescriptionEl.innerHTML = '';
    container.classList.add('is-hidden');
    renderListBooks(1);
    return;
  }
  renderBookDescriptionEl.innerHTML = '';
  pagination.reset(dataBooks.length);
  renderListBooks(currentPage);
  pagination.on('beforeMove', e => {
    console.log('e.page', e.page);
    const currentPage = e.page;
    renderListBooks(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
