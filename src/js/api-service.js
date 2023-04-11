import axios from 'axios';

export class Books {
  #BASE_URL = 'https://books-backend.p.goit.global/books';
  #categoryId = '';

  fetchCategories(page) {
    return axios.get('https://books-backend.p.goit.global/books/category-list');
  }
}
