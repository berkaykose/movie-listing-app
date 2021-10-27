<template>
  <v-card
    class="mx-8 my-3 movieCard"
    width="240"
    max-width="350"
    @click="cardSelected"
  >
    <v-img class="moviePoster" min-height="370" :alt="altTxt" :src="movie.Poster"></v-img>
    <v-card-title class="movieTitle">{{ movie.Title }}</v-card-title>
    <v-card-subtitle class="movieYear">Published: {{ movie.Year }}</v-card-subtitle>
  </v-card>
</template>

<script>
import { computed } from "@vue/composition-api";

export default {
  name: "MovieCard",
  props: ["movie"],
  setup({ movie }, { emit }) {
    const altTxt = computed(() => `The movie called: ${movie.Title}`);

    const cardSelected = () => {
      emit('select', movie.Title);
    }

    return { altTxt, cardSelected };
  },
};
</script>