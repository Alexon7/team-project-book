import { BookAPI } from './api-service';
const bookApi = new BookAPI();

const refs = {
  emptyShoppingListEl: document.querySelector('.shopping-list__empty'),
};

console.log('REFS', refs.emptyShoppingListEl);

async function renderShopppingList() {
  const savedBookData = JSON.parse(localStorage.getItem('openInfoBook'));

  if (!savedBookData) {
    return;
  }

  refs.emptyShoppingListEl.classList.toggle('is-hidden');

  const { data } = await bookApi.getBooksById(savedBookData._id);

  console.log('BookInfo: ', data);
}

renderShopppingList();
