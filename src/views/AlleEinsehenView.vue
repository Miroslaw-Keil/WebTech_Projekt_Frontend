<template>
  <br>
  <div class="input-group mb-3">
    <input type="text" class="form-control" placeholder="ID" aria-label="Recipient's username" aria-describedby="button-addon2">
    <input type="text" class="form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="button-addon2">
    <input type="text" class="form-control" placeholder="Tageszeit" aria-label="Recipient's username" aria-describedby="button-addon2">
    <input type="text" class="form-control" placeholder="Vegan" aria-label="Recipient's username" aria-describedby="button-addon2">
    <input type="text" class="form-control" placeholder="Zubereitungsdauer" aria-label="Recipient's username" aria-describedby="button-addon2">
    <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
  </div>
  <br>
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
