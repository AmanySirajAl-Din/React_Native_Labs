import axios from 'axios';

const BASE_URL = 'http://www.omdbapi.com';

const client = axios.create({
  BASE_URL: BASE_URL,
  timeout: 30000,
});
