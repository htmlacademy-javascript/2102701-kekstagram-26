import {renderPhotoList} from './miniature.js';
import { showAlert } from './alert.js';

const imgFilter = document.querySelector('.img-filters');
const showImgFilter = function () {imgFilter.classList.remove('img-filters--inactive');};


const loadData = function () {
  fetch('https://26.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .catch(()=> {showAlert('Данные не загрузились');})
    .then((photos) => {renderPhotoList(photos);})
    .then(()=>{showImgFilter();});
};

export {loadData};
