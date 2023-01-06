<template>
  <div>
    <h2>{{gericht.name}} bearbeiten</h2>
  </div>
  <div>
  <form>
    <div class="row mb-3">
      <label for="name" class="col-sm-2 col-form-label">Name</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="input" v-model="gericht.name">
      </div>
    </div>
    <div class="row mb-3">
      <label for="tageszeit" class="col-sm-2 col-form-label">Tageszeit</label>
      <div class="col-sm-10">
        <select id="tageszeit" class="form-select" required v-model="gericht.tageszeit">
          <option value="" >Choose...</option>
          <option value="Morgen">Morgen</option>
          <option value="Mittag">Mittag</option>
          <option value="Abend">Abend</option>
        </select>
      </div>
      <div class="invalid-feedback">
        Please select a valid daytime.
      </div>
    </div>
    <div class="row mb-3">
      <label for="zubereitungsdauer" class="col-sm-2 col-form-label">Zubereitungsdauer</label>
      <div class="col-sm-10">
        <input type="number" class="form-control" id="zubereitungsdauer" v-model="gericht.zubereitungsdauer">
      </div>
    </div>
    <fieldset class="row mb-3">
      <legend class="col-form-label col-sm-2 pt-0">Vegan</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck1" v-model="gericht.vegan">
        </div>
      </div>
    </fieldset>
    <div class="mt-5">
      <button class="btn btn-primary me-3" type="submit" @click="updateGericht">Überschreiben</button>
      <router-link to="/loeschen"><button class="btn btn-danger">Abbrechen</button></router-link>
    </div>
  </form>
</div>
</template>

<script>

export default {
  name: 'GerichtCreateForm',
  props: {
    id: String
  },
  data() {
    return{
      gericht: {
        id: '',
        name: '',
        tageszeit: '',
        vegan: false,
        zubereitungsdauer: 0
      }
    }
  },
  methods: {
    updateGericht() {
      const endpoint = 'http://localhost:8080/api/v1/gerichte/' + this.gericht.id

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const gericht = JSON.stringify({
        name: this.gericht.name,
        tageszeit: this.gericht.tageszeit,
        vegan: this.gericht.vegan,
        zubereitungsdauer: this.gericht.zubereitungsdauer
      })

      const requestOptions = {
        method: 'PUT',
        headers: headers,
        body: gericht,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .catch(error => console.log('error' + error))
    }
  },
  mounted () {
    const endpoint = 'http://localhost:8080/api/v1/gerichte/' + this.id
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(gericht => this.gericht = gericht)
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
