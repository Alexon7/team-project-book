import axios from 'axios';
/*
Перелік категорій книг__________________________https://books-backend.p.goit.global/books/category-list
Популярні книги, що належать до усіх категорій__https://books-backend.p.goit.global/books/top-books
Книги окремої категорії_________________________https://books-backend.p.goit.global/books/category?category=selectedCategory
Детальна інформація про книгу___________________https://books-backend.p.goit.global/books/ bookId
*/

const instance = axios.create({
  baseURL: 'https://books-backend.p.goit.global/books/',
});

export class BookAPI {
  getCategories() {
    return instance.get('category-list');
  }

  getBooksByCategories(selectedCategory) {
    return instance.get('category', {
      params: {
        category: selectedCategory,
      },
    });
  }

  getBooksTop() {
    return instance.get('top-books');
  }

  getBooksById(bookId) {
    return instance.get(`${bookId}`);
  }
}

//! ========= З використанням async - await ===========
/*
const instance = axios.create({
  baseURL: 'https://books-backend.p.goit.global/books/',
});

export class BookAPI {
  async getCategories() {
    try {
      const response = await instance.get('category-list');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getBooksByCategories(selectedCategory) {
    try {
      const response = await instance.get('category', {
        params: {
          category: selectedCategory,
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getBooksTop() {
    try {
      const response = await instance.get('top-books');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async getBooksById(bookId) {
    try {
      const response = await instance.get(`${bookId}`);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

*/
