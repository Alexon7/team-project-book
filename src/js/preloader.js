export function loaderRender() {
  setTimeout(function () {
    const preloader = document.getElementById('preloader');
    if (!preloader.classList.contains('done')) {
      // клас done - приберає лоадер
      preloader.classList.add('done');
    }
  }, 300);
}
