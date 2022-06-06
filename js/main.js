const getRandomNumber = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min<max){
    console.log(Math.floor(Math.random() * (max - min + 1)) + min);
  } else {
    console.log('число '+ min +' больше или равно числа '+ max);
  }
};
getRandomNumber(10, 20);
