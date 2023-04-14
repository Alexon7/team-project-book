import axios from 'axios';

const refs = {
  list_name: document.querySelector('.book-card__category-subtitle'),
  galleryContainer: document.querySelector('.book-card__list'),
  book: document.querySelector('.book-card'),
  bookName: document.querySelector('.book-card__name')
}

async function getBooks() {
  try {
    const response = await axios.get(
      "https://books-backend.p.goit.global/books/top-books"
    );
    const responseList = response.data
      handleRenderTopBooks(responseList)
      responseList.forEach(element => {
        booksMarkup(element.books)
      })

  } catch (error) {
    console.error(error);
    return null;
  }
}
getBooks();

function booksMarkup(data) {
    //if (!Array.isArray(data)) {
    //  console.error('Data is not an array:', data.book_image);
    //  return;
    //}

    const markup = data.map(({book_image, author, title, list_name}) => {
      refs.list_name.innerHTML = list_name

      if (title.length > 16) {
        title = title.slice(0, 16) + '...';
      }

      return `
          <li class="book-card__item">
            <a class="book-card__link" href="#">
              <div class="book-card__wrapper">
                <img
                  class="book-card__image"
                  src="${book_image}"
                  alt="Here must be book's name"
                />
                <div class="book-card__overlay">
                  <p class="book-card__quick-view-text">quick view</p>
                </div>
              </div>
            </a>
            <div class="book-card__wrap">
              <h3 class="book-card__name">${title}</h3>
              <p class="book-card__author">${author}</p>
            </div>
          </li>`

    }).join('');

    refs.galleryContainer.insertAdjacentHTML('afterBegin', markup);
  }

 function handleRenderTopBooks(data) {

  data.forEach(element => {
    console.log(element)
  })

  const markup = data.map(({list_name }) => {
    return `
    <h2 class="book-card__category-subtitle"> ${list_name}
    </h2>  `

  }).join('');

  refs.galleryContainer.insertAdjacentHTML('afterBegin', markup);
 }

