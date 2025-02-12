const inputBox = document.querySelector('#input-box');
const btnBox = document.querySelector('#submit-button');
const listContainer = document.querySelector('.list-container');

let value;

const handleInput = (e) => {
  value = e.target.value.trim();
};

btnBox.addEventListener('click', () => {
  if (!value) {
    alert('Please add some todo');
    return;
  }
  renderList(value);
  inputBox.value = '';
});

const renderList = (value) => {
  //
  const todoContainer = document.createElement('div');
  todoContainer.style.display = 'flex';
  todoContainer.style.justifyContent = 'space-between';
  todoContainer.style.alignItems = 'center';
  //
  const ele = document.createElement('li');
  ele.textContent = value;
  //
  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'remove';
  removeBtn.className = 'removeBtn';
  removeBtn.addEventListener('click', () => {
    console.log(todoContainer);
    listContainer.removeChild(todoContainer);
  });
  //
  todoContainer.appendChild(ele);
  todoContainer.appendChild(removeBtn);
  listContainer.appendChild(todoContainer);
};

inputBox.addEventListener('input', handleInput);
