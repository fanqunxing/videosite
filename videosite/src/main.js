// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import App from './App';
import router from './router';
import store from './store/store';
import http from './http/index';

console.log(http);

Vue.use(Vuex);

// axios({
//   method: 'post',
//   url: '/user',
//   data: {
//     name: 'xiaoming',
//     info: '12'
//   }
// }).then(data => {
//   console.log(data);
// });

axios({
  methods: 'post',
  url: '/video/getVideoDetail/pojo'
}).then(data => {
  console.log(data);
});

Vue.config.productionTip = false;
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});

// require('./mock/mock.js');