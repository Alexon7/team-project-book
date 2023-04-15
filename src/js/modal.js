import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

const LS_KEY = 'shoppingList';
const savedBooks = [];

export const modal = async content => {
  const modal = basicLightbox.create(content, {
    onShow: instance => {
      instance.element().querySelector('.close-icon').onclick = instance.close;
      window.addEventListener('keydown', closeModal);

      const btnAddBookToShoppingList = instance
        .element()
        .querySelector('.btnAdd');
      const btnRemoveBookFromShoppingList = instance
        .element()
        .querySelector('.btnRemove');

      btnAddBookToShoppingList.addEventListener('click', addBookToShoppingList);
      btnRemoveBookFromShoppingList.addEventListener(
        'click',
        removeBookFromShoppingList
      );
    },
    onClose: () => {
      localStorage.removeItem('openInfoBook');
      // document.body.classList.remove('stop-scroll');
      window.removeEventListener('keydown', closeModal);
    },
  });
  modal.show();

  function closeModal(event) {
    if (event.code === 'Escape') {
      modal.close();
    }
  }

  function addBookToShoppingList() {
    try {
      console.log('add Book To Shopping List');
      infoBook = JSON.parse(localStorage.getItem('openInfoBook'));
      localStorage.setItem(LS_KEY, JSON.stringify(infoBook));
      savedBooks.push(infoBook);
      console.log(savedBooks);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  }

  function removeBookFromShoppingList() {
    try {
      console.log('remove Book From Shopping List');
      infoBook = JSON.parse(localStorage.getItem(LS_KEY));
      console.log(infoBook);
      // localStorage.setItem(LS_KEY, JSON.stringify(infoBook));
      // savedBooks.push(infoBook);
      // console.log(savedBooks);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
  }
};

// !============================MODAL.js=====================================
/**   Цей код відповідає тільки за модалку, все.
  
 import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';

export const modal = async content => {
  const modal = basicLightbox.create(content, {
    onShow: instance => {
      instance.element().querySelector('.close').onclick = instance.close;
    },
    onClose: () => {
      localStorage.removeItem('openInfoBook');
      document.body.classList.remove('stop-scroll');
    },
  });
  modal.show();
  window.addEventListener('keydown', closeModal);

  function closeModal(event) {
    if (event.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModal);
    }
  }
}; 
 
 */
