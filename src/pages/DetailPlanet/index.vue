<template>
  <section class="blog-posts">
    <div class="container" v-if="Object.entries(planet).length">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="columns featured-post is-multiline">
            <div class="column is-12 post">
              <article class="columns featured">
                <div class="column is-7 post-img ">
                  <img
                    :src="planet.image"
                    alt=""
                    onerror="this.src='/images/notFoundPlanet.jpg'"
                  />
                </div>
                <div class="column is-5 featured-content va">
                  <div>
                    <h3 class="heading post-category">planet</h3>
                    <h1 class="title post-title">{{ planet.name }}</h1>
                    <p><b>Population:</b> {{ planet.population }}</p>
                    <p>
                      <b>Rotation Period:</b> {{ planet.rotation_period }} days
                    </p>
                    <p>
                      <b>Orbital Period:</b> {{ planet.orbital_period }} days
                    </p>
                    <p><b>Diameter:</b> {{ planet.diameter }} Km</p>
                    <p><b>Gravity:</b> {{ planet.gravity }} Km</p>
                    <p><b>Terrain:</b> {{ planet.terrain }} Km</p>
                    <p><b>Surface Water:</b> {{ planet.surface_water }} Km</p>
                    <p><b>Climate:</b> {{ planet.climate }} Km</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <!-- Espace For related people films etc -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "DetailPlanet",
  methods: {
    ...mapActions(["getPlanet"]),
  },
  computed: {
    ...mapState({
      planet: (state) => state.planets.currentPlanet,
    }),
  },
  async created() {
    this.getPlanet(this.$route.params.id);
  },
};
</script>

<style scoped src="./styles.css"></style>
