<style scoped>
  .table {
    width: 200px;
  }
</style>
<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>序号</th>
          <th>电影</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="video in videolist" :key="video.id">
          <td>{{video.id}}</td>
          <td>{{video.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      videolist: [
        { id: 1, name: '我不是药神' },
        { id: 2, name: '人在囧途' },
        { id: 3, name: '僵尸来了' },
        { id: 4, name: '失恋九十九天' },
        { id: 5, name: '拯救大兵瑞恩' }
      ]
    };
  }
};
</script>
