let GRID_SIZE = 16;
let food = getRandomFoodPosition();
let EXPANSION_RATE = 4;

import { onSnake, expandSnake } from './snake.js';

export const update = () => {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = getRandomFoodPosition();
  }
};

export const draw = (gameBoard) => {
  const foodEle = document.createElement('div');
  foodEle.classList.add('food');
  foodEle.style.gridRowStart = food.y;
  foodEle.style.gridColumnStart = food.x;
  gameBoard.appendChild(foodEle);
};

function getRandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition();
  }
  return newFoodPosition;
}

function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}
