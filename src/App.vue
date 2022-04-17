<template>
  <div class="container scrwlr-container">
    <div class="row justify-content-md-center scrwlr-row">
      <div class="col-md-11 row row-cols-auto upvote-row">
        <div v-for="count in $store.state.count" :key="count">
        <UpVote />
      </div>
      </div>
      <div class="col-md-1 btn-col">
        <button class="btn btn-secondary btn-lg btn-increment" @click="$store.dispatch('increment')">
          <span aria-hidden="true"><img class="arrow-img" src="./assets/add-filled.svg"/></span>
        </button>
      </div>
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
.scrwlr-container {
  border-radius: 10px !important;
  border: 3px solid;
  border-color: #D3D3D3;
  box-shadow: inset 0 3px 6px rgba(0,0,0,0.16), 0 4px 6px rgba(0,0,0,0.45);
}

.scrwlr-row {
  padding: 35px !important;
}

.upvote-row {
  border: 2px solid;
  border-color: #D3D3D3;
  border-radius: 10px;
  height: 70px;
  padding-top: 12px;
  overflow-y: auto;
}

.btn-increment {
  background-color: #F4F6F8 !important;
  border-color: #F4F6F8 !important;
  height: 68px !important;
}

.btn-col {
  padding-left: 50px;
}

::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>