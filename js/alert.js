const SHOW_ALERT_DELAY = 2000;

const showAlert = function (message) {
  const element = document.createElement('div');

  element.textContent = message;
  element.style.background = 'red';
  element.style.position = 'fixed';
  element.style.top = 0;
  element.style.left = 0;
  element.style.right = 0;
  element.style.padding = '10px';
  element.style.color = 'white';
  element.style.textAlign = 'center';
  document.body.appendChild(element);
  setTimeout(()=> {
    document.body.removeChild(element);
  }, SHOW_ALERT_DELAY);
};
export {showAlert};
