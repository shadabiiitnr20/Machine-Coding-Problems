import { getInputDirection } from './input.js';
let GRID_SIZE = 16;
export const SNAKE_SPEED = 4;
const snakeBody = [{ x: 5, y: 5 }];
let newSegment = 0;

export const update = () => {
  addSegments();
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;
};

export const draw = (gameBoard) => {
  snakeBody.forEach((segment) => {
    const snakeEle = document.createElement('div');
    snakeEle.classList.add('snake');
    snakeEle.style.gridRowStart = segment.y;
    snakeEle.style.gridColumnStart = segment.x;
    gameBoard.appendChild(snakeEle);
  });
};

export const expandSnake = (amount) => {
  newSegment += amount;
};

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false;
    return checkPosition(position, segment);
  });
}

function checkPosition(position, segment) {
  return position.x === segment.x && position.y === segment.y;
}

function addSegments() {
  for (let i = 0; i < newSegment; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
  }
  newSegment = 0;
}

export function snakeIntersection() {
  return onSnake(snakeBody[0], { ignoreHead: true });
}

export function getSnakeHead() {
  return snakeBody[0];
}

export function outSideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  );
}
