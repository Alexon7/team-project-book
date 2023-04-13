// update
/**

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import { refs } from './js/refs';
import { renderShoppingBooksList } from './js/renderShoppingBooksList';
import { renderSupport } from './js/supportList';
import { createOptions } from './js/pagination';
import { buildSwiperSliderSupport } from './js/swiper';
import './js/swiper';
import './js/menu';
import './js/theme';

let pagination;
const itemsPerPage = 3;

const renderSliderSupport = async () => {
  buildSwiperSliderSupport(refs.sliderSupport);
};
renderSupport();
renderSliderSupport();

export const renderShoppingBooks = async (currentPage = 1) => {
  const allShoppingBooks = JSON.parse(localStorage.getItem('shopping-books'));
  const shoppingBooksByPage = allShoppingBooks.slice(
    itemsPerPage * currentPage - itemsPerPage,
    itemsPerPage * currentPage
  );
  if (refs.shoppingBooksContainer) {
    refs.shoppingBooksContainer.innerHTML =
      renderShoppingBooksList(shoppingBooksByPage);
  }
};

if (refs.paginationContainer) {
  renderShoppingBooks();
  pagination = new Pagination(refs.paginationContainer, createOptions());
}

pagination &&
  pagination.on('beforeMove', event => {
    const currentPage = event.page;
    renderShoppingBooks(currentPage);
  });

 */
