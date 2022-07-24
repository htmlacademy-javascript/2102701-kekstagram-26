import {openForm} from './load-form.js';
const loadImg = document.querySelector('.img-upload__start input[type=file]');
const loadImgPreview = document.querySelector('.img-upload__preview img');

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

loadImg.addEventListener('change', () => {
  const file = loadImg.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });
  if (matches) {
    loadImgPreview.src = URL.createObjectURL(file);
    openForm();
  }
});

