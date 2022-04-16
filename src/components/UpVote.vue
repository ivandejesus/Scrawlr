<template>
  <div class="upvote-container">
    <button type="button" @click="$store.dispatch('changeState')" class="btn btn-md btn-primary" :class="$store.state.details.backgroundColor">
      <span aria-hidden="true"><img class="arrow-img" :src="getSource($store.state.details.state)"/></span
    ></button>
  </div>
</template>


<script>
export default {
  name: 'UpVote',
  setup() {
    function getSource(state) {
      let source = state === 'selected' ? 'arrow-up-active' : 'arrow-up-inactive'

      return 'src/assets/'+source+'.svg'
    }

    return { getSource }
  }
}
</script>

<style scoped>
.upvote-container {
  padding: 1px;
}

img {
  height: 30px;
}

.bg-selected {
  background-color: #E5E8FD !important;
  border-color: #E5E8FD !important;
}

.bg-not-selected {
  background-color: #F4F6F8 !important;
  border-color: #F4F6F8 !important;
}

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
