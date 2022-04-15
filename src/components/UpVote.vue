<template>
  <div>
    <span @click="$store.dispatch('changeState')" :class="$store.state.details.backgroundColor">CHANGE ME</span>
  </div>
</template>

<script>
export default {
  name: 'UpVote',
}
</script>

<style scoped>
.bg-selected {
  color: #253CF2;
}

.bg-not-selected {
  color: 343A40
}

.grid > * {
  padding: 10px;
}
</style>
