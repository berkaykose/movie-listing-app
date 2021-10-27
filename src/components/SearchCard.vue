<template>
  <v-card color="white" class="my-6 mx-6">
    <v-card-title dark class="text-h5 green white--text"> Search </v-card-title>
    <v-card-text>
      Explore hundreds of movies! For more information visit
      <a
        class="green--text text--lighten-1"
        href="http://www.omdbapi.com/"
        target="_blank"
      >
        OMDb API</a
      >.
    </v-card-text>
    <v-card-text class="d-flex">
      <v-autocomplete
        v-model="model"
        :items="movies"
        :loading="isLoading"
        :search-input.sync="searchVal"
        @keypress.enter="handleChange"
        color="green"
        hide-no-data
        clearable
        hide-selected
        item-text="Title"
        item-value="string"
        label="Search for Movies"
        placeholder="Start typing to Search"
        prepend-icon="mdi-movie-search"
        return-object
      ></v-autocomplete>
      <v-btn class="ml-3" dark @click="handleChange">Search</v-btn>
      <v-alert v-if="isError.error" dense outlined type="error">
        {{ isError.message }}
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script>
import { ref, reactive, watch } from "@vue/composition-api";
import getMovie from "../services/service";

export default {
  name: "SearchCard",
  props: ["search"],
  setup({ search }, { emit }) {
    const movies = ref([]);
    const isLoading = ref(false);
    const model = ref(null);
    const searchVal = ref(search);
    const isError = reactive({
      error: false,
      message: "",
    });

    watch(searchVal, () => {
      if (movies.length > 0) return;

      if (isLoading.value) return;

      isLoading.value = true;

      const movieApiUrl = getMovie.getMovie(searchVal.value);

      fetch(movieApiUrl)
        .then((res) => res.clone().json())
        .then((JSONresponse) => {
          const { Search } = JSONresponse;
          movies.value = Search;
        })
        .catch((err) => {
          isError.error = true;
          isError.message = err;
        })
        .finally(() => {
          isLoading.value = false;
        });

      // if (searchVal.value !== null) {
      //   setTimeout(() => {
      //     emit("search", searchVal.value);
      //   }, 1000);
      // }
    });

    return {
      movies,
      isLoading,
      model,
      searchVal,
      isError,
      handleChange() {
        emit("search", searchVal.value, movies.value);
      }
    };
  },
};
</script>