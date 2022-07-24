import {initModal} from './modal.js';

const bigPicture = document.querySelector('.big-picture');
const socialCommentCount = bigPicture.querySelector('.social__comment-count');
const commentsLoader = bigPicture.querySelector('.comments-loader');
const socialComments = bigPicture.querySelector('.social__comments');
const socialComment = bigPicture.querySelector('.social__comment').cloneNode(true);


const clearComments = function () {
  socialComments.innerHTML = '';
};

const COMMENTS_ON_PAGE = 5;
const createComments = function (comments) {
  const commentsFragment = document.createDocumentFragment();
  comments.forEach((comment) => {
    const commentElement = socialComment.cloneNode(true);
    commentElement.querySelector('.social__comment .social__picture').src = comment.avatar;
    commentElement.querySelector('.social__comment .social__picture').alt = comment.name;
    commentElement.querySelector('.social__text').textContent = comment.message;
    commentsFragment.appendChild(commentElement);
  });
  socialComments.appendChild(commentsFragment);
};

let showNextPage;
commentsLoader.addEventListener('click', ()=>{
  showNextPage();
});

const addComments = function (comments) {
  const maxCount = comments.length;
  const totalPages = Math.ceil(maxCount/COMMENTS_ON_PAGE);
  let currentPage = 1;
  showNextPage = function () {
    createComments(comments.slice(COMMENTS_ON_PAGE*(currentPage-1), COMMENTS_ON_PAGE*currentPage));
    socialCommentCount.textContent = `${Math.min(maxCount, (currentPage*COMMENTS_ON_PAGE))} из ${maxCount} комментариев`;
    currentPage++;
    if (currentPage>totalPages) {
      commentsLoader.classList.add('hidden');
    } else {
      commentsLoader.classList.remove('hidden');
    }
  };
  showNextPage();

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
