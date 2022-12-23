<template>
  <div class="extract">
    <h1>Test Seite um nach Gerichten zu suchen.</h1>
  </div>
  <div class="input-group mb-3">
    <input type="number" class="form-control" placeholder="ID" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="id">
    <button :disabled="id === undefined || id === ''" @click="getGerichtByID" class="btn btn-outline-secondary" type="button" id="button-addon2">Get by ID</button>
  </div>
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
        <td>{{gericht.vegan ? 'vegan' : 'nicht vegan'}}</td>
        <td>{{gericht.zubereitungsdauer}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AuslesenView',
  data () {
    return {
      gerichte: [],
      id: null
    }
  },

  methods: {
    getGerichtByID() {
      this.gerichte = []

      const endpoint = 'http://localhost:8080/api/v1/gerichte/' + this.id
      const requestOptions = {
        method: 'GET',
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(gericht => {
          this.gerichte.push(gericht)
        })
        .catch(error => console.log('error', error))
    }
  },

  mounted () {
    this.gerichte = []
  }
}
</script>

<style scoped>

</style>
