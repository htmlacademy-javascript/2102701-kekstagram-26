const imgUploadForm = document.querySelector('#upload-select-image');
imgUploadForm.setAttribute('action', 'https://26.javascript.pages.academy/kekstagram');
const uploadOverlay = imgUploadForm.querySelector('.img-upload__overlay');
const buttonCancel = imgUploadForm.querySelector('#upload-cancel');
const inputFile = imgUploadForm.querySelector('#upload-file');
console.log(imgUploadForm, imgUploadForm.querySelector('.img-upload__field-wrapper'));
const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper',
  erroTextparent: 'img-upload__field-wrapper'
});
const buttonSubmit = imgUploadForm.querySelector('.img-upload__submit');
const inputHT = imgUploadForm.querySelector('.text__hashtags');
const textComment = document.querySelector('.text__description');

const regexp = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;

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
      validateHashTagMessages.push(`таг ${value} содердит недопустимые символы`);
    }
    if (usedTags.includes(value.toLowerCase())) {
      validateHashTagMessages.push(`тэг ${value} повторяется`);
    } else {
      usedTags.push(value.toLowerCase());
    }
    if (value.length <= 20) {
      validateHashTagMessages.push(`длина тэга должна мыть не больше 20 символов`);
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
//pristine.addValidator(inputHT, validateHashTags, showValidatedHashTagsMessages);
pristine.addValidator(textComment, validateComments, 'gnxdfbdrsb');

imgUploadForm.addEventListener('submit', (evt) => {
  if (!pristine.validate()){
    evt.preventDefault();
  }
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
