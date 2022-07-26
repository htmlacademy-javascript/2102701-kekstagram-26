import {deleteEffect} from './filter.js';
import {showError} from './error.js';
import {initModal} from './modal.js';
import {showSuccess} from './success.js';
import {resetSize} from './change-size.js';

const imgUploadForm = document.querySelector('#upload-select-image');
imgUploadForm.setAttribute('action', 'https://26.javascript.pages.academy/kekstagram');

const uploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const inputFile = imgUploadForm.querySelector('#upload-file');

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper'
});

const inputHT = imgUploadForm.querySelector('.text__hashtags');
const textComment = document.querySelector('.text__description');

const regexp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

const {open, close} = initModal(uploadOverlay, {
  onClose:()=>{
    inputFile.value = '';
    inputHT.value = '';
    textComment.value = '';
    deleteEffect();
    resetSize();
  }
});

const validateHashTagMessages = [];

const validateHashTags = function (value) {
  validateHashTagMessages.length=0;
  const tags = value.split(' ').filter(Boolean);
  if (tags.length > 5) {
    validateHashTagMessages.push('Тегов слишком много');
    return false;
  }
  const usedTags=[];

  tags.forEach((tag) => {
    if (!regexp.test(tag)) {
      validateHashTagMessages.push(`тэг ${tag} содержит недопустимые символы или длина больше 20 символов`);
    }
    if (usedTags.includes(tag.toLowerCase())) {
      validateHashTagMessages.push(`тэг ${tag} повторяется`);
    } else {
      usedTags.push(tag.toLowerCase());
    }
  });
  return !validateHashTagMessages.length;
};

const showValidatedHashTagsMessages = function () {
  return validateHashTagMessages.join(', ');
};

const validateComments = function (value) {
  return value.length <= 140;
};
pristine.addValidator(inputHT, validateHashTags, showValidatedHashTagsMessages);
pristine.addValidator(textComment, validateComments, 'Длина комментария не должна быть больше 140 символов');

let isProcessing = false;

const imgUploadSubmit = imgUploadForm.querySelector('.img-upload__submit');

const disableForm = function () {
  isProcessing = true;
  imgUploadSubmit.disabled = true;
  imgUploadSubmit.textContent = 'Подождите...';
};

const enableForm = function () {
  isProcessing = false;
  imgUploadSubmit.disabled = false;
  imgUploadSubmit.textContent = 'Отправить';
};

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  if (!isProcessing && pristine.validate()){
    const formData = new FormData(evt.target);
    disableForm();

    fetch(
      'https://26.javascript.pages.academy/kekstagram',
      {
        method: 'POST',
        body: formData,
      }
    ).then((response)=>{
      if (!response.ok) {
        throw new Error ();
      }
      close();
      showSuccess();
    }).catch(showError).finally(() => {
      enableForm();
    });
  }
});

const escStopPropagnation = function (evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
};

inputHT.addEventListener('keydown', escStopPropagnation);
textComment.addEventListener('keydown', escStopPropagnation);

export {open as openForm};
