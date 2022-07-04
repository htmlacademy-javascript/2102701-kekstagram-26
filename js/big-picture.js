import {initModal} from './modal.js';

const bigPicture = document.querySelector('.big-picture');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment').cloneNode(true);


const clearComments = function () {
  socialComments.innerHTML = '';
};

const addComments = function (comments) {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = socialComment.cloneNode(true);
    commentElement.querySelector('.social__comment .social__picture').src = comment.avatar;
    commentElement.querySelector('.social__comment .social__picture').alt = comment.name;
    commentElement.querySelector('.social__comment p').textContent = comment.comment;
    commentsFragment.appendChild(commentElement);
  });
  socialComments.appendChild(commentsFragment);
};

const {open} = initModal(bigPicture);

const showBigPicture = function (description) {
  clearComments();
  addComments(description.comments);
  open();
  bigPicture.querySelector('.big-picture__img img').src = description.url;
  bigPicture.querySelector('.likes-count').textContent = description.likes;
  bigPicture.querySelector('.social__caption').textContent = description.description;
};

export {showBigPicture};
