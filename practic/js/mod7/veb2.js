const targetBtnRef = document.querySelector('.js-target-btn');
const addListenerBtnRef = document.querySelector('.js-add-listener');
const removeListenerBtnRef = document.querySelector('.js-remove-listener');

const doStuffOnClick = () => {
  console.log('Click!!!');
};
// targetBtnRef.addEventListener('click', () => {
//   console.log('Clicked!');
//   console.log(Date.now());
// });
addListenerBtnRef.addEventListener('click', () => {
  targetBtnRef.addEventListener('click', doStuffOnClick);
});

removeListenerBtnRef.addEventListener('click', () => {
  targetBtnRef.removeEventListener('click', doStuffOnClick);
});
