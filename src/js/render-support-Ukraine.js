

 export function renderSupportList(supports) {
  return supports
    .map(
      (support, index) => `<li class="support__item swiper-slide">
      <span class="support__number">${index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
   <a href="${support.url}" target="_blank">
           <picture>
        <source srcset="${support.img} 1x, ${support.img2} 2x"  />
        <img class="support__img" src="${support.img}" alt="${support.title}" />
      </picture>
          </a>

           
   
 </li>`
    )
    .join('');
}





