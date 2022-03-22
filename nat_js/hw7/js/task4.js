const valueRef = document.querySelector('#value');
const incrementRef = document.querySelector('button[data-action="increment"]');
const decrementRef = document.querySelector('button[data-action="decrement"]');
let counterValue = Number(valueRef.textContent);
console.log(typeof counterValue);
console.log(counterValue);

incrementRef.addEventListener('click', onIncrement);
decrementRef.addEventListener('click', onDecrement);

function onIncrement() {
  counterValue += 1;
  valueRef.textContent = counterValue;
}
function onDecrement() {
  counterValue -= 1;
  valueRef.textContent = counterValue;
}
