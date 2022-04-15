<template>
  <div class="grid">
    <span>{{ $store.state.count }}</span>
    <div class="container" v-for="count in $store.state.count" :key="count">
      <UpVote />
    </div>
    <div>
      <button @click="$store.dispatch('increment')">Add</button>
    </div>
  </div>
</template>

<script>
import UpVote from './components/UpVote.vue'

export default {
  name: 'App',
  components: {
    UpVote
  }
}
</script>

<style scoped>
body {
  padding: 50px;
  font: 1em Helvetica Neue, Helvetica, Arial, sans-serif;
}

.grid {
  border: 10px solid #E5E8FD;
  display: grid;
  width: 500px;
  height: 500px;
  position: center;
}

.grid > * {
  padding: 10px;
}

.container {
  border: 1px solid #E5E8FD;
  display: grid;
  width: 200px;
  height: 200px;
  position: center;
  padding: 50px;
  margin: 20px;
}
</style>