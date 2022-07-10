
const imgPreview = document.querySelector('.img-upload__preview img');
const effectsList = document.querySelector('.effects__list');

const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');
valueElement.value = 100;

const buttonEffects = document.querySelectorAll('.effects__radio');

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100
  },
  start: 100,
  step: 10,
  connect: 'lower'
});

const EFFECTS = {
  chrome: {
    effect: {filter: 'grayscale'},
    slider: {min: 0, max: 1, start: 1, step: 0.1}
  },
  sepia: {
    effect: {filter: 'sepia'},
    slider: {min: 0, max: 1, start: 1, step: 0.1}
  },
  marvin: {
    effect: {filter: 'invert', unit: '%'},
    slider: {min: 0, max: 100, start: 100, step: 1}
  },
  phobos: {
    effect: {filter: 'blur', unit: 'px'},
    slider: {min: 0, max: 3, start: 3, step: 0.1}
  },
  heat: {
    effect: {filter: 'brightness'},
    slider: {min: 1, max: 3, start: 3, step: 0.1}
  }
};

let currentEffect = 'none';

const deleteEffect = function () {
  sliderElement.parentElement.classList.add('hidden');
  imgPreview.style.filter = '';
  currentEffect = 'none';
  buttonEffects.forEach((buttonEffect, index) => {
    buttonEffect.checked = index === 0;
  });
};


const changeEffect = function (evt) {
  const currentEffectKey = evt.target.id.split('-').pop();
  if (currentEffectKey in EFFECTS) {
    currentEffect = EFFECTS[currentEffectKey];
    sliderElement.parentElement.classList.remove('hidden');
    sliderElement.noUiSlider.updateOptions({
      range: {
        min: currentEffect.slider.min,
        max: currentEffect.slider.max
      },
      start: currentEffect.slider.start,
      step: currentEffect.slider.step,
      connect: 'lower'
    });
  } else {
    deleteEffect();
  }
};

deleteEffect();
sliderElement.noUiSlider.on('change', (value) => {
  if (currentEffect) {
    imgPreview.style.filter = `${currentEffect.effect.filter}(${value[0]}${currentEffect.effect.unit || ''})` ;
  }

});

effectsList.addEventListener('change', changeEffect);

export {deleteEffect};
