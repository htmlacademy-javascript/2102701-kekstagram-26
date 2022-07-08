const scaleElement = document.querySelector('.scale');
const upScaleElement = scaleElement.querySelector('.scale__control--bigger');
const downScaleElement = scaleElement.querySelector('.scale__control--smaller');
const scaleValueElement = scaleElement.querySelector('.scale__control--value');

upScaleElement.addEventListener('click', (evt) => {
  const step = 25;
  scaleValueElement.value = 0;
  const maxValue = 100;
  while (Number(scaleValueElement.value) < maxValue) {
    scaleValueElement.value += step;
    return scaleValueElement.value;
  }
});

console.log(Number(scaleValueElement.value));
