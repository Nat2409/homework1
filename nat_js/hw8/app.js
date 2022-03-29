const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
    index: '1',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
    index: '2',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
    index: '3',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
    index: '4',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
    index: '5',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
    index: '6',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
    index: '7',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
    index: '8',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
    index: '9',
  },
];
const galleryRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const modalImgRef = document.querySelector('.lightbox__image');
const modalBtnRef = document.querySelector('.lightbox__button');
const modalOverlayRef = document.querySelector('.lightbox__overlay');

galleryRef.addEventListener('click', clickHandler);
modalBtnRef.addEventListener('click', modalCloseHandler);
modalOverlayRef.addEventListener('click', modalOverlayHandler);
window.addEventListener('keydown', pressOnEscHandler);
// const refs = {
//   gallery: document.querySelector('js-gallery'),
// };
console.log(modalImgRef);

const updatedList = galleryItems.map(element => {
  const item = document.createElement('li');
  item.classList.add('gallery__item');
  const link = document.createElement('a');
  link.classList.add('gallery__link');
  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = element.preview;
  image.dataset.source = element.original;
  image.dataset.index = element.index;
  image.alt = element.description;

  link.appendChild(image);
  item.appendChild(link);

  return item;
});

galleryRef.append(...updatedList);
// console.log(galleryRef);

// console.log(clickHandler());
let modalIndex = 0;
function clickHandler(event) {
  console.log(event.target);
  if (event.target.nodeName !== 'IMG') {
    // console.log('miss up');
    return;
  }
  const getImgTag = event.target;
  const gettingUrl = getImgTag.dataset.source;
  const gettingIndex = getImgTag.dataset.index;
  // console.log(getImgTag);
  console.log(gettingUrl);
  // return gettingUrl;
  modalRef.classList.add('is-open');
  modalImgRef.src = gettingUrl;
  modalImgRef.dataset.index = gettingIndex;
  modalIndex = Number(modalImgRef.dataset.index);
}
// console.log(modalImgRef);

function modalCloseHandler(event) {
  modalRef.classList.remove('is-open');
  modalImgRef.src = '';
  modalImgRef.dataset.index = '';
}

function modalOverlayHandler(event) {
  modalRef.classList.remove('is-open');
  modalImgRef.src = '';
  modalImgRef.dataset.index = '';
}

function pressOnEscHandler(event) {
  console.log(event.key);
  if (event.key === 'Escape') {
    modalRef.classList.remove('is-open');
    modalImgRef.src = '';
    modalImgRef.dataset.index = '';
    return;
  }

  if (event.key === 'ArrowLeft') {
    if (modalIndex > 1) {
      modalIndex -= 1;
      const itemPrew = galleryItems.find(
        item => Number(item.index) === modalIndex
      );
      console.log(itemPrew);
      modalImgRef.src = itemPrew.original;
      // modalImgRef.src = galleryItems[modalIndex - 1].original;
    }
  }
  if (event.key === 'ArrowRight') {
    if (modalIndex < 9) {
      modalIndex += 1;
      const itemPrew = galleryItems.find(
        item => Number(item.index) === modalIndex
      );
      console.log(itemPrew);
      modalImgRef.src = itemPrew.original;
      // modalImgRef.src = galleryItems[modalIndex - 1].original;
    }
  }
}
