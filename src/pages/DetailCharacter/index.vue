<template>
  <section class="blog-posts">
    <div class="container" v-if="Object.entries(character).length">
      <div class="columns">
        <div class="column is-10 is-offset-1">
          <div class="columns featured-post is-multiline">
            <div class="column is-12 post">
              <article class="columns featured">
                <div class="column is-7 post-img ">
                  <img
                    :src="character.image"
                    alt=""
                    onerror="this.src='/images/notFoundCharacter.jpg'"
                  />
                </div>
                <div class="column is-5 featured-content va">
                  <div>
                    <h3 class="heading post-category">character</h3>
                    <h1 class="title post-title">{{ character.name }}</h1>
                    <p><b>Birth Year:</b> {{ character.birth_year }}</p>
                    <p>
                      <b>Species:</b>
                      {{ character.species }}
                    </p>
                    <p><b>Height:</b> {{ character.height }} cm</p>
                    <p><b>Mass:</b> {{ character.mass }} Kg</p>
                    <p><b>Gender:</b> {{ character.gender }}</p>
                    <p><b>Hair Color:</b> {{ character.hair_color }}</p>
                    <p><b>Skin Color:</b> {{ character.skin_color }}</p>
                    <p v-if="character.homeworld.url">
                      <b>Homeworld:</b>
                      <router-link :to="character.homeworld.url">
                        {{ character.homeworld.name }}
                      </router-link>
                    </p>
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
  name: "DetailCharacter",
  methods: {
    ...mapActions(["getCharacter"]),
  },
  computed: {
    ...mapState({
      character: (state) => state.characters.currentCharacter,
    }),
  },
  async created() {
    this.getCharacter(this.$route.params.id);
  },
};
</script>

<style scoped src="./styles.css"></style>
