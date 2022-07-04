import {initModal} from './modal.js';

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

const {open} = initModal(uploadOverlay, {
  onClose:()=>{inputFile.value = '';
    inputHT.textContent = '';
    textComment.textContent = '';
  }
});

inputFile.addEventListener('change', open);

const validateHashTagMessages = [];

const validateHashTags = function (value) {
  validateHashTagMessages.length=0;
  const tags = value.split(' ');
  if (tags.length > 5) {
    validateHashTagMessages.push('Тегов слишком много');
    return false;
  }
  const usedTags=[];

  tags.forEach((value) => {
    if (!regexp.test(value)) {
      validateHashTagMessages.push(`таг ${value} содердит недопустимые символы или длина больше 20 символов`);
    }
    if (usedTags.includes(value.toLowerCase())) {
      validateHashTagMessages.push(`тэг ${value} повторяется`);
    } else {
      usedTags.push(value.toLowerCase());
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
pristine.addValidator(textComment, validateComments, 'gnxdfbdrsb');

imgUploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()){
    evt.preventDefault();
  }
});

const escStopPropagnation= function (evt) {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
};

inputHT.addEventListener('keydown', escStopPropagnation);
textComment.addEventListener('keydown', escStopPropagnation);
