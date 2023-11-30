import axios from 'axios';
// import {state} from './components/App';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '39834161-b44ad9889b268d198aeea1a60';

export const fetchPictures = async (query, page) => {
    const params = new URLSearchParams({
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    });
    const { data } = await axios.get(`?${params}`);
    return data;
  };

