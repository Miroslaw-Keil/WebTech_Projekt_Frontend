<template>
  <div>
    <GerichtBearbeitenForm :id="id"></GerichtBearbeitenForm>
  </div>

</template>

<script>
import GerichtBearbeitenForm from '@/components/GerichtBearbeitenForm'

export default {
  name: 'BearbeitenView',
  props: {
    id: String
  },
  components: {
    GerichtBearbeitenForm
  },
  data() {
    return {
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
    getGerichtByID() {
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
