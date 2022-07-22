const initModal = function (element, {onClose, capture = false, buttonSelector = '.cancel'} = {}) {
  const close = function (evt) {
    element.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeEscHandler, capture);
    if (onClose) {
      onClose(evt);
    }
  };
  const buttonCLose = element.querySelector(buttonSelector);
  console.log(buttonCLose, buttonSelector);
  if (buttonCLose) {
    buttonCLose.addEventListener('click', close);
  }
  const addCloseEscHandler = function () {
    document.addEventListener('keydown', closeEscHandler, capture);
  };
  function closeEscHandler (evt) {
    if (evt.keyCode === 27) {
      close(evt);
    }

  }
  const open = function () {
    addCloseEscHandler();
    element.classList.remove('hidden');
    document.body.classList.add('modal-open');
  };
  return {open, close};
};
export {initModal};

