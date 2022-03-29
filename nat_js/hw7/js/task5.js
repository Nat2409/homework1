const inputRef = document.querySelector('input#name-input');
const spanRef = document.querySelector('span#name-output');

inputRef.addEventListener('input', ChangeName);

function ChangeName(event) {
  console.log('event.target.value', event.target.value);
  if (event.target.value === '') {
    spanRef.textContent = 'незнакомец';

    return;
  }
  spanRef.textContent = event.target.value;
}

// console.log(inputRef.value === '');
// console.dir(spanRef);
