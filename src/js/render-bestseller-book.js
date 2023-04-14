// imports -------------------------------------------------------------------

import axios from 'axios';
// code -------------------------------------------------------------------

// variables -------------------------------------------------------------------

const refs = {
  list_name: document.querySelector('.book-card__category-subtitle'),
  galleryContainer: document.querySelector('.book-card__list'),
  book: document.querySelector('.book-card'),
  bookName: document.querySelector('.book-card__name'),
  body: document.querySelector('body'),
  booksList: document.querySelector('.booksList'),
}
getBooks()
// -------------------------------------------------------------------
// resolution viwe
addEventListener('resize', event => {
  if (
    (window.innerWidth > 767 && currentRenderWidth < 768) ||
    (window.innerWidth > 1439 && currentRenderWidth < 1440) ||
    (window.innerWidth < 1440 && currentRenderWidth > 1439) ||
    (window.innerWidth < 768 && currentRenderWidth > 767)
  ) {
    location.reload();
  }
});
function renderBestsellersBooks(response) {
      currentRenderWidth = window.innerWidth;
      let amountRenderedBooks = 1;
      if (currentRenderWidth < 768) {
        amountRenderedBooks = 1;
      } else if (currentRenderWidth > 767 && currentRenderWidth < 1440) {
        amountRenderedBooks = 3;
      } else {
        amountRenderedBooks = 5;
      }
      let bestsellersBooks = response;
      bestsellersBooks = bestsellersBooks.map(type => {
        return { ...type, books: type.books.slice(0, amountRenderedBooks) };
      });
      refs.booksList.innerHTML = renderBestsellersBooksList(
        bestsellersBooks
      );
      }
// get-books
async function getBooks() {
  
  try {

    const response = await axios.get(
      "https://books-backend.p.goit.global/books/top-books"

    );
    renderBestsellersBooks(response.data)
    renderBestsellersBooksList(response.data)
  } 
   catch (error) {
    console.error(error);
    return null;
  }
}
// ----
// render-books -------------------------------------------------------------------
    function renderBestsellersBooksList(data) {
      const markup = data
      .map((typeBooks,) => {
        return `
          <li class="bestsellers-typeBooks">
          <h3 class="title">${typeBooks.list_name}</h3>
      
            <ul class="booksList"> 
            ${typeBooks.books
              .map(book => renderBestsellersBook(book, typeBooks))
              .join('')}
            </ul>
            
          <div class="btnBox">
          <button class="book-card__btn" type="button">see more</button>
            </li>`;
      })
      .join('')

      refs.galleryContainer.insertAdjacentHTML('beforeEnd', markup);
    }

function renderBestsellersBook(book, typeBooks) {
   return `
     <li class="book-card__item" >
      <a class="book-card__link" href="#">
          <div class="book-card__wrapper" data-id="${book._id}" data-type="${typeBooks.list_name}">
              <img
              class="book-card__image"
              src="${book.book_image ? book.book_image : ``}"
              alt="${book.title}"
              loading="lazy"
              />
              <div class="book-card__overlay">
              <p class="book-card__quick-view-text">quick view</p>
          </div>
          </div>
      </a>
           <div class="book-card__wrap">
            <h3 class="book-card__name">${
               book.title.length > 14
                 ? book.title.slice(0, 14) + '...'
                 : book.title
             }</h3>
            <p class="book-card__author">${
               book.author.length > 28
                 ? book.author.slice(0, 28) + '...'
                 : book.author
             } </p>
          </div>
   
     </li>`;
 }
    
// -----