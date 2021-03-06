import {getRandomArrayElement, getRandomNumber, shuffle} from './util.js';

const DESCRIPTIONS = [
  'Оисание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5'
];

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

const PHOTOS_COUNT = 25;
const PHOTO_COMMENT_MAX_COUNT = 5;
const urls=Array.from({length: PHOTOS_COUNT}, (i, index)=>index+1);

shuffle(urls);

const usedCommentId = [];

const getNextCommentId = () => {
  let number = 1;
  while(usedCommentId.includes(number)){
    number = getRandomNumber(0, PHOTOS_COUNT*PHOTO_COMMENT_MAX_COUNT);
  }
  usedCommentId.push(number);
  return number;
};

const createRandomComment = function () {
  return {
    id: getNextCommentId(),
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    comment: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES)
  };
};

const createPhotoDescription = function (_value, index) {
  return {
    id: index+1,
    url: `photos/${urls.shift()}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomNumber(15, 200),
    comments: Array.from({length: getRandomNumber(1, PHOTO_COMMENT_MAX_COUNT)}, createRandomComment)
  };
};

export {createPhotoDescription};
