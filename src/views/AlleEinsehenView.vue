<template>
  <div class="extract">
    <h1>Alle verfügbaren Gerichte</h1>
  </div>
  <div class="input-group mb-3">
    <input @input="handleInput" type="number" id="InputID" class="form-control" placeholder="ID" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="id">
    <input disabled @input="handleInput" type="text" id="InputName" class="form-control" placeholder="Name" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="name">
    <select disabled @select="handleInput" id="tageszeit" class="form-select" v-model="tageszeit" required>
      <option value="" selected disabled>Tageszeit</option>
      <option value="Morgen">Morgen</option>
      <option value="Mittag">Mittag</option>
      <option value="Abend">Abend</option>
    </select>
    <select disabled @select="handleInput" id="vegan" class="form-select" v-model="vegan" required>
      <option value="" selected disabled>Vegan</option>
      <option value="vegan">Vegan</option>
      <option value="nicht vegan">Nicht Vegan</option>
      <option value="egal">Egal</option>
    </select>
    <input disabled @input="handleInput" type="text" id="InputName" class="form-control" placeholder="Zubereitungsdauer" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="zubereitungsdauer">
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
  name: 'AlleEinsehenView',

  data () {
    return {
      gerichte: [],
      id: null,
      name: '',
      tageszeit: '',
      vegan: '',
      zubereitungsdauer: ''
    }
  },

  methods: {
    handleInput() {
      this.getGerichtByID()
    },

    getGerichtByID() {
      if (this.id !== '') {
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
      } else {
        this.gerichte = []
        this.getAllGerichte()
      }
    },

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
