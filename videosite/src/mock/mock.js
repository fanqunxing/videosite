const Mock = require('mockjs');
console.log(Mock);

Mock.mock('/user', 'post', {
  data: 'success'
});

console.log('mock.js');
