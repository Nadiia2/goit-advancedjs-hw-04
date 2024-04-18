import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '43435649-9580751e4a32127232b1b0155';

export async function fetchImages(query, page, perPage) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: perPage,
    page: page,
  });
  const response = await axios.get(`${BASE_URL}/?${searchParams}`);
  return response.data.hits;
}
