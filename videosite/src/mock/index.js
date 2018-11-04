import api from '../http/interface';
const Mock = require('mockjs');

console.log(api.test);

Mock.mock('/video/getVideoDetail/pojo', 'post', {
  data: 'success'
});
