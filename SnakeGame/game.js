import {
  SNAKE_SPEED,
  update as updateSnake,
  draw as drawSnake,
  getSnakeHead,
  outSideGrid,
  snakeIntersection,
} from './snake.js';

import { update as foodUpdate, draw as drawUpdate } from './food.js';

const gameBoard = document.getElementById('game-board');
let lastRendered = 0;
let gameOver = false;

function main(currentTime) {
  if (gameOver) {
    if (confirm('You lost, press OK to restart')) {
      window.location = '/SnakeGame';
    }
    return;
  }
  window.requestAnimationFrame(main);
  const secondsSinceLastRender = (currentTime - lastRendered) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;
  lastRendered = currentTime;
  update();
  draw();
}

window.requestAnimationFrame(main);

function update() {
  updateSnake();
  foodUpdate();
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = '';
  drawSnake(gameBoard);
  drawUpdate(gameBoard);
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
}
