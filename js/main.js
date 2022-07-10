import './util.js';
import './miniature.js';
import './load-form.js';
import './change-size.js';
import './filter.js';


/*
const defaultEffect = effectsList.querySelector('#effect-none');
const chrome = effectsList.querySelector('#effect-chrome');
const sepia = effectsList.querySelector('#effect-sepia');
const marvin = effectsList.querySelector('#effect-marvin');
const phobos = effectsList.querySelector('#effect-phobos');
const heat = effectsList.querySelector('#effect-heat');

sconst changeEffect = function (evt) {
  imgPreview.classList.add('effect-none');
  sliderElement.classList.add('hidden');
  if (chrome.checked) {
    imgPreview.classList.remove('effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat', 'effects__preview--none');
    imgPreview.classList.add('effects__preview--chrome');
    sliderElement.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1,
      connect: 'lower'
    });
  }
  if (sepia.checked) {
    imgPreview.classList.remove('effects__preview--chrome', 'effects__preview--none', 'effects__preview--marvin', 'effects__preview--phobos', 'effects__preview--heat');
    imgPreview.classList.add('effects__preview--sepia');
    sliderElement.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 1
      },
      start: 1,
      step: 0.1,
      connect: 'lower'
    });
  }
  if (marvin.checked) {
    imgPreview.classList.remove('effects__preview--chrome', 'effects__preview--none', 'effects__preview--sepia', 'effects__preview--phobos', 'effects__preview--heat');
    imgPreview.classList.add('effects__preview--marvin');
    sliderElement.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 100
      },
      start: 100,
      step: 1,
      connect: 'lower'
    });
    imgPreview.style.filter = sliderElement.value;
  }
  if (phobos.checked) {
    imgPreview.classList.remove('effects__preview--chrome', 'effects__preview--none', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--heat');
    imgPreview.classList.add('effects__preview--phobos');
    sliderElement.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 0,
        max: 3
      },
      start: 3,
      step: 0.1,
      connect: 'lower'
    });
  }
  if (heat.checked) {
    imgPreview.classList.remove('effects__preview--chrome', 'effects__preview--none', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos');
    imgPreview.classList.add('effects__preview--heat');
    sliderElement.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: 1,
        max: 3
      },
      start: 3,
      step: 0.1,
      connect: 'lower'
    });
  }
  if (defaultEffect.checked) {
    imgPreview.classList.remove('effects__preview--chrome', 'effects__preview--heat', 'effects__preview--sepia', 'effects__preview--marvin', 'effects__preview--phobos');
    imgPreview.classList.add('effects__preview--none');
    sliderElement.classList.add('hidden');
  }
  sliderElement.noUiSlider.on('update', (evt) => {
    valueElement.value = sliderElement.noUiSlider.get();});
};


effectsList.addEventListener('change', changeEffect);*/
