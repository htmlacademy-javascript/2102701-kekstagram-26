import {showAlert} from './alert.js';
import {shuffle, debounce} from './util.js';

const imgFilter = document.querySelector('.img-filters');
const imgFilterForm = document.querySelector('.img-filters__form');
const imgFilterButtons = document.querySelectorAll('.img-filters__button');

const RENDERER_DELAY = 500;

const applyImgFilter = function (photos, renderCallback) {
  imgFilter.classList.remove('img-filters--inactive');

  renderCallback(photos);

  imgFilterForm.addEventListener('click', debounce((evt) => {
    if (evt.target.id) {
      const newOrderedPhotos = photos.slice();
      imgFilterButtons.forEach((imgFilterButton)=>{
        if(imgFilterButton === evt.target) {
          imgFilterButton.classList.add('img-filters__button--active');
        } else {
          imgFilterButton.classList.remove('img-filters__button--active');
        }
      });
      switch (evt.target.id) {
        case 'filter-random': {
          shuffle(newOrderedPhotos);
          return renderCallback(newOrderedPhotos.splice(0, 10));
        }
        case 'filter-default': {
          return renderCallback(photos);
        }
        case 'filter-discussed': {
          newOrderedPhotos.sort((a, b)=>b.comments.length-a.comments.length);
          return renderCallback(newOrderedPhotos);
        }
      }

    }
  }, RENDERER_DELAY));
};


const loadData = function () {
  return fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .catch(()=> {showAlert('Данные не загрузились');});
};

export {loadData, applyImgFilter};
