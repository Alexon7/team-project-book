import axios from 'axios';

/**
 * 
Перелік категорій книг	https://books-backend.p.goit.global/books/category-list 

Популярні книги, що належать до усіх категорій	https://books-backend.p.goit.global/books/top-books 

Книги окремої категорії	https://books-backend.p.goit.global/books/category?category=selectedCategory

Детальна інформація про книгу	https://books-backend.p.goit.global/books/ bookId
 */

const instance = axios.create({
  baseURL: 'https://books-backend.p.goit.global/books/',
});

function fetchTopBooks() {
  return instance.get('top-books');
}

// fetchTopBooks();

function fetchCategories() {
  return instance.get('category-list');
}

// fetchCategories();

function fetchSelectedCategory(selectedCategory) {
  return instance.get('category', {
    params: {
      category: selectedCategory,
    },
  });
}

// fetchSelectedCategory('Picture Books');

function fetchBookInfoById(bookId) {
  return instance.get(`_id=${bookId}`);
}

// fetchBookInfoById('642fd89ac8cf5ee957f12361');
