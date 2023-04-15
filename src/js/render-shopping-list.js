export function renderShoppingBooksList(savedBooks) {
  const bookItemTemplate = book => `
    <li class="shopping-book">
      <button class="delete" type="button">
        <svg class="icon" width="16" height="16">
          <use href="${sprite}#delete-book"></use>
        </svg>
      </button>
      <div class="content">
        <div class="book">
          <img
            class="cover"
            src="${book.book_image ? book.book_image : ``}"
            alt="${book.title}"
            loading="lazy"
            width="98"
            height="139"
          />
          <div class="text">
            <h4 class="title">${book.title}</h4>
            <h4 class="type">${book.list_name}</h4>
            <div class="links">
              ${book.buy_links
                .filter(
                  link =>
                    link.name === 'Amazon' ||
                    link.name === 'Bookshop' ||
                    link.name === 'Apple Books'
                )
                .map(link => {
                  return `<a class="link" href=${link.url}>
                    <img
                      class="img ${link.name}"
                      src="./img/${link.name}.png"
                      alt="Shop logo"
                    />
                  </a>`;
                })
                .join('')}
            </div>
          </div>
        </div>
        <h4 class="author">${book.author}</h4>
        <p class="description">${book.description}</p>
      </div>
    </li>`;

  return savedBooks.length > 0
    ? savedBooks.map(bookItemTemplate).join('')
    : `<p>No books saved yet</p>`;
}
