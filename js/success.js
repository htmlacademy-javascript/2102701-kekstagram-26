import {initModal} from './modal.js';

const errorTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);

errorTemplate.style.zIndex = 1000;
errorTemplate.classList.add('hidden');

document.body.appendChild(errorTemplate);

const {open, close} = initModal(errorTemplate, {onClose: (evt)=>{
  if (evt) {
    evt.stopPropagation();
  }
}, capture: true, buttonSelector: '.success__button'});

errorTemplate.addEventListener('click', (evt)=>{
  if (evt.target === errorTemplate) {
    close();
  }
});


export {open as showSuccess};

