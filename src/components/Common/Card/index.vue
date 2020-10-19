<template>
  <div class="card large" @click="navigateToDetailPage(item.id)">
    <div class="card-image">
      <figure class="image is-2by4">
        <img
          alt="Image"
          :src="item.image"
          onerror="this.src='/images/notFoundPlanet.jpg'"
        />
      </figure>
    </div>
    <div class="card-content info-background">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 no-padding">{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: Object,
    navigateToDetailPage: Function,
  },
};
</script>

<style scoped src="./styles.css"></style>
