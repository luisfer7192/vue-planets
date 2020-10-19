<template>
  <div class="row columns is-multiline">
    <div v-for="(item, index) in items" :key="index" class="column is-3">
      <card :item="item" :navigateToDetailPage="navigateToDetailPage"></card>
    </div>
  </div>
</template>

<script>
import Card from "../Card";

export default {
  name: "Items",
  components: { card: Card },
  props: {
    items: Array,
    navigateToDetailPage: Function,
  },
};
</script>

<style scoped src="./styles.css"></style>
