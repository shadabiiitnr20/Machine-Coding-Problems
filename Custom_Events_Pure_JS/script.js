console.log('hello');

const inputEle = document.querySelector('.input-container');
// const buttonEle = document.querySelector('.button-container');

inputEle.addEventListener('change', (e) => {
  console.log(e.target.value);
  const options = {
    bubbles: true,
    composed: true,
    detail: {
      name: e.target.value,
    },
  };
  const newEvent = new CustomEvent('user-input', options);
  inputEle.dispatchEvent(newEvent);
});

document.addEventListener('user-input', (e) => {
  console.log(`Document, ${e.detail.name}`);
});
