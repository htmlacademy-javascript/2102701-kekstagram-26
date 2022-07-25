const getRandomNumber = function(min, max) {
  const minimum = Math.ceil(Math.min(min, max));
  const maximum = Math.floor(Math.max(min, max));
  const result = Math.abs(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
  if (typeof result!=='number'|| isNaN(result)){
    return 'Ошибка';
  }
  return result;
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const getStrLength = function(string, maxLength) {
  if (typeof string !=='string'){
    return 'Ошибка';
  }
  return string.length<maxLength;
};

const getRandomArrayElement = function(elements) {
  return elements[getRandomNumber(0, elements.length-1)];
};

const debounce = (callback, timeoutDelay) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

export {getRandomArrayElement, getRandomNumber, shuffle, debounce, getStrLength};
