import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { generateImageHTML } from './js/render-functions.js';

const form = document.querySelector('.form');
const imageList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('#next-btn');

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
});

let currentPage = 1;
let searchTerm = '';

form.addEventListener('submit', handleSearch);
loadMoreBtn.addEventListener('click', loadMoreImages);

function handleSearch(event) {
  event.preventDefault();
  searchTerm = event.currentTarget.elements.input.value.trim();

  if (!searchTerm) {
    showErrorMessage('Search field can not be empty!');
    return;
  }

  loader.classList.remove('is-hidden');
  currentPage = 1;
  imageList.innerHTML = '';

  fetchImages(searchTerm, currentPage)
    .then(data => {
      if (data.length === 0 || data.length < 15) {
        hideLoadMoreBtn();
        showErrorMessage(
          'Sorry, there are no images matching your search query. Please try again!'
        );
        imageList.innerHTML = generateImageHTML(data);
        gallery.refresh();
        form.elements.input.value = '';
        smoothScroll();
        return;
      }

      imageList.innerHTML = generateImageHTML(data);
      gallery.refresh();
      form.elements.input.value = '';
      showLoadMoreBtn();
      smoothScroll();
    })
    .catch(handleError)
    .finally(() => loader.classList.add('is-hidden'));
}

function loadMoreImages() {
  loader.classList.remove('is-hidden');
  currentPage++;

  fetchImages(searchTerm, currentPage)
    .then(data => {
      if (data.length === 0 || data.length < 15) {
        hideLoadMoreBtn();
        showErrorMessage(
          "We're sorry, but you've reached the end of search results."
        );
        const markup = generateImageHTML(data);
        imageList.insertAdjacentHTML('beforeend', markup);
        gallery.refresh();
        smoothScroll();
        return;
      }
      const markup = generateImageHTML(data);
      imageList.insertAdjacentHTML('beforeend', markup);
      gallery.refresh();
      smoothScroll();
    })
    .catch(handleError)
    .finally(() => loader.classList.add('is-hidden'));
}

// function handleSearch(event) {
//   event.preventDefault();
//   searchTerm = event.currentTarget.elements.input.value.trim();

//   if (!searchTerm) {
//     showErrorMessage('Search field can not be empty!');
//     return;
//   }

//   loader.classList.remove('is-hidden');
//   currentPage = 1;
//   imageList.innerHTML = '';

//   fetchImages(searchTerm, currentPage)
//     .then(data => {
//       if (data.length === 0) {
//         showErrorMessage(
//           'Sorry, there are no images matching your search query. Please try again!'
//         );
//         return;
//       }
//       imageList.innerHTML = generateImageHTML(data);
//       gallery.refresh();
//       form.elements.input.value = '';
//       showLoadMoreBtn();
//       smoothScroll();
//     })
//     .catch(handleError)
//     .finally(() => loader.classList.add('is-hidden'));
// }

// function loadMoreImages() {
//   loader.classList.remove('is-hidden');
//   currentPage++;

//   fetchImages(searchTerm, currentPage)
//     .then(data => {
//       if (data.length === 0 || data.length < 15) {
//         hideLoadMoreBtn();
//         showErrorMessage(
//           "We're sorry, but you've reached the end of search results."
//         );
//         return;
//       }
//       const markup = generateImageHTML(data);
//       imageList.insertAdjacentHTML('beforeend', markup);
//       gallery.refresh();
//       smoothScroll();
//     })
//     .catch(handleError)
//     .finally(() => loader.classList.add('is-hidden'));
// }

function showErrorMessage(message) {
  iziToast.show({
    theme: 'light',
    message: message,
    messageSize: '20px',
    messageColor: '#f80303',
    backgroundColor: '#ebe268',
    position: 'topRight',
    timeout: 7000,
  });
}

function handleError(err) {
  console.error(err);
  imageList.innerHTML = '';
  iziToast.show({
    theme: 'dark',
    message: 'Sorry, there is a problem with connection to the server.',
    messageSize: '16px',
    messageColor: 'white',
    backgroundColor: '#EF4040',
    position: 'center',
    timeout: 7000,
  });
}

function showLoadMoreBtn() {
  loadMoreBtn.classList.remove('is-hidden');
}

function hideLoadMoreBtn() {
  loadMoreBtn.classList.add('is-hidden');
}

function smoothScroll() {
  const imageHeight = document.querySelector('.gallery-item').offsetHeight;
  window.scrollBy({ top: imageHeight * 2, behavior: 'smooth' });
}
