// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store/store';
import http from './http/index';

// require('./mock/index.js');
console.log(http);
http({
  methods: 'post',
  url: '/video/getVideoDetail/pojo'
}).then(data => {
  console.log(data);
});

Vue.use(Vuex);

Vue.config.productionTip = false;
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
});
