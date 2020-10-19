<template>
  <div class="container">
    <router-view name="header-top"></router-view>
    <div class="loading" v-show="isLoading"></div>
    <b-loading is-full-page v-model="isLoading"></b-loading>
    <div class="container">
      <div class="section">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      isLoading: (state) => state.common.isLoading,
    }),
  },
};
</script>

<style src="./global.css"></style>
