const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId = null;

const refs = {
  body: document.querySelector('body'),
  btnStart: document.querySelector('button[data-action="start"]'),
  btnStop: document.querySelector('button[data-action="stop"]'),
};
// console.log(refs.body);
// console.dir(refs.btnStart);
// console.log(refs.btnStop);

refs.btnStart.addEventListener('click', startHandler);
refs.btnStop.addEventListener('click', stopHandler);

function startHandler() {
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(0, 5)];
  }, 1000);
  refs.btnStart.removeEventListener('click', startHandler);
}

function stopHandler() {
  clearInterval(intervalId);
  refs.btnStart.addEventListener('click', startHandler);
}
