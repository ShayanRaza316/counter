let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let intervalId = 0;
let isRunning = false;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');
const hoursSpan = document.getElementById('hours');
const minutesSpan = document.getElementById('minutes');
const secondsSpan = document.getElementById('seconds');
const millisecondsSpan = document.getElementById('milliseconds');

function updateTimer() {
  milliseconds++;

  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
  }

  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }

  hoursSpan.innerText = hours < 10 ? `0${hours}` : hours;
  minutesSpan.innerText = minutes < 10 ? `0${minutes}` : minutes;
  secondsSpan.innerText = seconds < 10 ? `0${seconds}` : seconds;
  millisecondsSpan.innerText = milliseconds < 10 ? `0${milliseconds}` : milliseconds;
}

function startTimer() {
  if (!isRunning) {
    intervalId = setInterval(updateTimer, 10);
    isRunning = true;
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
  }
}

function stopTimer() {
  clearInterval(intervalId);
  isRunning = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
}

function resetTimer() {
  clearInterval(intervalId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  hoursSpan.innerText = '00';
  minutesSpan.innerText = '00';
  secondsSpan.innerText = '00';
  millisecondsSpan.innerText = '00';
  isRunning = false;
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);