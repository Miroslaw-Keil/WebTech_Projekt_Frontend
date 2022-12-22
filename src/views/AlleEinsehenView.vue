<template>
  <div><h1>Alle verfügbaren Gerichte</h1></div>
  <div>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Tageszeit</th>
        <th>Vegan</th>
        <th>Zubereitungsdauer</th>
      </tr>
      </thead>
      <tbody>
      <tr v-if="gerichte.length === 0">
      </tr>
      <tr v-for="gericht in gerichte" :key="gericht.id">
        <td>{{gericht.id}}</td>
        <td>{{gericht.name}}</td>
        <td>{{gericht.tageszeit}}</td>
        <td>{{gericht.vegan}}</td>
        <td>{{gericht.zubereitungsdauer}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AlleEinsehenView',

  data() {
    return {
      gerichte: []
    }
  },

  methods: {
    loadGerichte () {
      console.log("Test")
      const endpoint = 'http://localhost:8080/api/v1/gerichte/'
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(gericht => {
          this.gerichte.push(gericht)
        }))
        .catch(error => console.log('error', error))
    }
  },

  mounted() {
    const endpoint = 'http://localhost:8080/api/v1/gerichte/'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(gericht => {
        this.gerichte.push(gericht)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
