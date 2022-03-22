const inputRef = document.querySelector('input#validation-input');

inputRef.addEventListener('blur', changeBorder);
console.log(Number(inputRef.dataset.length));
console.log(inputRef.textContent.length);
function changeBorder() {
  inputRef.value.length === Number(inputRef.dataset.length)
    ? // inputRef.classList.remove('invalid');
      inputRef.classList.add('valid')
    : // console.log(inputRef.value.length);
      // inputRef.classList.remove('valid');
      inputRef.classList.add('invalid');

  console.log(inputRef.value.length);
  console.log(inputRef.dataset.length);
  console.log(inputRef.classList);
}
