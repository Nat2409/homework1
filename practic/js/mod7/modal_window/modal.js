// открыть и закрыть по кнопке
// закрыть по клику в бекдроп
// закрыть по Esc

//show-modal

const openModalBtn = document.querySelector('button[data-action="open-modal"]');
const closeModalBtn = document.querySelector(
  'button[data-action="close-modal"]'
);
const backdropRef = document.querySelector('.js-backdrop');

openModalBtn.addEventListener('click', onOpenModal);
// вместо функции onOpenModal:
// () => {
//   document.body.classList.add('show-modal');
// });
closeModalBtn.addEventListener('click', onCloseModal);

// () => {
//   document.body.classList.remove('show-modal');
// });
backdropRef.addEventListener('click', onBackdropClick);
// event => {
//   // console.log('event.target:', event.target);
//   // console.log('event.currentTarget:', event.currentTarget);

//   if (event.target === event.currentTarget) {
//     // console.log('Кликнули по темному!');
//     onCloseModal();
//     // document.body.classList.remove('show-modal');
//   }
// });
function onOpenModal() {
  window.addEventListener('keydown', onPressEscape);

  // event => {
  //   if (event.code === 'Escape') {
  //     onCloseModal();
  //   }
  // });
  document.body.classList.add('show-modal');
}
function onCloseModal() {
  window.removeEventListener('keydown', onPressEscape);
  document.body.classList.remove('show-modal');
}
function onBackdropClick() {
  event => {
    // console.log('event.target:', event.target);
    // console.log('event.currentTarget:', event.currentTarget);

    if (event.target === event.currentTarget) {
      // console.log('Кликнули по темному!');
      onCloseModal();
      // document.body.classList.remove('show-modal');
    }
  };
}
function onPressEscape(event) {
  if (event.code === 'Escape') {
    onCloseModal();
  }
  console.log('Надо закрыть, нажали ESC!');
}
