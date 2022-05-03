const startBtnRef = document.querySelector('button[data-action-start]');
const stopBtnRef = document.querySelector('button[data-action-stop]');
const clockfaceRef = document.querySelector('.js-clockface');

const timer = {
  isActive: false,
  timerId: null,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    const startTime = Date.now();
    updateClockface(0);

    this.timerId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;

      updateClockface(deltaTime);
    }, 1000);
  },
  stop() {
    clearInterval(this.timerId);
    this.isActive = false;
    updateClockface(0);
  },
};
console.log(startBtnRef);
startBtnRef.addEventListener('click', timer.start.bind(timer));
stopBtnRef.addEventListener('click', timer.stop.bind(timer));

function updateClockface(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  clockfaceRef.textContent = `${hours}:${mins}:${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
