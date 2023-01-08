<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Kochbuch</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/login" v-if="authState && !authState.isAuthenticated">Login</router-link>
          <router-link class="nav-link" to="/hinzufuegen"  v-if="authState && authState.isAuthenticated">Hinzufügen</router-link>
          <router-link class="nav-link" to="/bearbeiten"  v-if="authState && authState.isAuthenticated">Bearbeiten</router-link>
          <router-link class="nav-link" to="/auslesen"  v-if="authState && authState.isAuthenticated">Auslesen</router-link>
          <router-link class="nav-link" to="/alle-Einsehen"  v-if="authState && authState.isAuthenticated">Alle Einsehen</router-link>
          <router-link class="nav-link" to="/profile" v-if="authState && authState.isAuthenticated">Protected Profile</router-link>
          <router-link class="nav-link" to="/logout"  v-if="authState && authState.isAuthenticated" v-on:click="logout()">Logout</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Navbar',
  methods: {
    async logout () {
      await this.$auth.signOut()
    }
  }
}
</script>

<style scoped>

</style>
