import axios from 'axios';

/**
 * An Axios instance that will hit Flip's FrontEnd test API.
 */
export default axios.create({
  baseURL: 'https://nextar.flip.id',
});
