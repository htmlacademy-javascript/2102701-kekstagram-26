import { initModal } from './modal.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
errorTemplate.style.zIndex = 1000;
errorTemplate.classList.add('hidden');
document.body.appendChild(errorTemplate);
const {open, close} = initModal(errorTemplate, {onClose: (evt)=>{
  if (evt) {
    evt.stopPropagation();
  }
}, capture: true, buttonSelector: '.error__button'});

errorTemplate.addEventListener('click', (evt)=>{
  if (evt.target === errorTemplate) {
    close();
  }
});


export {open as showError};

