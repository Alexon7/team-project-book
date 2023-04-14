// Kralinskyi
//
// https://www.npmjs.com/package/tui-pagination#-usage

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const container = document.getElementById('tui-pagination');
const options = { totalItems: 10, itemsPerPage: 10, visiblePages: 10, page: 1 };

const pagination = new Pagination('pagination', options);
pagination.getCurrentPage();
