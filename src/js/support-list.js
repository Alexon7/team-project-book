const supportContainer = document.querySelector('.support__list');
const sliderSupport = document.querySelector('.swiper__support');

import { renderSupportList } from './render-support-Ukraine';

export const renderSupport = async () => {
  const supports = [
    {
      title: 'Save the Children',
      // url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      // img: '/save-the-children.png',
      // img2: '/save-the-children@2x.png',
    },
    {
      title: 'Project HOPE',
      //   url: 'https://www.projecthope.org/country/ukraine/',
      //   img: '/project-hope.png',
      //   img2: '/project-hope@2x.png',
    },
    {
      title: 'UNITED24',
      //   url: 'https://u24.gov.ua/uk',
      //   img: '/united24.png',
      //   img2: '/united24@2x.png',
    },
    {
      title: 'International Medical Corps',
      //   url: 'https://internationalmedicalcorps.org/country/ukraine/',
      //   img: '/international-medical-corps.png',
      //   img2: '/international-medical-corps@2x.png',
    },
    {
      title: 'Medicins Sans Frontieres',
      //   url: 'https://www.msf.org/ukraine',
      //   img: '/medicins-sans-frontieres.png',
      //   img2: '/medicins-sans-frontieres@2x.png',
    },
    {
      title: 'RAZOM',
      //   url: 'https://www.razomforukraine.org/',
      //   img: '/razom.png',
      //   img2: '/razom@2x.png',
    },
    {
      title: 'Action against hunger',
      //   url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      //   img: '/action-against-hunger.png',
      //   img2: '/action-against-hunger@2x.png',
    },
    {
      title: 'World vision',
      //   url: 'https://www.wvi.org/emergencies/ukraine',
      //   img: '/world-vision.png',
      //   img2: '/world-vision@2x.png',
    },
    {
      title: 'Serhiy Prytula Charity Foundation',
      //   url: 'https://prytulafoundation.org/en',
      //   img: '/prytula.png',
      //   img2: '/prytula@2x.png',
    },
  ];
  supportContainer.innerHTML = await renderSupportList(supports);
};
