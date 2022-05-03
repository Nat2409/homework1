// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const refs = {
  days: document.querySelector('span[data-value=days]'),
  hours: document.querySelector('span[data-value=hours]'),
  mins: document.querySelector('span[data-value=mins]'),
  secs: document.querySelector('span[data-value=secs]'),
};
console.log(refs.days);

const timer = {
  start() {
    const prevDate = new Date('Jul 17, 2023');

    const targetDate = prevDate.getTime();

    console.log(prevDate.getTime());
    const intervalId = setInterval(() => {
      const currentDate = Date.now();
      const deltaTime = targetDate - currentDate;

      if (deltaTime === 0) {
        clearInterval(intervalId);
        return;
      }

      updateClockface(deltaTime);
    }, 1000);
  },
};

timer.start();

function updateClockface(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  // console.log(secs);
  refs.days.textContent = days;
  refs.hours.textContent = hours;
  refs.mins.textContent = mins;
  refs.secs.textContent = secs;
}

function pad(value) {
  return String(value).padStart(2, '0');
}
