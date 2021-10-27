<template>
  <v-app>
    <v-main>
      <v-app-bar dark class="d-flex justify-center"
        ><h1>Movie Listing App</h1></v-app-bar
      >
      <SearchCard :search="state.search" @search="handleSearch" />
      <v-card color="white" class="mx-6">
        <v-card-title class="text-h5 red white--text"> Movies </v-card-title>
        <v-card-text v-if="state.isLoading" class="text-center mt-4">
          <v-progress-circular
            indeterminate
            :size="60"
            :width="6"
            color="green"
          >
          </v-progress-circular>
        </v-card-text>
        <v-card-text v-else class="d-flex justify-start flex-wrap">
          <MovieCard
            @select="handleSelect"
            v-for="movie in state.movies"
            :movie="movie"
            :key="movie.imdbID"
          />
        </v-card-text>
        <v-alert v-if="isError.error" class="mx-5" dense outlined type="error">
          {{ isError.message }}
        </v-alert>
        <v-alert
          v-else-if="state.noData && state.message === 'Movie not found!'"
          class="mx-5"
          dense
          outlined
          type="error"
        >
          {{ state.message }}
        </v-alert>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import { reactive, watch } from "@vue/composition-api";
import SearchCard from "./components/SearchCard.vue";
import MovieCard from "./components/MovieCard.vue";
import getMovie from "./services/service";

export default {
  name: "App",
  components: {
    SearchCard,
    MovieCard,
  },
  mounted() {
    //localStorage.clear();
  },
  setup() {
    const state = reactive({
      model: null,
      search: null,
      isLoading: false,
      movies: null,
      movieNames: [],
      noData: false,
      isSearchedBefore: false,
      message: null,
    });

    const isError = reactive({
      error: false,
      message: "",
    });

    watch(
      () => state.search,
      () => {
        if (state.isLoading) return;

        state.isLoading = true;

        for (var key in localStorage) {
          if(key === state.search) {
            state.isSearchedBefore = true;
          }
        }

        const movieApiUrl = getMovie.getMovie(state.search);

        if (state.isSearchedBefore) {
          state.movies = JSON.parse(localStorage.getItem(`${state.search}`));
          state.isLoading = false;
          state.isSearchedBefore = false;
          //console.log("Find from storage");
        } else {
          fetch(movieApiUrl)
            .then((response) => response.json())
            .then((JSONresponse) => {
              if (JSONresponse.Response === "False") {
                state.isLoading = false;
                state.noData = true;
                state.message = JSONresponse.Error;
              } else {
                state.movies = JSONresponse.Search;
                //console.log('Find from API');
                localStorage.setItem(
                  `${state.search}`,
                  JSON.stringify(JSONresponse.Search)
                );
                state.noData = false;
                state.isLoading = false;
              }
            })
            .catch((err) => {
              isError.error = true;
              isError.message = err;
            });
        }
      }
    );

    return {
      state,
      isError,
      handleSearch(searchTerm, movies, loading) {
        state.isLoading = true;
        state.movies = movies;
        state.search = searchTerm;
        state.isLoading = loading;
      },
      handleSelect(selectedMovie) {
        state.search = selectedMovie;
      },
    };
  },
};
</script>
