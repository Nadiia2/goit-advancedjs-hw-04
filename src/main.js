import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { generateImageHTML } from './js/render-functions.js';

const form = document.querySelector('.form');
const imageList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const nextBtn = document.querySelector('#next-btn');

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let currentPage = 1;
let searchValue = '';
let isLoading = false;

form.addEventListener('submit', handleSearch);
nextBtn.addEventListener('click', loadMore);

async function handleSearch(event) {
  event.preventDefault();
  const searchRequest = form.querySelector('input').value.trim();
  if (!searchRequest) {
    showErrorMessage('Please, fill in the search field');
    return;
  }

  if (searchValue !== searchRequest) {
    currentPage = 1;
    searchValue = searchRequest;
    imageList.innerHTML = '';
  }

  try {
    const images = await fetchImages(searchRequest, currentPage, 15);
    if (images.length === 0) {
      showErrorMessage(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    } else {
      imageList.innerHTML += generateImageHTML(images);
      gallery.refresh();
      if (images.length >= 15) {
        nextBtn.classList.remove('is-hidden');
      } else {
        nextBtn.classList.add('is-hidden');
      }
      scrollBy();
      currentPage++;
    }
    form.querySelector('input').value = '';
  } catch (err) {
    handleError(err);
  }
}

async function loadMore() {
  if (isLoading) return;
  isLoading = true;
  loader.classList.remove('is-hidden');
  try {
    const images = await fetchImages(searchValue, currentPage);
    if (images.length === 0) {
      nextBtn.classList.add('is-hidden');
      iziToast.show({
        theme: 'light',
        message: "We're sorry, but you've reached the end of search results.",
        messageSize: '16px',
        messageColor: '#f80303',
        backgroundColor: '#ebe268',
        position: 'topRight',
        timeout: 5000,
      });
    } else {
      imageList.innerHTML += generateImageHTML(images);
      gallery.refresh();
      currentPage++;
      scrollBy();
    }
  } catch (error) {
    handleError(error);
  } finally {
    isLoading = false;
    loader.classList.add('is-hidden');
  }
}

function showErrorMessage(message) {
  iziToast.show({
    theme: 'light',
    message: message,
    messageSize: '16px',
    messageColor: '#f80303',
    backgroundColor: '#ebe268',
    position: 'topRight',
    timeout: 5000,
  });
}

function handleError(error) {
  console.error(error);
  iziToast.show({
    theme: 'light',
    message: 'Sorry, there is a problem with the connection to the server.',
    messageSize: '16px',
    messageColor: 'white',
    backgroundColor: '#EF4040',
    position: 'center',
    timeout: 7000,
  });
}

function scrollBy() {
  const imageHeight = document
    .querySelector('.gallery-item')
    .getBoundingClientRect().height;
  window.scrollBy({
    top: imageHeight * 2,
    behavior: 'smooth',
  });
}
