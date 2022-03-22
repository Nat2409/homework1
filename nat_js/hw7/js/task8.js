const createRef = document.querySelector('button[data-action="render"]');
const destroyRef = document.querySelector('button[data-action="destroy"]');
const boxesRef = document.querySelector('div#boxes');
const inputRef = document.querySelector('input');
const boxRef = document.querySelectorAll('div.box');

createRef.addEventListener('click', handleClick);
destroyRef.addEventListener('click', destroyBoxes);

function handleClick() {
  const amount = inputRef.valueAsNumber;

  createBoxes(amount);
}

function randColor() {
  var r = Math.floor(Math.random() * 256),
    g = Math.floor(Math.random() * 256),
    b = Math.floor(Math.random() * 256);
  return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}

function createBoxes(amount) {
  let container = [];
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.width = `${30 + 10 * i}px`;
    box.style.height = `${30 + 10 * i}px`;
    box.style.background = randColor();
    box.style.border = '1px solid red';
    container.push(box);
  }

  boxesRef.append(...container);
}

function destroyBoxes() {
  boxesRef.remove(boxRef);
}
