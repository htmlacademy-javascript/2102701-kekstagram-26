const initModal = function (element, {onClose} = {}) {
  const close = function () {
    element.classList.add('hidden');
    document.body.classList.remove('modal-open');
    document.removeEventListener('keydown', closeEscHandler);
    if (onClose) {
      onClose();
    }
  };
  const buttonCLose = element.querySelector('.cancel');
  buttonCLose.addEventListener('click', close);
  const addCloseEscHandler = function () {
    document.addEventListener('keydown', closeEscHandler);
  };
  function closeEscHandler (evt) {
    if (evt.keyCode === 27) {
      close();
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
