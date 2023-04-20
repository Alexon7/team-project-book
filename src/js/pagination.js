// Kralinskyi
//
// https://www.npmjs.com/package/tui-pagination#-usage

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { renderShoppingListBooks } from './render-shopping-list';

const container = document.getElementById('pagination');
const shoppingListEl = document.querySelector('.shopping-list__list');

let pagination;
const itemsPerPage = 3;

async function renderListBooks(currentPage = 1) {
  const allShoppingListBooks = JSON.parse(localStorage.getItem('shoppingList'));
  const booksPerPage = allShoppingListBooks.slice(
    itemsPerPage * currentPage - itemsPerPage,
    itemsPerPage * currentPage
  );

  if (shoppingListEl) {
    shoppingListEl.innerHTML = renderShoppingListBooks(booksPerPage);
  }
}

if (container) {
  renderListBooks();
  pagination = new Pagination(container, createOptions());
}

pagination &&
  pagination.on('beforeMove', e => {
    const currentPage = e.page;
    renderListBooks(currentPage);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

// ! Створюєио options для пагінації
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
        '<a href="#" class="tui-page-btn">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
  return options;
}
