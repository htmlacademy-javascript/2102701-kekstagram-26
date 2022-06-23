const getRandomNumber = function(min, max) {
  const minimum = Math.ceil(Math.min(min, max));
  const maximum = Math.floor(Math.max(min, max));
  const result = Math.abs(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
  if (typeof result!=='number'|| isNaN(result)){
    return 'Ошибка';
  }
  return result;
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


export {getRandomArrayElement, getRandomNumber};
