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

page = 0;
query = null;

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

