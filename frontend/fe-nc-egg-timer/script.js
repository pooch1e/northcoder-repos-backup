const timeRemaining = document.getElementById('time-remaining');

const timerControlButtons = [
  ...document.getElementsByClassName('timer-control-button'),
];

const resetButton = document.getElementById('reset-button');

const add5SecondsButton = timerControlButtons[0];
const add30SecondsButton = timerControlButtons[1];
const add1minButton = timerControlButtons[2];
const startButton = timerControlButtons[3];
console.log(timerControlButtons);

let globalTime = 0;
let intervalTime = null;

const render = () => {
  timeRemaining.innerText = `Time remaining: ${globalTime}`;
};

// add time buttons
const setUpButtons = () => {
  add5SecondsButton.addEventListener('click', () => {
    console.log('5 sec button has been clicked');
    globalTime += 5;
    render();
  });
  add30SecondsButton.addEventListener('click', () => {
    console.log('30 sec button has been clicked');
    globalTime += 30;
    render();
  });

  add1minButton.addEventListener('click', () => {
    console.log('1 min button has been clicked');
    globalTime += 60;
    render();
  });
};

const startTimer = () => {
  if (globalTime <= 0) {
    return;
  }
  resetButton.classList.remove('hide');
  if (globalTime > 0) {
    intervalTime = setInterval(() => {
      globalTime--;
      render();
      if (globalTime <= 0) {
        clearInterval(intervalTime);
        resetButton.classList.add('hide');
        globalTime = 0;
        render();
      }
    }, 1000);
  }
};

const resetTimer = () => {
  resetButton.addEventListener('click', () => {
    clearInterval(intervalTime);
    intervalTime = null;
    globalTime = 0;
    render();
    resetButton.classList.add('hide');
  });
};

setUpButtons();
resetTimer();

// start countdown
startButton.addEventListener('click', startTimer);
