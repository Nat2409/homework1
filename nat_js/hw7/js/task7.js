const fontSizeControlRef = document.querySelector('input#font-size-control');
const textRef = document.querySelector('span#text');

textRef.style.fontSize = '28px';

console.log(fontSizeControlRef.value);
console.dir(textRef.style.fontSize);
fontSizeControlRef.addEventListener('input', changeFontSize);

function changeFontSize() {
  textRef.style.fontSize = `${fontSizeControlRef.value}px`;
  console.log(fontSizeControlRef.value);
  console.log(fontSizeControlRef.valueAsNumber);
  console.dir(textRef.style.fontSize);
}
