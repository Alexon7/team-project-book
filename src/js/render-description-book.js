// import sprite from '../img/sprite.svg';
import amazon from '../images/Amazon.png';

export function renderDescBook(aboutBook) {
  // const { book_image, title, author, description } = aboutBook;

  return `
  <div class="book-modal">
     <svg class="close-icon" width="24" height="24">
             <use href="../images/sprite.svg#close-btn"></use>
      </svg>
    <div class="book-modal__content">
     <div class="book-modal__book">
      <img
      src = ${aboutBook.book_image}
        class="book-modal__img"
        alt="о книге"
        loading="lazy"
       
       />
      <div>
      <div class="book-modal__text">

        <h4 class="book-modal__title">${aboutBook.title}</h4>
        <h4 class="book-modal__author">${aboutBook.author}</h4>
        <p class="book-modal__description">${aboutBook.description}</p>

      </div>
      <div class="book-modal__links">
        <a class="modal-book__link" href="">
              <img
              class="book-modal__link amazon"
              src=${amazon}
              alt="Shop logo"
  
            />
        </a>
        <a class="modal-book__link" href="">
              <img
              class="book-modal__link bookshop"
              src="../images/Bookshop.png"
              alt="Shop logo"
            />
        </a>
        <a class="modal-book__link" href="">
              <img
              class="book-modal__link applebooks"
              src="../images/Apple Books.png"
              alt="Shop logo"
            />
        </a>
      </div>
      </div>
     </div>
     <button class="modal-book__button btnAdd active" type="button">Add to shopping list</button>
     <div class="btnRemove-wrapper">
         <button class="modal-book__button btnRemove" type="button">Remove from shopping list</button>
         <p class="button-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
     </div>

    </div>
  </div>
    `;
}

/* <a class="modal-book__link" href="">
              <img
              class="book-modal__link amazon"
              src="../images/Amazon.png"
              alt="Shop logo"
  
            />
        </a>
        <a class="modal-book__link" href="">
              <img
              class="book-modal__link bookshop"
              src="../images/Bookshop.png"
              alt="Shop logo"
            />
        </a>
        <a class="modal-book__link" href="">
              <img
              class="book-modal__link applebooks"
              src="../images/Apple Books.png"
              alt="Shop logo"
            />
        </a> */

// !========================================KRALINSKYI============================================================================
// Перейменовано і переписано.
/*
        
        export function renderBookDescription(bookData) {
  const { image, title, author, description } = bookData;

  return `
  <div class="book-modal">
     <svg class="close-icon" width="24" height="24">
             <use href="../images/sprite.svg#close-btn"></use>
      </svg>
    <div class="book-modal__content">
     <div class="book-modal__book">
      <img
      src=${book_image}
        class="book-modal__img"
        alt="${title}"
        loading="lazy"
      />
      <div>
        <div class="book-modal__text">
          <h4 class="book-modal__title">${title}</h4>
          <h4 class="book-modal__author">${author}</h4>
          <p class="book-modal__description">${description}</p>
        </div>
        <div class="book-modal__links">
          <a class="book-modal__link" href="">
            <img
              class="book-modal__link-image amazon"
              src="../images/Amazon.png"
              alt="Amazon logo"
            />
          </a>
          <a class="book-modal__link" href="">
            <img
              class="book-modal__link-image bookshop"
              src="../images/Bookshop.png"
              alt="Bookshop logo"
            />
          </a>
          <a class="book-modal__link" href="">
            <img
              class="book-modal__link-image apple-books"
              src="../images/Apple Books.png"
              alt="Apple Books logo"
            />
          </a>
        </div>
      </div>
     </div>
     <button class="book-modal__button btn-add active" type="button">Add to shopping list</button>
     <div class="btn-remove-wrapper">
         <button class="book-modal__button btn-remove" type="button">Remove from shopping list</button>
         <p class="button-text">Congratulations! You have added the book to the shopping list. To delete, press the button "Remove from the shopping list".</p>
     </div>
    </div>
  </div>
  `;
}

        */
