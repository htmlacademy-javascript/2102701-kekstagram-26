const getRandomNumber = function(min, max) {
  const minimum = Math.ceil(Math.min(min, max));
  const maximum = Math.floor(Math.max(min, max));
  const result = Math.abs(Math.floor(Math.random() * (maximum - minimum + 1)) + minimum);
  if (typeof result!=='number'|| isNaN(result)){
    return 'Ошибка';
  }
  return result;
};

getRandomNumber(1, 25);


const getStrLength = function(string, maxLength) {
  if (typeof string !=='string'){
    return 'Ошибка';
  }
  return string.length<maxLength;
};
getStrLength('Vfrcbv', 140);

const getRandomArrayElement = function(elements) {
  return elements[getRandomNumber(0, elements.length-1)];
};


const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Дима',
  'Коля',
  'Андрей',
  'Женя',
  'Саша',
  'Серёжа'
];


const createRandomComment = function () {
  return {
    id: getRandomNumber(1, 1000),
    avatar: 'img/avatar-'+getRandomNumber(1, 6)+'.svg',
    comment: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES)
  };
};

const createPhotoDescription = function (_value, index) {
  return {
    id: index+1,
    url: 'photos/' + (index+1) + '.jpg',
    description: 'lsdugliauerhbljav',
    likes: getRandomNumber(15, 200),
    comment: createRandomComment(),
  };
};

const similarDescription = Array.from(({length: 25}), createPhotoDescription);

