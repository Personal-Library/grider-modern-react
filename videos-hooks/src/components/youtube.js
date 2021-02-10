import config from './config.js';
import axios from 'axios';

export default axios.create({
  baseURL: config.URL,
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 6,
    key: config.MY_TOKEN
  }
})