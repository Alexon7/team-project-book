import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export const modal = async content => {
  const modal = basicLightbox.create(content, {
    onShow: instance => {
      instance.element().querySelector('.close-icon').onclick = instance.close;
      document.body.style.overflow = 'hidden'; //скролл подложки откл
      window.addEventListener('keydown', closeModal);
    },
    onClose: () => {
      document.body.style.overflow = ''; //скролл подложки вкл
      window.removeEventListener('keydown', closeModal);
    },
  });
  modal.show();

  function closeModal(event) {
    if (event.code === 'Escape' || event.code === 'Enter') {
      // добавила закрытие при нажатии на Enter
      modal.close();
    }
  }
};