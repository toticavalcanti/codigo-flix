/* eslint-disable linebreak-style */
const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8081'
  : 'https://codigo-fluente-flix.herokuapp.com';

export default {
  URL_BACKEND,
};
