<template>
  <div>登录页面
    <div>{{count}}</div>
    <button @click="add">增加</button>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState({
      count: state => state.demo.count
    })
  },
  methods: {
    ...mapActions(['querydemo']),
    add () {
      this.count++;
      this.$store.commit('DEMO_ADD');
    }
  },
  mounted () {
    this.querydemo().then(data => {
      console.log(data);
    });
  }
};
</script>
<style>

</style>
