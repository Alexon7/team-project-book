// import sprite from '../img/sprite.svg';

export function renderDescBook(aboutBook) {
  const { book_image, title, author, description } = aboutBook;

  return `
  <div class="book-modal">
     <svg class="close-icon" width="24" height="24">
             <use href="../images/sprite.svg#close-btn"></use>
      </svg>
    <div class="book-modal__content">
     <div class="book-modal__book">
      <img
      src = ${book_image}
        class="book-modal__img"
        alt="о книге"
        loading="lazy"
       
       />
      <div class="book-modal__text">

        <h4 class="book-modal__title">${title}</h4>
        <h4 class="book-modal__author">${author}</h4>
        <p class="book-modal__description">${description}</p>

      </div>
      <div class="book-modal__links">

      </div>
     </div>
     <button class="button btnAdd active" type="button">Add to shopping list</button>
     <div class="btnRemove-wrapper">
         <button class="button btnRemove" type="button">Remove from shopping list</button>
         <p class="button-text">Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.</p>
     </div>

    </div>
  </div>
    `;
}

// ${aboutBook.buy_links
//             .filter(
//               link =>
//                 link.name === 'Amazon' ||
//                 link.name === 'Bookshop' ||
//                 link.name === 'Apple Books'
//             )
//             .map(link => {
//               return `<a class="link" href=${link.url}>
//               <img
//               class="img ${link.name}"
//               src="./img/${link.name}.png"
//               alt="Shop logo"

//             />
//             </a>`;
//             })
//             .join('')}
