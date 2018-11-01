import Vue from 'vue'
import Vuex from 'vuex'
import demo from './package/demo/demo.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    demo
  }
})
