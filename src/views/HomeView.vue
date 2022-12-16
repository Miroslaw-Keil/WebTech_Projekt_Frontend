<template>
  <div class="home">
    <h1>Das ist die Homepage</h1>
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
  }
}
</script>
