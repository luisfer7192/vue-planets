<template>
  <div>
    <sectionTitle title="Characters List" />
    <items :items="characters" :navigateToDetailPage="navigateToDetailPage" />
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
  name: "Characters",
  data() {
    return {
      current: 1,
    };
  },
  components: { items: Items, sectionTitle: SectionTitle },
  methods: {
    ...mapActions(["getCharacters"]),
    navigateToDetailPage(id) {
      this.$router.push({ name: `detailCharacterPage`, params: { id } });
    },
    onPageChange(page) {
      this.getCharacters(page);
    },
  },
  computed: {
    ...mapState({
      characters: (state) => state.characters.characters,
      count: (state) => state.characters.count,
    }),
  },
  async created() {
    this.getCharacters();
  },
};
</script>

<style scoped src="./styles.css"></style>
