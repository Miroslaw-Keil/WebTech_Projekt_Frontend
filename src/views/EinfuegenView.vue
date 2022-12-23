<template>
  <div class="insert">
    <h1>Neue Gerichte hinzufügen</h1>
  </div>
  <div>
    <form>
      <div class="row mb-3">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="name" v-model="name">
        </div>
      </div>
      <div class="row mb-3">
        <label for="tageszeit" class="col-sm-2 col-form-label">Tageszeit</label>
        <div class="col-sm-10">
          <select id="tageszeit" class="form-select" v-model="tageszeit" required>
            <option value="" >Choose...</option>
            <option value="Morgen">Morgen</option>
            <option value="Mittag">Mittag</option>
            <option value="Abend">Abend</option>
          </select>
        </div>
        <div class="invalid-feedback">
          Please select a valid gender.
        </div>
      </div>
      <div class="row mb-3">
        <label for="zubereitungsdauer" class="col-sm-2 col-form-label">Zubereitungsdauer</label>
        <div class="col-sm-10">
          <input type="number" class="form-control" id="zubereitungsdauer" v-model="zubereitungsdauer">
        </div>
      </div>
      <fieldset class="row mb-3">
        <legend class="col-form-label col-sm-2 pt-0">Vegan</legend>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck1" v-model="vegan">
          </div>
        </div>
      </fieldset>
      <div v-if="this.serverValidationMessages">
        <ul>
          <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
            {{ message }}
          </li>
        </ul>
      </div>
      <div class="mt-5">
        <button class="btn btn-primary me-3" type="submit" @click="createGericht">Create</button>
        <button class="btn btn-danger" type="reset">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'EinfuegenView',
  data() {
    return {
      name: '',
      tageszeit: '',
      vegan: false,
      zubereitungsdauer: 0,
      serverValidationMessages: []
    }
  },
  emits: ['created'],
  methods: {
    createGericht() {
      const endpoint = 'http://localhost:8080/api/v1/gerichte'

      const headers = new Headers()
      headers.append('Content-Type', 'application/json')

      const gericht = JSON.stringify({
        name: this.name,
        tageszeit: this.tageszeit,
        vegan: this.vegan,
        zubereitungsdauer: this.zubereitungsdauer
      })

      const requestOptions = {
        method: 'POST',
        headers: headers,
        body: gericht,
        redirect: 'follow'
      }
      fetch(endpoint, requestOptions)
        .catch(error => console.log('error' + error))
    }
  }
}
</script>

<style scoped>

</style>
