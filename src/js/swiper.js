// import Swiper from 'swiper/bundle';

import Swiper from 'swiper';

// import 'swiper/css/bundle';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export const createSwiperSliderSupport = sliderElm => {
  const sliderId = sliderElm.dataset.id;
  const swiper = new Swiper(`[data-id="${sliderId}"]`, {
    
    slidesPerView: 'auto',
    spaceBetween: 20,
    direction: 'vertical',    
    loop: true,
    navigation: {
      nextEl: `.swiper-button-next-${sliderId}`,
    //   prevEl: `.swiper-button-prev-${sliderId}`,
    },
  });
  return swiper;
};
