const supportContainer = document.querySelector('.support__list'); 
// const sliderSupport = document.querySelector('.swiper__support');


import { renderSupportList } from './render-support-Ukraine';

export const renderSupport = async () => {
  const supports = [
    {
      title: 'Save the Children',
      url:
        'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: '../images/supports/save-the-children@1x.png',
      img2: '../images/supports/save-the-children@2x.png',
    },
    
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: '../../images/supports/project-hope@1x.png',
      img2: '../../images/supports/project-hope@2x.png',
    },
    {
      title: 'UNITED24',
      url: 'https://u24.gov.ua/uk',
      img: '../images/supports/united24@1x.png',
      img2: '../images/supports/united24@2x.png',
    },
    {
      title: 'International Medical Corps',
       url: 'https://internationalmedicalcorps.org/country/ukraine/',
       img: '../images/supports/international-medical@1x.png',
       img2: '../images/supports/international-medical@2x.png',
    },
    {
      title: 'Medicins Sans Frontieres',
       url: 'https://www.msf.org/ukraine',
       img: '../images/supports/medicins-sans@1x.png',
       img2: '../images/supports/medicins-sans@2x.png',
    },
    {
      title: 'RAZOM',
      url: 'https://www.razomforukraine.org/',
      img: '../images/supports/razom@1x.png',
      img2: '../images/supports/razom@2x.png',
    },
    {
      title: 'Action against hunger',
       url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
       img: '../images/supports/action-against@1x.png',
       img2: '../images/supports/action-against@2x.png',
    },
    {
      title: 'World vision',
       url: 'https://www.wvi.org/emergencies/ukraine',
       img: '../images/supports/world-vision@1x.png',
       img2: '../images/supports/world-vision@2x.png',
    },
    {
      title: 'Serhiy Prytula Charity Foundation',
       url: 'https://prytulafoundation.org/en',
       img: '../images/supports/sergiy-prytula@1x.png',
       img2: '../images/supports/sergiy-prytula@2x.png',
    },
  ];
  supportContainer.innerHTML = await renderSupportList(supports);
};

renderSupport();
