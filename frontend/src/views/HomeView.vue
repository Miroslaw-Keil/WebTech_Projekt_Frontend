<template>
  <div class="home">
    <HelloWorld msg="Hello World loololololol"/>
    <img alt="Vue logo" src="../assets/bold_and_brash.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
