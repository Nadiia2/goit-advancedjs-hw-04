import axios from 'axios';
export const PER_PAGE = 15;
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '43435649-9580751e4a32127232b1b0155';

export async function fetchImages(value, page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}/?key=${API_KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PER_PAGE}&page=${page}`
    );
    return response.data.hits;
  } catch (error) {
    throw new Error(error.message);
  }
}
