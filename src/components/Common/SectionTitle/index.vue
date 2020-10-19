<template>
  <div class="columns">
    <div class="column has-text-centered">
      <h1 class="title">
        {{ title }}
      </h1>
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    title: String,
  },
};
</script>

<style scoped src="./styles.css"></style>
