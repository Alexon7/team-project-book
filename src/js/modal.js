// import * as basicLightbox from 'basiclightbox';
// import 'basiclightbox/dist/basiclightbox.min.css';
export const modal = async content => {
  const modal = basicLightbox.create(content, {
    onShow: instance => {
      instance.element().querySelector('.close-icon').onclick = instance.close;
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
