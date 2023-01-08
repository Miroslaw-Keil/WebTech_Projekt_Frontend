<template>
  <div class="extract">
    <h1>Ein zufälliges Gericht erhalten</h1>
  </div>
  <br>
  <div>
    <div class="vertical-center">
      <button @click="getRandomGericht" type="button" class="btn btn-primary">Randomize</button>
    </div>
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
      zwischenspeicher: []
    }
  },

  methods: {
    getAllGerichte() {
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
    },

    getGerichtByID(id) {
        const endpoint = 'http://localhost:8080/api/v1/gerichte/' + id
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
    },

    getRandomGericht() {
      this.gerichte = []
      let number = Math.floor(Math.random() * this.zwischenspeicher.length)
      console.log(number)
      this.getGerichtByID(this.zwischenspeicher[number].id)
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
        this.zwischenspeicher.push(gericht)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
