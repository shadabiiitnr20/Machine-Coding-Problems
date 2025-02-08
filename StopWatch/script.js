const displayTimer = document.querySelector('.watch-container');

let seconds = 0;
let mins = 0;
let hours = 0;
let isTimerRunning = false;
let timer;

const start = () => {
  if (!isTimerRunning) {
    timer = setInterval(updateTime, 1000);
    isTimerRunning = true;
  }
};

const stop = () => {
  isTimerRunning = false;
  clearInterval(timer);
};

const restart = () => {
  isTimerRunning = false;
  clearInterval(timer);
  seconds = 0;
  mins = 0;
  hours = 0;
  displayTime();
};

const updateTime = () => {
  seconds++;
  if (seconds === 60) {
    mins++;
    seconds = 0;
  }
  if (mins === 60) {
    hours++;
    mins = 0;
  }
  displayTime();
};

const displayTime = () => {
  displayTimer.textContent =
    (hours < 10 ? '0' : '') +
    hours +
    ':' +
    (mins < 10 ? '0' : '') +
    mins +
    ':' +
    (seconds < 10 ? '0' : '') +
    seconds;
};
