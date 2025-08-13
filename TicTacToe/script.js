const mainDiv = document.querySelector('.main-container');
const messageBox = document.querySelector('.message');
const resetBtn = document.querySelector('.reset-btn');

const GRID_TYPE = 3 * 3;
let current_player = 'X';
let isGameRunning = true;

let gridCells = [];

const generateWiningCombinations = (size) => {
  let arr = [];
  for (let i = 0; i < size; i++) {
    arr.push([...Array(size)].map((_, j) => i * size + j));
  }

  for (let i = 0; i < size; i++) {
    arr.push([...Array(size)].map((_, j) => i + size * j));
  }

  //Diagonal
  arr.push([...Array(size)].map((_, i) => i * (size + 1)));

  //Anti-Diagonal
  arr.push([...Array(size)].map((_, i) => (i + 1) * (size - 1)));

  return arr;
};

const handleClick = (e) => {
  if (e.target.textContent || !isGameRunning) return;

  e.target.textContent = current_player;

  if (checkWin()) {
    setTimeout(() => {
      alert(`${current_player} wins`);
    }, 250);
    isGameRunning = false;
  } else if (checkDraw()) {
    setTimeout(() => {
      alert('it is a draw');
    }, 250);
    isGameRunning = false;
  } else {
    current_player = current_player === 'X' ? 'O' : 'X';
    updatePlayer();
  }
};

const checkWin = () => {
  return WINNING_COMBINATION.some((comb) =>
    comb.every((item) => gridCells[item].textContent === current_player)
  );
};

const checkDraw = () => {
  return gridCells.every((cell) => cell.textContent);
};

const renderGrid = () => {
  const frag = document.createDocumentFragment();
  for (let i = 0; i < GRID_TYPE; i++) {
    const gridCell = document.createElement('div');
    gridCell.classList.add('grid-cell');
    gridCells.push(gridCell);
    gridCell.addEventListener('click', handleClick);
    frag.appendChild(gridCell);
  }
  mainDiv.appendChild(frag);
};

const updatePlayer = () => {
  messageBox.textContent = `Current Player - ${current_player}`;
};

const handleReset = () => {
  isGameRunning = true;
  current_player = 'X';
  updatePlayer();
  gridCells.forEach((grid) => (grid.textContent = ''));
};

resetBtn.addEventListener('click', handleReset);

const WINNING_COMBINATION = generateWiningCombinations(3);
renderGrid();
updatePlayer();
