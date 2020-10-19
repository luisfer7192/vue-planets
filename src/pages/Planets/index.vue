<template>
  <div>
    <sectionTitle title="Planets List" />
    <items :items="planets" :navigateToDetailPage="navigateToDetailPage" />
    <b-pagination
      :total="count"
      v-model="current"
      @change="onPageChange"
      per-page="10"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
    </b-pagination>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Items from "../../components/Common/Items";
import SectionTitle from "../../components/Common/SectionTitle";

export default {
  name: "Planets",
  data() {
    return {
      current: 1,
    };
  },
  components: { items: Items, sectionTitle: SectionTitle },
  methods: {
    ...mapActions(["getPlanets"]),
    navigateToDetailPage(id) {
      this.$router.push({ name: `detailPlanetPage`, params: { id } });
    },
    onPageChange(page) {
      this.getPlanets(page);
    },
  },
  computed: {
    ...mapState({
      planets: (state) => state.planets.planets,
      count: (state) => state.planets.count,
    }),
  },
  async created() {
    this.getPlanets();
  },
};
</script>

<style scoped src="./styles.css"></style>
