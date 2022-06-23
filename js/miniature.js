import {getSimilarDescriptions} from './data.js';

const miniaturesContainer = document.querySelector('.pictures');

const miniaturesTemplate = document.querySelector('#picture').content.querySelector('.picture');


const similarDescriptions = getSimilarDescriptions();

const similarDescriptionFragment = document.createDocumentFragment();
similarDescriptions.forEach((description) => {
  const miniaturesElement = miniaturesTemplate.cloneNode(true);
  miniaturesElement.querySelector('.picture__img').src = description.url;
  miniaturesElement.querySelector('.picture__comments').textContent = description.comments.length;
  miniaturesElement.querySelector('.picture__likes').textContent = description.likes;
  similarDescriptionFragment.appendChild(miniaturesElement);
});

miniaturesContainer.appendChild(similarDescriptionFragment);
