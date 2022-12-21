<template>
  <div class="home">
    <h1>Das ist die Homepage</h1>
    <button @click=darkMode type="button" class="btn btn-primary">Dark Mode</button>
  </div>
  <div>
    <img alt="Bold and Brash" src="../assets/bold_and_brash.png" width="600" height="400">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HelloWorld
  },

  methods: {
    darkMode() {

    }
  }
}
</script>

<style>
  button {
    position: relative;
    bottom: 50px;
    left: 500px;
  }
</style>
