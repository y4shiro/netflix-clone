import axios from 'axios';

// TMDB からの baseURL リクエストを作成
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
