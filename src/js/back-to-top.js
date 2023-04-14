const backToTop = document.querySelector('.back_to_top');

window.addEventListener('scroll', watchScroll);
backToTop.addEventListener('click', goToTop);

function watchScroll() {
  const positionScroll = window.pageYOffset;
  const visibleHeight = document.documentElement.clientHeight;

  if (positionScroll > visibleHeight) {
    backToTop.classList.add('back_to_top-show');
  }
  if (positionScroll < visibleHeight) {
    backToTop.classList.remove('back_to_top-show');
  }
}

function goToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
