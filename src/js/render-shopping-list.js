import { BookAPI } from './api-service';
const bookApi = new BookAPI();

const refs = {
  emptyShoppingListEl: document.querySelector('.shopping-list__empty'),
  notEmptyShoppingListEl: document.querySelector('.shopping-list__list'),
};

// ! Показуємо добавлені в list книжки, якщо є. Якщо нема - пустий масив.
const bookAddedToShopList = JSON.parse(localStorage.getItem('addedBooks'));
if (!bookAddedToShopList)
  localStorage.setItem('addedBooks', JSON.stringify([]));

console.log('REFS', refs.emptyShoppingListEl);

async function renderShopppingList() {
  const savedBookData = JSON.parse(localStorage.getItem('openInfoBook'));

  if (!savedBookData) {
    return;
  }

  refs.notEmptyShoppingListEl.hasChildNodes &&
    refs.emptyShoppingListEl.classList.toggle('is-hidden');

  // refs.notEmptyShoppingListEl.classList.toggle('is-hidden');

  const { data } = await bookApi.getBooksById(savedBookData._id);

  console.log('BookInfo: ', data);
}

renderShopppingList();
