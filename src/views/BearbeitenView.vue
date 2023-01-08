<template>
  <div class="extract">
    <h1>Gerichte bearbeiten</h1>
  </div>
  <div>
    Zum Löschen eines Gerichts die entsprechende CheckBox aktivieren und den Delete-button drücken. <br>
    Zum Bearbeiten eines Gerichts auf den entsprechenden Namen klicken.
  </div>
  <br>
  <div>
    <form>
      <div class="input-group mb-3">
        <input @input="getGerichtByID" type="number" class="form-control" placeholder="ID" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="id">
        <button :disabled="!checkedGerichte.includes(true)" class="btn btn-danger" type="submit" @click="deleteGerichte">Delete</button>
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
            <th>Löschen</th>
          </tr>
          </thead>
          <tbody>
          <tr v-if="gerichte.length === 0">
          </tr>
          <tr v-for="gericht in gerichte" :key="gericht.id">
            <td>{{gericht.id}}</td>
            <td> <router-link :to="{path: '/ueberschreiben/' + gericht.id}"> {{gericht.name}} </router-link></td>
            <td>{{gericht.tageszeit}}</td>
            <td>{{gericht.vegan ? 'vegan' : 'nicht vegan'}}</td>
            <td>{{gericht.zubereitungsdauer}}</td>
            <td><input class="form-check-input" type="checkbox" id="delete" value="" aria-label="..." v-model="checkedGerichte[gericht.id]"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AlleEinsehenView',

  data () {
    return {
      gerichte: [],
      id: null,
      checkedGerichte: []
    }
  },

  methods: {
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
    },

    deleteGerichte() {
      for (let i = 0; i < this.checkedGerichte.length; i++) {
        if (this.checkedGerichte[i] === true) {
          const endpoint = 'http://localhost:8080/api/v1/gerichte/' + i
          const requestOptions = {
            method: 'DELETE',
            redirect: 'follow'
          }
          fetch(endpoint, requestOptions)
            .catch(error => console.log('error' + error))
        }
      }
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
