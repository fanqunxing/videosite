<template>
  <div>登录页面
    <div>{{count}}</div>
    <button @click="add">增加</button>
  </div>
</template>
<script>
/* eslint-disable */
  export default {
    computed: {
      count() {
        return this.$store.state.count
      }
    },
    methods: {
      add() {
        this.$store.commit('add')
      }
    }
  }

</script>
<style>


</style>
