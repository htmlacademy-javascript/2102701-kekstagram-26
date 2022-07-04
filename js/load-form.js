const imgUploadForm = document.querySelector('#upload-select-image');
imgUploadForm.setAttribute('action', 'https://26.javascript.pages.academy/kekstagram');
const uploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const buttonCancel = imgUploadForm.querySelector('#upload-cancel');
const inputFile = imgUploadForm.querySelector('#upload-file');
const pristine = new Pristine(imgUploadForm);
const buttonSubmit = imgUploadForm.querySelector('.img-upload__submit');
const inputHT = imgUploadForm.querySelector('.text__hashtags');
const textComment = document.querySelector('.text__description');

const regexp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}/;

const uplOpen = function () {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const uplClose = function () {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  inputFile.value = '';
  inputHT.textContent = '';
  textComment.textContent = '';
};

inputFile.addEventListener('change', (evt) => {
  uplOpen();
});

buttonCancel.addEventListener('click', uplClose);

const validateHashTags = function (value) {
  return regexp;
};

const validateComments = function (value) {
  return value.length <= 140;
};
pristine.addValidator(inputHT, validateHashTags);
pristine.addValidator(textComment, validateComments);

buttonSubmit.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});

document.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (inputHT === document.activeElement || textComment === document.activeElement) {
      return evt;
    } else {
      uplClose();
    }
  }
});
