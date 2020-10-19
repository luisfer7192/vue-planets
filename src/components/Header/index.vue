<template>
  <b-navbar transparent mobile-burger>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="/images/star_wars_api_yellow2.png"
          alt="Planets logo"
          class="logo"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item @click.native="navigateTo('home')">
        Home
      </b-navbar-item>
      <b-navbar-item @click.native="navigateTo('planetsPage')">
        Planets
      </b-navbar-item>
      <b-navbar-item @click.native="navigateTo('charactersPage')">
        Characters
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: "Header",
  methods: {
    navigateTo(name) {
      this.$router.push({ name });
    },
  },
};
</script>

<style scoped src="./styles.css"></style>
