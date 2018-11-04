import axios from 'axios';

class Http {
  constructor (axios) {
    this.axios = axios;
  }
  async get (param) {
    return this.axios(param);
  }
}
console.log(axios);
export default Http;
