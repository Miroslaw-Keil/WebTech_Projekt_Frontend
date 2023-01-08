<template>
  <div class="home" id="content">
    <h1>Digitales Kochbuch</h1>
  </div>
  <div style="text-align: center;">
    <img src="../assets/bold_and_brash.png" width="750" height="500" alt="My Image" />
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

<style>
#content {
  position: relative;
}
#content img {
  position: absolute;
  top: 10px;
  right: 150px;
}
</style>
