const scaleElement = document.querySelector('.scale');
const scaleValueElement = scaleElement.querySelector('.scale__control--value');

const step = 25;
const maxValue = 100;
const minValue = 25;

const imgPreview = document.querySelector('.img-upload__preview img');

const changeSize = function () {
  imgPreview.style.transform = `scale(${scaleValueElement.value})`;
};

const getCurrentNumberValue = function () {
  return Number(scaleValueElement.value.split('%').shift());
};

const resetSize = function () {
  scaleValueElement.value = `${maxValue}%`;
  changeSize();
};

scaleElement.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('scale__control--bigger')) {
    scaleValueElement.value = `${Math.min(getCurrentNumberValue() + step, maxValue)}%`;
  }
  if (evt.target.classList.contains('scale__control--smaller')) {
    scaleValueElement.value = `${Math.max(getCurrentNumberValue() - step, minValue)}%`;
  }
  changeSize();
});

changeSize();

export {resetSize};
