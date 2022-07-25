//import {getSimilarDescriptions} from './data.js';
import {showBigPicture} from './big-picture.js';

const miniaturesContainer = document.querySelector('.pictures');
const miniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');
//const similarDescriptions = getSimilarDescriptions();
//const similarDescriptionFragment = document.createDocumentFragment();

const renderPhotoList = function (similarDescriptions) {
  miniaturesContainer.querySelectorAll('.picture').forEach((element)=> {element.remove()});
  const similarDescriptionFragment = document.createDocumentFragment();
  similarDescriptions.forEach((description) => {
    const miniaturesElement = miniaturesTemplate.cloneNode(true);
    miniaturesElement.querySelector('.picture__img').src = description.url;
    miniaturesElement.querySelector('.picture__comments').textContent = description.comments.length;
    miniaturesElement.querySelector('.picture__likes').textContent = description.likes;
    miniaturesElement.addEventListener('click', () => {
      showBigPicture(description);
    });
    similarDescriptionFragment.appendChild(miniaturesElement);
  });
  miniaturesContainer.appendChild(similarDescriptionFragment);
};

//miniaturesContainer.appendChild(similarDescriptionFragment);

export {renderPhotoList};

