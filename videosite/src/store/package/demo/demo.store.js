export default {
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    DEMO_ADD (state, data) {
      state.count++;
    }
  },
  actions: {
    async querydemo () {
      return 'hello';
    }
  }
};
