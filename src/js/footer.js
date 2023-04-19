// const heart = document.querySelector('.heart');
// const link = document.querySelector('.footer__link');

// heart.addEventListener('click', function () {
//   link.style.display = 'block';
// });

const footerLink = document.querySelector('.heart');

footerLink.addEventListener('click', () => {
  const message = document.createElement('div');
  message.classList.add('message');
  message.textContent = 'Тисни щоб подивитись код сторінки';
  document.body.appendChild(message);

  setTimeout(() => {
    message.style.opacity = 0;
    setTimeout(() => {
      message.remove();
    }, 1000);
  }, 1500);
});
