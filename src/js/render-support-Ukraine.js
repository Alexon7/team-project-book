export function renderSupportList(supports) {
  return supports.map((support, index) => {
    const formattedIndex = `index + 1 < 10 ? 0${index + 1} : index + 1`;
    const imgSrcSet = `${support.img} 1x, ${support.img2} 2x`;
    return `
      <li class="support__item">
        <span class="number">${formattedIndex}</span>
        <a href="${support.url}" target="_blank">
          <picture>
            <source srcset="${imgSrcSet}" />
            <img class="img" src="${support.img}" alt="${support.title}" />
          </picture>
        </a>
      </li>
    `;
  }).join('');
}