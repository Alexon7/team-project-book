import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export const modal = async content => {
  const modal = basicLightbox.create(content, {
    onShow: instance => {
      instance.element().querySelector('.close-icon').onclick = instance.close;
      window.addEventListener('keydown', closeModal);
    },
    onClose: () => {
      localStorage.removeItem('openInfoBook');
      window.removeEventListener('keydown', closeModal);
    },
  });
  modal.show();

  function closeModal(event) {
    if (event.code === 'Escape') {
      modal.close();
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
